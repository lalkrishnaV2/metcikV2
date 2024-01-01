"use client";

import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";
import {
  MdSearch,
  MdOutlineChat,
  MdNotifications,
  MdPublic,
} from "react-icons/md";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    // router.push("/sign-in");
  };

  return (
    <header className="w-full  text-black">
      <div className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 w-full flex items-center justify-between ">
        <Link href="/" className="w-36">
          {/* <Image src="/sample_logo.jpeg" alt="metick" width={100} height={10} /> */}
          <h1 className="text-pink-600 h3-bold italic">
            me<span className="text-[#0f5e9c]">tick</span>
          </h1>
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs md:ml-32">
          {" "}
          <NavItems />
        </nav>
        <div className="flex w-32 justify-end gap-3 ">
          {/* <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">login</Link>
          </Button> */}
        </div>
        <div className="flex justify-between items-center gap-6 md:mt-2">
          <MdOutlineChat size={23} />
          <MdNotifications size={23} />
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer overflow-hidden rounded-full border-2 border-white mr-5"
            >
              <Image
                src="/assets/cool-profile-picture-ld8f4n1qemczkrig.jpg"
                alt=""
                width={22}
                height={22}
                className="rounded-full"
              />
            </div>
            {isDropdownOpen && (
              <div
                className="absolute top-8 right-0 p-2 bg-white shadow-md rounded-md text-black z-30 transition-opacity-1 w-36"
                // style={{ width: "auto" }}
              >
                {/* Dropdown options */}
                <Link href="/profile">
                  {" "}
                  <p className="cursor-pointer">Your Profile</p>
                </Link>
                <p className="cursor-pointer">Hiring Dashboard</p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    handleLogout();
                    router.push("/sign-in");
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
        <MobileNavItems />
      </div>
    </header>
  );
};

export default Header;
