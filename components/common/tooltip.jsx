"use client";

import React from "react";
import { cn } from "@/lib/utils";
import infoIcon from "@/public/icons/icn_info.svg";
import Image from "next/image";

const arrowPositionClasses = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-gray-800",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-800",
  left: "left-full top-1/2 -translate-y-1/2 border-l-gray-800",
  right: "right-full top-1/2 -translate-y-1/2 border-r-gray-800",
};
const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Tooltip = ({ text, position = "top" }) => {
  return (
    <div className="relative inline-block group">
      <Image
        src={infoIcon}
        width={16}
        height={16}
        alt="info icon"
        className="cursor-pointer"
      />{" "}
      <div
        className={cn(
          "absolute hidden group-hover:block bg-blue-500 text-white text-sm p-2 rounded-md whitespace-nowrap z-10 shadow-md transition-opacity duration-200 opacity-0 group-hover:opacity-100",
          positionClasses[position]
        )}
      >
        {text}
        <div
          className={cn(
            "absolute w-0 h-0 border-4 border-transparent",
            arrowPositionClasses[position]
          )}
        />
      </div>
    </div>
  );
};

export default Tooltip;
