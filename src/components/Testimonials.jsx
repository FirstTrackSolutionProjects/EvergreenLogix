import React, { useState } from "react";
import { Quote, Plus, X } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Amit",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      quote:
        "Shopy Courier Express has been an absolute pleasure to work with. Professional, reliable, and timely!"
    },
    {
      name: "Sneha",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      quote:
        "Their global shipping services have helped expand my business. Truly world-class."
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quote: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.quote) return;

    setTestimonials([
      ...testimonials,
      {
        name: formData.name,
        quote: formData.quote,
        image:
          formData.image ||
          "https://ui-avatars.com/api/?name=" + encodeURIComponent(formData.name) + "&background=random&color=fff" // UI/UX Flaw: Added random background and white text for better default avatar
      }
    ]);

    setFormData({ name: "", quote: "", image: "" });
    setShowModal(false);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center md:text-left">
            What Our Clients Say
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
          >
            <Plus size={20} />
            Add Testimonial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8 border border-gray-100 hover:-translate-y-1" // Added subtle translateY hover
            >
              <Quote className="w-10 h-10 text-emerald-500 mb-4" />

              <p className="text-lg text-slate-700 mb-6 italic">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-sm"
                />
                <p className="font-bold text-slate-900 text-lg">
                  – {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"> {/* Added animation */}
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded-full p-1"
              aria-label="Close testimonial modal" // Accessibility: Add aria-label
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Add Testimonial
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                aria-label="Your Name" // Accessibility: Add aria-label
              />

              <textarea
                placeholder="Your Feedback"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" // Made resizable vertically
                value={formData.quote}
                onChange={(e) =>
                  setFormData({ ...formData, quote: e.target.value })
                }
                required
                aria-label="Your Feedback" // Accessibility: Add aria-label
              />

              <input
                type="url"
                placeholder="Image URL (optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                aria-label="Image URL (optional)" // Accessibility: Add aria-label
              />

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Animation for modal */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
