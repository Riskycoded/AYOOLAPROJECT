import React from "react";
import { Link } from "react-router-dom";           
import Logo_Ayoola from '../assets/ay_logo.png';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F8FAFC]">
      <div>
        <div className="text-white flex items-center justify-between px-6 md:px-12 py-4">

          
          <div className="h- rounded-full w-">
            <Link to="/">
              <img
                src={Logo_Ayoola}
                alt="Ayoola Logo"
                className="h-[50px] outline outline-[#0A1A2F] rounded-full w-[50px]"      
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items text-[#0A1A2F] text-center space-x-10">
            <Link to="/" className=" hover:text-[#1E8CFF] text-[#0A1A2F] text-xl font-medium transition">
              Home
            </Link>
            <a href="#aboutus" className="hover:text-[#1E8CFF] text-[#0A1A2F] text-xl font-medium transition">About</a>

            <a href="#Services" className="hover:text-[#1E8CFF] text-[#0A1A2F] text-xl font-medium transition">
              Services
            </a>
            <Link to="/portfolio" className="hover:text-[#1E8CFF] text-[#0A1A2F] text-xl font-medium transition">
              Portfolio
            </Link>
            <Link to="/testimonials" className="hover:text-[#1E8CFF] text-[#0A1A2F] text-xl font-medium transition">
              Testimonials
            </Link>
            <Link to="/contactus" className="hover:text-[#1E8CFF] text-[#0A1A2F] text-xl font-medium transition">
              Contact
            </Link>
          </div>

          {/* Hire Me Button */}
          <div className="flex items-end">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Hire Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;