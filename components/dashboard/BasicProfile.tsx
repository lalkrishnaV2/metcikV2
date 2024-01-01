"use client";

import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { AiOutlineEdit } from "react-icons/ai";

import Image from "next/image";
import { Bar } from "react-chartjs-2";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import { UserDetails } from "@/provider/redux/slices/user/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

const BasicProfileTag: React.FC = () => {
  const dispatch = useDispatch();

  const chartRef = useRef(null);
  // const [profilePercentage, userProfilePercentage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(UserDetails());
        console.log("response", response.payload.data?.user.profileCompletion);
        // setUserName(response.payload.data.user.user_name);
        // userProfilePercentage(response.payload.data?.user.profileCompletion);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const userName = useSelector(
    (state) => state.profile?.successMessage?.user?.user_name
  );

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["tech", "market", "crypto", "NFT"],
          datasets: [
            {
              label: "activity",
              data: [34, 64, 23, 52],
              backgroundColor: "orange",
              borderWidth: 1,
            },
          ],
        },
        options: {
          //responsive: true,
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      chartRef.current.chart = newChart;
    }
  }, []);
  const profilePercentage = useSelector(
    (state) => state.profile?.successMessage?.user?.profileCompletion
  );

  const percentage = profilePercentage; // Set your percentage here

  return (
    <div className="group relative flex justify-center sm:min-w-[140px] sm:h-[300px] sm:max-h-[360px] max-w-[350px] w-full flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:shadow-lg md:min-h-[330px] md:max-w-[360px] md:mb-12">
      <div
        className="flex-center flex-grow bg-gray-100 bg-cover bg-center text-black relative"
        style={{ height: "160px" }}
      >
        <div className="flex flex-col items-center relative left-12">
          {/* Edit Icon */}
          <div className="absolute top-24 bottom-10 right-0 left-44 mr-2">
            <Link href="/profile">
              <AiOutlineEdit size={24} />
            </Link>
          </div>
          {/* Circular Progress Bar */}
          <div className="absolute top-7 left-0 right-0 bottom-9 flex items-center justify-center">
            <CircularProgressbar
              value={percentage}
              // text={`${percentage}%`}
              strokeWidth={8}
              styles={{
                root: {
                  width: "100px", // Set width and height to the same value
                  height: "100px",
                  position: "absolute",
                },
                path: {
                  stroke: "#E0115F", // Pink color
                },
                trail: {
                  stroke: "#dddd",
                },
                text: {
                  fill: "#000",
                  fontSize: "16px", // Increase font size for better visibility
                },
              }}
            />
          </div>
          {/* Profile Image */}

          <div className="relative overflow-hidden rounded-full border-2 border-white mb-2 z-10">
            <Image
              src="/assets/cool-profile-picture-ld8f4n1qemczkrig.jpg"
              alt="Profile"
              height={70}
              width={70}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="top-16 relative right-4 text-xl font-bold custom-font">
          {" "}
          {userName}
        </div>
        <p className="relative top-5 right-6 shadow-md p-0.5 rounded-full bg-slate-100 z-10 text-10 text-sm text-green-800">
          {percentage}%
        </p>
      </div>

      {/* Additional content for each card */}
      <div className="flex sm:h-[120px] md:h-[180px] flex-col gap-3 p-5 md:gap-4 sm:h-70">
        <div className="relative w-72 h-52 sm:h-80" style={{ height: "160px" }}>
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};
export default BasicProfileTag;
