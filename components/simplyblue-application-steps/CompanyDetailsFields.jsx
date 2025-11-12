import React from "react";
import { Input } from "@/components/ui/input";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";

const CompanyDetailsFields = ({ handleNext, handlePrev }) => {
  // Dropdown options
  const businessTypeOptions = [
    { value: "sole-proprietor", label: "Sole Proprietor/Other" },
  ];
  const addressOptions = [
    { value: "same", label: "Same as residential address" },
    { value: "different", label: "Different address" },
  ];

  const provinceOptions = [{ value: "gauteng", label: "Gauteng" }];
  const cityOptions = [{ value: "johannesburg", label: "Johannesburg" }];
  const countryOptions = [{ value: "south-africa", label: "South Africa" }];

  return (
    <>
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
              name="businessType"
              options={businessTypeOptions}
              placeholder="Sole Proprietor/Other"
            />
          </div>

          {/* REGISTERED BUSINESS NAME */}
          <div>
            <Label className="inline-flex mb-1.5">
              REGISTERED BUSINESS NAME
            </Label>
            <Input
              type="text"
              placeholder="Enter your business name"
              name="businessName"
            />
          </div>

          {/* GROSS ANNUAL TURNOVER (prefix R) */}
          <div>
            <Label className="inline-flex mb-1.5">GROSS ANNUAL TURNOVER</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                R
              </span>
              <Input
                type="text"
                className="pl-7"
                placeholder="Enter amount"
                name="annualTurnOver"
              />
            </div>
          </div>

          {/* REGISTRATION NUMBER */}
          <div>
            <Label className="inline-flex mb-1.5">REGISTRATION NUMBER</Label>
            <Input
              type="text"
              placeholder="Enter your business registration number"
              name="regNo"
            />
          </div>

          {/* PROVINCE */}
          <div>
            <Label className="inline-flex mb-1.5">PROVINCE</Label>
            <CustomReactSelect
              instanceId="company-province"
              name="businessProvince"
              options={provinceOptions}
              placeholder="Please select"
            />
          </div>

          {/* CITY */}
          <div>
            <Label className="inline-flex mb-1.5">CITY</Label>
            <CustomReactSelect
              instanceId="company-city"
              name="businessCity"
              options={cityOptions}
              placeholder="Please select"
            />
          </div>

          {/* NATURE OF BUSINESS */}
          <div>
            <Label className="inline-flex mb-1.5">NATURE OF BUSINESS</Label>
            <CustomReactSelect
              instanceId="company-nature"
              name="businessNature"
              options={[{ value: "example", label: "Example" }]}
              placeholder="Please select"
            />
          </div>

          {/* BUSINESS INDUSTRY */}
          <div>
            <Label className="inline-flex mb-1.5">BUSINESS INDUSTRY</Label>
            <CustomReactSelect
              instanceId="company-industry"
              name="businessIndustry"
              options={[{ value: "example", label: "Example" }]}
              placeholder="Please select"
            />
          </div>

          {/* COUNTRY OF REGISTRATION */}
          <div>
            <Label className="inline-flex mb-1.5">
              COUNTRY OF REGISTRATION
            </Label>
            <CustomReactSelect
              instanceId="company-country"
              name="businessCountry"
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
            <Input
              type="tel"
              placeholder="076 567 894"
              name="businessContact"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">EMAIL ADDRESS</Label>
            <Input
              type="email"
              placeholder="Jessica@gmail.com"
              name="businessEmail"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">
              TELEPHONE NUMBER (OPTIONAL)
            </Label>
            <Input
              type="tel"
              placeholder="e.g. 035 796 3174"
              name="businessTel"
            />
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
          <Label className="block mb-3">
            Select or edit your company's address below
          </Label>
          <RadioGroup options={addressOptions} name="addressType" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5">STREET NUMBER AND NAME</Label>
            <Input placeholder="e.g 134 Raglan street" name="businessStreet" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">UNIT NUMBER (OPTIONAL)</Label>
            <Input placeholder="e.g 12" name="businessUnit" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">
              COMPLEX/BUILDING NAME (OPTIONAL)
            </Label>
            <Input
              placeholder="e.g. Eye of Africa Estate"
              name="businessBuildingName"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">SUBURB</Label>
            <Input placeholder="e.g Sandton" name="businessSubUrb" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">CITY/TOWN</Label>
            <CustomReactSelect
              instanceId="company-trading-city"
              name="businessCity"
              options={cityOptions}
              placeholder="Please select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">PROVINCE</Label>
            <CustomReactSelect
              instanceId="company-trading-province"
              name="businessProvince"
              options={provinceOptions}
              placeholder="Please select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">POSTAL CODE</Label>
            <Input placeholder="e.g 2091" name="businessPostalCode" />
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
        <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary hover:bg-primary/10"
          onClick={handlePrev}
        >
          BACK
        </Button>
        <Button
          variant="ghost"
          size="sm"
          type="submit"
          className="text-primary hover:text-primary hover:bg-primary/10"
        >
          NEXT
        </Button>
      </div>
    </>
  );
};

export default CompanyDetailsFields;
