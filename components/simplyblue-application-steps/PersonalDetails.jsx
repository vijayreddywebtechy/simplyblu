"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PersonalDetails = ({ onNext }) => {
  const [nationality, setNationality] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const options = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "tailwind", label: "Tailwind CSS" },
  ];

  return (
    <div className="border border-gray-200 rounded-xl">
      {/* Personal Details */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Personal Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5">NAME (as per ID)</Label>
            <Input type="text" placeholder="Enter your first name" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">SURNAME (as per ID)</Label>
            <Input type="text" placeholder="Enter your surname" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">ID NUMBER</Label>
            <Input type="number" placeholder="Enter your ID number" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">CELL NUMBER</Label>
            <Input type="number" placeholder="Enter your phone number" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">EMAIL ADDRESS</Label>
            <Input type="email" placeholder="Force@gmail.com" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">NATIONALITY</Label>
            <CustomReactSelect
              instanceId="personal-nationality"
              value={options.find((opt) => opt.value === nationality)}
              onChange={(selectedOption) =>
                setNationality(selectedOption?.value || "")
              }
              options={options}
              placeholder="Please Select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">COUNTRY OF CITIZENSHIP</Label>
            <CustomReactSelect
              instanceId="personal-citizenship"
              value={options.find((opt) => opt.value === citizenship)}
              onChange={(selectedOption) =>
                setCitizenship(selectedOption?.value || "")
              }
              options={options}
              placeholder="Please Select"
            />
          </div>
        </div>
      </div>

      {/* Public Official */}
      <div className="p-4">
        <Label className="inline-flex mb-1.5">
          ARE YOU A PUBLIC OFFICIAL IN A POSITION OF AUTHORITY?
        </Label>
        <RadioGroup defaultValue="comfortable" className="flex mt-2.5 gap-5">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1" className="text-sm">Yes</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2" className="text-sm">No</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Tax Resident */}
      <div className="p-4">
        <Label className="inline-flex mb-1.5">
          ARE YOU A TAX RESIDENT OUTSIDE OF SOUTH AFRICA?
        </Label>
        <RadioGroup defaultValue="comfortable" className="flex mt-2.5 gap-5">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1" className="text-sm">Yes</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2" className="text-sm">No</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Info note */}
      <div className="flex items-center gap-2.5 p-4 mb-8">
        <Image src={infoIcon} width={16} height={16} alt="info icon" />
        <p className="font-bspro text-sm md:text-base leading-normal text-gray-medium">
          We need to ask these questions for legal and compliance purposes.
        </p>
      </div>

      {/* Residential Details */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Residential Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5">STREET NUMBER AND NAME</Label>
            <Input placeholder="e.g. 134 Raglan Street" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">UNIT NUMBER (OPTIONAL)</Label>
            <Input placeholder="e.g. 12" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">
              COMPLEX/BUILDING NAME (OPTIONAL)
            </Label>
            <Input placeholder="e.g. Eye of Africa Estate" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">SUBURB</Label>
            <Input placeholder="e.g. Sandton" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">CITY/TOWN</Label>
            <CustomReactSelect
              instanceId="personal-city"
              value={options.find((opt) => opt.value === city)}
              onChange={(selectedOption) =>
                setCity(selectedOption?.value || "")
              }
              options={options}
              placeholder="Please Select"
            />
          </div>

          <div>
            <Label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              PROVINCE
            </Label>
            <CustomReactSelect
              instanceId="personal-province"
              value={options.find((opt) => opt.value === province)}
              onChange={(selectedOption) =>
                setProvince(selectedOption?.value || "")
              }
              options={options}
              placeholder="Please Select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">POSTAL CODE</Label>
            <Input type="number" placeholder="e.g. 2091" />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary hover:bg-primary/10"
          onClick={onNext}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
