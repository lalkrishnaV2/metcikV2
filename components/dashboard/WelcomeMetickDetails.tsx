"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import useGetData from "../hooks/useGetData";
import axios from "axios";
import { FiLink } from "react-icons/fi";
import { MdRocket } from "react-icons/md";

const WelcomeProjectDetails = () => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const userId = isLocalStorageAvailable
    ? localStorage.getItem("USER_ID")
    : null;

  const { responseData, getLoading, getData } = useGetData();

  //project
  const [newProject, setNewProject] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [selectedSkills, setSelectedSkills] = React.useState<SelectOption[]>(
    []
  );
  const [isBeginner, setIsBeginner] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);
  console.log("isBeginner", isBeginner);

  const handleCheckboxChange = () => {
    setIsBeginner(!isBeginner); // Toggle the value when the checkbox is clicked
  };
  const [skills, setAllSkills] = useState([]);
  const [welcomeSkills, setWelcomeSkills] = useState([]);
  useEffect(() => {
    getData(`/skillset/get-all-skills`);
    console.log("try2");
  }, []);

  const [alert, setAlert] = useState<string | null>(null);

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  useEffect(() => {
    if (responseData) {
      const data = responseData.skills;
      console.log("data", data);
      setAllSkills(data);
    }
  }, [responseData]);

  const options: SelectOption[] = skills.map((skill) => ({
    label: skill?.name,

    value: skill?._id,
  }));
  console.log("options", selectedSkills);

  const [userWelcomeProjects, setWelcomeUserProject] = useState([]);
  const [userIsBeginner, setUserIsBeginner] = useState(false);
  const [userWelcomeSkills, setUserWelcomeSkills] = useState([]);

  const handleSkillChange = (
    selectedOptions: OptionsType<SelectOption> | []
  ) => {
    setSelectedSkills(selectedOptions || []);

    // Extracting values from selectedOptions and creating an array
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    const defaultUpdateValues = userWelcomeSkills
      ? userWelcomeSkills.map((options) => options.value)
      : [];

    // Passing the array of selected values to your API or performing any other desired action
    console.log("selectedValues", selectedValues);
    console.log("defaultUpdateValues", defaultUpdateValues);

    // Check if selectedValues is empty, if yes, use defaultUpdateValues
    setWelcomeSkills(
      selectedValues.length > 0 ? selectedValues : defaultUpdateValues
    );
  };

  const [skillsAdding, setSkillsAdding] = useState([]);

  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const handleSubmitWelcomeData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/skillset/add-welcome-dataTo-user-profile`,
        {
          userId,
          skillIds: welcomeSkills,
          projectName: newProject,
          projectSiteUrl: projectLink,

          isBeginner,
        }
      );
      setWelcomeSkills([]);

      setNewProject("");
      setProjectLink("");
      setIsEditMode(false);
      setIsDataSubmitted(true); // Update the state when data is submitted
      console.log("rees", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatetWelcomeData = async () => {
    try {
      console.log("welcomeSkills----->", welcomeSkills);

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/skillset/update-welcome-dataTo-user-profile`,
        {
          userId,
          skillIds: skillsAdding.concat(welcomeSkills), // Combine the two arrays
          projectName: newProject,
          projectSiteUrl: projectLink,

          isBeginner,
        }
      );
      console.log("udpate conso", response);
      setAlert(response?.data?.message);
      setWelcomeSkills([]);

      setNewProject("");
      setProjectLink("");
      setIsEditMode(false);
      setIsDataSubmitted(true); // Update the state when data is submitted
      console.log("rees", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/skillset/get-welcome-data/${userId}`
        );
        console.log("welcomedata", response.data);
        setSubmittedData(response.data);
        setIsDataSubmitted(response.data.welcome_data);
        // setUserWelcomeSkills(response.data.skillIds);
        const skillsArray = response.data.skillIds.map((skill) => ({
          label: skill.name,
          value: skill.id,
        }));
        const projectName = response.data.projects.map(
          (project) => project.project_name
        );

        console.log("project name", projectName[0]);
        const projectLink = response.data.projects.map(
          (projectLink) => projectLink.project_site_url
        );
        setSelectedSkills(skillsArray);
        setUserWelcomeSkills(skillsArray);
        setWelcomeSkills(response.data.existSkillSet);
        setIsBeginner(response.data.beginner);
        setNewProject(projectName[0]);
        setProjectLink(projectLink[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to trigger the fetch operation
  }, []);
  return (
    <>
      {!isDataSubmitted ? (
        // Display the form when data is not submitted

        <>
          <div className="pl-8 mt-4 md:mt-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2"
                checked={isBeginner}
                onChange={handleCheckboxChange}
              />
              <span className="text-m custom-font">
                Are you a complete beginner?
              </span>
            </label>
          </div>
          <div className="pl-6">
            <p className="md:mt-10 custom-font text-start text-sm mt-5">
              show your intrestes* (tell 3 complete this in profile page)
            </p>
            <Select
              className="mt-2 md:mt-2 pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 md:w-[600px] custom-font"
              isMulti
              isSearchable // Enable search functionality
              options={options}
              value={selectedSkills}
              onChange={handleSkillChange}
              styles={{
                // Styles for the selected items
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#FDF4F6", // Change the color to your desired shade
                  color: "white", // Change the text color
                  padding: "4px",
                  marginRight: "8px",
                  borderRadius: "6px",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  fontSize: "0.9rem", // Adjust the font size
                  fontWeight: 600,
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "black", // Change the remove button color
                  ":hover": {
                    backgroundColor: "#fff", // Change the remove button color on hover
                  },
                }),

                // Styles for the dropdown box
                menu: (base) => ({
                  ...base,
                  marginTop: "8px", // Adjust the top margin to increase the height
                }),
                menuList: (base) => ({
                  ...base,
                  maxHeight: "200px", // Adjust the max height to increase the box height
                }),
              }}
            />
          </div>
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
            <div className="flex-col justify-end left-28">
              {/* Display or disable the submit button based on edit mode */}
              <button
                className={`mt-4 bg-blue-500 text-white p-2 rounded md:ml-28 ${
                  isEditMode ? "" : "cursor-not-allowed opacity-50"
                }`}
                onClick={handleSubmitWelcomeData}
              >
                submit
              </button>
            </div>
          </div>
        </>
      ) : (
        // Display the form when data is after submitted

        <>
          <div className="pl-8 mt-4 md:mt-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2"
                checked={isBeginner}
                onChange={handleCheckboxChange}
              />
              <span className="text-m custom-font">
                Are you a complete beginner?
              </span>
            </label>
          </div>
          <div className="pl-6">
            <p className="md:mt-10 custom-font text-start text-sm mt-5">
              show your intrestes* (tell 3 complete this in profile page)
            </p>
            <Select
              className="mt-2 md:mt-2 pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 md:w-[600px] custom-font"
              isMulti
              isSearchable // Enable search functionality
              options={options}
              value={selectedSkills}
              onChange={handleSkillChange}
              styles={{
                // Styles for the selected items
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#FDF4F6", // Change the color to your desired shade
                  color: "red", // Change the text color
                  padding: "4px",
                  marginRight: "8px",
                  borderRadius: "6px",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  fontSize: "0.9rem", // Adjust the font size
                  fontWeight: 600,
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "black", // Change the remove button color
                  ":hover": {
                    backgroundColor: "#fff", // Change the remove button color on hover
                  },
                }),

                // Styles for the dropdown box
                menu: (base) => ({
                  ...base,
                  marginTop: "8px", // Adjust the top margin to increase the height
                }),
                menuList: (base) => ({
                  ...base,
                  maxHeight: "200px", // Adjust the max height to increase the box height
                }),
              }}
            />
          </div>
          <div className="pl-6 mt-0">
            <p
              className="md:mt-10 custom-font text-start mt-5"
              style={{ fontSize: "15px" }}
            >
              Tell us about your projects
            </p>

            {/* Project Details Input */}
            <input
              className="mt-2 md:mt-2 pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full md:max-w-[600px] custom-font bg-pink-50"
              placeholder="Enter project details..."
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
            />

            {/* Project Link Input */}

            <div className="relative mt-4 md:mt-2 w-full md:max-w-[600px]">
              <input
                type="text"
                className="pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full custom-font bg-pink-50"
                placeholder="Project link (optional)"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
              />
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {/* Use the FiLink icon from react-icons */}
                  <FiLink size={20} color="#007BFF" />
                </div>
              </a>
            </div>

            <div className="flex-col justify-end left-28">
              {/* Display or disable the submit button based on edit mode */}
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded md:ml-28 "
                onClick={() => {
                  // Implement your update logic here
                  // You can toggle the form back to edit mode or perform any other desired action
                  setIsEditMode(true);
                  // setIsDataSubmitted(false); // Reset the data submission state
                  handleUpdatetWelcomeData();
                }}
              >
                update
              </button>
            </div>
            {alert && (
              <div className="absolute top-0 left-0 right-0 bg-yellow-200 p-4 text-center">
                <MdRocket className="h-4 w-4 inline-block mr-2" />
                {alert}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default WelcomeProjectDetails;
