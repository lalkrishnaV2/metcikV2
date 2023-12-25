import Card from "@/components/shared/Card";
import React from "react";

const Technology = () => {
  return (
    <section className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex flex-col gap-8 items-center md:items-start ">
      <h2 className="h3-bold">Beginner setup</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 - md:min-h-[300px] md:min-w-[1200px] ">
        <Card />
      </div>
      <h2 className="h3-bold gap-0">
        Explore and Rise up <br /> your stack skills
      </h2>
      <div className="flex w-full flex-col gap-5 md:flex-row text-center">
        {/* Add your search component here */}serach
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:min-h-[400px] md:min-w-[1200px] mb-4 md:mb-14">
        {" "}
        {/* 
          Use md:flex-nowrap to ensure cards are in a row for md screens,
          overflow-x-auto enables horizontal scrolling for sm screens
        */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Technology;
