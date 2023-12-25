// MainContentData.tsx
import React from "react";

interface MainContentDataProps {
  projects: string[];
  experience: string[];
  education: string[];
}

const MainContentData: React.FC<MainContentDataProps> = ({
  projects,
  experience,
  education,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full ">
      <div>
        <h2 className="flex flex-col md:items-start text-xl font-bold mb-4 items-center">
          Projects
        </h2>
        <ul className="list-disc pl-6 flex flex-col md:items-start items-center">
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col md:items-start items-center ">
        <h2 className="text-xl font-bold mb-4 ">Experience</h2>
        <ul className="list-disc pl-6">
          {experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col md:items-start items-center">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-6">
          {education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContentData;
