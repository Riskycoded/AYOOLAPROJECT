import React from "react";
import { Router } from "react-router-dom";
import { Link } from 'react-router-dom';

// You can replace these with your actual icon URLs or use Heroicons/React Icons
const socialIcons = {
  behance: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  whatsapp: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  email: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/733/733561.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
};

const Footer = () => {
  return (
    <footer className="bg-[#0A1A2F] text-white py-16 px-6 font-light">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Logo + Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-3">
            THE AYOOLA AGENCY
          </h2>
          <p className="text-orange-400 text-sm tracking-widest uppercase">
            • Web Design & Visual Design • Content Marketing & Paid Ads • Social Media Marketing
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm uppercase tracking-wider mb-16">
          <a href="#works" className="hover:text-gray-400 transition">Works</a>
          <a href="#services" className="hover:text-gray-400 transition">Services</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#pricing" className="hover:text-gray-400 transition">Values</a>
          <Link to="/contactus" className="hover:text-gray-400 transition">Contact us</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 mb-16">
          <a href="#" className="group">
            <img 
              src={socialIcons.behance} 
              alt="Behance" 
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition duration-300 grayscale group-hover:grayscale-0"
            />
          </a>
          <a href="#" className="group">
            <img 
              src={socialIcons.whatsapp} 
              alt="WhatsApp" 
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </a>
          <a href="#" className="group">
            <img 
              src={socialIcons.email} 
              alt="Email" 
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </a>
          <a href="#" className="group">
            <img 
              src={socialIcons.instagram} 
              alt="Instagram" 
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </a>
          <a href="#" className="group">
            <img 
              src={socialIcons.linkedin} 
              alt="LinkedIn" 
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </a>
          <a href="#" className="group">
            <img 
              src={socialIcons.facebook} 
              alt="Facebook" 
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </a>
        </div>

        {/* Bottom Legal Links */}
        <div className="text-center text-xs text-gray-600 space-y-4">
          <div className="flex justify-center gap-4 md:gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-gray-400 transition">Terms & Conditions</a>
            <span>|</span>
            <a href="#" classNameiox="hover:text-gray-400 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400 transition">Disclosures</a>
          </div>

          <p className="text-gray-200">
            © 2025 Ayoola Agency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;