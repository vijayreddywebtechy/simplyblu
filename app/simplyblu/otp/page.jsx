'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div className="bg-slate-50 py-5 md:py-8">
      <div className="bg-white rounded-xl page-container py-6 md:py-14">
        <div className="text-center mb-11">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-gray-medium leading-tight mb-3.5">
            Enter One-Time PIN (OTP)
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl font-normal text-gray-medium leading-normal md:max-w-[80%] mx-auto">
            Let’s keep you safe. Please check your phone for your OTP.
          </p>
        </div>
        <div className="border-y border-gray-200 py-6 sm:py-8 px-4 sm:px-6">
          <p className="text-base sm:text-xl font-normal text-gray-light leading-normal mb-6 sm:mb-8">
            Enter the OTP we’ve sent to cellphone number <br />
            +27******997
          </p>

          <div className="mb-6 sm:mb-7 max-w-md mx-auto sm:mx-0">
            <Label className="block mb-1.5">This is for your security</Label>
            <Input
              type="number"
              placeholder="Enter OTP"
              className="w-full sm:max-w-[360px]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:gap-1">
            <Link
              href="/"
              className="text-base font-normal text-primary hover:underline"
            >
              Didn’t get your OTP? Select RESEND.
            </Link>
            <Link
              href="/"
              className="text-base font-normal text-primary hover:underline"
            >
              Call 0860 123 000 (international +27 ***) if the issue persists.
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-12 items-center justify-center">
          <Button
            variant="outline"
            className="text-primary uppercase w-full max-w-[300px] h-10 md:h-12 border-primary hover:text-primary hover:bg-primary/10"
          >
            RESEND
          </Button>
          <Button
            variant="default"
            className="text-white uppercase w-full max-w-[300px] h-10 md:h-12"
            onClick={() => router.push('/simplyblu/submitted')}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
