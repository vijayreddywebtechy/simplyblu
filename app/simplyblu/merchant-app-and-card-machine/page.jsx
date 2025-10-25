"use client";

import React, { useState } from "react";
import Image from "next/image";
import iconTick from "@/public/icons/icn_tick.svg";
import merchantApp from "@/public/img/merchnat-app.png";
import allCards from "@/public/img/all-cards.png";
import cardMachine from "@/public/img/card-machine.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const numClass = "text-[42px] text-secondary";
const numDescClass = "text-xs text-gray-500 uppercase";

const page = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onBackClick = () => {
    router.push("/simplyblu/application");
  };
  return (
    <div className="bg-slate-50 px-3 py-8">
      <div className="bg-white rounded-xl px-3 py-6 lg:p-14 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-secondary leading-tight mb-3.5">
            Merchant app and card machine
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl font-normal text-secondary leading-normal md:max-w-[80%] mx-auto">
            Confirm that the information for your card machine(s) is correct.
            You can download the app on Google Play or Apple Store.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-9">
          {/* Merchant App Card */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-12 sm:h-14 bg-gradient-to-tr from-[#0033A1] to-[#1F59D8]"></div>

            <div className="bg-primary-dark p-4 text-center flex-1 flex flex-col items-center justify-center md:min-h-[400px]">
              <Image
                src={merchantApp}
                width={138}
                height={282}
                className="max-w-full h-auto mb-3"
                alt="merchant app"
              />
              <Image
                src={allCards}
                width={230}
                height={40}
                className="max-w-full h-auto"
                alt="all cards"
              />
            </div>

            <div className="p-5 sm:p-7">
              <h3 className="text-2xl sm:text-3xl font-medium text-secondary text-center">
                Merchant App
              </h3>
            </div>

            <div className="p-5 sm:p-7 bg-slate-200 rounded-xl flex-1 flex flex-col">
              <p className="text-sm sm:text-base text-gray-900 leading-normal mb-4 sm:mb-6">
                Download the SimplyBLU merchant app and register using the
                merchant number provided at the end of your application.
                Transaction fees apply every time you use the app.
              </p>
              <h4 className="text-lg sm:text-xl text-slate-800 mb-4">
                Benefits
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Add products instantly and start selling",
                  "Gain real-time insights to understand your customers needs",
                  "Make quick sales at lightning speed!",
                  "Manage stock, process refunds and more!",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src={iconTick}
                      width={20}
                      height={20}
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      alt="tick"
                    />
                    <p className="text-sm sm:text-base text-gray-500 leading-normal m-0">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Machine Card */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-12 sm:h-14 bg-gradient-to-tr from-[#0033A1] to-[#1F59D8] relative">
              {/* <div
                className="absolute left-0 top-0 px-3 py-0.5 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url(/img/clippath.svg)" }}
              >
                <span className="font-bspro text-xs sm:text-sm text-white leading-tight uppercase tracking-widest">
                  Includes installation
                </span>
              </div> */}
              {/* Orange badge with angled edge */}
              <div className="absolute left-0 top-0 h-full flex">
                <div className="relative bg-gradient-to-r from-orange-600 to-orange-300 h-6 px-4 flex items-center shadow-md">
                  <span className="text-white font-medium text-xs tracking-wider uppercase whitespace-nowrap">
                    Includes Installation
                  </span>
                  {/* Angled cut on the right side - larger and more pronounced */}
                  <div
                    className="absolute top-0 h-full"
                    style={{
                      left: "100%",
                      width: 0,
                      height: 0,
                      borderTop: "0 solid transparent",
                      borderBottom: "24px solid transparent",
                      borderLeft: "28px solid #fdb874",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-primary-dark p-4 text-center flex-1 flex items-center justify-center md:min-h-[400px]">
              <Image
                src={cardMachine}
                width={350}
                height={282}
                className="max-w-full h-auto mx-auto"
                alt="card machine"
              />
            </div>

            <div className="p-5 sm:p-7">
              <h3 className="text-2xl sm:text-3xl font-medium text-secondary text-center">
                Card Machine
              </h3>
            </div>

            <div className="p-5 sm:p-7 bg-slate-200 rounded-xl flex-1 flex flex-col justify-between">
              <div className="mb-3 sm:mb-4">
                <h6 className={numClass}>1</h6>
                <span className={numDescClass}>
                  Number of Card <br /> Machine(S)
                </span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h6 className={numClass}>
                  <sup className="text-lg sm:text-xl -top-3">R</sup> 380
                </h6>
                <span className={numDescClass}>
                  monthly rental fee <br /> per device (excl VAT)
                </span>
              </div>
              <div>
                <h6 className={numClass}>
                  <sup className="text-lg sm:text-xl -top-3">R</sup> 0
                </h6>
                <span className={numDescClass}>
                  monthly Connectivity <br /> Fee Per card Machine(S)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-12 items-center justify-center">
          <Button
            variant="outline"
            className="text-primary uppercase w-full max-w-[300px] sm:h-[50px] border-primary"
            onClick={() => onBackClick()}
          >
            Back
          </Button>
          <Button
            variant="default"
            className="text-white uppercase w-full max-w-[300px] sm:h-[50px]"
            onClick={() => setOpen(true)}
          >
            Confirm
          </Button>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[98%] sm:max-w-3xl overflow-hidden [&>button]:hidden border-none sm:rounded-xl">
          {/* Header */}
          <DialogHeader className="bg-primary-dark -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 px-4 sm:px-6 py-4 relative">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl text-center font-bspro font-normal text-white">
              Sign legal agreements
            </DialogTitle>
            {/* Custom Close Button */}
            <DialogClose asChild>
              <button
                className="p-2 rounded-full hover:bg-blue-500 transition absolute right-3 top-2"
                aria-label="Close dialog"
              >
                <X className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </button>
            </DialogClose>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="max-w-full sm:max-w-[560px] mx-auto max-h-[70vh] overflow-y-auto p-3 sm:p-4 space-y-4">
            <div className="space-y-4 sm:space-y-6 px-1 sm:px-2">
              <h3 className="text-gray-500 text-base sm:text-lg md:text-2xl mb-4 sm:mb-8 leading-snug sm:leading-normal">
                By clicking sign, I (being the duly authorised representative of
                the company):
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-gray-700">•</span>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Confirm that I have read, understood and accept the
                      agreement on behalf of the company
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline text-sm sm:text-base mt-2 inline-block"
                    >
                      SimplyBLU Application information, disclosures and T&Cs
                    </a>
                  </div>
                </li>

                <li className="flex gap-2 sm:gap-3">
                  <span className="text-gray-700">•</span>
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Acknowledge that even though I have accepted the agreement
                      on behalf of the company, it does not mean that the
                      process is finalised. The account application/s will only
                      be submitted for approval once I have successfully
                      completed the web facial recognition process.
                    </p>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Warrant on behalf of the company to the Bank on the date
                      of acceptance of the agreement and for the duration of the
                      agreement that:
                    </p>

                    <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6">
                      {[
                        "I am duly authorised to act on behalf of the company.",
                        "The agreement constitutes valid and binding obligations on the company.",
                        "The account/s are subject to the terms of the agreement.",
                        "The terms of the agreement do not conflict with and are not in breach of the terms of any other agreement, undertaking or act that is binding on the company.",
                        "All information provided to the Bank on behalf of the company in connection with the agreement is accurate, current and complete.",
                        "The company is not in default in respect of any of its obligations in connection with the agreement and no default has occurred.",
                      ].map((text, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-gray-700">•</span>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center mt-4 sm:mt-6 px-4 sm:px-0">
            <Button
              onClick={() => {
                alert("A new tab opens for customer to sign the agreement");
                router.push("/simplyblu/otp");
              }}
              className="text-white w-full max-w-[300px] h-[50px]"
            >
              SIGN
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
