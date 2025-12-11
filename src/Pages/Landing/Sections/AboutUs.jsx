import React from "react";
import StupidBoy from '../../../assets/Stupid_boy1.jpeg'

const AboutUs =() => {
  return (
      <div id="aboutus" className="bg-[#F8FAFC]">
          {/* <div>
              <p>About Us</p>
          </div> */}

          <div className="flex ">
              <div className="flex gap-5">
                  <img src={StupidBoy} alt="" className="w-[500px] rounded-sm outline outline-[#0A1A2F]" />
                   
              </div>

              <div className="w-1/2 justify-center pt-[10%] pl-20 gap-20"> 
                  
                  <div>
                      <p className="text-8xl font-bolder font-stretch-90% font-sans p-10">About Us.</p>
                  </div>

                  <div className="flex space-x-15 ">
                      
                      <div className="space-y-10 transition-all duration-500">
                            <p className="hover:text-lg transition-all duration-500 hover:bg-[#0A1A2F] hover:text-[#A7B0B8] hover:shadow-[#FF8B3D] hover:shadow-md hover:rounded-md ">The Ayoola Agency is a digital marketing brand focused on helping small businesses grow their online presence, attract customers, and build long term Visibility</p>
                            <p className="hover:text-lg transition-all duration-500 hover:bg-[#0A1A2F] hover:text-[#A7B0B8] hover:shadow-[#FF8B3D] hover:shadow-md hover:rounded-md " >We combine digital marketing, SEO, social media strategy, paid ads, and influencer marketing to give brands a strong online foundation</p> 
                      </div>
                <div className="space-y-8">
                  <p  className="hover:text-lg transition-all duration-500 hover:bg-[#0A1A2F] hover:text-[#A7B0B8] hover:shadow-[#FF8B3D] hover:shadow-md hover:rounded-md ">Our mission is simple: help you get sen, trusted, and chosen by the right people</p>
                          <p  className="hover:text-lg transition-all duration-500 hover:bg-[#0A1A2F] hover:text-[#A7B0B8] hover:shadow-[#FF8B3D] hover:shadow-md hover:rounded-md ">Whether you need better visibility, more engagement, or consistent customers, we use snart strategy and creative execution to turn your ideas into real results.</p>
                          </div>
              </div>
                  </div>
          </div>
    </div>
  );
}   ;

export default AboutUs; 