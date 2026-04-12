import React from "react";
import { MessageCircle } from "lucide-react"; // Import for CTA icon
import { Link } from "react-router-dom"; // Import Link

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1920&q=80"
          alt="About Us - Shopy Courier"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
          <strong>Shopy Courier</strong>, a proud venture of{" "}
          <strong>Shopy Courier</strong>, is a
          dedicated logistics platform delivering speed, safety, and
          operational excellence across the supply chain. Established in
          ABC, Odisha in <strong>January 7</strong>, we focus on
          next-generation tracking and reliable transport solutions. Our commitment is to
          provide seamless global and local shipping experiences for businesses and individuals alike.
        </p>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {[
          {
            title: "Our Mission",
            desc: "To deliver the best logistics solutions with unmatched customer service.",
          },
          {
            title: "Our Vision",
            desc: "Connecting the world through fast, reliable, and efficient shipping.",
          },
          {
            title: "Our Values",
            desc: "Integrity, innovation, and customer-first approach in every delivery.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-8 text-center border border-gray-100 transform hover:-translate-y-1 duration-200"
          >
            <h3 className="font-semibold text-xl mb-3 text-slate-900">{item.title}</h3>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* OUR SERVICES */}
        <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-900">
            Our Services
            </h2>
            <p className="text-center text-gray-600 text-lg mb-14">
            Offering a wide range of logistics solutions tailored to your needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
                {
                icon: "🌍",
                title: "International Shipping",
                desc: "Time to time work. Seamless global delivery with real-time tracking.",
                },
                {
                icon: "🏢",
                title: "Smart Warehousing",
                desc: "Modern, secure, and temperature-controlled storage solutions designed for efficiency and safety.",
                },
                {
                icon: "🚢",
                title: "Air & Sea Cargo",
                desc: "Flexible cargo transport options via air and sea ensuring speed, safety, and cost-effectiveness.",
                },
                {
                icon: "📦",
                title: "Supply Chain Management",
                desc: "End-to-end logistics planning and freight coordination to optimize routes and reduce delivery time.",
                },
            ].map((item, i) => (
                <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition-all duration-200 text-center border border-gray-100 transform hover:-translate-y-1"
                aria-label={`Service: ${item.title}`} // Accessibility: Add aria-label
                >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-3 text-slate-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* MEET OUR TEAM */}
        <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900">
            Meet Our Team
            </h2>

            <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center w-72 border border-gray-100 transform hover:scale-105 transition-all duration-200">
                <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Tejash Parekh - CEO & Founder"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover object-center shadow-md"
                />
                <h3 className="font-semibold text-xl text-slate-900">Tejash Parekh</h3>
                <p className="text-emerald-600 text-sm">CEO & Founder</p>
            </div>
            </div>
        </div>
        </section>


      {/* WHY CHOOSE US - (Re-using component if possible, or simplifying) */}
      <section className="bg-white py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Trusted Reliability",
            "Secure Handling",
            "On-Time Every Time",
            "24/7 Assistance",
          ].map((title, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-200 text-center border border-gray-100 transform hover:-translate-y-1">
              <h4 className="font-semibold text-slate-900 text-lg">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-500 to-sky-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-md">Let’s Connect!</h2>
        <p className="text-base md:text-lg mb-8 opacity-90">
          We are always ready to assist you with your logistics needs.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300"> {/* Wrapped in Link and added focus styles */}
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default About;
