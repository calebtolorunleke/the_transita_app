import React from "react";
import why1 from "../assets/images/why1.jpg";
import why2 from "../assets/images/why2.jpg";
import why3 from "../assets/images/why3.jpg";
import why4 from "../assets/images/why4.jpg";

const WhyTransita = () => {
  return (
    <main className="max-w-[1250px] px-4 md:px-12 mx-auto flex flex-col gap-10 text-left py-10 font-manrope">
      <h1 className="text-3xl font-bold text-[#003366]">
        Why Transita is the best choice for you
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column (2/3) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Two Half-Width Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div
              className="h-64 bg-cover bg-center rounded-2xl text-white p-5 flex flex-col justify-end transition-all duration-500 ease-in-out transform hover:scale-105"
              style={{ backgroundImage: `url(${why3})` }}
            >
              <h2 className="text-lg font-semibold">
                Smarter commute planning
              </h2>
              <p className="text-sm">
                Compare routes, switch modes, beat delays. We don’t just guide
                you—we help you choose the best possible way to move.
              </p>
            </div>
            <div
              className="h-64 bg-cover bg-center rounded-2xl text-white p-5 flex flex-col justify-end transition-all duration-500 ease-in-out transform hover:scale-105"
              style={{ backgroundImage: `url(${why2})` }}
            >
              <h2 className="text-lg font-semibold">
                All-in-one travel insights
              </h2>
              <p className="text-sm">
                Get real-time data on traffic, transit delays, and optimal
                routes to stay ahead and save time.
              </p>
            </div>
          </div>

          {/* Full Width Section */}
          <div
            className="w-full h-64 md:h-80 bg-cover bg-center rounded-2xl text-white p-6 flex flex-col justify-end transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{ backgroundImage: `url(${why4})` }}
          >
            <h2 className="text-xl font-semibold">Integrated experience</h2>
            <p className="text-sm">
              From navigation to parking, everything works together for a
              smoother journey.
            </p>
          </div>
        </div>

        {/* Right Column (1/3) */}
        <div
          className="h-full bg-cover bg-center rounded-2xl text-white flex flex-col justify-end p-7 transition-all duration-500 ease-in-out transform hover:scale-105"
          style={{ backgroundImage: `url(${why1})` }}
        >
          <h2 className="text-2xl font-bold">Simple, powerful experience</h2>
          <p className="text-sm pr-[30%]">
            Clean design, intuitive clicks. Everything just works — so you can
            focus on getting there.
          </p>
        </div>
      </div>
    </main>
  );
};

export default WhyTransita;
