import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 w-full flex-between flex flex-col gap-4 p-1 text-center sm:flex-row">
        <Link href="/">
          <h1>metick</h1>
        </Link>
        <p> 2023 Metick. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
