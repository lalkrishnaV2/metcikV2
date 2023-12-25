"use client";

import MarketCard from "@/components/crypto/MarketCard";
import BasicProfileTag from "@/components/dashboard/BasicProfile";
import DataAdviseCardCurosel from "@/components/dashboard/DataAdviseCardCurosel";
import JobCards from "@/components/dashboard/JobCards";
import BottomToTopCarousel from "@/components/shared/DashboardCardCurosel";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import InterestSelect from "@/components/dashboard/InterestSelect";
import WelcomeProjectDetails from "@/components/dashboard/WelcomeProjectDetails";

interface SelectOption {
  value: string;
  label: string;
}
const Dashboard = () => {
  return (
    <>
      <div className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex-col gap-8 md:gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Left portion for small screens and medium screens */}
        <div className="md:col-span-2">
          <div className="p-4 border bg-slate-100 divide-x divide-black max-w-[900px] md:max-h-[550px]">
            <div className="text-center flex flex-col items-start">
              {/* here the data */}
              <p className="md:h2-bold mt-4 md:mt-4 text-gray-800 custom-font md:ml-6 sm:text-2xl text-2xl pl-6 md:pl-0 md:text-xl font-semibold">
                Welcome, Mahin shams
              </p>

              <p className="md:mt-2 pl-8  md:pl-9 mt-3 italic text-green-800">
                Get started to achieve your lookin' ⚡
              </p>

              <div className="pl-8 mt-4 md:mt-8">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 mr-2" />
                  <span className="text-m custom-font">
                    Are you a complete beginner?
                  </span>
                </label>
              </div>

              {/* Use react-select for the dropdown */}
              <div className="sm:col-span-2 md:col-span-1 mt-4 ">
                <InterestSelect />
                <WelcomeProjectDetails />
              </div>
            </div>
          </div>
        </div>

        {/* Right portion (fixed width) for small screens */}
        <div className="flex-1  w-30 p-0 pr-6  overflow-hidden pl-6 md:pl-0">
          <div className="sm:grid-cols-1 sm:justify-center">
            <BasicProfileTag />
          </div>
          <div className="sm:grid-cols-1 mt-6">
            <DataAdviseCardCurosel />
          </div>
        </div>

        {/* Section for large screens */}
        <section className="md:col-span-3">
          <div className="border rounded-md p-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:ml-4">
              <h1 className="h2-bold mb-4 md:mb-0">Find Job</h1>
              <div className="flex items-center flex-col md:flex-row">
                <div className="relative mb-4 md:mb-0 md:mr-4">
                  <input
                    type="text"
                    placeholder="Search job"
                    className="py-2 px-3 rounded-md border focus:outline-none focus:border-blue-500"
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-4 bg-blue-500 text-white rounded-r-md">
                    Search
                  </button>
                </div>
                <label className="flex items-center md:ml-4 md:border-none">
                  <input type="checkbox" className="mr-2" />
                  Non-code Jobs
                </label>
              </div>
            </div>
            <div className="md:mt-10">
              <JobCards />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
