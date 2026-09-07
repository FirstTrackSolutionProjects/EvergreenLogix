// src/pages/Blogs.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MessageCircle, Calendar, User, ArrowRight, Tag, Search } from "lucide-react";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      title: "Good Establish with Evergreen Logix",
      description: "Learn how to reduce costs and improve delivery times. Discover the strategies for efficient logistics management.",
      date: "January 15, 2026",
      author: "Tejash Parekh",
      category: "Logistics",
      readTime: "5 min read",
      link: "/blogs/good-establish-with-evergreen-logix"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
      title: "The Future of Logistics with AI and Evergreen Logix",
      description: "Discover how AI is changing logistics, optimizing routes, and enhancing operational efficiency with Evergreen Logix.",
      date: "January 12, 2026",
      author: "Tejash Parekh",
      category: "Technology",
      readTime: "7 min read",
      link: "/blogs/future-of-logistics-with-ai"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      title: "Sustainable Shipping: Our Green Initiatives",
      description: "Explore Evergreen Logix's efforts in promoting eco-friendly logistics solutions and reducing carbon footprint.",
      date: "January 10, 2026",
      author: "Tejash Parekh",
      category: "Sustainability",
      readTime: "4 min read",
      link: "/blogs/sustainable-shipping"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      title: "How Technology is Revolutionizing Supply Chain",
      description: "From blockchain to IoT, discover the technologies transforming the logistics industry.",
      date: "January 8, 2026",
      author: "Tejash Parekh",
      category: "Technology",
      readTime: "6 min read",
      link: "/blogs/technology-revolutionizing-supply-chain"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
      title: "Tips for International Shipping Success",
      description: "Essential tips and best practices for smooth international shipping and customs clearance.",
      date: "January 5, 2026",
      author: "Tejash Parekh",
      category: "Shipping",
      readTime: "8 min read",
      link: "/blogs/international-shipping-tips"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80",
      title: "Building a Sustainable Supply Chain",
      description: "Learn how businesses can build sustainable supply chains that benefit both the planet and profits.",
      date: "January 3, 2026",
      author: "Tejash Parekh",
      category: "Sustainability",
      readTime: "5 min read",
      link: "/blogs/sustainable-supply-chain"
    },
  ];

  const categories = ["All", "Logistics", "Technology", "Sustainability", "Shipping"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Stay informed with the latest news, tips, and innovations in logistics.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-gray-900">No posts found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Read Time & Link */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <Link
                        to={post.link}
                        className="inline-flex items-center gap-1 text-emerald-600 font-medium hover:text-emerald-700 transition-colors group-hover:gap-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Subscribe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Never Miss an Update
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest logistics insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Have Questions About Logistics?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you with all your shipping and logistics needs.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;