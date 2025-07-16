import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <main className="max-w-[1250px] mx-auto">
      <div className="px-5 md:px-30 bg-[#2A5243] pt-20 md:pt-40 pb-10">
        <nav className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2 md:gap-3">
            <img
              src={logo}
              alt="Transita Logo"
              className="w-10 md:w-20 h-10 md:h-20"
            />
            <span className="text-white text-sm md:text-xl">
              Smarter. Simpler. Commute
            </span>
          </div>
          <div className="flex flex-col gap-3 md:gap-5 text-white">
            <h1 className="text-lg md:text-3xl">Quick Links</h1>
            <ul className="flex flex-col gap-2 md:gap-5 text-md md:text-xl">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">Features</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:gap-5 text-white">
            <h1 className="text-lg md:text-3xl">Legal</h1>
            <ul className="flex flex-col gap-2 md:gap-5 text-md md:text-xl">
              <li className="cursor-pointer hover:underline">
                Terms of service
              </li>
              <li className="cursor-pointer hover:underline">Privacy policy</li>
              <li className="cursor-pointer hover:underline">
                Cookie settings
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <footer className="flex flex-col bg-black text-white py-3 w-full items-center">
        <div className="flex flex-row gap-1 text-sm md:text-base">
          <span>&copy;</span>
          <span className="text-green-700">2025.</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
