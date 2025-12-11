import React from "react";

const Mission = () => {
  return (
    <section className="bg-[#e5e9ec] py-20 px-6">
      {/* This container controls the spacing between the cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">

        {/* BRAND MISSION */}
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 
                         shadow-xl hover:shadow-2xl hover:shadow-[#0A1A2F] 
                         transition-all duration-500">
          <p className="font-bold text-4xl text-[#0A1A2F] tracking-tight">
            BRAND MISSION
          </p>
          <p className="text-xl text-gray-700 mt-8 leading-relaxed">
            To help small businesses build a strong digital presence and use smart marketing 
            to reach, attract, and convert their ideal customers.
          </p>
        </div>

        {/* BRAND VISION */}
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 
                         shadow-xl hover:shadow-2xl hover:shadow-[#0A1A2F]
                         transition-all duration-500">
          <p className="font-bold text-4xl text-[#0A1A2F] tracking-tight">
            BRAND VISION
          </p>
          <p className="text-xl text-gray-700 mt-8 leading-relaxed">
            To become the leading digital marketing partner for small businesses in Africa, 
            known for delivering visibility, growth, and long-term digital success.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Mission;