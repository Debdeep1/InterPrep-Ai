import React, { useState } from "react";
import InterviewRecord from "./InterviewRecord";

const InterviewPreview = () => {
  const jobRoles = [
    {
      role: "Custom Job Role",
      ques: "Give me an example of when you had to assume leadership for your team.",
    },
    {
      role: "Product Manager",
      ques: "What’s your approach to develop product strategy?",
    },
    {
      role: "Software Engineer",
      ques: "What would you do if you were assigned a project with a technology you're not familiar with?",
    },
    {
      role: "Data Analyst",
      ques: "What are the different types of sampling techniques used by data analysts?",
    },
  ];

  const [selectedRole, setSelecteRole] = useState(jobRoles[0]);
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <p className="text-gray-600">
        Turn a <strong>job description </strong>into{" "}
        <strong>interview questions</strong> to practice with:
      </p>
      <div className="my-4 flex flex-wrap gap-3">
        {/* mapping of the jobroles */}
        {jobRoles.map((item, index) => (
          <button
            key={index}
            className={`py-2 px-3 border rounded-full text-sm hover:bg-green-50 ${selectedRole.role === item.role ? "bg-green-50 border-green-300 text-green-700" : "text-gray-500" }`}
            onClick={() => setSelecteRole(item)}
          >
            {item.role}
          </button>
        ))}
      </div>
      {
        selectedRole && <InterviewRecord  ques={selectedRole.ques} />
      }
        
    
    </div>
  );
};

export default InterviewPreview;
