"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomRadio from "@/components/ui/CustomRadio";
import Image from "next/image";
import toolTipIcon from "@/public/icons/icn_tooltip.svg";
import LabelWithTooltip from "../ui/CustomLabel";
import infoIcon from "@/public/icons/icn_info.svg";
import { Button } from "@/components/ui/button";

const CompanyDetails = ({ onNext, onBack }) => {
  const [businessType, setBusinessType] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("");
  const [countryOfRegistration, setCountryOfRegistration] = useState("");

  // Dropdown options
  const businessTypeOptions = [
    { value: "sole-proprietor", label: "Sole Proprietor/Other" },
  ];

  const provinceOptions = [{ value: "gauteng", label: "Gauteng" }];
  const cityOptions = [{ value: "johannesburg", label: "Johannesburg" }];
  const countryOptions = [{ value: "south-africa", label: "South Africa" }];

  return (
    <div className="border border-gray-200 rounded-xl">
      {/* Business Details */}
      <div className="p-4 mb-5">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-5 sm:mb-6 md:mb-8">
          Business Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          {/* BUSINESS TYPE */}
          <div>
            <LabelWithTooltip label="BUSINESS TYPE" />
            <Select value={businessType} onValueChange={setBusinessType}>
              <SelectTrigger>
                <SelectValue placeholder="Sole Proprietor/Other" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {businessTypeOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* REGISTERED BUSINESS NAME */}
          <div>
            <LabelWithTooltip label="REGISTERED BUSINESS NAME" />
            <Input type="text" placeholder="Enter your business name" />
          </div>

          {/* GROSS ANNUAL TURNOVER (prefix R) */}
          <div>
            <LabelWithTooltip label="GROSS ANNUAL TURNOVER" />
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                R
              </span>
              <Input type="text" className="pl-7" placeholder="Enter amount" />
            </div>
          </div>

          {/* REGISTRATION NUMBER */}
          <div>
            <LabelWithTooltip label="REGISTRATION NUMBER" />
            <Input
              type="text"
              placeholder="Enter your business registration number"
            />
          </div>

          {/* PROVINCE */}
          <div>
            <LabelWithTooltip label="PROVINCE" />
            <Select value={province} onValueChange={setProvince}>
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {provinceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* CITY */}
          <div>
            <LabelWithTooltip label="CITY" />
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {cityOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* NATURE OF BUSINESS */}
          <div>
            <LabelWithTooltip
              label="NATURE OF BUSINESS"
              tooltipText="Add to library"
              tooltipIcon={toolTipIcon}
            />
            <Select
              value={natureOfBusiness}
              onValueChange={setNatureOfBusiness}
            >
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {/* Example empty list */}
                <SelectItem value="example">Example</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* BUSINESS INDUSTRY */}
          <div>
            <LabelWithTooltip
              label="BUSINESS INDUSTRY"
              tooltipText="Add to library"
              tooltipIcon={toolTipIcon}
            />
            <Select
              value={businessIndustry}
              onValueChange={setBusinessIndustry}
            >
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                <SelectItem value="example">Example</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* COUNTRY OF REGISTRATION */}
          <div>
            <LabelWithTooltip label="COUNTRY OF REGISTRATION" />
            <Select
              value={countryOfRegistration}
              onValueChange={setCountryOfRegistration}
            >
              <SelectTrigger>
                <SelectValue placeholder="South Africa" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {countryOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="p-4 mb-5">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-5 sm:mb-6 md:mb-8">
          Contact Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <LabelWithTooltip label="CELLPHONE NUMBER" />
            <Input type="tel" placeholder="076 567 894" />
          </div>

          <div>
            <LabelWithTooltip label="EMAIL ADDRESS" />
            <Input type="email" placeholder="Jessica@gmail.com" />
          </div>

          <div>
            <LabelWithTooltip label="TELEPHONE NUMBER (OPTIONAL)" />
            <Input type="tel" placeholder="e.g. 035 796 3174" />
          </div>
        </div>


        <div className="flex items-center gap-2.5 my-5">
          <Image src={infoIcon} width={16} height={16} alt="info icon" />
          <p className="font-bspro text-sm md:text-base leading-normal text-primary-light">
           We'll send your merchant statements to your company's email. You can
            also view them online.
          </p>
        </div>
      </div>

      {/* Trading Address Section */}
      <div className="p-4">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-5 sm:mb-6 md:mb-8">
          Trading Address
        </h3>

        <div className="mb-5">
          <LabelWithTooltip label="Select or edit your company’s address below" className="mb-3" />
          <div className="flex gap-6 flex-wrap">
            <CustomRadio
              id="same-address"
              name="trading-address"
              value="same"
              label="Same as residential address"
              checked={true}
              onChange={() => {}}
            />
            <CustomRadio
              id="different-address"
              name="trading-address"
              value="different"
              label="Different address"
              checked={false}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <LabelWithTooltip label="STREET NUMBER AND NAME" />
            <Input placeholder="e.g 134 Raglan street" />
          </div>

          <div>
            <LabelWithTooltip label="UNIT NUMBER (OPTIONAL)" />
            <Input placeholder="e.g 12" />
          </div>

          <div>
            <LabelWithTooltip label="COMPLEX/BUILDING NAME (OPTIONAL)" />
            <Input placeholder="e.g. Eye of Africa Estate" />
          </div>

          <div>
            <LabelWithTooltip label="SUBURB" />
            <Input placeholder="e.g Sandton" />
          </div>

          <div>
            <LabelWithTooltip label="CITY/TOWN" />
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {cityOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <LabelWithTooltip label="PROVINCE" />
            <Select value={province} onValueChange={setProvince}>
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {provinceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <LabelWithTooltip label="POSTAL CODE" />
            <Input placeholder="e.g 2091" />
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

export default CompanyDetails;
