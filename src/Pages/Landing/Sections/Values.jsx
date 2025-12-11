import React from "react";

// Import your actual PNG icons
import Eye from "../../../assets/Eyes_.png";
import Shield from "../../../assets/Shield_.png";
import Target from "../../../assets/Target_.png";
import TrendingUp from "../../../assets/Trending_.png";
import Zap from "../../../assets/Zap_.png";

const Values = () => {
  const values = [
    {
      icon: Eye,           // ← Now it's the actual image, not a string!
      title: "Visibility",
      desc: "Helping brands show up everywhere their customers are.",
    },
    {
      icon: Shield,
      title: "Credibility",
      desc: "Building trust through clean design, good content, and clear messaging.",
    },
    {
      icon: Target,
      title: "Strategy",
      desc: "Every action must connect to a business goal.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Your work must lead to real business results.",
    },
    {
      icon: Zap,
      title: "Simplicity",
      desc: "Making marketing easy and understandable for clients.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0A1A2F]">Core Values</h2>
          <p className="text-xl text-gray-600 mt-4">What drives everything I do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center border border-gray-200
                         shadow-lg hover:shadow-2xl hover:shadow-[#0A1A2F]/20
                         hover:-translate-y-4 transition-all duration-500"
            >
              {/* PNG Icon in Circle */}
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#0A1A2F]/10 
                              flex items-center justify-center overflow-hidden
                              group-hover:bg-[#0A1A2F]/20 group-hover:scale-110 
                              transition-all duration-500">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0A1A2F] mb-4">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;