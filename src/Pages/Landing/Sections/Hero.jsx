import React from "react";
import Hero_video from "../../../assets/hero_video.mp4";

const Hero = () => {
  return (
      <div className="relative h-screen px-12">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src={Hero_video} type="video/mp4" />
          </video>

          {/* Dark Overlay for better text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
              <div className="max-w-4xl">
                  <h1 className="text-center text-5xl md:text-6xl font-bold w-[96%] mb-10">
                      Building Brands That Get <span className="text-[#FF8B3D]">Seen,</span> <span className="text-[#FF8B3D]"> Trusted,</span> and <span className="text-[#FF8B3D]">Chosen </span>
                  </h1>
              </div>
              
              <div className="max-w-3xl">
                  <p className="text-center text-xl md:text-2xl mb-8">
                      Helping business grow online with Digital Marketing, Social Media, SEO & GMB optimization
                  </p>
              </div>
              
              <div className="flex gap-8 text-lg md pt- font-semibold">
                  <p className="text-4xl font-bold ">• Visibility</p>
                  <p  className="text-4xl font-bold ">• Credibility</p>
                  <p  className="text-4xl font-bold ">• Growth</p>
              </div>
          </div>
      </div>
  );
};

export default Hero;