"use client";

import MarketCard from "@/components/crypto/MarketCard";
import MarketTable from "@/components/crypto/MarketTable";
import Card from "@/components/shared/Card";
import React from "react";

const Market = () => {
  // Sample data for the table
  const data = React.useMemo(
    () => [
      {
        coinName: "Metick stock 1",
        price: 50000,
        totalShare: 1000000,
        highestValue: 55000,
      },
      {
        coinName: "Metick stock 2",
        price: 50000,
        totalShare: 1000000,
        highestValue: 55000,
      },
      {
        coinName: "Metick stock 3",
        price: 50000,
        totalShare: 1000000,
        highestValue: 55000,
      },
      {
        coinName: "Metick stock 4",
        price: 50000,
        totalShare: 1000000,
        highestValue: 55000,
      },
      {
        coinName: "Metick stock 5",
        price: 50000,
        totalShare: 1000000,
        highestValue: 55000,
      },
      // Add more data as needed
    ],
    []
  );

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: "Stock",
        accessor: "coinName", // accessor is the "key" in the data
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Total Share",
        accessor: "totalShare",
      },
      {
        Header: "Highest Value",
        accessor: "highestValue",
      },
      {
        Header: "Lowest",
        accessor: "lowestValue",
      },
      // {
      //   Header: "Graph",
      //   accessor: "graph",
      // },
      {
        Header: "Buy/Sell",
        accessor: "BS",
      },
    ],
    []
  );

  return (
    <>
      <h2 className="text-center h5-semi-bold my-8">
        Learn lessons from Metick Market
      </h2>
      <div className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex-col gap-8 md:gap-12 grid grid-cols-1 md:grid-cols-3 border">
        {/* Left portion */}
        <div className="md:col-span-2 p-4 border border-black flex divide-x divide-black">
          <div className="flex-1 text-center flex flex-col items-start  pr-2 md:pr-0">
            <div className="mb-2 pb-2 border-b mx-auto ">Met 1</div>
            <span className=" rounded-full bg-green-100 text-green-800 p-1 text-xs md:text-sm">
              Buy stock from Metick Market
            </span>
            <ul className="md:mt-8 custom-font md:ml-7">stock name:stock 1</ul>
            <ul className="md:mt-8 custom-font md:ml-10">taken price:200</ul>
          </div>

          <div className="flex-1 text-center flex flex-col items-start md:pl-6">
            <div className="mb-2 pb-2 border-b mx-auto">Met 2</div>
            <span className="text-xs md:text-sm rounded-full bg-green-100 text-green-800 p-1">
              Buy stock from Metick Market
            </span>
            <ul className="md:mt-8 custom-font md:ml-7">stock name:stock 2 </ul>
            <ul className="md:mt-8 custom-font md:ml-10">taken price:150</ul>
          </div>

          <div className="flex-1 text-center flex flex-col items-center">
            <div className="mb-2 pb-2 border-b">Met 3</div>
            <span className="text-xs md:text-sm rounded-full bg-pink-100 text-pink-800 p-1 ">
              Sell stock to Metick Market
            </span>
            <ul className="md:mt-8">stock name:stock 3</ul>
            <ul className="md:mt-8 ">taken price:300</ul>
          </div>
        </div>

        {/* Right portion (fixed width) with added padding to the right and moved to the right side */}
        <div className="md:flex-1 md:w-30 p-4 pr-6 overflow-hidden justify-center items-center ml-7 md:ml-0">
          <div>
            <MarketCard />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-xl transition-all max-w-5xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex justify-center">
        <MarketTable
          columns={columns}
          data={data}
          tableHeader="Metick Market"
        />
      </div>
    </>
  );
};

export default Market;
