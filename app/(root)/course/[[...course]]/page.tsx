"use client";

import React, { useState } from "react";
import LeftTaskBar from "@/components/course/LeftTaskBar";
import MainContentBodyCourse from "@/components/course/MainContentBodyCourse";
import RightHintBox from "@/components/course/RightHintBox";

const Page = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskBar, setShowTaskBar] = useState(false);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleTaskBarOpen = () => {
    setShowTaskBar(!showTaskBar); // Toggle the state to open/close the task bar
  };

  return (
    <section className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex flex-col gap-8 ">
      <div className="flex h-screen">
        <div className="w-1/8">
          <LeftTaskBar
            onTaskSelect={handleTaskSelect}
            isOpen={handleTaskBarOpen}
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <MainContentBodyCourse selectedTask={selectedTask} />
          </div>
        </div>
        {/* <div className="bg-gray-200 w-1/12 hidden md:block">
          <RightHintBox />
        </div> */}
      </div>
    </section>
  );
};

export default Page;
