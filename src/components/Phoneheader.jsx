import React, { useState } from "react";
import bgImg from "../assets/images/headebg.jpg";
import logo from "../assets/images/logo.png";

const Phoneheader = () => {
  const [menu, setMenu] = useState(false);
  return (
    <main
      className="bg-center py-10 relative flex flex-col gap-10 md:hidden lg:hidden max-w-[500px] px-5 mx-auto font-manrope"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex ">
        <div className="flex flex-row items-center justify-between w-full text-white">
          <div className="flex flex-row items-center ">
            <img src={logo} className="w-10 h-10 rounded-full" alt="logo" />
            <span className="">Transita</span>
          </div>

          <button
            className="text-3xl font-bold cursor-pointer"
            value={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? "×" : "☰"}
          </button>
        </div>

        {menu && (
          <div className="w-full absolute top-20 mx-auto">
            <ul className=" flex flex-col gap-5 py-5 mx-auto w-[70%] bg-white px-7 ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Traffic updates</li>
              <li className="cursor-pointer">Parking finder</li>
              <li className="cursor-pointer">Transut options</li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 text-white">
        <h1 className="text-2xl w-[70%]">
          Make Your Daily Travel More Efficient.
        </h1>
        <p className="w-[80%]">
          Live insights on traffic flow,parking space availabilty and smart
          transport alternative - curated to streamline your urban journey.
        </p>
        <div>
          <button className="bg-[#003366] px-7 py-1 rounded-lg cursor-pointer">
            Signup
          </button>
        </div>
      </div>
    </main>
  );
};

export default Phoneheader;
