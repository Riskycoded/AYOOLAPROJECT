import React from "react";  
import Navbar from "../../../components/Navbar";
import Whatsapp from "../../../assets/whatsapp.png";
import Instagram from "../../../assets/instagram.png";
import Telegram from "../../../assets/telegram.png";

const ContactUs = () => {
  return (
    <div id="contactus">
      <div className="text-center">
        <p className="py-10 text-5xl font-bold">Contact Ayoola Agency</p>
        <p className="text-xl font-light">Ready to take your business to the next level? Message us today to get started</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-8 mt-8 mx-8">
              <div className="md:flex-1 flex flex-col items-start md:items-center justify-center gap-6">
                  <div className="outline outline-1 outline-gray-200 w-70 cursor-pointer rounded hover:bg-green-600 transition-colors duration-300">
                      <span className="flex gap-1"><img src={Whatsapp} alt="WhatsApp" className="h-16 w-16"/> <span className="pt-5">Reach out to us on Whatsapp</span></span>
                      </div>

                  <div className="outline outline-1 outline-gray-200 w-70 cursor-pointer rounded hover:bg-[#df437e] transition-colors duration-300" >
                      <span className="flex gap-1"><img src={Instagram} alt="Instagram" className="h-16 w-16"/> <span className="pt-5">Reach out to us on Instagram</span></span>
                  </div>
                  
                  <div className="outline outline-1 outline-gray-200 w-70 cursor-pointer rounded hover:bg-[#1c8adb] transition-colors duration-300">
                      <span className="flex gap-1"><img src={Telegram} alt="Telegram" className="h-16 w-16"/> <span className="pt-5">Reach out to us on Telegram</span></span>
                      </div>
        </div>

        <div className="md:flex-1 flex justify-center md:justify-end pr-40">
          <form action="submit" className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="email">
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
                          
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                id="message"
                placeholder="Send us a message"
                          />
                          
                          <button className="mt-4 items-center pl-30">
                <input
                  className="bg-[#0A1A2F] hover:bg-[#1E8CFF] w-50 items-center  text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Submit"
                />
                      </button>
                      </div>
                      
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;