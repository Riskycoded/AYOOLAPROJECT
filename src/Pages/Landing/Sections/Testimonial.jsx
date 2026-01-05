import React, { useState } from 'react';
import Footer from './footer';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Laura Schneider",
            role: "Course Creator",
            company: "DigitalSuccess Academy",
            location: "Berlin, Germany",
            initial: "L",
            quote: "Moving our entire business to Systeme.io was the best decision ever. Everything in one platform - courses, funnels, email, membership. Now generating $120K monthly recurring revenue.",
            result: "$120K monthly recurring"
        },
        {
            id: 2,
            name: "John Doe",
            role: "Marketing Director",
            company: "Tech Startup Inc",
            location: "New York, USA",
            initial: "J",
            quote: "This platform transformed how we manage our business. The integration is seamless and results speak for themselves.",
            result: "$80K monthly recurring"
        },
        {
            id: 3,
            name: "Sarah Johnson",
            role: "Business Owner",
            company: "Creative Agency",
            location: "London, UK",
            initial: "S",
            quote: "Best investment we've made. Our revenue has doubled since switching to this all-in-one solution.",
            result: "$150K monthly recurring"
        }
    ];

    // Contact cards data - 8 cards total
    const contactCards = [
        {
            id: 1,
            name: "Alex Martinez",
            company: "CloudSync AI",
            location: "San Francisco, USA",
            initial: "A",
            initialBg: "bg-blue-200",
            initialText: "text-blue-800",
            testimonial: "The Zoho CRM implementation transformed our sales process completely. We went from chaos to crystal-clear pipeline visibility. Our team is now 65% more efficient and our close rates have skyrocketed.",
            result: "65% sales efficiency increase",
            resultColor: "text-blue-600"
        },
        {
            id: 2,
            name: "Sophie Laurent",
            company: "LuxeStyle Fashion",
            location: "Paris, France",
            initial: "S",
            initialBg: "bg-purple-200",
            initialText: "text-purple-800",
            testimonial: "The Klaviyo email automation they set up for us is generating $85K in monthly revenue from abandoned carts and post-purchase flows alone. Best investment we've made in our marketing stack.",
            result: "$85K monthly from email",
            resultColor: "text-purple-600"
        },
        {
            id: 3,
            name: "Michael Chen",
            company: "TechFlow Solutions",
            location: "Singapore",
            initial: "M",
            initialBg: "bg-green-200",
            initialText: "text-green-800",
            testimonial: "Their digital marketing strategy increased our lead generation by 200% in just 3 months. The ROI has been phenomenal and our sales team can't keep up with the quality leads coming in.",
            result: "200% increase in leads",
            resultColor: "text-green-600"
        },
        {
            id: 4,
            name: "Emma Wilson",
            company: "Wellness Hub",
            location: "London, UK",
            initial: "E",
            initialBg: "bg-pink-200",
            initialText: "text-pink-800",
            testimonial: "The social media campaigns they created for us went viral. We gained 50K followers in 2 months and our engagement rates are through the roof. Our brand visibility has never been better.",
            result: "50K new followers in 2 months",
            resultColor: "text-pink-600"
        },
        {
            id: 5,
            name: "David Rodriguez",
            company: "FitLife Gym",
            location: "Miami, USA",
            initial: "D",
            initialBg: "bg-orange-200",
            initialText: "text-orange-800",
            testimonial: "Their local SEO work put us on the map. We went from page 3 to ranking #1 for all our target keywords. Foot traffic increased by 180% and membership sign-ups are at an all-time high.",
            result: "180% increase in foot traffic",
            resultColor: "text-orange-600"
        },
        {
            id: 6,
            name: "Priya Patel",
            company: "EcoGoods Store",
            location: "Mumbai, India",
            initial: "P",
            initialBg: "bg-teal-200",
            initialText: "text-teal-800",
            testimonial: "The e-commerce optimization they did was game-changing. Our conversion rate doubled, cart abandonment dropped by 40%, and monthly revenue increased by $95K. Incredible results!",
            result: "$95K monthly revenue increase",
            resultColor: "text-teal-600"
        },
        {
            id: 7,
            name: "James Anderson",
            company: "Legal Advisory Group",
            location: "Sydney, Australia",
            initial: "J",
            initialBg: "bg-indigo-200",
            initialText: "text-indigo-800",
            testimonial: "Their content marketing strategy positioned us as thought leaders in our industry. Website traffic is up 300%, and we're getting inquiries from Fortune 500 companies now. Simply outstanding.",
            result: "300% increase in website traffic",
            resultColor: "text-indigo-600"
        },
        {
            id: 8,
            name: "Maria Garcia",
            company: "Gourmet Delights",
            location: "Barcelona, Spain",
            initial: "M",
            initialBg: "bg-red-200",
            initialText: "text-red-800",
            testimonial: "The influencer marketing campaign they orchestrated was brilliant. We reached 2 million people, gained partnerships with top food bloggers, and our online orders tripled in one quarter.",
            result: "3x online orders in one quarter",
            resultColor: "text-red-600"
        }
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="py-16 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
                <p className="text-4xl font-bold mb-4">What Our Clients Say</p>
                <p className="text-xl text-gray-600">Real stories from real people that we've helped scale globally</p>
            </div>

            {/* Carousel Section */}
            <div className="w-full max-w-6xl mx-auto">
                <div className="bg-gray-50 rounded-2xl shadow-lg p-12 relative">
                    {/* Arrow Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
                    >
                        ←
                    </button>
                    
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
                    >
                        →
                    </button>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Side - Profile */}
                        <div className="flex flex-col items-center text-center min-w-[250px]">
                            <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-semibold text-blue-800 mb-4">
                                {currentTestimonial.initial}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h3>
                            <p className="text-gray-600">{currentTestimonial.role}</p>
                            <p className="text-blue-600 font-medium">{currentTestimonial.company}</p>
                            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                <span>📍</span> {currentTestimonial.location}
                            </p>
                        </div>

                        {/* Right Side - Testimonial */}
                        <div className="flex-1">
                            <div className="text-6xl text-blue-600 mb-4">"</div>
                            <p className="text-gray-700 text-lg mb-6">
                                {currentTestimonial.quote}
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-blue-600 text-xl">★</span>
                                    ))}
                                </div>
                                <span className="text-blue-600 font-semibold">
                                    Result: {currentTestimonial.result}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Cards Section - 8 cards, 2 per row */}
            <div className="w-full max-w-6xl mx-auto mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactCards.map((card) => (
                        <div 
                            key={card.id}
                            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Header with Avatar and Name */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-16 h-16 rounded-full ${card.initialBg} flex items-center justify-center text-2xl font-semibold ${card.initialText}`}>
                                    {card.initial}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{card.name}</h3>
                                    <p className="text-sm text-gray-600">{card.company}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                        <span>📍</span> {card.location}
                                    </p>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-blue-600 text-lg">★</span>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                "{card.testimonial}"
                            </p>

                            {/* Result */}
                            <p className={`${card.resultColor} font-semibold text-sm`}>
                                {card.result}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Testimonial;