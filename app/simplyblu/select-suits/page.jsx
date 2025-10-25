"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const selectSuits = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/simplyblu/application");
  };

  return (
    <div className="min-h-screen p-4 lg:p-10 bg-gray-100">
      <div className="text-center mb-4 md:mb-6">
        <Link
          href="/simplyblu/application"
          className="inline-flex items-center text-sm text-primary"
        >
          <ChevronLeft className="mr-1 text-gray-500" />
          Home
        </Link>
      </div>

      <div className="text-center mb-10 md:14 lg:mb-16 xl:mb-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4 text-secondary">
          SimplyBLU
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-normal text-secondary leading-normal">
          Select the option that best suits your business
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-[1200px] bg-white rounded-[20px] px-4 py-11">
          <div className="grid md:grid-cols-2 gap-0 max-w-[900px] mx-auto md:border-b border-gray-200 md:pb-10">
            {/* Existing Customer Section */}
            <div className="px-0 pb-10 md:pb-0 sm:px-4 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-200">
              <div className="w-full max-w-[352px] md:mr-auto md:min-h-96 flex flex-col justify-between">
                <h2 className="text-xl sm:text-2xl lg:text-[28px] text-gray-600 text-center mb-7 sm:mb-8 leading-tight">
                  EXISTING STANDARD
                  <br />
                  BANK CUSTOMER
                </h2>

                <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8 px-2">
                  Sign in using your Standard Bank username and password
                </p>
                <Button
                  className="mt-auto mb-4 sm:h-[50px] text-white uppercase"
                  onClick={() => console.log("Clicked!")}
                >
                  SIGN IN
                </Button>

                <p className="text-xs sm:text-sm text-gray-600 text-center px-2">
                  By signing in, I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    T&amp;Cs
                  </a>
                </p>
              </div>
            </div>

            {/* New Customer Section */}
            <div className="px-0 pt-10 md:pt-0 sm:px-4 flex flex-col items-center">
              <div className="w-full max-w-[352px] md:ml-auto md:min-h-96 flex flex-col justify-between">
                <h2 className="text-xl sm:text-2xl lg:text-[28px] text-gray-600 text-center mb-7 sm:mb-8 leading-tight">
                  NEW STANDARD BANK CUSTOMER
                </h2>

                <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8 px-2">
                  Register your Standard Bank online profile by providing a few
                  details and creating a username and password
                </p>

                <Button
                  className="mt-auto mb-4 sm:h-[50px] text-white uppercase"
                  onClick={() => handleRegister()}
                >
                  REGISTER
                </Button>

                <p className="hidden md:block">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default selectSuits;
