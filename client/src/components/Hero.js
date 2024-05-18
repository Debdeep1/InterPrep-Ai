import React from "react";

const Hero = () => {
  return (
    <div className="">
      <span className="text-cyan-600 bg-cyan-50 font-medium py-1 px-2 rounded-full">
        #1 AI Interview Prep
      </span>
      <div>
        <div className="my-4">
          <h2 className="lg:text-5xl font-bold">
            Boost your confidence,{" "}
            <br/>
            <p className="bg-green-50">ace the job interview</p>
          </h2>
          <p className="lg:text-xl text-gray-500 font-medium my-4">
            Practice job interview questions tailored to your job description.
            Get instant AI feedback and suggestions to improve your answers.
          </p>
        </div>
        <div>
          <button className="bg-cyan-800 py-2 px-3 text-white rounded-lg shadow-lg shadow-green-100">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
