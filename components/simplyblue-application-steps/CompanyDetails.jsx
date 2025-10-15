"use client";

import React, { useState } from "react";
import CustomInput from "@/components/ui/CustomInput";
import ReactSelect from "@/components/ui/ReactSelect";
import CustomRadio from "@/components/ui/CustomRadio";
import Image from "next/image";
import toolTipIcon from "@/public/icons/icn_tooltip.svg";
import LabelWithTooltip from "../ui/CustomLabel";

const CompanyDetails = ({ onNext, onBack }) => {
  const [businessType, setBusinessType] = useState(null);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  const [natureOfBusiness, setNatureOfBusiness] = useState(null);
  const [businessIndustry, setBusinessIndustry] = useState(null);
  const [countryOfRegistration, setCountryOfRegistration] = useState(null);

  // Options for dropdowns
  const businessTypeOptions = [
    { value: "sole-proprietor", label: "Sole Proprietor/Other" },
    // Add other business types
  ];

  const provinceOptions = [
    { value: "gauteng", label: "Gauteng" },
    // Add other provinces
  ];

  const cityOptions = [
    { value: "johannesburg", label: "Johannesburg" },
    // Add other cities
  ];

  const countryOptions = [
    { value: "south-africa", label: "South Africa" },
    // Add other countries
  ];

  return (
    <div className="border border-gray-200 rounded-xl">
      <div className="p-4">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-8">
          Business Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <LabelWithTooltip label="BUSINESS TYPE" />
            <ReactSelect
              options={businessTypeOptions}
              value={businessType}
              onChange={setBusinessType}
              placeholder="Sole Proprietor/Other"
              required
            />
          </div>

          <div>
            <LabelWithTooltip label="REGISTERED BUSINESS NAME" />
            <CustomInput
              type="text"
              placeholder="Enter your business name"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="GROSS ANNUAL TURNOVER" />
            <CustomInput
              type="text"
              prefix={"R"}
              prefixType="text"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="REGISTRATION NUMBER" />
            <CustomInput
              type="text"
              placeholder="Enter your business registration number"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="PROVINCE" />
            <ReactSelect
              options={provinceOptions}
              value={province}
              onChange={setProvince}
              placeholder="Please select"
              required
            />
          </div>

          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              CITY
            </label>
            <LabelWithTooltip label="NAME (as per ID)" />
            <ReactSelect
              options={cityOptions}
              value={city}
              onChange={setCity}
              placeholder="Please select"
              required
            />
          </div>

          <div>
            <LabelWithTooltip
              label="NAME (as per ID)"
              tooltipText="Add to library"
              tooltipIcon={toolTipIcon}
            />
            <ReactSelect
              options={[]}
              value={natureOfBusiness}
              onChange={setNatureOfBusiness}
              placeholder="Please select"
              required
            />
          </div>

          <div>
            <LabelWithTooltip
              label="NAME (as per ID)"
              tooltipText="Add to library"
              tooltipIcon={toolTipIcon}
            />
            <ReactSelect
              options={[]}
              value={businessIndustry}
              onChange={setBusinessIndustry}
              placeholder="Please select"
              required
            />
          </div>

          <div>
            <LabelWithTooltip label="COUNTRY OF REGISTRATION" />
            <ReactSelect
              options={countryOptions}
              value={countryOfRegistration}
              onChange={setCountryOfRegistration}
              placeholder="South Africa"
              required
            />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="p-4">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-8">
          Contact Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <LabelWithTooltip label="CELLPHONE NUMBER" />
            <CustomInput
              type="tel"
              placeholder="076 567 894"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="EMAIL ADDRESS" />
            <CustomInput
              type="email"
              placeholder="Jessica@gmail.com"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="TELEPHONE NUMBER (OPTIONAL)" />
            <CustomInput
              type="tel"
              placeholder="e.g. 035 796 3174"
              value=""
              onChange={(e) => {}}
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-primary-light">
            We'll send your merchant statements to your company's email. You can
            also view them online.
          </p>
        </div>
      </div>

      {/* Trading Address Section */}
      <div className="p-4">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-8">
          Trading Address
        </h3>
        <div className="mb-4">
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
            <CustomInput
              placeholder="e.g 134 Raglan street"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="UNIT NUMBER (OPTIONAL)" />
            <CustomInput placeholder="e.g 12" value="" onChange={(e) => {}} />
          </div>

          <div>
            <LabelWithTooltip label="COMPLEX/BUILDING NAME (OPTIONAL)" />
            <CustomInput
              placeholder="e.g. Eye of Africa Estate"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="SUBURB" />
            <CustomInput
              placeholder="e.g Sandton"
              value=""
              onChange={(e) => {}}
            />
          </div>

          <div>
            <LabelWithTooltip label="CITY/TOWN" />
            <ReactSelect
              options={cityOptions}
              value={city}
              onChange={setCity}
              placeholder="Please select"
              required
            />
          </div>

          <div>
            <LabelWithTooltip label="PROVINCE" />
            <ReactSelect
              options={provinceOptions}
              value={province}
              onChange={setProvince}
              placeholder="Please select"
              required
            />
          </div>

          <div>
            <LabelWithTooltip label="POSTAL CODE" />
            <CustomInput placeholder="e.g 2091" value="" onChange={(e) => {}} />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <button
          onClick={onBack}
          className="px-4 py-2 text-primary hover:bg-blue-100 font-bspro text-sm leading-normal font-medium rounded transition"
        >
          BACK
        </button>
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

export default CompanyDetails;
