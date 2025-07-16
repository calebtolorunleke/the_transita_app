import React from "react";
import { questionData } from "../data/db";

const Questions = () => {
  return (
    <>
      <main className="bg-[#D0E7F3] max-w-[500px] md:max-w-[1250px] flex flex-col gap-4 md:gap-8 mx-auto px-4 md:px-12 py-10 md:py-12 md:my-10">
        <h1 className="text-lg md:text-xl md:px-8">
          You got questions, we have answers
        </h1>
        <div className="flex flex-col gap-5 md:px-8">
          {questionData.map((updateQuestion, index) => (
            <div
              className="border w-full md:w-[80%] p-3 md:p-10 rounded-xl bg-white"
              key={index}
            >
              <h3>{updateQuestion.title}</h3>
              <p className="text-gray-400 text-sm w-full md:w-[70%]">
                {updateQuestion.answer}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Questions;
