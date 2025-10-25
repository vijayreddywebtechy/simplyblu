import React from "react";
import Image from "next/image";
import successIcon from "@/public/icons/icn_success.png";
import infoIcon from "@/public/icons/icn_info.svg";
import merchantApp from "@/public/img/mearchant-app2.png";
import cardMachine from "@/public/img/card-machine2.png";
import googlePlay from "@/public/img/google-play.png";
import appStore from "@/public/img/app-store.png";
import americanExp from "@/public/img/american-express.svg";
import rcs from "@/public/img/rcs-card.svg";
import visaCard from "@/public/img/visa-card.svg";
import masterCard from "@/public/img/mastercard.svg";
import unionPay from "@/public/img/unionpay.svg";
import dinersClub from "@/public/img/diners-pay.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const numClass = "text-3xl sm:text-4xl lg:text-[42px] text-secondary";
const numDescClass = "text-xs text-gray-500 uppercase leading-tight";

const page = () => {
  return (
    <div className="px-3">
      <div className="w-full max-w-7xl mx-auto py-5 sm:py-14">
        <Image
          src={successIcon}
          width={54}
          height={54}
          alt="success"
          className="mb-4 sm:mb-6 md:mb-8 xl:mb-12 mx-auto"
        />
        <h1 className="font-bspro text-xl sm:text-2xl md:text-3xl text-secondary mb-4 text-center">
          Application submitted
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Image src={infoIcon} width={16} height={16} alt="info" />
            <p className="text-sm sm:text-base lg:text-xl font-normal text-secondary">
              Please log in to complete setting up the product
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <Image src={infoIcon} width={16} height={16} alt="info" />
            <p className="text-sm sm:text-base lg:text-xl font-normal text-secondary">
              Your delivery will be processed after 48 hours
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch my-8 lg:my-14">
          {/* Merchant app & card machine */}
          <div className="rounded-xl overflow-hidden shadow-xl w-full lg:w-1/2">
            <div className="font-bspro text-xl sm:text-2xl lg:text-[28px] leading-normal text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-tr from-[#0033A1] to-[#1F59D8]">
              Merchant app & card machine
            </div>
            <div className="bg-primary flex flex-row items-center justify-center sm:justify-start pr-4 sm:pr-8 py-4 sm:py-0">
              <Image
                src={cardMachine}
                width={387}
                height={379}
                alt="card machine"
                className="w-1/2 sm:w-auto max-w-[200px] sm:max-w-[300px] lg:max-w-full h-auto"
              />
              <Image
                src={merchantApp}
                width={114}
                height={230}
                className="w-1/4 sm:w-auto max-w-[80px] sm:max-w-[100px] lg:max-w-full h-auto"
                alt="mobile app"
              />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-white">
              <h6 className={numClass}>
                <sup className="text-base sm:text-lg lg:text-xl -top-3 lg:-top-4">
                  R
                </sup>{" "}
                390
              </h6>
              <span className={`${numDescClass} mt-1 inline-block`}>
                monthly rental fee <br />
                per device (excl vat)
              </span>
            </div>
          </div>

          {/* Download app section */}
          <div className="rounded-xl overflow-hidden shadow-xl w-full lg:w-2/3">
            <div className="font-bspro text-xl sm:text-2xl lg:text-[28px] leading-normal text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-slate-500">
              Download the SimplyBLU Merchant App
            </div>
            <div className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-slate-100 h-full">
              <p className="font-bspro text-xs sm:text-sm font-normal text-gray-500 mb-4">
                Your merchant number is{" "}
                <span className="font-bspro text-sm sm:text-base font-bold text-gray-850">
                  2738920184
                </span>{" "}
                and will be sent to you by email. You can now use it to access
                the app
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mt-3 mb-6 sm:mb-8">
                <Link href={"/"}>
                  <Image
                    src={googlePlay}
                    width={156}
                    height={46}
                    alt="google play"
                    className="w-36 sm:w-40 h-auto"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={appStore}
                    width={156}
                    height={46}
                    alt="app store"
                    className="w-36 sm:w-40 h-auto"
                  />
                </Link>
              </div>

              <p className="font-bspro text-xs sm:text-sm font-medium text-gray-500 mb-2">
                Your card machine also accepts American Express and RCS.
              </p>
              <p className="font-bspro text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
                To set this up, contact these providers.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-5 sm:mb-7">
                <div className="bg-white rounded-md p-3 flex items-center gap-2 justify-center sm:justify-start border border-gray-200">
                  <Image
                    src={americanExp}
                    width={42}
                    height={24}
                    alt="american express"
                    className="w-8 sm:w-10 h-auto"
                  />
                  <div>
                    <p className="font-bspro text-xs text-secondary">
                      080 016 0992
                    </p>
                    <span className="font-bspro text-[9px] text-secondary block">
                      Customer service
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-md p-3 flex items-center gap-2 justify-center sm:justify-start border border-gray-200">
                  <Image
                    src={rcs}
                    width={42}
                    height={24}
                    alt="RCS"
                    className="w-8 sm:w-10 h-auto"
                  />
                  <div>
                    <p className="font-bspro text-xs text-secondary">
                      0861 729 727
                    </p>
                    <span className="font-bspro text-[9px] text-secondary block">
                      Customer service
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-bspro text-xs sm:text-sm font-medium text-gray-500 mb-3">
                Your card machine can accept the following card types:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                <Image
                  src={visaCard}
                  width={136}
                  height={66}
                  alt="visa"
                  className="w-full h-auto"
                />
                <Image
                  src={masterCard}
                  width={136}
                  height={66}
                  alt="master card"
                  className="w-full h-auto"
                />
                <Image
                  src={unionPay}
                  width={136}
                  height={66}
                  alt="union pay"
                  className="w-full h-auto"
                />
                <Image
                  src={dinersClub}
                  width={136}
                  height={66}
                  alt="diners club"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="default"
          className="text-white uppercase w-full max-w-[300px] sm:h-[50px] block mx-auto"
        >
          Sign in to business banking
        </Button>
      </div>
    </div>
  );
};

export default page;
