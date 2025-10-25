"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import CustomRadio from "@/components/ui/CustomRadio";
import CustomCheckbox from "../ui/CustomCheckbox";
import Image from "next/image";
import toolTipIcon from "@/public/icons/icn_tooltip.svg";
import visacard from "@/public/img/visa-card.png";
import mastercard from "@/public/img/mastercard.png";
import unionpaycard from "@/public/img/unionpay-card.png";
import dinerscard from "@/public/img/dinersclub-card.png";
import amexcard from "@/public/img/american-express-card.png";
import rcscard from "@/public/img/rcs-card.png";
import receiptIcon from "@/public/icons/icn_receipt.svg";
import LabelWithTooltip from "../ui/CustomLabel";
import { Button } from "@/components/ui/Button";

const ProductSetup = ({ onNext, onBack }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    cardMachine: true,
    merchantApp: true,
  });

  const [purchaseOption, setPurchaseOption] = useState("rent");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState("");

  const machineOptions = ["1", "2", "3", "4", "5"];

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
                <p className="text-sm sm:text-base text-gray-500">
                  Debit card transactions cost 2.50%, credit card transactions 2.50%, and international transactions 2.50% (excluding VAT)
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200 text-center">
                <h4 className="text-lg sm:text-xl font-medium text-gray-400 mb-2">
                  Monthly fee for the SimplyBLU merchant app
                </h4>
                <div className="flex items-baseline justify-center">
                  <sup className="text-base sm:text-lg leading-none text-gray-500 -top-2.5 md:-top-4">R</sup>
                  <span className="text-3xl sm:text-4xl md:text-[42px] font-normal leading-none text-gray-600 ml-1">0.00</span>
                  <sub className="text-xs sm:text-sm ml-1 text-gray-700">(Excl VAT)</sub>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200 text-center">
                <h4 className="text-lg sm:text-xl font-medium text-gray-400 mb-2">
                  Connectivity fee
                </h4>
                <div className="flex items-baseline justify-center">
                  <sup className="text-base sm:text-lg leading-none text-gray-500 -top-2.5 md:-top-4">R</sup>
                  <span className="text-3xl sm:text-4xl md:text-[42px] font-normal leading-none text-gray-600 ml-1">0.00</span>
                  <sub className="text-xs sm:text-sm ml-1 text-gray-700">(Excl VAT)</sub>
                </div>
              </div>

              <p className="text-sm sm:text-base text-secondary text-center">
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
              <LabelWithTooltip
                label="Estimated annual turnover on your card machine(s) and app"
                tooltipText="Add to library"
              />
              <div className="relative">                                                                     
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                  R
                </span>
                <Input type="text" className="pl-7" placeholder="" />
              </div>
            </div>

            {/* Checkboxes */}
            <div>
              <LabelWithTooltip
                label="Please select if you'd like to add a card machine"
                tooltipText="Add to library"
                className="mb-3"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <CustomCheckbox
                  id="terms"
                  name="terms"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  label="I agree to the terms and conditions"
                />
                <CustomCheckbox
                  id="terms2"
                  name="terms2"
                  size="md"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  label="Merchant app"
                />
              </div>
            </div>

            {/* Select + Radio + Card List */}
            {selectedOptions.cardMachine && (
              <>
                <div className="w-full sm:w-3/5">
                  <LabelWithTooltip
                    label="Number of card machines"
                    tooltipText="Add to library"
                    tooltipIcon={toolTipIcon}
                  />
                  <Select onValueChange={setSelectedMachine}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select the number of card machine(s)" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-slate-600">
                      {machineOptions.map((num) => (
                        <SelectItem key={num} value={num}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <LabelWithTooltip
                    label="Would you like to buy or rent your card machine(s)?"
                    tooltipText="Add to library"
                    className="mb-3"
                  />
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <CustomRadio
                      id="rent"
                      name="purchase-option"
                      value="rent"
                      label="Rent"
                      checked={purchaseOption === "rent"}
                      onChange={(e) => setPurchaseOption(e.target.value)}
                    />
                    <CustomRadio
                      id="buy"
                      name="purchase-option"
                      value="buy"
                      label="Buy"
                      checked={purchaseOption === "buy"}
                      onChange={(e) => setPurchaseOption(e.target.value)}
                    />
                  </div>
                </div>

                {/* Card lists */}
                <div>
                  <div className="bg-gray-200 p-4 sm:p-6 rounded-lg">
                    <p className="font-bspro text-xs sm:text-sm font-medium text-gray-500 mb-4">
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
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 max-w-full sm:max-w-[60%]">
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
              <LabelWithTooltip
                label="Company trading name"
                tooltipText="Add to library"
                tooltipIcon={toolTipIcon}
              />
              <Input
                type="text"
                placeholder="Your preferred trading name"
                className="mt-2"
              />
              <p className="text-xs text-gray-400 text-end mt-0.5">0/23</p>
              <div className="flex flex-row items-start mt-3.5 gap-2">
                <Image src={receiptIcon} width={14} height={14} alt="receipt" />
                <p className="text-xs text-gray-500">
                  This trading name will appear on your customer's receipts and
                  bank statements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <Button variant="outline" size="sm" className="border-0 bg-transparent text-primary uppercase hover:bg-blue-100" onClick={onBack}>BACK</Button>
        <Button variant="outline" size="sm" className="border-0 bg-transparent text-primary uppercase hover:bg-blue-100" onClick={onNext}>NEXT</Button>
      </div>
    </div>
  );
};

export default ProductSetup;
