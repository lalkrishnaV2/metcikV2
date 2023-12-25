"use client";

import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <>
      <title>Metick Sign Up</title>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white border rounded p-8 shadow-md w-full max-w-md">
          <Link href="/">
            <h1 className="text-pink-600 h2-bold italic text-center md:mb-5">
              me<span className="text-[#41b8eb]">tick</span>
            </h1>
          </Link>
          {/* <h1 className="text-2xl font-semibold mb-6">Sign Up</h1> */}
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Full name"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="userName"
                name="userName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <PhoneInput
                international
                defaultCountry="US"
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Phone number"
                // style={{
                //   inputStyle: {
                //     color: "blue", // Customize the text color
                //     // Add any other input styles
                //   },
                //   // Add any other styles for the PhoneInput component
                // }}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-pink-800 via-pink-500 to-pink-800 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
            <p className="text-center p-3">
              {" "}
              do you already have an account?<a href="/sign-in"> login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
