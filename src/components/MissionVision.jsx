import React from "react";

const MissionVision = () => {
  const items = [
    {
      title: "Our Mission",
      content: "To redefine logistics through innovation, speed, and service excellence.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    },
    {
      title: "Our Vision",
      content: "To become the most trusted global logistics partner by integrating technology.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    },
    {
      title: "Our Values",
      content: "We believe in integrity, transparency, and continuous improvement.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1" // Increased shadow, added border, and subtle translateY
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={`Image for ${item.title}`} // Accessibility: Added aria-label
                role="img"
              />

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
