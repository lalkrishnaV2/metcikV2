import React from "react";
import Select from "react-select";

const InterestSelect = () => {
  const options: SelectOption[] = [
    { value: "skill1", label: "React" },
    { value: "skill2", label: "Next js" },
    { value: "skill3", label: "Express" },
    { value: "skill3", label: "Express" },
    { value: "skill4", label: "Express" },
    { value: "skill5", label: "Express" },
    { value: "skill6", label: "Express" },
    { value: "skill7", label: "Express" },
    // Add more options as needed
  ];

  const [selectedSkills, setSelectedSkills] = React.useState<SelectOption[]>(
    []
  );

  const handleSkillChange = (selectedOptions: SelectOption[] | null) => {
    setSelectedSkills(selectedOptions || []);
  };
  return (
    <div className="pl-6">
      <p className="md:mt-10 custom-font text-start text-sm mt-5">
        show your intrestes* (tell 3 complete this in profile page)
      </p>
      <Select
        className="mt-2 md:mt-2 pl-0 pr-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 md:w-[600px] custom-font"
        isMulti
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
  );
};

export default InterestSelect;
