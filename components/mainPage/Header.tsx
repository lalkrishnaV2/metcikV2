import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import TopBarItems from "./TopBarItems";
import MobileBarItems from "./MobileBarItems";

const Header = () => {
  return (
    <header className="w-full  text-black bg-gradient-to-r from-gray-900 via-gray-800 to-black md:py-3 text-white">
      <div className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 w-full flex items-center justify-between ">
        <Link href="/" className="w-36">
          {/* <Image src="/sample_logo.jpeg" alt="metick" width={100} height={10} /> */}
          <h1 className="text-pink-600 h2-bold italic">
            me<span className="text-white">tick</span>
          </h1>
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs">
          {" "}
          <TopBarItems />
        </nav>
        <div className="flex w-32 justify-end gap-3 ">
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">login</Link>
          </Button>
          <MobileBarItems />
        </div>
      </div>
    </header>
  );
};

export default Header;
