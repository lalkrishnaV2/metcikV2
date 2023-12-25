import React, { useState } from "react";

const WelcomeProjectDetails = () => {
  //project
  const [projectDetails, setProjectDetails] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const handleProjectSubmit = () => {
    // Create a new project object
    const newProjectObject = {
      details: newProject,
      link: projectLink,
    };

    // Add the new project to the list of project details
    setProjectDetails([...projectDetails, newProjectObject]);

    // Clear the input fields
    setNewProject("");
    setProjectLink("");
  };
  return (
    <div className="pl-6 mt-0">
      <p
        className="md:mt-10 custom-font text-start mt-5"
        style={{ fontSize: "15px" }}
      >
        Tell us about your projects
      </p>

      {/* Project Details Input */}
      <input
        className="mt-2 md:mt-2 pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full md:max-w-[600px] custom-font bg-gray-50"
        placeholder="Enter project details..."
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
      />

      {/* Project Link Input */}
      <input
        type="text"
        className="mt-4 md:mt-2 pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full md:max-w-[600px] custom-font bg-gray-50"
        placeholder="Project link (optional)"
        value={projectLink}
        onChange={(e) => setProjectLink(e.target.value)}
      />

      {/* Submit Button */}
      {/* <div className="flex flex-col justify-end"> */}
      {/* Your other content */}

      <div className=" flex-col justify-end left-28">
        <button
          className="mt-4 bg-blue-500 text-white p-2 rounded md:ml-28"
          onClick={handleProjectSubmit}
        >
          submit
        </button>
        {/* </div> */}
      </div>

      {/* Display Project Details */}
      <ul className="mt-4">
        {projectDetails.map((project, index) => (
          <li key={index} className="mb-2">
            <strong>{`Project ${index + 1}: `}</strong>
            <p>{`Details: ${project.details}`}</p>
            <p>{`Link: ${project.link}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomeProjectDetails;
