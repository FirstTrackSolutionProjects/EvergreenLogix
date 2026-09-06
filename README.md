# 📦 Shopy Courier

> A modern, responsive courier and logistics web application built with React, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Rolldown-646CFF?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🚀 Overview

**Shopy Courier** is a comprehensive courier and logistics platform that connects businesses and individuals with reliable shipping solutions. The application features a modern, responsive design with a seamless user experience across all devices.

From tracking shipments in real-time to calculating shipping costs, managing logistics, and providing transparent pricing — Shopy Courier brings everything you need into one intuitive interface.

## ✨ Features

### 🏠 Home Page
- Dynamic hero carousel with auto-slide and swipe support
- Capabilities showcase (International Shipping, Warehousing, Cargo, Supply Chain)
- Mission, Vision & Values section
- Why Choose Us with feature cards
- Statistics dashboard with animated floating icons
- Interactive shipping calculator
- Newsletter subscription
- Client testimonials with ability to add new testimonials
- Trusted partners marquee/scroll
- Call-to-action section

### 📄 Pages
- **Login** – Secure authentication with password visibility toggle
- **Register** – New user registration with phone number and business details
- **Tracking** – Real-time parcel tracking with tracking ID/AWB input
- **Pricing** – Shipping price calculator with detailed form
- **About** – Company information, mission, vision, team, and services
- **Contact** – Contact form with phone number field and social links
- **Blogs** – Blog posts listing with read more functionality
- **FAQ** – Expandable FAQ section with keyboard accessibility
- **Privacy Policy** – Comprehensive privacy information
- **Terms of Use** – Terms and conditions
- **Refund & Cancellation** – Policy details

### 🧩 Components
- **Navbar** – Fixed navigation with scroll-aware gradient backgrounds
- **Footer** – Company info, contact details, quick links, and social media
- **MobileBottomNav** – Responsive bottom navigation for mobile devices
- **ScrollToTop** – Automatically scrolls to top on route change
- **HeroCarousel** – Full-width image carousel with touch support
- **ShippingCalculator** – Multi-box shipping cost calculator
- **Testimonials** – Client testimonials with modal for adding new ones
- **Partners** – Auto-scrolling partner logos
- **Statistics** – Animated statistics display
- **Newsletter** – Email subscription form
- **CTA** – Call-to-action section with WhatsApp/contact link

## 🛠️ Tech Stack

