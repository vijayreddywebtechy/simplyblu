"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import visacard from "@/public/img/visa-card.png";
import mastercard from "@/public/img/mastercard.png";
import unionpaycard from "@/public/img/unionpay-card.png";
import dinerscard from "@/public/img/dinersclub-card.png";
import amexcard from "@/public/img/american-express-card.png";
import rcscard from "@/public/img/rcs-card.png";
import receiptIcon from "@/public/icons/icn_receipt.svg";
import iconInfo from "@/public/icons/icn_info.svg";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import infoIcon from "@/public/icons/icn_info.svg";
import cardMachineImg from "@/public/img/cardmachine.png";
import pocketMachineImg from "@/public/img/pocketmachine.png";
import merchantAppImg from "@/public/img/merchantapp.png";
import Link from "next/link";

const ProductSetup = ({ onNext, onBack }) => {
  const [revenue, setRevenue] = useState("");
  const [tradingName, setTradingName] = useState("");
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedPaymentSolution, setSelectedPaymentSolution] = useState("");
  const [purchaseOption, setPurchaseOption] = useState("buy");

  const machineOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];

  const paymentSolutions = [
    {
      id: "pro",
      label: "SimplyBLU Pro Card Machine",
      description: "Smart. Seamless. Ready to scale with your business.",
      rental: "R 380",
      purchase: "R 1999*",
      rentalLabel: "Card machine rental (excl. VAT)",
      purchaseLabel: "Card machine purchase price (excl. VAT)"
    },
    {
      id: "pocket",
      label: "SimplyBLU Pocket Card Machine",
      description: "Mobile. Portable. Trade anywhere.",
      rental: "R 199",
      purchase: "R 1299",
      rentalLabel: "Card machine rental (excl. VAT)",
      purchaseLabel: "Card machine purchase price (excl. VAT)"
    },
    {
      id: "classic",
      label: "SimplyBLU Classic Card Machine",
      description: "Description",
      rental: "R 0",
      purchase: "R 0",
      rentalLabel: "Card machine rental (excl. VAT)",
      purchaseLabel: "Card machine purchase price (excl. VAT)"
    }
  ];

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="lg:w-1/2 w-full p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="space-y-6">
            {/* Estimated Revenue */}
            <div>
              <Label className="block mb-1.5">
                Estimated monthly revenue on your card machine(s) and app
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-medium text-base">
                  R
                </span>
                <Input
                  type="text"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="pl-7"
                  placeholder="7000.00"
                />
              </div>
            </div>

            {/* Company Trading Name */}
            <div>
              <Label className="block mb-1.5">
                Company trading name
                <Image src={infoIcon} width={14} height={14} alt="info" className="inline-block ml-1.5" />
              </Label>
              <Input
                type="text"
                value={tradingName}
                onChange={(e) => setTradingName(e.target.value)}
                placeholder="Ukim Tribe"
              />
              <p className="text-xs text-gray-400 text-end mt-1">0/23</p>
              <div className="flex items-start gap-2 mt-3 py-3">
                <Image src={receiptIcon} width={14} height={14} alt="receipt" className="mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-light">
                  This trading name will appear on your customer's receipts and bank statements
                  <Link href="#" className="text-primary underline ml-1">Learn more</Link>
                </p>
              </div>
              <div className="flex items-start gap-2 mt-3 py-3">
                <Image src={iconInfo} width={20} height={20} alt="info" className="mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-light">Rent a card machine and enjoy free maintenance, onsite support, replacements, and upgrades – at no extra cost
                  <br /><Link href="/" className="text-primary ml-1">*T&Cs apply</Link>
                </p>
              </div>
            </div>

            {/* Rent or Buy */}
            <div>
              <Label className="block mb-3">
                Do you want to rent or buy your card machine(s)?
              </Label>
              <RadioGroup value={purchaseOption} onValueChange={setPurchaseOption} className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="buy" id="buy" />
                  <Label htmlFor="buy" className="text-sm font-normal cursor-pointer">Buy</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="rent" id="rent" />
                  <Label htmlFor="rent" className="text-sm font-normal cursor-pointer">Rent</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Solutions */}
            <div className="space-y-4">
              <RadioGroup value={selectedPaymentSolution} onValueChange={setSelectedPaymentSolution}>
                {paymentSolutions.map((solution) => (
                  <div
                    key={solution.id}
                    className={`border rounded-xl p-3 sm:p-4 my-5 cursor-pointer transition-all relative ${
                      selectedPaymentSolution === solution.id
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedPaymentSolution(solution.id)}
                  >
                <div className="absolute -top-3 left-0 min-w-28 sm:min-w-36 bg-primary-dark text-white text-xs px-2 sm:px-3 py-0.5 rounded-br-xl">
                  Payment solution
                </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-2 flex-1">
                        {solution.id === "pro" && (
                          <div className="w-16 h-20 sm:w-24 sm:h-32 rounded flex items-center justify-center flex-shrink-0">
                            <Image src={cardMachineImg} width={96} height={128} alt="Card Machine" className="object-contain w-full h-full" />
                          </div>
                        )}
                        {solution.id === "pocket" && (
                          <div className="w-16 h-20 sm:w-24 sm:h-32 rounded flex items-center justify-center flex-shrink-0">
                            <Image src={pocketMachineImg} width={96} height={128} alt="Pocket Machine" className="object-contain w-full h-full" />
                          </div>
                        )}
                        {solution.id === "classic" && (
                          <div className="w-16 h-20 sm:w-24 sm:h-32 rounded flex items-center justify-center flex-shrink-0">
                            <Image src={cardMachineImg} width={96} height={128} alt="Card Machine" className="object-contain w-full h-full" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-bspro text-sm sm:text-base font-medium text-gray-dark mb-1 sm:mb-2">
                            {solution.label}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-medium mb-3 sm:mb-6">
                            {solution.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-7">
                            <div>
                              <p className="text-sm sm:text-base font-medium text-gray-dark">{solution.rental}</p>
                              <p className="text-xs text-gray-light">{solution.rentalLabel}</p>
                            </div>
                            <div>
                              <p className="text-sm sm:text-base font-medium text-gray-dark">{solution.purchase}</p>
                              <p className="text-xs text-gray-light">{solution.purchaseLabel}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <RadioGroupItem
                        value={solution.id}
                        id={solution.id}
                        className="mt-1"
                      />
                    </div>
                  </div>
                ))}
              </RadioGroup>

              {/* Added Bonus - Merchant App */}
              <div className="border border-gray-300 hover:border-gray-400 rounded-xl p-3 sm:p-4 relative">
                <div className="absolute -top-3 left-0 min-w-28 sm:min-w-36 bg-gradient-to-b from-[#FFC700] to-[#FF5C00] text-white text-xs px-2 sm:px-3 py-0.5 rounded-br-xl">
                  Added bonus
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pt-2">
                  <div className="w-16 h-20 sm:w-24 sm:h-32 rounded flex items-center justify-center flex-shrink-0">
                    <Image src={merchantAppImg} width={52} height={104} alt="Merchant App" className="object-contain w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-medium text-gray-dark mb-1 sm:mb-2">
                      Merchant App
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-medium">
                      Beyond just e-commerce. SimplyBLU is a fully integrated solution that allows you to conveniently accept in-store and online payments using your desktop or Android device. At no cost to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing Card */}
        <div className="lg:w-1/2 w-full p-4 sm:p-6">
          <div className="space-y-4">
            {/* Total Fee Card */}
            <div className="bg-gradient-to-b from-[#0033AA] to-[#00164E] text-white rounded-lg p-4 sm:p-6 text-center">
                <div className="max-w-64 mx-auto">
              <h3 className="text-lg sm:text-xl font-normal text-white">
                Total monthly fee for the card machine(s):
              </h3>
              <div className="flex items-baseline justify-center">
                <sup className="text-lg sm:text-xl -top-3">R</sup>
                <span className="text-3xl sm:text-[42px] mx-1">0.00</span>
                <sub className="text-xs sm:text-sm">(excl. VAT )</sub>
              </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 text-center mb-4">Placeholder</p>
              
              <div className="space-y-6">
                {/* Monthly Fee */}
                <div className="text-center py-4 sm:py-5 border-b border-gray-200">
                  <h4 className="text-sm sm:text-base font-medium text-gray-light mb-4 sm:mb-7">
                    Monthly fee per card machine
                  </h4>
                  <div className="flex items-baseline justify-center">
                    <sup className="text-sm sm:text-base text-gray-dark -top-2">R</sup>
                    <span className="text-3xl sm:text-4xl font-medium text-gray-medium mx-1">0.00</span>
                    <sub className="text-xs sm:text-sm text-gray-light">(excl. VAT )</sub>
                  </div>
                </div>

                {/* Connectivity Fee */}
                <div className="text-center py-4 sm:py-5 border-b border-gray-200">
                  <h4 className="text-sm sm:text-base font-medium text-gray-light mb-4 sm:mb-7">
                    Connectivity fee
                  </h4>
                  <div className="flex items-baseline justify-center">
                    <sup className="text-sm sm:text-base text-gray-dark -top-2">R</sup>
                    <span className="text-3xl sm:text-4xl font-medium text-gray-medium mx-1">0.00</span>
                    <sub className="text-xs sm:text-sm text-gray-light">(per month/ per card machine)</sub>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-center pt-2">
                  <p className="text-xs sm:text-sm text-gray-medium">
                    The total will be charged to your business account.
                  </p>
                  <Button className="h-10 md:h-12 uppercase mt-8 sm:mt-16 hover:bg-primary/90 w-full max-w-72" onClick={onNext}>
                    Continue
                  </Button>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2 text-xs">
              <p className="text-xs text-primary">
                • Domestic refers to MasterCard and Visa cards issued in South Africa
              </p>
              <p className="text-xs text-primary">
                • International refers to MasterCard and Visa cards issued outside South Africa
              </p>
              <p className="text-xs text-primary">
                • The Diners Club® Credit Card rate will align with our credit card rates
              </p>
            </div>

            {/* Card Acceptance */}
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200">
              <p className="text-xs text-gray-light mb-3 sm:mb-4">
                Your card machine can accept the following card types:
              </p>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {[visacard, mastercard, dinerscard, unionpaycard].map((img, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-lg p-1.5 sm:p-2 flex items-center justify-center"
                  >
                    <Image src={img} width={50} height={30} alt="Card" className="object-contain w-full h-auto" />
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-light mb-2 sm:mb-3">
                The card types below can also be accepted on your card machine. Please contact the vendors directly using their contact information provided at the end of your application.
              </p>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {[amexcard, rcscard].map((img, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-lg p-1.5 sm:p-2 flex items-center justify-center"
                  >
                    <Image src={img} width={50} height={30} alt="Card" className="object-contain w-full h-auto" />
                  </div>
                ))}
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
