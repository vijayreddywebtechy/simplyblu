"use client";

import React, { useState } from "react";
import LabelWithTooltip from "@/components/ui/CustomLabel";
import CustomRadio from "@/components/ui/CustomRadio";
import Image from "next/image";
import homeIcon from "@/public/icons/icn_home.png";
import infoIcon from "@/public/icons/icn_info.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const DeliveryDetails = ({ onNext, onBack }) => {
  const [purchaseOption, setPurchaseOption] = useState("rent");
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl">
      <div className="p-4">
        {/* Delivery Address Selection */}
        <div>
          <LabelWithTooltip
            label="Where would you like your device(s) to be delivered?"
            tooltipText="Select where you want your devices delivered"
            className="mb-3"
          />
          <div className="flex flex-wrap gap-6">
            <CustomRadio
              id="rent"
              name="purchase-option"
              value="rent"
              label="Company trading address"
              checked={purchaseOption === "rent"}
              onChange={(e) => setPurchaseOption(e.target.value)}
            />
            <CustomRadio
              id="buy"
              name="purchase-option"
              value="buy"
              label="Personal address"
              checked={purchaseOption === "buy"}
              onChange={(e) => setPurchaseOption(e.target.value)}
            />
            <CustomRadio
              id="new"
              name="purchase-option"
              value="new"
              label="Add new address"
              checked={purchaseOption === "new"}
              onChange={(e) => setPurchaseOption(e.target.value)}
            />
          </div>
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
            <LabelWithTooltip label="Contact person name" />
            <Input type="text" placeholder="e.g. Simz" />
            <p className="text-sm text-gray-500 mt-1">
              The person expected to receive the devices upon delivery
            </p>
          </div>

          <div>
            <LabelWithTooltip label="Contact person surname" />
            <Input type="text" placeholder="e.g. Shabalala" />
          </div>

          <div>
            <LabelWithTooltip label="Contact person number" />
            <Input type="text" placeholder="e.g. 074 567 345" />
            <p className="text-sm text-gray-500 mt-1">
              The person expected to receive the devices upon delivery
            </p>
          </div>

          <div>
            <LabelWithTooltip label="Delivery date" />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className="w-full justify-between font-normal border border-slate-500 text-slate-500"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0 text-slate-600" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <LabelWithTooltip label="Delivery type" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                <SelectItem value="standard">Standard Delivery</SelectItem>
                <SelectItem value="express">Express Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex items-center gap-2.5 mb-8">
          <Image src={infoIcon} width={16} height={16} alt="info icon" />
          <p className="font-bspro text-sm md:text-base leading-normal text-primary-light">
            We need to ask these questions for legal and compliance purposes.
          </p>
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

export default DeliveryDetails;
