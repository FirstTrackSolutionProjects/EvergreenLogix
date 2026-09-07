// src/pages/BlogDetail.jsx
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, MessageCircle, Heart } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Blog content mapping
  const blogContent = {
    "good-establish-with-evergreen-logix": {
      title: "Good Establish with Evergreen Logix",
      date: "January 15, 2026",
      author: "Tejash Parekh",
      category: "Logistics",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      content: [
        {
          type: "paragraph",
          text: "Establishing a strong logistics foundation is crucial for any business looking to scale and succeed in today's competitive market. Evergreen Logix provides the comprehensive solutions needed to build that foundation.",
        },
        {
          type: "heading",
          text: "Why Logistics Matters",
        },
        {
          type: "paragraph",
          text: "In the modern business landscape, efficient logistics can make the difference between success and failure. From inventory management to last-mile delivery, every aspect of your supply chain needs to work seamlessly together.",
        },
        {
          type: "list",
          items: [
            "Reduced operational costs through optimized routes",
            "Improved customer satisfaction with faster deliveries",
            "Better inventory management reducing waste",
            "Enhanced tracking and transparency",
          ],
        },
        {
          type: "heading",
          text: "How Evergreen Logix Helps",
        },
        {
          type: "paragraph",
          text: "Evergreen Logix offers a comprehensive suite of logistics solutions designed to help businesses establish and maintain efficient supply chains. Our platform integrates cutting-edge technology with reliable delivery networks.",
        },
        {
          type: "paragraph",
          text: "Our smart warehousing solutions provide secure, temperature-controlled storage with real-time inventory tracking. Combined with our global shipping network, we ensure your products reach customers quickly and safely.",
        },
        {
          type: "heading",
          text: "Steps to Establish Your Logistics",
        },
        {
          type: "list",
          items: [
            "Assess your current logistics needs and pain points",
            "Choose the right shipping methods for your products",
            "Implement real-time tracking and monitoring",
            "Optimize your supply chain for efficiency",
            "Continuously evaluate and improve your processes",
          ],
        },
        {
          type: "paragraph",
          text: "By partnering with Evergreen Logix, you gain access to expert guidance and cutting-edge logistics solutions that help your business grow and thrive in any market condition.",
        },
      ],
    },
    "future-of-logistics-with-ai": {
      title: "The Future of Logistics with AI and Evergreen Logix",
      date: "January 12, 2026",
      author: "Tejash Parekh",
      category: "Technology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80",
      content: [
        {
          type: "paragraph",
          text: "Artificial Intelligence is revolutionizing the logistics industry, and Evergreen Logix is at the forefront of this transformation. From predictive analytics to autonomous delivery, AI is reshaping how we think about supply chain management.",
        },
        {
          type: "heading",
          text: "AI-Powered Logistics",
        },
        {
          type: "paragraph",
          text: "AI technologies are being integrated into every aspect of logistics operations, from route optimization to demand forecasting. These intelligent systems help reduce costs, improve efficiency, and enhance customer satisfaction.",
        },
        {
          type: "list",
          items: [
            "Predictive analytics for demand forecasting",
            "AI-powered route optimization for faster deliveries",
            "Automated warehouse operations with robotics",
            "Intelligent tracking and anomaly detection",
          ],
        },
        {
          type: "heading",
          text: "Evergreen Logix AI Solutions",
        },
        {
          type: "paragraph",
          text: "Evergreen Logix leverages AI to provide smarter logistics solutions for our clients. Our AI-driven platform offers real-time insights, automated decision-making, and predictive capabilities that help businesses stay ahead of the curve.",
        },
        {
          type: "paragraph",
          text: "Our machine learning algorithms analyze shipping patterns, weather data, and traffic conditions to optimize delivery routes and reduce delays. This results in faster, more reliable service for your customers.",
        },
        {
          type: "heading",
          text: "The Road Ahead",
        },
        {
          type: "paragraph",
          text: "As AI technology continues to evolve, we can expect even more innovative solutions in logistics. From autonomous vehicles to drone deliveries, the future of logistics is intelligent, efficient, and sustainable.",
        },
      ],
    },
    "sustainable-shipping": {
      title: "Sustainable Shipping: Our Green Initiatives",
      date: "January 10, 2026",
      author: "Tejash Parekh",
      category: "Sustainability",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      content: [
        {
          type: "paragraph",
          text: "At Evergreen Logix, we believe that logistics and sustainability can go hand in hand. Our commitment to green initiatives is helping reduce the environmental impact of shipping while maintaining efficiency and reliability.",
        },
        {
          type: "heading",
          text: "Our Sustainability Commitment",
        },
        {
          type: "paragraph",
          text: "We have implemented comprehensive sustainability programs across our operations, from eco-friendly packaging to carbon offset programs. Our goal is to create a more sustainable logistics industry for future generations.",
        },
        {
          type: "list",
          items: [
            "Eco-friendly packaging materials",
            "Carbon offset shipping options",
            "Electric and hybrid delivery vehicles",
            "Optimized routes to reduce emissions",
            "Sustainable warehousing practices",
          ],
        },
        {
          type: "heading",
          text: "Green Packaging Solutions",
        },
        {
          type: "paragraph",
          text: "We've partnered with eco-friendly packaging suppliers to offer sustainable packaging options for our clients. From recycled materials to biodegradable solutions, we help reduce waste in the shipping process.",
        },
        {
          type: "heading",
          text: "Carbon Offset Program",
        },
        {
          type: "paragraph",
          text: "Our carbon offset program allows clients to neutralize the environmental impact of their shipments. We invest in verified carbon reduction projects, including reforestation and renewable energy initiatives.",
        },
        {
          type: "paragraph",
          text: "By choosing Evergreen Logix, you're not just shipping smarter – you're shipping greener. Together, we can build a more sustainable future for logistics.",
        },
      ],
    },
    "technology-revolutionizing-supply-chain": {
      title: "How Technology is Revolutionizing Supply Chain",
      date: "January 8, 2026",
      author: "Tejash Parekh",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      content: [
        {
          type: "paragraph",
          text: "The supply chain industry is undergoing a technological revolution. From blockchain to IoT (Internet of Things), new technologies are transforming how we manage and track goods across the globe.",
        },
        {
          type: "heading",
          text: "Key Technologies Transforming Supply Chains",
        },
        {
          type: "list",
          items: [
            "Internet of Things (IoT) for real-time tracking",
            "Blockchain for transparent and secure transactions",
            "Artificial Intelligence for predictive analytics",
            "Robotics and automation in warehouses",
            "Cloud computing for scalable operations",
          ],
        },
        {
          type: "heading",
          text: "IoT and Real-Time Tracking",
        },
        {
          type: "paragraph",
          text: "IoT sensors provide unprecedented visibility into the supply chain. From temperature monitoring in cold chains to real-time location tracking, IoT technology ensures that you always know the status of your shipments.",
        },
        {
          type: "heading",
          text: "Blockchain for Transparency",
        },
        {
          type: "paragraph",
          text: "Blockchain technology is bringing transparency and security to supply chain transactions. Every step of the journey can be recorded and verified, reducing fraud and ensuring authenticity.",
        },
        {
          type: "paragraph",
          text: "At Evergreen Logix, we're integrating these cutting-edge technologies to provide our clients with smarter, more efficient, and more transparent logistics solutions.",
        },
      ],
    },
    "international-shipping-tips": {
      title: "Tips for International Shipping Success",
      date: "January 5, 2026",
      author: "Tejash Parekh",
      category: "Shipping",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80",
      content: [
        {
          type: "paragraph",
          text: "International shipping can be complex, but with the right preparation and partner, it can be smooth and successful. Here are our top tips for international shipping success with Evergreen Logix.",
        },
        {
          type: "heading",
          text: "Essential Tips for International Shipping",
        },
        {
          type: "list",
          items: [
            "Properly document and label all shipments",
            "Understand customs requirements for each destination",
            "Choose the right shipping method for your needs",
            "Consider insurance for valuable shipments",
            "Track your shipments in real-time",
          ],
        },
        {
          type: "heading",
          text: "Documentation and Customs",
        },
        {
          type: "paragraph",
          text: "Proper documentation is crucial for international shipping. Ensure you have all necessary paperwork, including commercial invoices, packing lists, and customs declarations. Incorrect or incomplete documentation can lead to delays and additional costs.",
        },
        {
          type: "heading",
          text: "Choosing the Right Shipping Method",
        },
        {
          type: "paragraph",
          text: "Different products require different shipping methods. Consider factors like urgency, cost, and the nature of your goods when choosing between air freight, sea freight, or express courier services.",
        },
        {
          type: "paragraph",
          text: "Evergreen Logix offers flexible shipping options to meet your specific needs. Our team can help you choose the most cost-effective and reliable shipping method for your products.",
        },
        {
          type: "heading",
          text: "Track and Monitor",
        },
        {
          type: "paragraph",
          text: "Use real-time tracking to monitor your shipments throughout their journey. This helps you stay informed about delivery status and quickly address any issues that may arise.",
        },
      ],
    },
    "sustainable-supply-chain": {
      title: "Building a Sustainable Supply Chain",
      date: "January 3, 2026",
      author: "Tejash Parekh",
      category: "Sustainability",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
      content: [
        {
          type: "paragraph",
          text: "Building a sustainable supply chain is no longer just an option – it's a necessity. Consumers and businesses alike are demanding more environmentally responsible practices, and Evergreen Logix is here to help.",
        },
        {
          type: "heading",
          text: "Why Sustainable Supply Chains Matter",
        },
        {
          type: "paragraph",
          text: "Sustainable supply chains reduce environmental impact, improve brand reputation, and often lead to cost savings. Companies that embrace sustainability are better positioned for long-term success.",
        },
        {
          type: "list",
          items: [
            "Reduced environmental impact and carbon footprint",
            "Improved brand reputation and customer loyalty",
            "Cost savings through efficient operations",
            "Compliance with environmental regulations",
            "Better risk management and resilience",
          ],
        },
        {
          type: "heading",
          text: "How Evergreen Logix Supports Sustainability",
        },
        {
          type: "paragraph",
          text: "Evergreen Logix offers comprehensive sustainable logistics solutions. From eco-friendly packaging to carbon-neutral shipping options, we help our clients build greener supply chains.",
        },
        {
          type: "heading",
          text: "Measuring and Improving",
        },
        {
          type: "paragraph",
          text: "We help you measure your supply chain's environmental impact and identify areas for improvement. Our analytics tools provide insights into carbon emissions, waste reduction, and efficiency gains.",
        },
        {
          type: "paragraph",
          text: "Building a sustainable supply chain is a journey, and Evergreen Logix is your trusted partner every step of the way.",
        },
      ],
    },
  };

  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Not Found</h1>
          <p className="text-gray-600 mt-2">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/blogs")}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                TP
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-white/60 text-sm">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-emerald max-w-none">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p key={index} className="text-gray-700 leading-relaxed text-lg mb-4">
                  {block.text}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={index} className="space-y-2 mb-6">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">Share this article:</span>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to all blogs
          </button>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contact us today to learn how Evergreen Logix can help your business grow.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;