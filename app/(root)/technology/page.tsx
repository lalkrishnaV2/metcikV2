import Card from "@/components/BasicUi/Card";
import React from "react";

const Technology = () => {
  return (
    <section className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex flex-col gap-8 items-center md:items-start ">
      <div className="flex  itmes-center justify-center md:items-end md:justify-end w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search job"
            className="py-2 px-3 rounded-md border md:border-pink-200 focus:outline-none focus:border-pink-500"
          />
          <button className="absolute right-0 top-0 bottom-0 px-4 bg-blue-500 text-white rounded-r-md">
            Search
          </button>
        </div>
      </div>
      <h2 className="h3-bold">Beginner setup</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 - md:min-h-[300px] md:min-w-[1200px] ">
        <Card />
      </div>
      <h2 className="h3-bold gap-0">
        Explore and Rise up <br /> your stack skills
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:min-h-[400px] md:min-w-[1200px] mb-4 md:mb-14">
        {" "}
        {/* 
          Use md:flex-nowrap to ensure cards are in a row for md screens,
          overflow-x-auto enables horizontal scrolling for sm screens
        */}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Technology;
