// src/components/Navbar.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaDoorOpen, FaWallet } from 'react-icons/fa';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import WalletRechargeModal from './WalletRechargeModal';
import getAvailableRoles from '../services/roleServices/getAvailableRoles';
import changeRoleService from '../services/roleServices/changeRoleService';
import getWalletBalanceService from '@/services/walletServices/getWalletBalanceService';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, name, logout, verified, role } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);
  const [showCreditDetails, setShowCreditDetails] = useState(false);
  const creditDetailsRef = useRef(null);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  const navLinks = [
    { name: 'HOME',     path: '/' },
    { name: 'TRACKING', path: '/tracking' },
    { name: 'BLOGS',    path: '/blogs' },
    { name: 'PRICING',  path: '/pricing' },
    { name: 'ABOUT',    path: '/about' },
    { name: 'CONTACT',  path: '/contact' },
  ];

  const closeRechargeModal = () => setShowRecharge(false);
  const toggleSidebar = () => setIsSidebarOpen((o) => !o);

  // ── Role Switcher ──────────────────────────────────────────────
  const [availableRoles, setAvailableRoles] = useState([]);
  const [rolesLoading, setRolesLoading] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [switchingRoleId, setSwitchingRoleId] = useState(null);
  const roleDropdownDesktopRef = useRef(null);
  const roleDropdownMobileRef = useRef(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setAvailableRoles([]);
      setRoleMenuOpen(false);
      return;
    }
    let active = true;
    const fetchRoles = async () => {
      try {
        setRolesLoading(true);
        const roles = await getAvailableRoles();
        if (!active) return;
        setAvailableRoles(Array.isArray(roles) ? roles : []);
      } catch {
        if (!active) return;
        setAvailableRoles([]);
      } finally {
        if (active) setRolesLoading(false);
      }
    };
    fetchRoles();
    return () => { active = false; };
  }, [isAuthenticated]);

  const shouldShowRoleSwitcher = useMemo(
    () => isAuthenticated && Array.isArray(availableRoles) && availableRoles.length > 1,
    [isAuthenticated, availableRoles]
  );

  // Close role dropdown on outside click
  useEffect(() => {
    if (!roleMenuOpen) return;
    const onMouseDown = (e) => {
      const clickedInDesktop = roleDropdownDesktopRef.current?.contains(e.target);
      const clickedInMobile  = roleDropdownMobileRef.current?.contains(e.target);
      if (!clickedInDesktop && !clickedInMobile) setRoleMenuOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [roleMenuOpen]);

  // Close credit details on outside click
  useEffect(() => {
    if (!showCreditDetails) return;
    const onMouseDown = (e) => {
      if (!creditDetailsRef.current?.contains(e.target)) setShowCreditDetails(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [showCreditDetails]);

  const handleSwitchRole = async (nextRole) => {
    try {
      const nextUserRoleId = nextRole?.user_role_id;
      if (!nextUserRoleId) throw new Error('Invalid role');
      if (switchingRoleId) return;
      if (String(nextRole?.role || '').toUpperCase() === String(role || '').toUpperCase()) {
        setRoleMenuOpen(false);
        return;
      }
      setSwitchingRoleId(nextUserRoleId);
      const newToken = await changeRoleService(nextUserRoleId);
      localStorage.setItem('token', newToken);
      setRoleMenuOpen(false);
      window.location.reload();
    } catch (e) {
      toast.error(e?.message || 'Failed to change role');
    } finally {
      setSwitchingRoleId(null);
    }
  };

  const RoleDropdownMenu = ({ containerRef }) => {
    if (!shouldShowRoleSwitcher) return null;
    return (
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          className="bg-white text-black flex items-center font-medium rounded-xl px-2 py-2 cursor-pointer max-w-xs truncate"
          onClick={() => setRoleMenuOpen((o) => !o)}
          disabled={rolesLoading}
          title={role ? `Current role: ${role}` : 'Switch role'}
        >
          <span className="truncate">{role ? `Role: ${role}` : 'Switch Role'}</span>
          <span className="ml-2">▾</span>
        </button>

        {roleMenuOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-50 overflow-hidden">
            {availableRoles.map((r) => {
              const isActive = String(r?.role || '').toUpperCase() === String(role || '').toUpperCase();
              const isBusy  = switchingRoleId === r?.user_role_id;
              return (
                <button
                  key={r?.user_role_id}
                  type="button"
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-50
                    ${isActive ? 'bg-emerald-50 font-medium' : ''}
                    ${switchingRoleId && !isBusy ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => handleSwitchRole(r)}
                  disabled={Boolean(switchingRoleId) || isActive}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{r?.role}</span>
                    {isBusy && <span className="text-xs text-gray-500">Switching…</span>}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ── Wallet ─────────────────────────────────────────────────────
  const INITIAL_WALLET_DATA = {
    balance: 0,
    balanceInUse: 0,
    credits: 0,
    creditsInUse: 0,
    creditLimit: 0,
    outstandingCredits: 0,
  };
  const [walletData, setWalletData] = useState(INITIAL_WALLET_DATA);

  useEffect(() => {
    if (!isAuthenticated || !verified) return;
    const fetchBalance = async () => {
      try {
        const data = await getWalletBalanceService();
        setWalletData(data);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };
    fetchBalance();
  }, [isAuthenticated, verified]);

  const formatBalance = (value) => parseFloat(value).toFixed(2);

  // ── NavLink style helpers ──────────────────────────────────────
  const getNavLinkClass = ({ isActive }) =>
    `relative font-medium py-2 px-1 text-gray-700 hover:text-emerald-600 transition-colors duration-200
     ${isActive
       ? 'text-emerald-700 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[3px] after:bg-emerald-700 after:rounded-full after:transition-all after:duration-300 after:scale-x-100'
       : 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[3px] after:bg-emerald-700 after:rounded-full after:transition-all after:duration-300'}`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `block py-2 px-4 rounded-lg hover:bg-emerald-100 transition-colors duration-200
     ${isActive ? 'bg-emerald-50 text-emerald-700 font-semibold' : 'text-gray-700'}`;

  // ── Render ─────────────────────────────────────────────────────
  return (
    <>
      {showRecharge && <WalletRechargeModal onClose={closeRechargeModal} />}

      <header className="bg-white shadow-sm w-full font-inter sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-2 md:py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 mr-1 sm:mr-4">
            <img
              src="/Logo.png"
              alt="Evergreen Logix Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg"
            />
            <span className="text-sm sm:text-xl md:text-2xl font-extrabold ml-1.5 sm:ml-2 text-gray-800 whitespace-nowrap">
              Evergreen <span className="text-emerald-600 min-[380px]:inline">Logix</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex grow justify-center min-w-0">
            <div className="flex flex-wrap justify-center md:space-x-4 lg:space-x-8 text-base">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={getNavLinkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-1 sm:space-x-4 shrink-0 min-w-0 ml-auto">

            {/* Wallet — only on dashboard */}
            {isAuthenticated && verified && location.pathname.startsWith('/dashboard') && (
              <div className="shrink-0 flex flex-col gap-1">
                {/* Wallet balance */}
                <div
                  title="Wallet Balance"
                  onClick={() => setShowRecharge(true)}
                  aria-label={`Current balance: ₹${formatBalance(walletData.balance)}. Click to recharge.`}
                  className={`relative bg-indigo-600 text-white flex items-center font-semibold rounded-full
                    px-2 py-0 sm:px-3 sm:py-0 md:px-4 md:py-0
                    text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap
                    ${walletData.balance < 250 ? 'ring-2 ring-red-500 ring-offset-1 bg-red-500' : 'hover:scale-105'}`}
                >
                  <FaWallet className="mr-1 md:mr-2 text-xs sm:text-sm md:text-lg" />
                  <p className="flex items-center">
                    <span className="hidden min-[420px]:inline mr-0.5">₹</span>
                    {formatBalance(walletData.balance)}
                  </p>
                  {walletData.balance < 250 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                      !
                    </span>
                  )}
                </div>

                {/* Credit balance */}
                {(walletData.creditLimit > 0 || walletData.credits !== 0) && (
                  <div className="relative" ref={creditDetailsRef}>
                    <div
                      title="Credit Balance"
                      onClick={() => setShowCreditDetails((v) => !v)}
                      aria-label={`Current credit balance: ₹${formatBalance(walletData.credits)}. Click for details.`}
                      className={`relative bg-indigo-600 text-white flex items-center font-semibold rounded-full
                        px-2 py-0 sm:px-3 sm:py-0 md:px-4 md:py-0
                        text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap
                        ${walletData.credits < 250 ? 'ring-2 ring-red-500 ring-offset-1 bg-red-500' : 'hover:scale-105'}`}
                    >
                      <FaIndianRupeeSign className="mr-1 md:mr-2 text-xs sm:text-sm md:text-lg" />
                      <p className="flex items-center">
                        <span className="hidden min-[420px]:inline mr-0.5">₹</span>
                        {formatBalance(walletData.credits)}
                      </p>
                      {walletData.credits < 250 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                          !
                        </span>
                      )}
                    </div>

                    {showCreditDetails && (
                      <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-3 text-sm text-gray-700 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 font-medium">Credit Limit</span>
                          <span className="font-semibold text-indigo-700">₹{formatBalance(walletData.creditLimit)}</span>
                        </div>
                        <div className="border-t border-gray-100" />
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 font-medium">Used Amount</span>
                          <span className={`font-semibold ${walletData.outstandingCredits > 0 ? 'text-red-500' : 'text-emerald-600'}`}>
                            ₹{formatBalance(walletData.outstandingCredits)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Desktop: user name + role switcher + logout */}
            {isAuthenticated && (
              <div className="md:flex items-center space-x-4 hidden shrink-0 min-w-0">
                <div className="flex items-center space-x-2 min-w-0">
                  <RoleDropdownMenu containerRef={roleDropdownDesktopRef} />
                  <NavLink
                    to="/dashboard"
                    onClick={() => setIsSidebarOpen(false)}
                    className="font-semibold text-gray-800 hover:text-emerald-600 transition-colors duration-200 cursor-pointer truncate max-w-[120px] md:max-w-[150px]"
                    title={name}
                  >
                    {name}
                  </NavLink>
                  <button
                    className="bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white text-lg p-2 rounded-full cursor-pointer flex items-center justify-center shadow-sm shrink-0"
                    onClick={logout}
                    aria-label="Logout"
                  >
                    <FaDoorOpen />
                  </button>
                </div>
              </div>
            )}

            {/* Mobile hamburger */}
            <div className="md:hidden z-50 shrink-0">
              <button onClick={toggleSidebar} aria-label="Open menu">
                <AiOutlineMenu className="text-emerald-600" size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Mobile slide-out sidebar */}
        <div
          className={`z-50 fixed top-0 right-0 w-[80%] max-w-[300px] bg-white h-full shadow-2xl transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
        >
          {/* Sidebar header */}
          <div className="p-4 flex justify-between items-center border-b shrink-0">
            <span className="text-lg font-bold text-emerald-700">MENU</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <IoMdClose size={28} />
            </button>
          </div>

          <div className="grow overflow-y-auto pb-24">
            {/* User section */}
            <div className="p-4 border-b bg-gray-50">
              {isAuthenticated ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500">Welcome,</p>
                      <p className="font-bold text-xl truncate text-gray-800">{name}</p>
                    </div>
                    <button
                      className="bg-red-500 text-white p-2.5 rounded-lg shadow-sm active:scale-95 transition-all"
                      onClick={() => { logout(); setIsSidebarOpen(false); }}
                      aria-label="Logout"
                    >
                      <FaDoorOpen size={20} />
                    </button>
                  </div>
                  <RoleDropdownMenu containerRef={roleDropdownMobileRef} />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-center py-2 border border-emerald-600 text-emerald-600 rounded-lg font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-center py-2 bg-emerald-600 text-white rounded-lg font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Navigation links */}
            <nav className="p-2 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={getMobileNavLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
              {isAuthenticated && verified && (
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsSidebarOpen(false)}
                  className={getMobileNavLinkClass}
                >
                  DASHBOARD
                </NavLink>
              )}
              {isAuthenticated && (
                <button
                  onClick={() => { logout(); setIsSidebarOpen(false); }}
                  className="w-full text-left py-2 px-4 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200 font-bold"
                >
                  LOGOUT
                </button>
              )}
            </nav>
          </div>

          {/* Sidebar footer */}
          <div className="p-4 border-t text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Evergreen Logix
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;