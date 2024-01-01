import React, { useState } from "react";

const LeftTaskBar = ({ onTaskSelect, isOpen }) => {
  const tasks = [
    "Learn React basics",
    "Build a simple React component",
    "Understand React state and props",
    "Create a React form",
    "Explore React hooks",
    "Build a responsive React application",
    "Implement React Router",
    "Integrate API calls in React",
    "Test React components",
    "Deploy a React app",
  ];

  const [showTasks, setShowTasks] = useState(false);

  console.log("onTasked", onTaskSelect);

  return (
    <div
      className={`md:block sm:hidden md:border ${showTasks ? "hovered" : ""}`}
      onMouseEnter={() => setShowTasks(true)}
      onMouseLeave={() => setShowTasks(false)}
    >
      <div className="bg-gray-200 cursor-pointer">
        <div className="bg-gray-200 cursor-pointer">
          <div className="w-full md:w-full  custom-font">
            {showTasks ? "Task Bar <-" : "->"}
          </div>
        </div>
      </div>

      <div
        className={`w-[120px] md:w-[250px] ${
          showTasks ? "md:w-[250px] " : "md:w-[90px] w-[30px]"
        }`}
      >
        {tasks.map((task, index) => (
          <li
            key={index}
            className="py-3 cursor-pointer"
            onClick={() => onTaskSelect(task)}
          >
            <div className="flex items-center">
              <span className="mr-2 font-semibold">{index + 1}.</span>
              {showTasks && (
                <ul className="divide-y divide-gray-300 md:divide-red-50">
                  <span>{task}</span>
                </ul>
              )}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default LeftTaskBar;