### Frontend
- **[React 19](https://reactjs.org/)** – UI library
- **[Vite (Rolldown)](https://vite.dev/)** – Build tool and development server
- **[React Router DOM 7](https://reactrouter.com/)** – Client-side routing
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** – Icon library

### Development Tools
- **[ESLint 9](https://eslint.org/)** – Code linting
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** – React Fast Refresh

## 📁 Project Structure

```
shopy-courier/
├── public/
│   ├── _redirects               # SPA redirect configuration
│   ├── Logo.png                 # Main logo
│   ├── Logo1.png                # Alternative logo
│   └── images/
│       ├── login.jpg            # Login page background
│       ├── contact-bg.jpg       # Contact page background
│       └── pricing-side.jpg     # Pricing page image
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root component with routing
│   ├── App.css                  # Global styles
│   ├── index.css                # Tailwind imports and custom styles
│   ├── assets/
│   │   └── react.svg            # React logo asset
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Footer.jsx           # Footer section
│   │   ├── MobileBottomNav.jsx  # Mobile bottom navigation
│   │   ├── ScrollToTop.jsx      # Scroll to top utility
│   │   ├── HeroCarousel.jsx     # Homepage hero carousel
│   │   ├── Capabilities.jsx     # Services/features section
│   │   ├── MissionVision.jsx    # Mission, Vision, Values
│   │   ├── WhyChooseUs.jsx      # Why choose us section
│   │   ├── Statistics.jsx       # Statistics dashboard
│   │   ├── ShippingCalculator.jsx # Shipping cost calculator
│   │   ├── Newsletter.jsx       # Newsletter subscription
│   │   ├── Testimonials.jsx     # Client testimonials
│   │   ├── Partners.jsx         # Partner logos marquee
│   │   └── CTA.jsx              # Call-to-action section
│   └── pages/
│       ├── Login.jsx            # Login page
│       ├── Register.jsx         # Registration page
│       ├── Tracking.jsx         # Shipment tracking
│       ├── Pricing.jsx          # Pricing calculator
│       ├── About.jsx            # About us page
│       ├── Contact.jsx          # Contact page
│       ├── Blogs.jsx            # Blog listing page
│       ├── FAQ.jsx              # Frequently asked questions
│       ├── PrivacyPolicy.jsx    # Privacy policy
│       ├── TermsOfUse.jsx       # Terms of use
│       └── RefundCancellation.jsx # Refund & cancellation policy
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation
```

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn** (v1.22+) or **pnpm** (v8+)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/FirstTrackSolutionProjects/Shopy-Courier.git
cd Shopy-Courier
```

2. **Install dependencies**
```bash
npm install
```
or
```bash
yarn install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
- Starts Vite development server with hot module replacement (HMR)
- Access at: http://localhost:5173

### Production Build
```bash
npm run build
```
- Creates an optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally for testing

### Linting
```bash
npm run lint
```
- Runs ESLint to check for code style and potential issues

## 📄 Pages & Routes

| Route | Page Component | Description |
|-------|---------------|-------------|
| `/` | Home | Landing page with all sections |
| `/login` | Login | User authentication |
| `/register` | Register | New user registration |
| `/tracking` | Tracking | Shipment tracking by ID |
| `/pricing` | Pricing | Shipping price calculator |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form and info |
| `/blogs` | Blogs | Blog posts listing |
| `/faq` | FAQ | Frequently asked questions |
| `/privacy-policy` | PrivacyPolicy | Privacy policy |
| `/terms-of-use` | TermsOfUse | Terms of use |
| `/refund-cancellation` | RefundCancellation | Refund & cancellation policy |

## 🧩 Components

### Core Components
| Component | Description |
|-----------|-------------|
| `Navbar` | Fixed navigation with gradient backgrounds based on scroll |
| `Footer` | Company info, links, and social media |
| `MobileBottomNav` | Bottom navigation for mobile devices |
| `ScrollToTop` | Scrolls to top on route change |

### Homepage Components
| Component | Description |
|-----------|-------------|
| `HeroCarousel` | Full-width image carousel with auto-slide |
| `Capabilities` | Features/services grid |
| `MissionVision` | Mission, Vision, Values cards |
| `WhyChooseUs` | Reasons to choose the service |
| `Statistics` | Animated stats with floating icons |
| `ShippingCalculator` | Multi-box shipping cost form |
| `Newsletter` | Email subscription form |
| `Testimonials` | Client testimonials with add modal |
| `Partners` | Auto-scrolling partner logos |
| `CTA` | Call-to-action section |

### Utility Components
| Component | Description |
|-----------|-------------|
| `Field` | Reusable form field with label |
| `SmallField` | Compact form field for box details |
| `SmallSelect` | Compact select dropdown |

## 🎨 Styling

This project uses **Tailwind CSS 4** for styling with custom additions:

### Custom Animations
- **Partner logo scroll**: Infinite scrolling marquee
- **Floating icons**: Smooth floating animation for stats
- **Fade-in**: For modals and expandable sections

### Custom Styles (`index.css`)
- Custom scrollbar with gradient theme
- Navbar link underline animation
- Focus-visible outline for accessibility
- Partner logo auto-scroll animation

### Theme Colors
- **Primary**: Emerald (green) - `#10b981`
- **Secondary**: Sky (blue) - `#3b82f6`
- **Accent**: Purple - `#8b5cf6`
- **Dark**: Slate - `#1e293b`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines
- Follow the existing code style
- Use functional components with React hooks
- Add proper accessibility attributes (aria-*)
- Test responsive behavior
- Write meaningful commit messages

## 📝 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

© 2026 Shopy Courier. Developed by First Track Solution Technologies. All rights reserved.

## 📞 Contact

- **Website**: [shopycourier.site](https://shopycourier.site)
- **Email**: info@shopycourier.site
- **Phone**: +91 1234567890
- **Address**: ABC, Odisha, India, Pincode: 123456

---

## 🐛 Known Issues & TODOs

### Current Limitations
- Authentication is not connected to a backend API
- Shipping calculator only shows an alert (no real calculation)
- Blog posts are static (no CMS integration)
- Testimonials are stored in state (lost on page refresh)

### Future Improvements
- Backend API integration for real data
- User authentication with JWT
- Real shipping rate calculation
- Blog CMS integration
- Testimonial persistence (localStorage or database)
- Payment gateway integration
- Order history and dashboard

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ by First Track Solution Technologies**