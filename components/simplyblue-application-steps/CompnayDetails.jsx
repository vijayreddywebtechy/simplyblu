"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const CompanyDetails = ({ onNext, onBack }) => {
  const [businessType, setBusinessType] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("");
  const [countryOfRegistration, setCountryOfRegistration] = useState("");
  const [bbbeeContributionLevel, setBbbeeContributionLevel] = useState("");
  const [blackWomanOwnership, setBlackWomanOwnership] = useState("");
  const [bbbeeCertificateDate, setBbbeeCertificateDate] = useState();
  const [entityClassification, setEntityClassification] = useState("");
  const [taxResidencyOutsideSA, setTaxResidencyOutsideSA] = useState("no");
  const [businessFunding, setBusinessFunding] = useState([]);
  const [bbeTransaction, setBbeTransaction] = useState("");
  const [profitFromBusiness, setProfitFromBusiness] = useState("");
  const [irregularIncome, setIrregularIncome] = useState("");
  const [taxResidencyCountries, setTaxResidencyCountries] = useState([{ 
    country: "", 
    taxNumber: "", 
    reason: "", 
    showReason: false,
    bbeTransaction: "",
    irregularIncome: "",
    profitFromBusiness: "",
    businessFunding: []
  }]);
  const [showReasonField, setShowReasonField] = useState(false);

  // Dropdown options
  const businessTypeOptions = [
    { value: "sole-proprietor", label: "Sole Proprietor/Other" },
  ];

  const provinceOptions = [{ value: "gauteng", label: "Gauteng" }];
  const cityOptions = [{ value: "johannesburg", label: "Johannesburg" }];
  const countryOptions = [{ value: "south-africa", label: "South Africa" }];

  const bbbeeContributionLevelOptions = [
    { value: "level-1", label: "Level 1" },
    { value: "level-2", label: "Level 2" },
    { value: "level-3", label: "Level 3" },
    { value: "level-4", label: "Level 4" },
    { value: "level-5", label: "Level 5" },
    { value: "level-6", label: "Level 6" },
    { value: "level-7", label: "Level 7" },
    { value: "level-8", label: "Level 8" },
    { value: "non-compliant", label: "Non-Compliant" },
  ];

  const blackWomanOwnershipOptions = [
    { value: "0-25", label: "0% - 25%" },
    { value: "26-50", label: "26% - 50%" },
    { value: "51-75", label: "51% - 75%" },
    { value: "76-100", label: "76% - 100%" },
  ];

  const entityClassificationOptions = [
    { value: "financial-institution", label: "Financial Institution" },
    { value: "non-financial-entity", label: "Non-Financial Entity" },
    { value: "active-nfe", label: "Active NFE" },
    { value: "passive-nfe", label: "Passive NFE" },
  ];

  const businessFundingOptions = [
    { value: "personal-savings", label: "Personal Savings" },
    { value: "bank-loan", label: "Bank Loan" },
    { value: "investors", label: "Investors" },
    { value: "family-friends", label: "Family/Friends" },
    { value: "grants", label: "Grants" },
    { value: "other", label: "Other" },
  ];

  const amountRangeOptions = [
    { value: "0-5000", label: "R 0 - R 5,000" },
    { value: "5001-10000", label: "R 5,001 - R 10,000" },
    { value: "10001-25000", label: "R 10,001 - R 25,000" },
    { value: "25001-50000", label: "R 25,001 - R 50,000" },
    { value: "50001-100000", label: "R 50,001 - R 100,000" },
    { value: "100001+", label: "R 100,001+" },
  ];

  const taxResidencyReasonOptions = [
    { value: "not-required", label: "Not required to obtain" },
    { value: "unable-to-obtain", label: "Unable to obtain" },
    { value: "other", label: "Other" },
  ];

  const addTaxResidencyCountry = () => {
    setTaxResidencyCountries([...taxResidencyCountries, { 
      country: "", 
      taxNumber: "", 
      reason: "", 
      showReason: false,
      bbeTransaction: "",
      irregularIncome: "",
      profitFromBusiness: "",
      businessFunding: []
    }]);
  };

  const removeTaxResidencyCountry = (index) => {
    const updated = taxResidencyCountries.filter((_, i) => i !== index);
    setTaxResidencyCountries(updated.length > 0 ? updated : [{ 
      country: "", 
      taxNumber: "", 
      reason: "", 
      showReason: false,
      bbeTransaction: "",
      irregularIncome: "",
      profitFromBusiness: "",
      businessFunding: []
    }]);
  };

  const updateTaxResidencyCountry = (index, field, value) => {
    const updated = [...taxResidencyCountries];
    updated[index][field] = value;
    setTaxResidencyCountries(updated);
  };

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
      <div className="p-4 mb-5">
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

      {/* B-BBEE details Contact Details Section */}
      <div className="p-4 mb-5">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          B-BBEE details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
        <div>
            <Label className="inline-flex mb-1.5">OWNERSHIP</Label>
            <CustomReactSelect
              instanceId="company-trading-city"
              value={cityOptions.find((opt) => opt.value === city)}
              onChange={(selectedOption) => setCity(selectedOption?.value || "")}
              options={cityOptions}
              placeholder="Please select"
            />
          </div>
          <div>
          <Label className="block mb-3 uppercase">Does the business have a valid b-bbee certificate/affidavit?</Label>
          <RadioGroup defaultValue="yes" className="flex mt-2.5 gap-5">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="yes" id="bbbee-yes" />
              <Label htmlFor="bbbee-yes" className="text-sm">Yes</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="no" id="bbbee-no" />
              <Label htmlFor="bbbee-no" className="text-sm">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
            <Label className="inline-flex mb-1.5 uppercase">B-BBEE CONTRIBUTION LEVEL</Label>
            <CustomReactSelect
              instanceId="bbbee-contribution-level"
              value={bbbeeContributionLevelOptions.find((opt) => opt.value === bbbeeContributionLevel)}
              onChange={(selectedOption) => setBbbeeContributionLevel(selectedOption?.value || "")}
              options={bbbeeContributionLevelOptions}
              placeholder="Please select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5 uppercase">PERCENTAGE OF BLACK WOMAN OWNERSHIP</Label>
            <CustomReactSelect
              instanceId="black-woman-ownership"
              value={blackWomanOwnershipOptions.find((opt) => opt.value === blackWomanOwnership)}
              onChange={(selectedOption) => setBlackWomanOwnership(selectedOption?.value || "")}
              options={blackWomanOwnershipOptions}
              placeholder="Please select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5 uppercase">B-BBEE CERTIFICATE/AFFIDAVIT ISSUE DATE</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-10 md:h-12 justify-between text-left text-sm md:text-base font-normal px-2 shadow-none hover:bg-white",
                    !bbbeeCertificateDate && "text-gray-light"
                  )}
                >
                  {bbbeeCertificateDate ? format(bbbeeCertificateDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="!h-5 !w-5 text-primary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={bbbeeCertificateDate}
                  onSelect={setBbbeeCertificateDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

      </div>


      {/* Company Financial Details Section */}
      <div className="p-4 mb-5">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Company financial details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 mb-5">
          {/* ENTITY CLASSIFICATION */}
          <div>
            <Label className="inline-flex mb-1.5 uppercase">ENTITY CLASSIFICATION</Label>
            <CustomReactSelect
              instanceId="entity-classification"
              value={entityClassificationOptions.find((opt) => opt.value === entityClassification)}
              onChange={(selectedOption) => setEntityClassification(selectedOption?.value || "")}
              options={entityClassificationOptions}
              placeholder="Please select"
            />
          </div>
          </div>
          {/* TAX RESIDENCY OUTSIDE SA */}
          <div className="mb-5">
            <Label className="block mb-3 uppercase">DOES YOUR COMPANY HAVE TAX RESIDENCY OUTSIDE OF SOUTH AFRICA?</Label>
            <RadioGroup 
              value={taxResidencyOutsideSA}
              onValueChange={setTaxResidencyOutsideSA}
              className="flex mt-2.5 gap-5"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="yes" id="tax-residency-yes" />
                <Label htmlFor="tax-residency-yes" className="text-sm">Yes</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="no" id="tax-residency-no" />
                <Label htmlFor="tax-residency-no" className="text-sm">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Conditional fields when tax residency is Yes */}
          {taxResidencyOutsideSA === "yes" && (
            <div className="space-y-5 my-5">
              {taxResidencyCountries.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
                    {/* COUNTRY OF TAX RESIDENCY */}
                    <div>
                      <Label className="inline-flex mb-1.5 uppercase">COUNTRY OF TAX RESIDENCY</Label>
                      <CustomReactSelect
                        instanceId={`tax-residency-country-${index}`}
                        value={countryOptions.find((opt) => opt.value === item.country)}
                        onChange={(selectedOption) => updateTaxResidencyCountry(index, "country", selectedOption?.value || "")}
                        options={countryOptions}
                        placeholder="South Africa"
                      />
                    </div>

                    {/* FOREIGN TAX NUMBER */}
                    <div className="relative">
                      <Label className="inline-flex mb-1.5 uppercase">FOREIGN TAX NUMBER</Label>
                      <CustomReactSelect
                        instanceId={`foreign-tax-number-${index}`}
                        value={item.taxNumber ? { value: item.taxNumber, label: item.taxNumber } : null}
                        onChange={(selectedOption) => updateTaxResidencyCountry(index, "taxNumber", selectedOption?.value || "")}
                        options={[]}
                        placeholder="Please select"
                      />
                      <button
                        type="button"
                        onClick={() => updateTaxResidencyCountry(index, "showReason", !item.showReason)}
                        className="absolute right-0 top-0 text-primary text-xs font-medium hover:underline"
                      >
                        I DON'T HAVE A TAX NUMBER
                      </button>
                    </div>

                    {/* REASON FOR NOT HAVING A FOREIGN TAX NUMBER */}
                    {item.showReason && (
                      <>
                        <div className="relative">
                          <div className="flex items-center justify-between mb-1.5">
                            <Label className="inline-flex uppercase">REASON FOR NOT HAVING A FOREIGN TAX NUMBER</Label>
                            <button
                              type="button"
                              onClick={() => updateTaxResidencyCountry(index, "showReason", false)}
                              className="p-1.5 text-white bg-primary rounded-full hover:bg-primary/90"
                              aria-label="Remove reason field"
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                          <CustomReactSelect
                            instanceId={`tax-reason-${index}`}
                            value={taxResidencyReasonOptions.find((opt) => opt.value === item.reason)}
                            onChange={(selectedOption) => updateTaxResidencyCountry(index, "reason", selectedOption?.value || "")}
                            options={taxResidencyReasonOptions}
                            placeholder="Please select"
                          />
                        </div>

                        {/* BBE TRANSACTION */}
                        <div className="relative">
                          <div className="flex items-end justify-between mb-1.5">
                            <Label className="inline-flex uppercase">BBE TRANSACTION (AVERAGE MONTHLY AMOUNT)</Label>
                            <button
                              type="button"
                              onClick={() => updateTaxResidencyCountry(index, "bbeTransaction", "")}
                              className="p-1.5 text-white bg-primary rounded-full hover:bg-primary/90"
                              aria-label="Clear BBE transaction"
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                          <CustomReactSelect
                            instanceId={`bbe-transaction-${index}`}
                            value={amountRangeOptions.find((opt) => opt.value === item.bbeTransaction)}
                            onChange={(selectedOption) => updateTaxResidencyCountry(index, "bbeTransaction", selectedOption?.value || "")}
                            options={amountRangeOptions}
                            placeholder="R"
                          />
                        </div>
                        {/* HOW ARE YOU FUNDING YOUR BUSINESS */}
                        <div>
                          <Label className="inline-flex mb-1.5 uppercase">HOW ARE YOU FUNDING YOUR BUSINESS (CHOOSE ONE OR MORE)</Label>
                          <CustomReactSelect
                            instanceId={`business-funding-${index}`}
                            value={businessFundingOptions.filter((opt) => item.businessFunding?.includes(opt.value))}
                            onChange={(selectedOptions) => updateTaxResidencyCountry(index, "businessFunding", selectedOptions ? selectedOptions.map(opt => opt.value) : [])}
                            options={businessFundingOptions}
                            placeholder="Please select"
                            isMulti
                          />
                        </div>
                        {/* IRREGULAR INCOME */}
                        <div className="relative">
                          <div className="flex items-end justify-between mb-1.5">
                            <Label className="inline-flex uppercase">IRREGULAR INCOME (AVERAGE MONTHLY AMOUNT)</Label>
                            <button
                              type="button"
                              onClick={() => updateTaxResidencyCountry(index, "irregularIncome", "")}
                              className="p-1.5 text-white bg-primary rounded-full hover:bg-primary/90"
                              aria-label="Clear irregular income"
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                          <CustomReactSelect
                            instanceId={`irregular-income-${index}`}
                            value={amountRangeOptions.find((opt) => opt.value === item.irregularIncome)}
                            onChange={(selectedOption) => updateTaxResidencyCountry(index, "irregularIncome", selectedOption?.value || "")}
                            options={amountRangeOptions}
                            placeholder="R"
                          />
                        </div>

                        {/* PROFIT FROM BUSINESS ACTIVITY */}
                        <div className="relative">
                          <div className="flex items-end justify-between mb-1.5">
                            <Label className="inline-flex uppercase">PROFIT FROM BUSINESS ACTIVITY (AVERAGE MONTHLY AMOUNT)</Label>
                            <button
                              type="button"
                              onClick={() => updateTaxResidencyCountry(index, "profitFromBusiness", "")}
                              className="p-1.5 text-white bg-primary rounded-full hover:bg-primary/90"
                              aria-label="Clear profit from business"
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                          <CustomReactSelect
                            instanceId={`profit-from-business-${index}`}
                            value={amountRangeOptions.find((opt) => opt.value === item.profitFromBusiness)}
                            onChange={(selectedOption) => updateTaxResidencyCountry(index, "profitFromBusiness", selectedOption?.value || "")}
                            options={amountRangeOptions}
                            placeholder="R"
                          />
                        </div>


                      </>
                    )}
                  </div>
                  
                  {/* Remove country button (only show if more than one country) */}
                  {index > 0 && (
                    <div className="mt-4 text-right">
                      <button
                        type="button"
                        onClick={() => removeTaxResidencyCountry(index)}
                        className="text-red-600 text-sm font-medium hover:underline"
                      >
                        Remove Country
                      </button>
                    </div>
                  )}
                </div>
              ))}
              
              {/* ADD ADDITIONAL COUNTRY Button */}
              <button
                type="button"
                onClick={addTaxResidencyCountry}
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M10 5V15M5 10H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                ADD ADDITIONAL COUNTRY
              </button>
            </div>
          )}
          {/* BUSINESS FUNDING */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5 uppercase">HOW ARE YOU FUNDING YOUR BUSINESS (CHOOSE ONE OR MORE)</Label>
            <CustomReactSelect
              instanceId="business-funding"
              value={businessFundingOptions.filter((opt) => businessFunding.includes(opt.value))}
              onChange={(selectedOptions) => setBusinessFunding(selectedOptions ? selectedOptions.map(opt => opt.value) : [])}
              options={businessFundingOptions}
              placeholder="Please select"
              isMulti
            />
          </div>

          {/* Conditional fields when tax residency is No */}
          {taxResidencyOutsideSA === "no" && (
            <>
              {/* PROFIT FROM BUSINESS ACTIVITY */}
              <div>
                <Label className="inline-flex mb-1.5 uppercase">PROFIT FROM BUSINESS ACTIVITY (AVERAGE MONTHLY AMOUNT)</Label>
                <CustomReactSelect
                  instanceId="profit-from-business"
                  value={amountRangeOptions.find((opt) => opt.value === profitFromBusiness)}
                  onChange={(selectedOption) => setProfitFromBusiness(selectedOption?.value || "")}
                  options={amountRangeOptions}
                  placeholder="R"
                />
              </div>

              {/* BBE TRANSACTION */}
              <div>
                <Label className="inline-flex mb-1.5 uppercase">BBE TRANSACTION (AVERAGE MONTHLY AMOUNT)</Label>
                <CustomReactSelect
                  instanceId="bbe-transaction"
                  value={amountRangeOptions.find((opt) => opt.value === bbeTransaction)}
                  onChange={(selectedOption) => setBbeTransaction(selectedOption?.value || "")}
                  options={amountRangeOptions}
                  placeholder="R"
                />
              </div>

              {/* IRREGULAR INCOME */}
              <div>
                <Label className="inline-flex mb-1.5 uppercase">IRREGULAR INCOME (AVERAGE MONTHLY AMOUNT)</Label>
                <CustomReactSelect
                  instanceId="irregular-income"
                  value={amountRangeOptions.find((opt) => opt.value === irregularIncome)}
                  onChange={(selectedOption) => setIrregularIncome(selectedOption?.value || "")}
                  options={amountRangeOptions}
                  placeholder="R"
                />
              </div>
            </>
          )}
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
