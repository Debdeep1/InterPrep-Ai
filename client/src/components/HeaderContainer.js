import React from "react";
import Hero from "./Hero";
import InterviewPreview from "./InterviewPreview";

const HeaderContainer = () => {
  return (
    <div className="my-3 py-12 px-16 flex gap-4 justify-between">
      <div className="w-[40%] lg:mt-20">
        <Hero />
      </div>
      <div className="w-[60%]">
        <InterviewPreview />
      </div>
    </div>
  );
};

export default HeaderContainer;
