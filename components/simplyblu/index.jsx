import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RHFInput } from "../ui/RHFInput";
import Link from "next/link";
import RHFReactSelect from "@/components/ui/RHFReactSelect";
import { cityOptions, provinceOptions, yesOrNoOptions } from "@/lib/data";
import { RHFRadioGroup } from "@/components/ui/RHFRadioGroup";
import { useFormContext, useWatch } from "react-hook-form";
import RHFCheckbox from "../ui/RHFCheckBox";

const SimplyBluFields = () => {
  const { control } = useFormContext();
  const [showFullPrivacy, setShowFullPrivacy] = useState(false);

  const isOnlyOwner = useWatch({ control, name: "isOnlyOwner" });
  const isCompanyRegistered = useWatch({
    control,
    name: "isCompanyRegistered",
  });

  return (
    <>
      {/* Form Fields */}
      <div className="space-y-5 mb-14">
        {/* Name and Surname */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14">
          <div>
            <Label className="inline-block mb-1.5">NAME (as per ID)</Label>
            <RHFInput name="firstName" placeholder="Enter your first name" />
          </div>
          <div>
            <Label className="inline-block mb-1.5">SURNAME (as per ID)</Label>
            <RHFInput placeholder="Enter your surname" name="surname" />
          </div>
        </div>

        {/* ID Number and Cell Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14">
          <div>
            <Label className="inline-block mb-1.5">ID NUMBER</Label>
            <RHFInput placeholder="Enter your ID number" name="idNumber" />
          </div>
          <div>
            <Label className="inline-block mb-1.5">CELL PHONE NUMBER</Label>
            <RHFInput placeholder="Enter your phone number" name="cellNumber" />
          </div>
        </div>

        {/* Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
          <div>
            <Label className="inline-block mb-1.5">EMAIL ADDRESS</Label>
            <RHFInput type="email" placeholder="Force@gmail.com" name="email" />
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="mb-8">
        <h2 className="text-xl font-normal text-gray-medium mb-6 text-center border-b border-gray-200 pb-4">
          Company details
        </h2>

        {/* Radio Question */}
        <div className="mb-6">
          <Label className="block mb-3 uppercase">
            Are you the only owner of the company?
          </Label>
          <RHFRadioGroup name="isOnlyOwner" options={yesOrNoOptions} />
        </div>

        {/* Company Registered Question */}
        <div className="mb-6">
          <Label className="block mb-3 uppercase">
            Is your company registered?
          </Label>
          <RHFRadioGroup name="isCompanyRegistered" options={yesOrNoOptions} />
        </div>

        {/* Sole Shareholder Question - Only show if isOnlyOwner is 'yes' */}
        {isOnlyOwner && (
          <div className="mb-6">
            <Label className="block mb-3 uppercase">
              ARE YOU THE SOLE SHAREHOLDER?
            </Label>
            <RHFRadioGroup name="isSoleShareholder" options={yesOrNoOptions} />
          </div>
        )}

        {/* Conditional fields based on company registration status */}
        {isCompanyRegistered && (
          <>
            {/* Registered Company Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
              <div>
                <Label className="inline-block mb-1.5">
                  REGISTERED BUSINESS NAME
                </Label>
                <RHFInput
                  placeholder="Enter your business name"
                  name="registeredBusinessName"
                />
              </div>
              <div>
                <Label className="inline-block mb-1.5">
                  GROSS ANNUAL TURNOVER
                </Label>
                <RHFInput
                  placeholder="Enter annual turnover"
                  name="grossAnnualTurnover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
              <div>
                <Label className="inline-block mb-1.5">
                  REGISTRATION NUMBER
                </Label>
                <RHFInput
                  placeholder="Enter your business registration number"
                  name="registrationNumber"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
              <div>
                <Label className="inline-block mb-1.5">PROVINCE</Label>
                <RHFReactSelect
                  instanceId="company-province"
                  name="companyProvince"
                  options={provinceOptions}
                  placeholder="Please select"
                />
              </div>
              <div>
                <Label className="inline-block mb-1.5">CITY</Label>
                <RHFReactSelect
                  instanceId="company-city"
                  name="companyCity"
                  options={cityOptions}
                  placeholder="Please select"
                />
              </div>
            </div>
          </>
        )}

        {/* Unregistered Company Fields */}
        {isCompanyRegistered === false && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
              <div>
                <Label className="inline-block mb-1.5">BUSINESS NAME</Label>
                <RHFInput
                  placeholder="Enter your business name"
                  name="registeredBusinessName"
                />
              </div>
              <div>
                <Label className="inline-block mb-1.5">
                  GROSS ANNUAL TURNOVER
                </Label>
                <RHFInput
                  placeholder="Enter annual turnover"
                  name="grossAnnualTurnover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
              <div>
                <Label className="inline-block mb-1.5">PROVINCE</Label>
                <RHFReactSelect
                  instanceId="company-province-unreg"
                  name="companyProvinceUnreg"
                  options={provinceOptions}
                  placeholder="Please select"
                />
              </div>
              <div>
                <Label className="inline-block mb-1.5">CITY</Label>
                <RHFReactSelect
                  instanceId="company-city-unreg"
                  name="companyCityUnreg"
                  options={cityOptions}
                  placeholder="Please select"
                />
              </div>
            </div>
          </>
        )}

        {/* Data Privacy */}
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <h3 className="text-base font-medium text-gray-medium mb-3">
            Data Privacy
          </h3>
          <p className="text-sm text-gray-light mb-2">
            Please be advised that{" "}
            <Link href="#" className="text-primary underline">
              Standard Bank
            </Link>{" "}
            will process your personal information collected from internal and
            external sources to administer your products and/or services
            {showFullPrivacy && (
              <>
                {" "}
                in accordance with applicable laws. Your information may be used
                for marketing purposes, fraud prevention, credit assessments,
                and to comply with regulatory requirements. We are committed to
                protecting your privacy and will only share your information
                with authorized third parties as necessary to provide our
                services. You have the right to access, correct, or request
                deletion of your personal information at any time. By proceeding
                with this application, you consent to the processing of your
                personal data as described in our Privacy Policy
              </>
            )}
            ...{" "}
            <button
              onClick={() => setShowFullPrivacy(!showFullPrivacy)}
              className="text-primary font-medium hover:underline"
            >
              {showFullPrivacy ? "See Less" : "See More"}
            </button>
          </p>
        </div>
      </div>

      {/* Privacy Statement Checkbox */}
      <div className="mb-12">
        <div className="flex items-start gap-3">
          <RHFCheckbox
            id="privacy"
            name="privacyAccepted"
            label={
              <>
                I have read and understood the above and accept the terms of
                your{" "}
                <Link href="#" className="text-primary underline">
                  Privacy Statement
                </Link>
                .
              </>
            }
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          className="w-full max-w-[300px] mx-auto md:mx-0 h-12 border-primary text-primary hover:bg-primary/10"
          onClick={() => router.back()}
        >
          BACK
        </Button>
        <Button
          className="w-full max-w-[300px] mx-auto md:mx-0 h-12 bg-primary hover:bg-primary/90 text-white"
          type="submit"
          // disabled={!formData.privacyAccepted}
        >
          CONTINUE
        </Button>
      </div>
    </>
  );
};

export default SimplyBluFields;
