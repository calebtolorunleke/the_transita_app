import React from "react";
import bgImg from "../assets/images/headebg.jpg";

const Header = () => {
  return (
    <>
      <main
        className="bg-cover py-30 max-w-[1250px] mx-auto px-12"
        style={{ backgroundImage: `URL(${bgImg})` }}
      >
        <div className="flex flex-row">
          <div>
            <img
              src={bgImg}
              className="w-5 h-5 rounded-full border border-black border-3"
              alt="logo"
            />
            <ul className="text-white">
              <li>Home</li>
              <li>Traffic updates</li>
              <li>Parking finder</li>
              <li>Transit options</li>
            </ul>
            <button className="text-white bg-blue-900 py-1 px-5 rounded-lg">
              Signup
            </button>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
};

export default Header;
