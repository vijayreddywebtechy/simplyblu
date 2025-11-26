"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import icnOneOwner from "@/assets/images/icons/icn_one_owner.png";
import icnShareHolder from "@/assets/images/icons/icn_shareholder.png";
import icnBusinessAccount from "@/assets/images/icons/icn_business_account.png";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const page = () => {
  return (
    <div className="bg-gray-50 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="page-container">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <Link href="/" className="flex justify-center items-center mb-6 text-primary text-sm">
            <ChevronLeft className="w-6 h-6 mr-1 text-gray-600 hover:text-gray-800" strokeWidth={1.5} />
            <span>Home</span>
          </Link>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] mb-4 text-secondary">
            SimplyBLU
          </h2>
          <p className="mb-4 text-base sm:text-lg md:text-xl text-gray-700">
            Select the option that best suits your business{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Card 1 - Single Owner */}
          <div className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col">
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src={icnOneOwner}
                  alt="Single Owner"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-secondary leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              Business only has one owner
            </h2>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 sm:mb-3">
                Your business is either a:
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Single member entity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Sole Proprietor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Registered Entity ie. Private Company (PTY LTD) or a Close
                    Corporation (CC)
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-5 sm:mb-6 md:mb-8">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 sm:mb-3">
                What you need:
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Your South African ID
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Business registration number (if you have a registered
                    entity)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Device with a camera to verify your identity through facial
                    recognition
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-auto space-y-2.5 sm:space-y-3 pt-6 sm:pt-8 md:pt-10">
              <Button className="w-full text-sm sm:text-base font-semibold py-3 sm:py-3.5 md:py-4 h-auto">
                GET STARTED
              </Button>
              <Button
                variant="outline"
                className="w-full text-sm sm:text-base font-semibold py-3 sm:py-3.5 md:py-4 h-auto border-2"
              >
                CALL ME BACK
              </Button>
            </div>
          </div>

          {/* Card 2 - Multiple Owners */}
          <div className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col">
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src={icnShareHolder}
                  alt="Single Owner"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-secondary leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              Business has more than one owner or shareholder
            </h2>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 sm:mb-3">
                Your business is either a:
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Multi member entity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Partnership, Trust, non-governmental organisation (NGO),
                    Society or non-profit
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-5 sm:mb-6 md:mb-8">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 sm:mb-3">
                What you need:
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Your South African ID
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Basic personal and business details
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-auto space-y-2.5 sm:space-y-3 pt-6 sm:pt-8 md:pt-10">
              <Button className="w-full text-sm sm:text-base font-semibold py-3 sm:py-3.5 md:py-4 h-auto">
                GET STARTED
              </Button>
              <Button
                variant="outline"
                className="w-full text-sm sm:text-base font-semibold py-3 sm:py-3.5 md:py-4 h-auto border-2"
              >
                CALL ME BACK
              </Button>
            </div>
          </div>

          {/* Card 3 - Open Account */}
          <div className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col">
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src={icnBusinessAccount}
                  alt="Business Account"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-secondary leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              Open a business bank account
            </h2>

            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6">
              You own a business, but{" "}
              <span className="text-blue-600 font-medium">
                don't have a business account
              </span>
            </p>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 sm:mb-3">
                What you get:
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Business account that helps you keep track of your finances
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Bank anywhere, anytime through our Banking App or Internet
                    Banking at no additional cost
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-5 sm:mb-6 md:mb-8">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 sm:mb-3">
                What you need:
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Your South African ID
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Basic personal and business details
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-auto space-y-2.5 sm:space-y-3 pt-6 sm:pt-8 md:pt-10">
              <Button className="w-full text-sm sm:text-base font-semibold py-3 sm:py-3.5 md:py-4 h-auto">
                OPEN ACCOUNT
              </Button>
              <Button
                variant="outline"
                className="w-full text-sm sm:text-base font-semibold py-3 sm:py-3.5 md:py-4 h-auto border-2"
              >
                CALL ME BACK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
