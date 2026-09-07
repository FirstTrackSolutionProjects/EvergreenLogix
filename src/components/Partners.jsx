import React from "react";

const partners = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Blue_Dart_Express_logo.svg",
    name: "Blue Dart"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Delhivery_Logo_%282019%29.png",
    name: "Delhivery"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Gati_Logo_SVG.svg/250px-Gati_Logo_SVG.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Gati"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Ekart_logo.svg/250px-Ekart_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Ekart"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmo7BT_b-Vp5WK49LVLZf112_TYXViKIpq57lxak0Pg&s=10",
    name: "Xpressbees"
  },
  {
    logo: "https://www.shadowfax.in/logo_header_tm.svg",
    name: "Shadowfax"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/DTDC_logo.png/250px-DTDC_logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "DTDC"
  },
  {
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/250px-Amazon_2024.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Amazon"
  },
];

const Partners = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Our Trusted Partners
        </h2>

        <div className="overflow-hidden relative">
          {/* Fading gradients at edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            className="flex gap-12 w-max items-center animate-partner-scroll"
          >
            {[...partners, ...partners, ...partners].map((item, index) => (
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
                  p-4
                "
                aria-label={`Partner logo: ${item.name}`}
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