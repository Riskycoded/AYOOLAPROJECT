// src/pages/Services/ServicesOri.jsx
import React from "react";
import Services from "../../../components/Services";

import Digital_marketing from "../../../assets/Digital_.png";
import Ads_setup from "../../../assets/Web_.png";
import Gmb from "../../../assets/Social_.png";
import Social_media from "../../../assets/Seo_.png";

const ServicesOri = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="Services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4">We deliver excellence in every digital touchpoint</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Services
            image={Digital_marketing}
            title="Design"
            desc1="User Interface (UI) Design"
            desc2="User Experience (UX) Design"
            desc3="Visual Design"
            desc4="Branding"
          />

          <Services
            image={Ads_setup}
            title="Development"
            desc1="Web Development"
            desc2="Mobile Development"
            desc3="Desktop Development"
            desc4="API Development"
          />

          <Services
            image={Gmb}
            title="Marketing"
            desc1="Social Media Marketing"
            desc2="Search Engine Optimization (SEO)"
            desc3="Paid Advertising"
            desc4="Content Marketing"
          />

          <Services
            image={Social_media}
            title="Consulting"
            desc1="Digital Marketing Strategy"
            desc2="Social Media Strategy"
            desc3="SEO Optimization"
            desc4="Influencer Marketing"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOri;