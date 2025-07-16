import React from "react";
import aprostrophe from "../assets/images/aprostophe.png";
import { testimonialData } from "../data/db";

const Testimonial = () => {
  // Double the testimonials for smooth loop
  const loopedTestimonials = [...testimonialData, ...testimonialData];

  return (
    <main className="max-w-[1250px] mx-auto py-10 pb-20 px-1 flex flex-col gap-10 items-center overflow-hidden">
      <h1 className="text-3xl font-bold">What our customers say</h1>

      <div className="w-full py-2 overflow-hidden">
        <div className="flex gap-10 scroll-animation hover:[animation-play-state:paused] whitespace-nowrap">
          {loopedTestimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-70 md:w-80 bg-white rounded-xl shadow-xl px-6 py-4 whitespace-normal"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg text-gray-800">
                  {item.subject}
                </span>
                <img src={aprostrophe} alt="quote" className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <div className="mt-4 flex gap-1 items-center">
                {/* You can add an avatar if needed */}
                <img src={item.img} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </h2>
                  <span className="text-xs text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonial;
