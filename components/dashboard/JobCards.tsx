import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaDesktop,
  FaUser,
  FaDollarSign,
  FaSuitcase,
} from "react-icons/fa";

const JobCards = () => {
  // Sample data for six cards
  const cardData = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    jobPosition: "Job Position",
    companyName: "Metick",
    companyImage: "/sample_logo.jpeg", // Replace with the actual path
    place: "City, Country",
    experience: "2-5 years",
    jobType: "Full-Time",
    remote: true,
    postedBy: "John Doe",
    salary: "10000-20000",
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:min-h-[400px] md:min-w-[1200px] mb-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-md flex flex-col"
        >
          {/* Job Position and Company Name */}
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <p className="text-lg font-bold mb-1 ">{card.jobPosition}</p>
              <p>{card.companyName}</p>
            </div>
            {/* Square image for the company */}
            <div className="ml-4 custom-font">
              <Image
                src={card.companyImage}
                alt={`${card.companyName} Logo`}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
          </div>
          {/* Additional Information */}
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              {/* Location icon */}
              <div className="flex items-center custom-font md:text-sm md:mb-1">
                <FaMapMarkerAlt className="mr-2" style={{ color: "red" }} />
                <p>{card.place}</p>
              </div>
              {/* Experience icon */}
              <div className="flex items-center custom-font md:text-sm">
                <FaDesktop className="mr-2 " />
                <p>{card.experience}</p>
              </div>
            </div>
            <div className=" custom-font md:text-sm md:mb-1">
              <p className=" md:mb-1">{card.jobType}</p>
              <p>{card.remote ? "Remote" : "In-Office"}</p>
            </div>
          </div>
          {/* Person symbol and posted by */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaUser className="mr-2" style={{ color: "#4169E1" }} />
              <p>{card.postedBy}</p>
            </div>
            {/* Suitcase icon for salary */}
            <div className="flex items-center md:text-sm">
              <FaSuitcase className="mr-2 " style={{ color: "green" }} />
              <p className="text-right">{card.salary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
