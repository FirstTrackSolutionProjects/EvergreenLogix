// src/components/FloatingChatbot.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Minimize2, Maximize2, HelpCircle, Ticket, FileText, User, Mail, Zap, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { raiseTicketService } from "../services/ticketServices/raiseTicketService";

// ─────────────────────────────────────────────────────────────────────────────
// Ticket taxonomy — keep in sync with admin dashboard / backend conventions
// ─────────────────────────────────────────────────────────────────────────────
const TICKET_CATEGORIES = [
  {
    value: "Order Issue",
    label: "Order / Shipment Issue",
    subCategories: [
      "Cannot create order",
      "Order stuck in Pending",
      "Wrong order details",
      "Label / Invoice not generating",
      "Other order issue",
    ],
    needsOrderId: true,
  },
  {
    value: "Pickup Issue",
    label: "Pickup Problem",
    subCategories: [
      "Pickup not attempted",
      "Pickup delayed",
      "Courier refused pickup",
      "Pickup reschedule needed",
    ],
    needsOrderId: true,
  },
  {
    value: "Delivery Issue",
    label: "Delivery / NDR Issue",
    subCategories: [
      "Delivery delayed",
      "Marked NDR incorrectly",
      "Customer not reachable",
      "Reattempt needed",
      "Address correction needed",
    ],
    needsOrderId: true,
  },
  {
    value: "Payment Issue",
    label: "Payment Issue",
    subCategories: [
      "Wallet recharge failed",
      "Amount debited but not credited",
      "Double charge",
      "Refund not received",
      "COD amount mismatch",
    ],
    needsOrderId: false,
  },
  {
    value: "COD Remittance",
    label: "COD Remittance",
    subCategories: [
      "Remittance not received",
      "Incorrect remittance amount",
      "UTR / proof not visible",
      "Remittance stuck in Pending",
    ],
    needsOrderId: true,
  },
  {
    value: "Weight Dispute",
    label: "Weight Dispute",
    subCategories: [
      "Charged higher weight",
      "Dispute not resolved",
      "Dispute amount incorrect",
      "Need to raise new dispute",
    ],
    needsOrderId: true,
  },
  {
    value: "Refund / Cancellation",
    label: "Refund / Cancellation",
    subCategories: [
      "Cancellation not approved",
      "Refund not credited",
      "Cancelled but still shipped",
      "Need help cancelling",
    ],
    needsOrderId: true,
  },
  {
    value: "Warehouse Issue",
    label: "Warehouse Issue",
    subCategories: [
      "Warehouse creation failed",
      "Wrong warehouse details",
      "Warehouse not available on a service",
      "International address update",
    ],
    needsOrderId: false,
  },
  {
    value: "Submerchant Issue",
    label: "Submerchant Issue",
    subCategories: [
      "Submerchant request pending",
      "Margin not updating",
      "Submerchant not able to log in",
      "COD / earnings visibility",
    ],
    needsOrderId: false,
  },
  {
    value: "KYC / Verification",
    label: "KYC / Verification",
    subCategories: [
      "Verification rejected",
      "Document upload failed",
      "Verification taking too long",
      "Need to update profile",
    ],
    needsOrderId: false,
  },
  {
    value: "Technical Issue",
    label: "Technical / Bug",
    subCategories: [
      "Website not loading",
      "Login / OTP problem",
      "Dashboard error",
      "Bulk upload failing",
      "Report export failing",
    ],
    needsOrderId: false,
  },
  {
    value: "Other",
    label: "Something else",
    subCategories: ["General enquiry", "Feedback", "Feature request", "Other"],
    needsOrderId: false,
  },
];

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "🌿 Welcome to Evergreen Logix! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketStep, setTicketStep] = useState(0); // 0..4 wizard
  const [ticketSubmitting, setTicketSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState({
    category: "",
    subCategory: "",
    orderId: "",
    orderIdSkipped: false,
    description: "",
  });
  const [ticketErrors, setTicketErrors] = useState({});

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const { isAuthenticated, authLoading, name: authName, email: authEmail } = useAuth();
  const navigate = useNavigate();

  const selectedCategory = TICKET_CATEGORIES.find(
    (c) => c.value === ticketData.category
  );
  const needsOrderId = Boolean(selectedCategory?.needsOrderId);
  const ticketTotalSteps = needsOrderId ? 4 : 3;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const resetTicket = () => {
    setTicketData({
      category: "",
      subCategory: "",
      orderId: "",
      orderIdSkipped: false,
      description: "",
    });
    setTicketErrors({});
    setTicketStep(0);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "bot",
          text: botResponse,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const generateBotResponse = (userInput) => {
    const lower = userInput.toLowerCase();
    
    if (lower.includes("track") || lower.includes("shipment") || lower.includes("order")) {
      return "📦 You can track your shipment by visiting our Tracking page. Just enter your tracking ID or AWB number for real-time updates! Need a tracking ID? Contact our support team.";
    }
    
    if (lower.includes("price") || lower.includes("cost") || lower.includes("rate") || lower.includes("shipping")) {
      return "💰 Use our Shipping Calculator on the Pricing page to get instant estimates based on weight, dimensions, and destination. We offer competitive rates for both domestic and international shipments!";
    }
    
    if (lower.includes("pickup") || lower.includes("schedule") || lower.includes("book")) {
      return "🚚 To schedule a pickup, please log in to your account and click 'Book a Shipment'. If you're a new customer, register first - it takes just 2 minutes!";
    }
    
    if (lower.includes("contact") || lower.includes("support") || lower.includes("help") || lower.includes("assist")) {
      return "📞 Our support team is available 24/7! You can:\n• Call us: +91 1234567890\n• Email: info@evergreenlogix.com\n• Use the contact form on our Contact page\n• Raise a ticket below!";
    }
    
    if (lower.includes("refund") || lower.includes("cancel") || lower.includes("return")) {
      return "🔄 For refunds and cancellations, please check our Refund & Cancellation Policy page. If you need immediate assistance, raise a ticket and our team will get back to you within 24 hours.";
    }
    
    if (lower.includes("timing") || lower.includes("hour") || lower.includes("delivery time")) {
      return "⏰ Local shipments typically take 1-3 business days. International shipments take 5-10 business days depending on the destination. Express shipping options are also available!";
    }
    
    if (lower.includes("warehouse") || lower.includes("storage")) {
      return "🏭 We offer modern, secure, and temperature-controlled warehousing solutions. Our facilities are equipped with advanced security systems and real-time inventory tracking.";
    }
    
    if (lower.includes("international") || lower.includes("global") || lower.includes("worldwide")) {
      return "🌍 Yes! Evergreen Logix offers international shipping to a wide range of countries. We partner with DHL, FedEx, UPS, and other leading carriers to ensure reliable global delivery.";
    }
    
    if (lower.includes("ticket") || lower.includes("raise") || lower.includes("issue") || lower.includes("problem")) {
      // Defer so the message renders first, then open the form (or login redirect)
      setTimeout(() => openTicketFlow(), 100);
      return "🎫 I'll help you raise a support ticket. Please pick a category below so we can route it to the right team.";
    }
    
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return "👋 Hello! Welcome to Evergreen Logix. How can I assist you with your logistics needs today?";
    }
    
    if (lower.includes("thank")) {
      return "🌿 You're welcome! We're here to help. Is there anything else I can assist you with?";
    }
    
    return "🌿 Thank you for reaching out to Evergreen Logix. I'm here to help with tracking, pricing, bookings, and support. Could you please provide more details about what you need?";
  };

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1 + Math.random(),
        type: "bot",
        text,
        timestamp: new Date(),
      },
    ]);
  };

  const openTicketFlow = () => {
    if (authLoading) {
      addBotMessage("⏳ One moment — I'm confirming your session…");
      return;
    }
    if (!isAuthenticated) {
      addBotMessage(
        "🔐 To raise a support ticket, please log in first so we can link it to your account. Redirecting you to login now…"
      );
      setTimeout(() => {
        navigate("/login");
        setIsOpen(false);
      }, 1200);
      return;
    }
    resetTicket();
    setShowTicketForm(true);
  };

  const closeTicketFlow = () => {
    setShowTicketForm(false);
    resetTicket();
  };

  // ─── Wizard step validation ────────────────────────────────────────────────
  const validateTicketStep = () => {
    const errs = {};
    if (ticketStep === 0) {
      if (!ticketData.category) errs.category = "Please choose a category";
    } else if (ticketStep === 1) {
      if (!ticketData.subCategory) errs.subCategory = "Please choose a sub-category";
    } else if (ticketStep === 2 && needsOrderId) {
      const raw = (ticketData.orderId || "").trim();
      if (!ticketData.orderIdSkipped && !raw) {
        errs.orderId = "Enter the order ID or tick 'I don't have it'";
      } else if (!ticketData.orderIdSkipped && raw.length < 3) {
        errs.orderId = "That doesn't look like a valid order ID";
      }
    } else if (
      (ticketStep === 3 && needsOrderId) ||
      (ticketStep === 2 && !needsOrderId)
    ) {
      const desc = (ticketData.description || "").trim();
      if (!desc) errs.description = "Please describe the issue";
      else if (desc.length < 20)
        errs.description = "Please add a bit more detail (at least 20 characters)";
      else if (desc.length > 2000)
        errs.description = "Please keep it under 2000 characters";
    }
    setTicketErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const isLastStep =
    (needsOrderId && ticketStep === 3) || (!needsOrderId && ticketStep === 2);

  const handleNext = () => {
    if (!validateTicketStep()) return;
    if (isLastStep) {
      handleSubmitTicket();
    } else {
      setTicketStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (ticketStep === 0) {
      closeTicketFlow();
      return;
    }
    setTicketStep((s) => s - 1);
    setTicketErrors({});
  };

  const handleSubmitTicket = async () => {
    if (ticketSubmitting) return;
    if (authLoading) return;
    if (!isAuthenticated) {
      toast.error("Please log in to raise a ticket.");
      navigate("/login");
      setIsOpen(false);
      return;
    }

    const orderIdForPayload =
      needsOrderId && !ticketData.orderIdSkipped && ticketData.orderId.trim()
        ? ticketData.orderId.trim()
        : null;

    // Reporter info comes from the backend via req.user — we just echo it here
    const reporterLine = authName
      ? `Reporter: ${authName}${authEmail ? ` <${authEmail}>` : ""}\n`
      : "";

    const payload = {
      category: ticketData.category,
      subCategory: ticketData.subCategory || null,
      description: `[Raised via Chatbot]\n${reporterLine}\n${ticketData.description.trim()}`,
      orderId: orderIdForPayload,
    };

    setTicketSubmitting(true);
    try {
      const result = await raiseTicketService(payload);
      const ticketId = result?.ticketId;

      addBotMessage(
        ticketId
          ? `✅ Ticket #${ticketId} created under "${ticketData.category}"${
              ticketData.subCategory ? ` → ${ticketData.subCategory}` : ""
            }${orderIdForPayload ? ` for order ${orderIdForPayload}` : ""}. Our team will reply within 24 hours. You can track it here: /dashboard/support/${ticketId}`
          : "✅ Ticket created. Our team will reply within 24 hours."
      );

      toast.success(
        ticketId ? `Ticket #${ticketId} created successfully` : "Ticket created"
      );
      closeTicketFlow();
    } catch (err) {
      console.error("Chatbot ticket submit failed:", err);
      const msg =
        typeof err === "string"
          ? err
          : err?.message || "Could not create the ticket. Please try again.";
      toast.error(msg);
      addBotMessage(`⚠️ Sorry, I couldn't create your ticket: ${msg}`);
    } finally {
      setTicketSubmitting(false);
    }
  };

  // Keeps the outer <form onSubmit> from triggering a page reload
  const handleTicketFormSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 group"
          aria-label="Open chat assistant"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
          </div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 ${
            isMinimized ? "h-[60px] overflow-hidden" : "h-[500px] md:h-[550px]"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Evergreen Logix</h3>
                <p className="text-white/70 text-xs">AI Assistant • Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/70 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  closeTicketFlow();
                }}
                className="text-white/70 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 h-[340px] md:h-[380px] bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-br-none"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      <span className="text-[10px] opacity-60 mt-1 block">
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
                
                {/* Powered by */}
                <div className="text-center py-2">
                  <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-500" />
                    Powered by <span className="font-semibold text-emerald-600">Evergreen Logix AI</span>
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto">
                <button
                  onClick={() => setInput("Track my shipment")}
                  className="flex-shrink-0 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
                >
                  📦 Track
                </button>
                <button
                  onClick={() => setInput("Calculate shipping cost")}
                  className="flex-shrink-0 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
                >
                  💰 Pricing
                </button>
                <button
                  onClick={() => setInput("Schedule a pickup")}
                  className="flex-shrink-0 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
                >
                  🚚 Pickup
                </button>
                <button
                  onClick={() => {
                    if (isAuthenticated) openTicketFlow();
                    else setInput("Raise a ticket");
                  }}
                  className="flex-shrink-0 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
                >
                  🎫 Ticket
                </button>
              </div>

              {/* Ticket Wizard */}
              {showTicketForm && (
                <div className="px-4 py-3 bg-white border-t border-gray-200">
                  <form onSubmit={handleTicketFormSubmit} className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                      <Ticket size={16} />
                      <span>Raise a Ticket</span>
                      <span className="ml-auto text-[10px] text-gray-400">
                        Step {ticketStep + 1} of {ticketTotalSteps}
                      </span>
                    </div>

                    {/* Reporter line (read-only) */}
                    {authName && (
                      <div className="text-[10px] text-gray-500 bg-gray-50 border border-gray-100 rounded-md px-2 py-1">
                        Filing as <span className="font-semibold text-gray-700">{authName}</span>
                        {authEmail ? ` <${authEmail}>` : ""}
                      </div>
                    )}

                    {/* Step 0 — Category */}
                    {ticketStep === 0 && (
                      <div>
                        <label className="block text-[11px] font-medium text-gray-600 mb-1">
                          What is this about?
                        </label>
                        <select
                          value={ticketData.category}
                          onChange={(e) => {
                            setTicketData({
                              ...ticketData,
                              category: e.target.value,
                              subCategory: "",
                            });
                            setTicketErrors({});
                          }}
                          className="w-full text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none bg-white"
                        >
                          <option value="">-- Select a category --</option>
                          {TICKET_CATEGORIES.map((c) => (
                            <option key={c.value} value={c.value}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                        {ticketErrors.category && (
                          <p className="text-[10px] text-red-500 mt-1">{ticketErrors.category}</p>
                        )}
                      </div>
                    )}

                    {/* Step 1 — Sub-category */}
                    {ticketStep === 1 && selectedCategory && (
                      <div>
                        <label className="block text-[11px] font-medium text-gray-600 mb-1">
                          Pick the closest match
                        </label>
                        <select
                          value={ticketData.subCategory}
                          onChange={(e) => {
                            setTicketData({ ...ticketData, subCategory: e.target.value });
                            setTicketErrors({});
                          }}
                          className="w-full text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none bg-white"
                        >
                          <option value="">-- Select sub-category --</option>
                          {selectedCategory.subCategories.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {ticketErrors.subCategory && (
                          <p className="text-[10px] text-red-500 mt-1">{ticketErrors.subCategory}</p>
                        )}
                      </div>
                    )}

                    {/* Step 2 — Order ID (conditional) */}
                    {ticketStep === 2 && needsOrderId && (
                      <div>
                        <label className="block text-[11px] font-medium text-gray-600 mb-1">
                          Order ID (e.g. EGLXD1234)
                        </label>
                        <input
                          type="text"
                          disabled={ticketData.orderIdSkipped}
                          value={ticketData.orderId}
                          onChange={(e) => {
                            setTicketData({ ...ticketData, orderId: e.target.value });
                            setTicketErrors({});
                          }}
                          placeholder={ticketData.orderIdSkipped ? "Skipped" : "EGLXD1234"}
                          className="w-full text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none disabled:bg-gray-100 disabled:text-gray-400"
                        />
                        <label className="flex items-center gap-2 mt-2 text-[10px] text-gray-500 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={ticketData.orderIdSkipped}
                            onChange={(e) => {
                              setTicketData({
                                ...ticketData,
                                orderIdSkipped: e.target.checked,
                                orderId: e.target.checked ? "" : ticketData.orderId,
                              });
                              setTicketErrors({});
                            }}
                          />
                          I don't have the order ID right now
                        </label>
                        {ticketErrors.orderId && (
                          <p className="text-[10px] text-red-500 mt-1">{ticketErrors.orderId}</p>
                        )}
                      </div>
                    )}

                    {/* Description step (last) */}
                    {isLastStep && (
                      <div>
                        <label className="block text-[11px] font-medium text-gray-600 mb-1">
                          Describe the issue
                        </label>
                        <textarea
                          value={ticketData.description}
                          onChange={(e) => {
                            setTicketData({ ...ticketData, description: e.target.value });
                            setTicketErrors({});
                          }}
                          placeholder="Tell us what happened, any error messages, etc. (min 20 chars)"
                          className="w-full text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none resize-none h-20"
                          maxLength={2000}
                        />
                        <div className="flex justify-between text-[10px] mt-1">
                          {ticketErrors.description ? (
                            <span className="text-red-500">{ticketErrors.description}</span>
                          ) : (
                            <span className="text-gray-400">&nbsp;</span>
                          )}
                          <span className="text-gray-400">
                            {ticketData.description.length}/2000
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Nav buttons */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={ticketSubmitting}
                        className="flex-1 flex items-center justify-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold py-2 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                      >
                        <ChevronLeft size={14} />
                        {ticketStep === 0 ? "Cancel" : "Back"}
                      </button>
                      <button
                        type="submit"
                        disabled={ticketSubmitting}
                        className={`flex-1 text-xs font-semibold py-2 rounded-lg transition-colors ${
                          ticketSubmitting
                            ? "bg-emerald-300 text-white cursor-not-allowed"
                            : "bg-emerald-500 text-white hover:bg-emerald-600"
                        }`}
                      >
                        {ticketSubmitting
                          ? "Submitting…"
                          : isLastStep
                          ? "Submit Ticket"
                          : "Next"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Input */}
              <div className="p-3 bg-white border-t border-gray-200 rounded-b-2xl">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none text-sm"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className={`p-2 rounded-xl transition-all ${
                      input.trim()
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-emerald-500/30 shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;