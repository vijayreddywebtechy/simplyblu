"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import visacard from "@/public/img/visa-card.png";
import mastercard from "@/public/img/mastercard.png";
import unionpaycard from "@/public/img/unionpay-card.png";
import dinerscard from "@/public/img/dinersclub-card.png";
import amexcard from "@/public/img/american-express-card.png";
import rcscard from "@/public/img/rcs-card.png";
import receiptIcon from "@/public/icons/icn_receipt.svg";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "../ui/checkbox";

const ProductSetup = ({ onNext, onBack }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    cardMachine: true,
    merchantApp: true,
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState("");

  const machineOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:py-4">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full lg:p-6 sm:p-4 p-3 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div
              className="text-white py-4 px-6 sm:px-12 w-full rounded-xl"
              style={{
                background:
                  "linear-gradient(112.82deg, #AA0050 3.64%, #FF681D 95.93%)",
              }}
            >
              <h3 className="font-bspro text-lg sm:text-[22px] text-center leading-relaxed mb-4">
                Download the SimplyBLU merchant app on your app store
              </h3>
              <div className="flex items-baseline justify-center">
                <sup className="text-base sm:text-lg leading-none -top-4">R </sup>
                <span className="text-3xl sm:text-[42px] font-normal leading-none"> 0.00</span>
                <sub className="text-xs sm:text-sm ml-1">(Excl VAT & connectivity fee)</sub>
              </div>
            </div>

            <div className="space-y-6 p-4 sm:p-6">
              <div className="pb-4 border-b border-gray-200 text-center">
                <p className="text-sm sm:text-base text-gray-light">
                  Debit card transactions cost 2.50%, credit card transactions 2.50%, and international transactions 2.50% (excluding VAT)
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200 text-center">
                <h4 className="text-lg sm:text-xl font-medium text-gray-light mb-2">
                  Monthly fee for the SimplyBLU merchant app
                </h4>
                <div className="flex items-baseline justify-center">
                  <sup className="text-base sm:text-lg leading-none text-gray-medium -top-2.5 md:-top-4">R</sup>
                  <span className="text-3xl sm:text-4xl md:text-[42px] font-normal leading-none text-gray-medium ml-1">0.00</span>
                  <sub className="text-xs sm:text-sm ml-1 text-gray-medium">(Excl VAT)</sub>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200 text-center">
                <h4 className="text-lg sm:text-xl font-medium text-gray-light mb-2">
                  Connectivity fee
                </h4>
                <div className="flex items-baseline justify-center">
                  <sup className="text-base sm:text-lg leading-none text-gray-medium -top-2.5 md:-top-4">R</sup>
                  <span className="text-3xl sm:text-4xl md:text-[42px] font-normal leading-none text-gray-medium ml-1">0.00</span>
                  <sub className="text-xs sm:text-sm ml-1 text-gray-medium">(Excl VAT)</sub>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-light text-center">
                This excludes your SimplyBLU commission fee. <br />
                The total will be charged on your business account.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full py-4 px-4 sm:px-6">
          <div className="space-y-6">
            {/* Input */}
            <div className="w-full sm:w-3/5">
              <Label className="inline-flex mb-1.5">Estimated annual turnover on your card machine(s) and app</Label>
              <div className="relative">                                                                     
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                  R
                </span>
                <Input type="text" className="pl-7" placeholder="" />
              </div>
            </div>

            {/* Checkboxes */}
            <div>
              <Label className="block mb-3">Please select if you'd like to add a card machine</Label>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">I agree to the terms and conditions</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="app" />
                <Label htmlFor="app" className="text-sm">Merchant app</Label>
              </div>
              </div>
            </div>

            {/* Select + Radio + Card List */}
            {selectedOptions.cardMachine && (
              <>
                <div className="w-full sm:w-3/5">
                  <Label className="inline-flex mb-1.5">Number of card machines</Label>
                  <CustomReactSelect
                    instanceId="product-machine-count"
                    value={machineOptions.find((opt) => opt.value === selectedMachine)}
                    onChange={(selectedOption) => setSelectedMachine(selectedOption?.value || "")}
                    options={machineOptions}
                    placeholder="Select the number of card machine(s)"
                  />
                </div>

                <div>
                  <Label className="block mb-3">Would you like to buy or rent your card machine(s)?</Label>
                  <RadioGroup defaultValue="comfortable" className="flex mt-2.5 gap-5">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="text-sm">Rent</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2" className="text-sm">Buy</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Card lists */}
                <div>
                  <div className="bg-gray-200 p-4 sm:p-6 rounded-lg">
                    <p className="font-bspro text-xs sm:text-sm font-medium text-gray-light mb-4">
                      Your card machine can accept the following card types:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:max-w-[80%]">
                      {[visacard, mastercard, unionpaycard, dinerscard].map(
                        (img, i) => (
                          <div
                            key={i}
                            className="py-2.5 px-4 rounded-xl bg-white flex items-center justify-center shadow-sm"
                          >
                            <Image
                              src={img}
                              width={60}
                              height={30}
                              alt="Card"
                              className="object-contain"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-200 p-4 sm:p-6 rounded-lg mt-4">
                    <p className="text-xs sm:text-sm text-gray-light mb-4 max-w-full sm:max-w-[60%]">
                      <span className="font-medium">
                        The card types below can also be accepted on your card
                        machine.
                      </span>{" "}
                      Please contact the vendors directly using their contact
                      information provided at the end of your application.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:max-w-[80%]">
                      {[amexcard, rcscard].map((img, i) => (
                        <div
                          key={i}
                          className="py-2.5 px-4 rounded-xl bg-white flex items-center justify-center shadow-sm"
                        >
                          <Image
                            src={img}
                            width={60}
                            height={40}
                            alt="Card"
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Company Trading Name */}
            <div className="w-full sm:w-3/5">
              <Label className="inline-flex mb-1.5">Company trading name</Label>
              <Input
                type="text"
                placeholder="Your preferred trading name"
              />
              <p className="text-xs text-gray-400 text-end mt-0.5">0/23</p>
              <div className="flex flex-row items-start mt-3.5 gap-2">
                <Image src={receiptIcon} width={14} height={14} alt="receipt" />
                <p className="text-xs text-gray-light">
                  This trading name will appear on your customer's receipts and
                  bank statements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 bg-slate-50 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200">
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 w-full sm:w-auto" onClick={onBack}>BACK</Button>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 w-full sm:w-auto" onClick={onNext}>NEXT</Button>
      </div>
    </div>
  );
};

export default ProductSetup;
