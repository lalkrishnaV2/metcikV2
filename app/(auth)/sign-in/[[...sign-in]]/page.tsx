"use client";

import Link from "next/link";
import "react-phone-number-input/style.css";

export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    console.log("Login submitted!");
  };

  return (
    <>
      <title>Metick Login</title>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white border rounded p-8 shadow-md w-full max-w-md">
          <Link href="/">
            <h1 className="text-pink-600 h2-bold italic text-center md:mb-5">
              me<span className="text-[#41b8eb]">tick</span>
            </h1>
          </Link>
          <form onSubmit={handleSubmit}>
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
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-pink-800 via-pink-500 to-pink-800 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <p className="text-center mt-3">
              Don't have an account? <Link href="/sign-up">Sign up</Link>
            </p>
            <p className="text-center mt-2 text-sm">
              <Link href="/forgot-password" className="text-blue-500">
                Forgot Password?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
