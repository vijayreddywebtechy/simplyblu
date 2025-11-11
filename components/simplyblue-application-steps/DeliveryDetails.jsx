"use client";

import React, { useState } from "react";
import { format } from "date-fns"
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import homeIcon from "@/public/icons/icn_home.png";
import infoIcon from "@/public/icons/icn_info.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DeliveryDetails = ({ onNext, onBack }) => {
  const [fromDate, setFromDate] = useState()
  const [deliveryType, setDeliveryType] = useState("");

  const deliveryTypeOptions = [
    { value: "standard", label: "Standard Delivery" },
    { value: "express", label: "Express Delivery" }
  ];

  return (
    <div className="border border-gray-200 rounded-xl">
      <div className="p-4">
        {/* Delivery Address Selection */}
        <div>
          <Label className="block mb-3">Where would you like your device(s) to be delivered?</Label>
          <RadioGroup defaultValue="comfortable" className="flex flex-col md:flex-row mt-2.5 gap-5">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="text-sm">Company trading address</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2" className="text-sm">Personal address</Label>
            </div>
              <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r3" />
              <Label htmlFor="r3" className="text-sm">Add new address</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Address Preview */}
        <div className="mt-8 mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-blue-900 rounded-xl overflow-hidden p-4 sm:p-0 w-full md:max-w-[875px]">
            <div className="bg-blue-800 w-full sm:w-auto sm:min-h-32 px-6 py-4 sm:py-0 flex items-center justify-center sm:justify-start rounded-lg sm:rounded-none">
              <Image
                src={homeIcon}
                width={40}
                height={40}
                alt="Home Icon"
                className="object-contain"
              />
            </div>

            <div className="sm:px-4 sm:py-6 flex items-center w-full">
              <p className="font-normal text-base sm:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed break-words">
                25 B Katjiepiering Crescent, Amelia, Johannesburg, 0157
              </p>
            </div>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
          <div>
            <Label className="inline-flex mb-1.5">Contact person name</Label>
            <Input type="text" placeholder="e.g. Simz" />
            <p className="text-sm text-gray-light mt-1">
              The person expected to receive the devices upon delivery
            </p>
          </div>

          <div>
            <Label className="inline-flex mb-1.5">Contact person surname</Label>
            <Input type="text" placeholder="e.g. Shabalala" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">Contact person number</Label>
            <Input type="text" placeholder="e.g. 074 567 345" />
            <p className="text-sm text-gray-medium mt-1">
              The person expected to receive the devices upon delivery
            </p>
          </div>

          <div>
            <Label className="inline-flex mb-1.5">Delivery date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between text-left text-sm md:text-base font-normal px-2 shadow-none hover:bg-white",
                    !fromDate && "text-gray-light"
                  )}
                >
                  {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="!h-5 !w-5 text-primary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={setFromDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label className="inline-flex mb-1.5">Delivery type</Label>
            <CustomReactSelect
              instanceId="delivery-type"
              value={deliveryTypeOptions.find((opt) => opt.value === deliveryType)}
              onChange={(selectedOption) => setDeliveryType(selectedOption?.value || "")}
              options={deliveryTypeOptions}
              placeholder="Choose type"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex items-center gap-2.5 mb-8">
          <Image src={infoIcon} width={16} height={16} alt="info icon" />
          <p className="font-bspro text-sm md:text-base leading-normal text-gray-medium">
            We need to ask these questions for legal and compliance purposes.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10" onClick={onBack}>BACK</Button>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10" onClick={onNext}>NEXT</Button>
      </div>
    </div>
  );
};

export default DeliveryDetails;
