"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CourseStartModal from "../course/CourseStartModal";
import useGetData from "../hooks/useGetData";

const Card = () => {
  const { responseData, getLoading, getData } = useGetData();
  const [courseDetails, setCourseDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    // Open the modal
    console.log("Card clicked!");

    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    console.log("trigered");
  };

  useEffect(() => {
    getData(`/career/get-course-basic-details`);
  }, []);

  useEffect(() => {
    if (responseData) {
      const data = responseData;
      setCourseDetails(data);
      console.log("data", data);
    }
  }, [responseData]);
  const topicColors = [
    "bg-green-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-purple-100",
  ];

  return (
    <>
      {courseDetails &&
        courseDetails.map((course) => (
          <React.Fragment key={course._id}>
            <CourseStartModal
              isModalOpen={isModalOpen}
              handleModalClose={handleModalClose}
            />
            <div
              className="group relative flex h-[220px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:shadow-lg md:min-h-[250px] md:max-w-[360px] sm:h-[150px] sm:max-h-[150px] "
              onClick={handleCardClick}
            >
              <div
                // href={`/course/:id`}
                style={{
                  backgroundImage: `url(https://www.patterns.dev/img/reactjs/react-logo@3x.svg)`,
                }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
              />
              <div
                // href={`/course/:id`}
                className="flex h-240 sm:h-[100px] md:h-[180px]  flex-col gap-3 p-5 md:gap-4 sm:h-70"
              >
                {" "}
                <div className="flex flex-row gap-2">
                  <Image
                    src="https://imgs.search.brave.com/uHmFTa8yDi_fNk8a7duwgQAHRnPV3dIVl5if60pd3xs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNzMzLzczMzYw/OS5wbmc"
                    alt="no image"
                    height={8}
                    width={28}
                  />
                  <p className="p-medium-16 md:p-medium-20 flex-1 text-gray-800 text-2xl">
                    {course.course_name}{" "}
                  </p>
                </div>
                <div className="flex gap-2">
                  {course.main_topics &&
                    course.main_topics.map((topic, index) => (
                      <span
                        key={index}
                        className={`p-semibold-14 w-min rounded-full px-4 py-1 ${
                          topicColors[index % topicColors.length]
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                </div>
                <p className="p-medium-16 p-medium-18 text-gray-500">
                  {" "}
                  👤coding - 0{" "}
                </p>
                <div className="flex-between w-full">
                  <p className="p-medium-14 md:p-medium-16 text-gray-600">
                    {" "}
                    1 project (10 tasks)
                  </p>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </React.Fragment>
        ))}
    </>
  );
};

export default Card;
