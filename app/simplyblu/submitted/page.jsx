import React from "react";
import Image from "next/image";
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
import qrCode from "@/public/img/qr-code.png";
import appGallery from "@/public/img/app-gallery.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

const numClass = "text-3xl sm:text-4xl lg:text-[42px] text-gray-medium";
const numDescClass = "text-xs text-gray-light uppercase leading-tight";

const page = () => {
  return (
        <div className="bg-slate-50 px-3">
      <div className="w-full max-w-7xl mx-auto py-5 sm:py-14">
        <div className="flex flex-col justify-center items-center bg-green-700/10 py-10 px-4 rounded-md">
          <CircleCheck
            size={80}
            className="text-green-700 mb-10 border-[6px] border-green-700/20 rounded-full"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-medium mb-4 text-center">
            Application submitted
          </h1>
          <div className="flex items-center gap-2">
            <Image src={infoIcon} width={16} height={16} alt="info" />
            <p className="text-sm sm:text-base lg:text-xl font-normal text-gray-medium">
              Please log in to complete setting up the product
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={infoIcon} width={16} height={16} alt="info" />
            <p className="text-sm sm:text-base lg:text-xl font-normal text-gray-medium">
              Your delivery will be processed after 48 hours
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch my-8 lg:my-14">
          {/* SimplyBLU Pro */}
          <div className="rounded-xl overflow-hidden shadow-xl w-full lg:w-1/2">
            <div className="font-bspro text-xl sm:text-2xl lg:text-[28px] leading-normal text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-tr from-[#0033A1] to-[#1F59D8]">
              SimplyBLU Pro
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
                1999
              </h6>
              <span className={`${numDescClass} mt-1 inline-block`}>
                once off purchase fee<br />
                R40 Monthly connectivity fee per card machine (excl. vat)
              </span>
            </div>
          </div>

          {/* SimplyBLU Pocket */}
          <div className="rounded-xl overflow-hidden shadow-xl w-full lg:w-1/2">
            <div className="font-bspro text-xl sm:text-2xl lg:text-[28px] leading-normal text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-tr from-[#0033A1] to-[#1F59D8]">
              SimplyBLU Pocket
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
                1299
              </h6>
              <span className={`${numDescClass} mt-1 inline-block`}>
                once off purchase fee<br />
                R40 Monthly connectivity fee per card machine (excl. vat)
              </span>
            </div>
          </div>

        </div>
        <div className="bg-white flex flex-col md:flex-row justify-between gap-4 py-9 px-6 sm:px-8 lg:px-10 rounded-xl items-center">
          <div>
            <h2 className="text-2xl md:text-4xl text-gray-medium mb-4">
              Download the SimplyBLU Merchant App
            </h2>
            <p className="text-sm md:text-base text-gray-medium mb-4">
              Your merchant number is <strong>2738920184</strong> and will be
              sent to you by email. You can use it to access the app.
            </p>
            <p className="text-sm md:text-base text-gray-medium">
              Complete the setup faster on your mobile. Scan this QR or click
              the link below
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6"> 
              <Link href="/">
                <Image src={appStore} width={84} height={27} alt="app store" />
              </Link>
              <div className="h-6 w-0.5 bg-gray-200"></div>
              <Link href="/">
                <Image
                  src={googlePlay}
                  width={84}
                  height={27}
                  alt="google play"
                />
              </Link>
              <div className="h-6 w-0.5 bg-gray-200"></div>
              <Link href="/">
                <Image
                  src={appGallery}
                  width={84}
                  height={27}
                  alt="app gallery"
                />
              </Link>
            </div>
          </div>
          <div>
            <Image src={qrCode} width={270} height={270} alt="QR code" />
          </div>
        </div>
        <Button
          variant="default"
          className="uppercase w-full max-w-[300px] sm:h-[50px] block mt-6 md:mt-12 mx-auto h-10 md:h-12"
        >
          Sign in to business banking
        </Button>
      </div>
    </div>
  );
};

export default page;
