import React from "react";

const CourseStartModal = ({ isModalOpen, handleModalClose }) => {
  return (
    <div className={`fixed inset-0 ${isModalOpen ? "" : "hidden"} z-50`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 max-w-md mx-auto rounded-md z-50 h-[400px] w-[300px] md:h-[400px] md:min-w-[700px]">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={handleModalClose}
        >
          X
        </button>

        {/* Course details */}
        <h2 className="text-2xl font-bold mb-4">Course Title</h2>
        <p className="text-base mb-4">Course Description</p>
        {/* Add more details as needed */}

        {/* Button */}
        <a href="/course/:id">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            start
          </button>
        </a>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleModalClose}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default CourseStartModal;
