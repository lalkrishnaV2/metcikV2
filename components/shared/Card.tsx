import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="group relative flex h-[220px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:shadow-lg md:min-h-[250px] md:max-w-[360px] sm:h-[150px] sm:max-h-[150px]">
      <Link
        href={`/course/:id`}
        style={{
          backgroundImage: `url(https://www.patterns.dev/img/reactjs/react-logo@3x.svg)`,
        }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
      />
      <Link
        href={`/course/:id`}
        className="flex h-240 sm:h-[100px] md:h-[180px]  flex-col gap-3 p-5 md:gap-4 sm:h-70"
      >
        {" "}
        <p className="p-medium-16 md:p-medium-20 flex-1 text-gray-800 text-2xl">
          React Js module
        </p>
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-800">
            Hooks
          </span>

          <p className="p-semibold-14 w-min rounded-full bg-gray-500/10 px-4 py-1 text-red-500">
            {" "}
            API
          </p>
          <p className="p-semibold-14 w-min rounded-full bg-gray-500/10 px-4 py-1 text-blue-500">
            {" "}
            State
          </p>
        </div>{" "}
        <p className="p-medium-16 p-medium-18 text-gray-500"> 👤coding - 0 </p>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-gray-600">
            {" "}
            1 project (10 tasks)
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
