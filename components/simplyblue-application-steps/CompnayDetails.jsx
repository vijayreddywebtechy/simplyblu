"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Business Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          {/* BUSINESS TYPE */}
          <div>
            <Label className="inline-flex mb-1.5">BUSINESS TYPE</Label>
            <CustomReactSelect
              instanceId="company-business-type"
              value={businessTypeOptions.find((opt) => opt.value === businessType)}
              onChange={(selectedOption) => setBusinessType(selectedOption?.value || "")}
              options={businessTypeOptions}
              placeholder="Sole Proprietor/Other"
            />
          </div>

          {/* REGISTERED BUSINESS NAME */}
          <div>
            <Label className="inline-flex mb-1.5">REGISTERED BUSINESS NAME</Label>
            <Input type="text" placeholder="Enter your business name" />
          </div>

          {/* GROSS ANNUAL TURNOVER (prefix R) */}
          <div>
            <Label className="inline-flex mb-1.5">GROSS ANNUAL TURNOVER</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                R
              </span>
              <Input type="text" className="pl-7" placeholder="Enter amount" />
            </div>
          </div>

          {/* REGISTRATION NUMBER */}
          <div>
            <Label className="inline-flex mb-1.5">REGISTRATION NUMBER</Label>
            <Input
              type="text"
              placeholder="Enter your business registration number"
            />
          </div>

          {/* PROVINCE */}
          <div>
            <Label className="inline-flex mb-1.5">PROVINCE</Label>
            <CustomReactSelect
              instanceId="company-province"
              value={provinceOptions.find((opt) => opt.value === province)}
              onChange={(selectedOption) => setProvince(selectedOption?.value || "")}
              options={provinceOptions}
              placeholder="Please select"
            />
          </div>

          {/* CITY */}
          <div>
            <Label className="inline-flex mb-1.5">CITY</Label>
            <CustomReactSelect
              instanceId="company-city"
              value={cityOptions.find((opt) => opt.value === city)}
              onChange={(selectedOption) => setCity(selectedOption?.value || "")}
              options={cityOptions}
              placeholder="Please select"
            />
          </div>

          {/* NATURE OF BUSINESS */}
          <div>
            <Label className="inline-flex mb-1.5">NATURE OF BUSINESS</Label>
            <CustomReactSelect
              instanceId="company-nature"
              value={natureOfBusiness ? { value: natureOfBusiness, label: natureOfBusiness } : null}
              onChange={(selectedOption) => setNatureOfBusiness(selectedOption?.value || "")}
              options={[{ value: "example", label: "Example" }]}
              placeholder="Please select"
            />
          </div>

          {/* BUSINESS INDUSTRY */}
          <div>
            <Label className="inline-flex mb-1.5">BUSINESS INDUSTRY</Label>
            <CustomReactSelect
              instanceId="company-industry"
              value={businessIndustry ? { value: businessIndustry, label: businessIndustry } : null}
              onChange={(selectedOption) => setBusinessIndustry(selectedOption?.value || "")}
              options={[{ value: "example", label: "Example" }]}
              placeholder="Please select"
            />
          </div>

          {/* COUNTRY OF REGISTRATION */}
          <div>
            <Label className="inline-flex mb-1.5">COUNTRY OF REGISTRATION</Label>
            <CustomReactSelect
              instanceId="company-country"
              value={countryOptions.find((opt) => opt.value === countryOfRegistration)}
              onChange={(selectedOption) => setCountryOfRegistration(selectedOption?.value || "")}
              options={countryOptions}
              placeholder="South Africa"
            />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="p-4 mb-5">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Contact Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5">CELLPHONE NUMBER</Label>
            <Input type="tel" placeholder="076 567 894" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">EMAIL ADDRESS</Label>
            <Input type="email" placeholder="Jessica@gmail.com" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">TELEPHONE NUMBER (OPTIONAL)</Label>
            <Input type="tel" placeholder="e.g. 035 796 3174" />
          </div>
        </div>


        <div className="flex items-center gap-2.5 my-5">
          <Image src={infoIcon} width={16} height={16} alt="info icon" />
          <p className="font-bspro text-sm md:text-base leading-normal text-gray-medium">
           We'll send your merchant statements to your company's email. You can
            also view them online.
          </p>
        </div>
      </div>

      {/* Trading Address Section */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Trading Address
        </h3>

        <div className="mb-5">
          <Label className="block mb-3">Select or edit your company's address below</Label>
          <RadioGroup defaultValue="comfortable" className="flex mt-2.5 gap-5">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="text-sm">Same as residential address</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2" className="text-sm">Different address</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5">STREET NUMBER AND NAME</Label>
            <Input placeholder="e.g 134 Raglan street" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">UNIT NUMBER (OPTIONAL)</Label>
            <Input placeholder="e.g 12" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">COMPLEX/BUILDING NAME (OPTIONAL)</Label>
            <Input placeholder="e.g. Eye of Africa Estate" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">SUBURB</Label>
            <Input placeholder="e.g Sandton" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">CITY/TOWN</Label>
            <CustomReactSelect
              instanceId="company-trading-city"
              value={cityOptions.find((opt) => opt.value === city)}
              onChange={(selectedOption) => setCity(selectedOption?.value || "")}
              options={cityOptions}
              placeholder="Please select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">PROVINCE</Label>
            <CustomReactSelect
              instanceId="company-trading-province"
              value={provinceOptions.find((opt) => opt.value === province)}
              onChange={(selectedOption) => setProvince(selectedOption?.value || "")}
              options={provinceOptions}
              placeholder="Please select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">POSTAL CODE</Label>
            <Input placeholder="e.g 2091" />
          </div>
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

export default CompanyDetails;
