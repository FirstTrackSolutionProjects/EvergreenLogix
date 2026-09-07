// src/components/FloatingChatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2, Maximize2, HelpCircle, Ticket, FileText, User, Mail } from "lucide-react";

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
  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

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
      return "📞 Our support team is available 24/7! You can:\n• Call us: +91 1234567890\n• Email: info@evergreenlogix.site\n• Use the contact form on our Contact page\n• Raise a ticket below!";
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
      setShowTicketForm(true);
      return "🎫 I'll help you raise a support ticket. Please fill out the form below with your details and issue description. Our team will respond within 24 hours.";
    }
    
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return "👋 Hello! Welcome to Evergreen Logix. How can I assist you with your logistics needs today?";
    }
    
    if (lower.includes("thank")) {
      return "🌿 You're welcome! We're here to help. Is there anything else I can assist you with?";
    }
    
    return "🌿 Thank you for reaching out to Evergreen Logix. I'm here to help with tracking, pricing, bookings, and support. Could you please provide more details about what you need?";
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!ticketData.name || !ticketData.email || !ticketData.subject || !ticketData.description) {
      alert("Please fill in all fields");
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "bot",
        text: `✅ Thank you for raising a ticket, ${ticketData.name}! We've received your issue and will get back to you within 24 hours. Ticket ID: #T${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date(),
      },
    ]);

    setTicketData({ name: "", email: "", subject: "", description: "" });
    setShowTicketForm(false);
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
                onClick={() => setIsOpen(false)}
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
                  onClick={() => setInput("Raise a ticket")}
                  className="flex-shrink-0 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
                >
                  🎫 Ticket
                </button>
              </div>

              {/* Ticket Form */}
              {showTicketForm && (
                <div className="px-4 py-3 bg-white border-t border-gray-200">
                  <form onSubmit={handleTicketSubmit} className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                      <Ticket size={16} />
                      <span>Raise a Ticket</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={ticketData.name}
                        onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                        className="text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={ticketData.email}
                        onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                        className="text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={ticketData.subject}
                      onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                      className="w-full text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none"
                    />
                    <textarea
                      placeholder="Describe your issue..."
                      value={ticketData.description}
                      onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
                      className="w-full text-xs p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none resize-none h-12"
                    />
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 text-white text-xs font-semibold py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Submit Ticket
                    </button>
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