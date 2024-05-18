import React from "react";
import { FaMicrophone } from "react-icons/fa";

const InterviewRecord = ({ ques }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg">
      <div className="py-8 px-4 text-center">
        <p className="text-xl font-bold mb-6">{ques}</p>
        <p className="text-4xl text-gray-400 font-bold">0.00 / 2.00</p>
        <button className="bg-red-700 inline-block p-3 rounded-full my-6">
          <FaMicrophone size={20} color="white" />
        </button>
      </div>
      <div className="border-y px-6 py-4 text-gray-400">
        <span>Feedback</span>
      </div>
      <div className="border-y px-6 py-4 text-gray-400">
        <span>Sample Response</span>
      </div>
      {/* feedback */}
      {/* sample response */}
    </div>
  );
};

export default InterviewRecord;
