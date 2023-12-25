import React from "react";

const MainContentBodyCourse = ({ selectedTask }) => {
  return (
    <div className="bg-white border border-gray-300 p-4">
      <h2 className="text-2xl font-semibold mb-4">Main Content</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Task 1: </h3>
        <p>{selectedTask && <p>Selected Task: {selectedTask}</p>}</p>
      </div>

      {/* Continue adding explanations for each task */}
    </div>
  );
};

export default MainContentBodyCourse;
