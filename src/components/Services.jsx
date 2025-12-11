// src/components/Services.jsx
import React from "react";
import CheckIcon from "../assets/check-orange.png";

const Services = ({ image, title, desc1, desc2, desc3, desc4 }) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl
                     border-2 border-[#F8FAFC] hover:border-[#1E8CFF] max-w-md mx-auto
                     transform hover:-translate-y-4 transition-all duration-500">
      
      {/* Large Hero Image */}
      <div className="relative h-72 overflow-hidden bg-[#F8FAFC]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 
                     transition-transform duration-700 brightness-95 group-hover:brightness-100"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-[#0A1A2F]/40
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Decorative accent corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF8B3D] opacity-0 
                        group-hover:opacity-20 transition-opacity duration-500 
                        transform rotate-45 translate-x-10 -translate-y-10" />
      </div>

      {/* Content */}
      <div className="p-8 bg-white">
        {/* Title with accent underline */}
        <div className="relative pb-4 mb-8">
          <h3 className="text-3xl font-bold text-[#0A1A2F] text-center tracking-tight">
            {title}
          </h3>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 
                          bg-[#FF8B3D] rounded-full 
                          scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </div>

        {/* Features List with Custom Checkmark */}
        <ul className="space-y-5">
          {[desc1, desc2, desc3, desc4].map((desc, i) => (
            <li
              key={i}
              className="flex items-start gap-4 opacity-90 group-hover:opacity-100 
                         transition-all duration-300"
            >
              <div className="flex-shrink-0 w-7 h-7 mt-1">
                <img
                  src={CheckIcon}
                  alt="check"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <span className="text-[#A7B0B8] leading-relaxed text-base group-hover:text-[#0A1A2F] 
                             transition-colors duration-300 no-underline">
                {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-2 bg-[#1E8CFF]
                      transform scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-700 origin-left" />
    </div>
  );
};

export default Services;