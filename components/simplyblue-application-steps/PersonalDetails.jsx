"use client";

import React, { useState } from "react";
import CustomInput from "@/components/ui/CustomInput";
import ReactSelect from "@/components/ui/ReactSelect";
import CustomRadio from "@/components/ui/CustomRadio";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import toolTipIcon from "@/public/icons/icn_tooltip.svg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Button from "../ui/Button";
import LabelWithTooltip from "../ui/CustomLabel";

const PersonalDetails = ({ onNext }) => {
  const [framework, setFramework] = useState(null);
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "tailwind", label: "Tailwind CSS" },
  ];

  return (
    <div className="border border-gray-200 rounded-xl">
      {/* Personal Details */}
      <div className="p-4">
        <h3 className="font-bspro text-lg md:text-xl font-medium text-gray-600 mb-8">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
          <LabelWithTooltip
            label="NAME (as per ID)" 
          />
            <CustomInput
              placeholder="Enter your first name"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              SURNAME (as per ID)
            </label>
            <CustomInput
              placeholder="Enter your surname"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              ID NUMBER
            </label>
            <CustomInput
              type="number"
              placeholder="Enter your ID number"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              CELL NUMBER
            </label>
            <CustomInput
              type="number"
              placeholder="Enter your phone number"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              CELL NUMBER
            </label>
            <CustomInput
              type="email"
              placeholder="Force@gmail.com"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              NATIONALITY
            </label>
            <ReactSelect
              label="Choose Framework"
              options={options}
              value={framework}
              onChange={setFramework}
              placeholder="Please Select"
              required
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              COUNTRY OF CITIZENSHIP
            </label>
            <ReactSelect
              label="Choose Framework"
              options={options}
              value={framework}
              onChange={setFramework}
              placeholder="Please Select"
              required
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
          ARE YOU A PUBLIC OFFICIAL IN A POSITION OF AUTHORITY?
        </label>
        <div className="flex space-x-6 mt-2.5">
          <CustomRadio
            id="option1"
            name="options"
            value="option1"
            label="Yes"
            checked={selectedOption === 'option1'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <CustomRadio
            id="option2"
            name="options"
            value="option2"
            label="No"
            checked={selectedOption === 'option2'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>
      </div>
      
      <div className="p-4">
        <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
          ARE YOU A TAX RESIDENT OUTSIDE OF SOUTH AFRICA?
        </label>
        <div className="flex space-x-6 mt-2.5">
          <CustomRadio
            id="option1"
            name="options"
            value="option1"
            label="Yes"
            checked={selectedOption === 'option1'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <CustomRadio
            id="option2"
            name="options"
            value="option2"
            label="No"
            checked={selectedOption === 'option2'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2.5 p-4 mb-8">
        <Image src={infoIcon} width={16} height={16} /> <p className="font-bspro text-base leading-normal text-primary-light">We need to ask these questions for legal and compliance purposes.</p>
      </div>

      {/* Residential Details */}
      <div className="p-4">
        <h3 className="font-bspro text-lg md:text-xl font-medium text-gray-600 mb-8">
          Residential Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              STREET NUMBER AND NAME
            </label>
            <CustomInput
              placeholder="e.g 134 Raglan street"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              UNIT NUMBER (OPTIONAL)
            </label>
            <CustomInput
              placeholder="e.g 12"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              COMPLEX/BUILDING NAME (OPTIONAL)
            </label>
            <CustomInput
              type="number"
              placeholder="e.g. Eye of Africa Estate"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              SUBURB
            </label>
            <CustomInput
              type="number"
              placeholder="e.g Sandton"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              CITY/TOWN
            </label>
            <ReactSelect
              label="Choose Framework"
              options={options}
              value={framework}
              onChange={setFramework}
              placeholder="Please Select"
              required
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              PROVINCE
            </label>
            <ReactSelect
              label="Choose Framework"
              options={options}
              value={framework}
              onChange={setFramework}
              placeholder="Please Select"
              required
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              POSTAL CODE
            </label>
            <CustomInput
              type="number"
              placeholder="e.g  2091"
              value=""
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>


      <div className="flex justify-end mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <button
          onClick={onNext}
          className="px-4 py-2 text-primary hover:bg-blue-100 font-bspro text-sm leading-normal font-medium rounded transition"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;