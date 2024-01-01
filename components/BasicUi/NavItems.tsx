"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col itmes-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        console.log("isActive:", isActive);

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-pink-600"
            } flex-center p-medium-16 whitespace-nowrap  transition duration-300 hover:text-pink-600`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
