import React from "react";
import bgImg from "../assets/images/headebg.jpg";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <main
        className="bg-center py-10 max-w-[1250px] mx-auto px-12 md:flex lg:flex flex-col gap-[5rem] pb-[10rem] hidden"
        style={{ backgroundImage: `URL(${bgImg})` }}
      >
        <div className="flex flex-row">
          <div className="flex flex-row justify-between w-full items-center bg-white px-8 py-4 rounded-4xl">
            <div className="flex flex-row items-center gap-1">
              <img
                src={logo}
                className="w-10 h-10 rounded-full border border-white border-3"
                alt="logo"
              />
              <span>Transita</span>
            </div>
            <ul className="flex flex-row gap-7 items-center">
              <li>Home</li>
              <li>Traffic updates</li>
              <li>Parking finder</li>
              <li>Transit options</li>
            </ul>
            <button className="text-white bg-[#003366] py-1 px-5 rounded-lg cursor-pointer">
              Signup
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 px-8 gap-1">
          <div className="flex flex-col gap-7 items-left text-white w-full">
            <h1 className="text-4xl pr-50%">
              Make Your Daily Travel More Efficient.
            </h1>
            <p>
              Live insights on traffic flow, parking space availability and
              smart transport alternatives curated to streamline your urban
              journey.
            </p>
            <div>
              <button className="bg-[#003366] py-3 px-3 rounded-lg cursor-pointer">
                Plan my commute
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Header;
