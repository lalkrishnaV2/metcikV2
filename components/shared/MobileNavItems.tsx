"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import NavItems from "./NavItems";
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const MobileNavItems = () => {
  return (
    <nav className="md-hidden">
      <Sheet>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetTrigger asChild>
          <Image
            src="/assets/menu_black.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          {/* <Button variant="outline">{"top"}</Button> */}
        </SheetTrigger>
        <SheetContent
          className="w-[200px] sm:w-[100px] flex flex-col gap-2 bg-white md:hidden"
          side={"right"}
        >
          <h3 className="">metick</h3>
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavItems;
