import React from "react";
import { ourFeatures } from "../data/db.js";
import loca from "../assets/images/loca.svg";
import destination from "../assets/images/destination.svg";
import map from "../assets/images/map.png";

const Features = () => {
  return (
    <main className="max-w-[500px] md:max-w-[1250px] mx-auto px-4 md:px-12 py-5 md:py-10 items-center flex flex-col gap-10">
      <h1 className="text-2xl">Our feautres</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-5">
        {ourFeatures.map((updateFeatures, index) => (
          <div
            className="flex flex-col items-center text-center h-full gap-2 md:gap-5 py-[2rem] md:py-[5rem] px-5 bg-blue-600 rounded-xl"
            key={index}
          >
            <img src={updateFeatures.img} alt="" />
            <h1>{updateFeatures.title}</h1>
            <p>{updateFeatures.description}</p>
          </div>
        ))}
      </div>
      <div className=" flex flex-row items-center justify-between gap-10 w-full ">
        <div className="relative w-full rounded-lg ">
          <img src={loca} alt="" className="absolute mt-[0.8rem] pl-3" />
          <input
            type="text"
            placeholder="My location"
            className=" w-full pl-10 py-4 h-full border border-black rounded-lg"
          />
        </div>
        <div className="relative w-full rounded-lg ">
          <img src={destination} alt="" className="absolute mt-[0.8rem] pl-3" />
          <input
            type="text"
            placeholder="Destination"
            className=" w-full pl-10 py-4 h-full border border-black rounded-lg"
          />
        </div>
      </div>
      <button className="bg-[#003366] py-3 px-15 text-white rounded-lg cursor-pointer">
        Find routes
      </button>
      <img
        src={map}
        alt=""
        className="w-full h-[20rem] md:h-[30rem] object-cover"
      />
    </main>
  );
};

export default Features;
