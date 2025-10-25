"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomRadio from "@/components/ui/CustomRadio";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import LabelWithTooltip from "../ui/CustomLabel";

const PersonalDetails = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [framework, setFramework] = useState("");

  const options = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "tailwind", label: "Tailwind CSS" },
  ];

  return (
    <div className="border border-gray-200 rounded-xl">
      {/* Personal Details */}
      <div className="p-4">
        <h3 className="font-bspro text-lg md:text-xl font-medium text-gray-600 mb-5 sm:mb-6 md:mb-8">
          Personal Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <LabelWithTooltip label="NAME (as per ID)" />
            <Input type="text" placeholder="Enter your first name" />
          </div>

          <div>
            <LabelWithTooltip label="SURNAME (as per ID)" />
            <Input type="text" placeholder="Enter your surname" />
          </div>

          <div>
            <LabelWithTooltip label="ID NUMBER" />
            <Input type="number" placeholder="Enter your ID number" />
          </div>

          <div>
            <LabelWithTooltip label="CELL NUMBER" />
            <Input type="number" placeholder="Enter your phone number" />
          </div>

          <div>
            <LabelWithTooltip label="EMAIL ADDRESS" />
            <Input type="email" placeholder="Force@gmail.com" />
          </div>

          <div>
            <LabelWithTooltip label="NATIONALITY" />
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger>
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <LabelWithTooltip label="COUNTRY OF CITIZENSHIP" />
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger>
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Public Official */}
      <div className="p-4">
        <LabelWithTooltip label="ARE YOU A PUBLIC OFFICIAL IN A POSITION OF AUTHORITY?" />
        <div className="flex space-x-6 mt-2.5">
          <CustomRadio
            id="option1"
            name="publicOfficial"
            value="option1"
            label="Yes"
            checked={selectedOption === "option1"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <CustomRadio
            id="option2"
            name="publicOfficial"
            value="option2"
            label="No"
            checked={selectedOption === "option2"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>
      </div>

      {/* Tax Resident */}
      <div className="p-4">
        <LabelWithTooltip label="ARE YOU A TAX RESIDENT OUTSIDE OF SOUTH AFRICA?" />
        <div className="flex space-x-6 mt-2.5">
          <CustomRadio
            id="taxYes"
            name="taxResident"
            value="option1"
            label="Yes"
            checked={selectedOption === "option1"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <CustomRadio
            id="taxNo"
            name="taxResident"
            value="option2"
            label="No"
            checked={selectedOption === "option2"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>
      </div>

      {/* Info note */}
      <div className="flex items-center gap-2.5 p-4 mb-8">
        <Image src={infoIcon} width={16} height={16} alt="info icon" />
        <p className="font-bspro text-sm md:text-base leading-normal text-primary-light">
          We need to ask these questions for legal and compliance purposes.
        </p>
      </div>

      {/* Residential Details */}
      <div className="p-4">
        <h3 className="font-bspro text-lg md:text-xl font-medium text-gray-600 mb-5 sm:mb-6 md:mb-8">
          Residential Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <LabelWithTooltip label="STREET NUMBER AND NAME" />
            <Input placeholder="e.g. 134 Raglan Street" />
          </div>

          <div>
            <LabelWithTooltip label="UNIT NUMBER (OPTIONAL)" />
            <Input placeholder="e.g. 12" />
          </div>

          <div>
            <LabelWithTooltip label="COMPLEX/BUILDING NAME (OPTIONAL)" />
            <Input placeholder="e.g. Eye of Africa Estate" />
          </div>

          <div>
            <LabelWithTooltip label="SUBURB" />
            <Input placeholder="e.g. Sandton" />
          </div>

          <div>
            <LabelWithTooltip label="CITY/TOWN" />
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger>
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <LabelWithTooltip label="PROVINCE" />
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger>
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-600">
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <LabelWithTooltip label="POSTAL CODE" />
            <Input type="number" placeholder="e.g. 2091" />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <Button variant="outline" size="sm" className="border-0 bg-transparent text-primary uppercase hover:bg-blue-100" onClick={onNext}>NEXT</Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
