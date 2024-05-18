import React from "react";
import { BsRobot } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="py-4 px-6 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-2 text-cyan-500">
        <BsRobot size={30} />
        <span className="text-xl font-bold">interPrep.ai</span>
      </div>
      <div>
        <button className="text-cyan-600 font-medium hover:text-cyan-700">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
