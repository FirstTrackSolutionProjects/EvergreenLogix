import React from "react";

const partners = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg",
    name: "DHL"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg",
    name: "FedEx"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Blue_Dart_Express_logo.svg",
    name: "Blue Dart"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Delhivery_Logo_%282019%29.png",
    name: "Delhivery"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/United_Parcel_Service_logo_2014.svg",
    name: "UPS"
  },
  {
    logo: "https://cdn.brandfetch.io/idmGNOSQ1E/w/425/h/86/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1772328409995",
    name: "Envia"
  },
  // Add more partners to make the scroll loop smoother and longer
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg",
    name: "Aramex"
  },
  {
    logo: "https://images.seeklogo.com/logo-png/30/1/india-post-logo-png_seeklogo-304806.png",
    name: "India Post"
  },
];

const Partners = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Our Trusted Partners
        </h2>

        <div className="overflow-hidden relative"> {/* Added relative for before/after gradients */}
          {/* Fading gradients at edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            className="flex gap-12 w-max items-center animate-partner-scroll"
          >
            {[...partners, ...partners, ...partners].map((item, index) => ( // Repeat partners more times for a longer, smoother loop
              <div
                key={index}
                className="
                  min-w-[180px] h-[100px] md:min-w-[200px] md:h-[120px]
                  flex flex-col items-center justify-center
                  bg-white
                  border border-gray-200
                  rounded-xl
                  shadow-sm
                  transition-all duration-300 hover:shadow-md
                  p-4 // Added padding inside the card
                "
                aria-label={`Partner logo: ${item.name}`} // Accessibility: Add aria-label
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-[50px] md:max-h-[60px] max-w-[140px] md:max-w-[160px] object-contain transition-all duration-300"
                />
                <p className="mt-2 text-slate-600 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
