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
import TopBarItems from "./TopBarItems";
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const MobileBarItems = () => {
  return (
    <nav className="md-hidden">
      <Sheet>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetTrigger asChild>
          <Image
            src="/assets/menu.svg"
            alt="menu"
            width={52}
            height={52}
            className="cursor-pointer"
            style={{ marginTop: 7, marginRight: 32 }}
          />
          {/* <Button variant="outline">{"top"}</Button> */}
        </SheetTrigger>
        <SheetContent
          className="w-[400px] sm:w-[540px] flex flex-col gap-6 bg-white md:hidden"
          side={"top"}
        >
          <h3 className="">metick</h3>
          <Separator />
          <TopBarItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileBarItems;
