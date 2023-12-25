"use client";
import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import YourComponent from "@/components/home/ChartDummy";
import Header from "@/components/mainPage/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white bg-dotted-pattern bg-contain py-5 md:py-10 h-screen">
          <div className="max-w-7xl lg:mx-auto p-1 md:px-20 xl:px-0 grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:gap-0 mt-6 md:mt-10">
            <div className="flex flex-col justify-center">
              <h1 className="h1-bold md:mb-7">
                Best Solution For Learn Tech-
                <span className="text-pink-600">Fin</span> World
              </h1>
              <p className="p-regular-12 md:p-regular-12 mt-2 md:mt-1">
                Easily rise up your ideas in the fin-tech world with learning
                technology stack.
              </p>
              <Button
                size="lg"
                asChild
                className="button w-full sm:w-fit bg-gradient-to-br from-pink-800 via-pink-500 to-pink-800 mt-4 mx-auto md:mx-auto md:mt-14"
              >
                <Link
                  href="sign-up"
                  className="text-white md:text-xl sm:text-2xl"
                >
                  sign up
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-5 items-center mt-6 md:mt-0 pl-4">
              <div className="card bg-gradient-to-br from-green-500 via-gray-600 to-green-400 rounded w-40 h-32 p-4 md:w-48 md:h-32 md:ml-1 md:mt-4">
                {/* ...Content for the first card */}
                <h1>techonloy</h1>
              </div>
              <div className="card bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 rounded p-4  w-40  h-32 md:w-48 md:h-32 md:mt-4 md:ml-5">
                {/* ...Content for the second card */}
                <h1>Market</h1>
              </div>
              <div className="card bg-gradient-to-br from-gray-700 via-purple-400 to-slate-600 rounded p-4  w-40  h-32 md:w-48 md:h-32 md:mt-4 md:ml-8 ">
                {/* ...Content for the third card */}
                <h1>crypto</h1>
              </div>
              <div className="card bg-gradient-to-br from-purple-500 via-red-400 to-yellow-600 rounded p-4  w-40  h-32 md:w-48 md:h-32 md:mt-4 md:mr-84">
                {/* ...Content for the fourth card */}
                <h1>NFT</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
