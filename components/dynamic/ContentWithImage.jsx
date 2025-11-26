import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dummyImage from "@/assets/images/blocks/dummy_image.png";

const ContentWithImage = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Left Section - 45% */}
      <div
        className="bg-primary-dark text-white flex flex-col justify-center items-start
                  px-6 md:px-10 py-10 md:py-16 
                  md:w-[45%] w-full"
      >
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
          Getting started with SimplyBLU
        </h2>

        <p className="text-base opacity-90">
          Want to know how SimplyBLU works? Our how-to-guide will help.
        </p>

        <Button
          variant="ghost"
          className="mt-5 h-[50px] w-full sm:max-w-60 bg-white text-primary-dark hover:bg-white/90 font-medium"
        >
          DOWNLOAD GUIDE
        </Button>
      </div>

      {/* Right Section - 55% */}
      <div className="relative md:w-[55%] w-full h-64 md:h-auto">
        <Image
          src={dummyImage}
          alt="Getting Started Guide"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ContentWithImage;
