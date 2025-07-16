import React from "react";
import { questionData } from "../data/db";

const Questions = () => {
  return (
    <main className="bg-[#D0E7F3] w-full py-12 px-4 md:px-16">
      <div className="max-w-[1250px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#003366]">
          You’ve got questions, we’ve got answers.
        </h1>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-6">
          {questionData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 w-full md:w-[80%] mx-auto"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Questions;
