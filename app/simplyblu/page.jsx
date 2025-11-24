"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomReactSelect from "@/components/ui/CustomReactSelect";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    idNumber: "",
    cellNumber: "",
    email: "",
    isOnlyOwner: "",
    isCompanyRegistered: "",
    isSoleShareholder: "",
    businessType: "",
    registeredBusinessName: "",
    grossAnnualTurnover: "",
    registrationNumber: "",
    province: "",
    city: "",
    privacyAccepted: false,
  });

  const [showFullPrivacy, setShowFullPrivacy] = useState(false);

  const businessTypeOptions = [
    { value: "sole-proprietor", label: "Sole Proprietor" },
    { value: "partnership", label: "Partnership" },
    { value: "private-company", label: "Private Company" },
    { value: "public-company", label: "Public Company" },
    { value: "npo", label: "Non-Profit Organisation" },
    { value: "trust", label: "Trust" },
  ];

  const provinceOptions = [
    { value: "gauteng", label: "Gauteng" },
    { value: "western-cape", label: "Western Cape" },
    { value: "kwazulu-natal", label: "KwaZulu-Natal" },
    { value: "eastern-cape", label: "Eastern Cape" },
    { value: "free-state", label: "Free State" },
    { value: "limpopo", label: "Limpopo" },
    { value: "mpumalanga", label: "Mpumalanga" },
    { value: "north-west", label: "North West" },
    { value: "northern-cape", label: "Northern Cape" },
  ];

  const cityOptions = [
    { value: "johannesburg", label: "Johannesburg" },
    { value: "cape-town", label: "Cape Town" },
    { value: "durban", label: "Durban" },
    { value: "pretoria", label: "Pretoria" },
    { value: "port-elizabeth", label: "Port Elizabeth" },
  ];

  const handleContinue = () => {
    // Navigate to next page or handle form submission
    router.push("/simplyblu/select-suits");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-3">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-xl font-normal text-gray-medium mb-7">
              SIMPLYBLU APPLICATION
            </h1>
            <p className="text-sm text-gray-medium mb-3">
              We'll use this information to verify your business
            </p>
            <p className="text-xs text-gray-light uppercase">
              THIS PRODUCT IS ONLY FOR SOUTH AFRICAN ID HOLDERS.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5 mb-14">
            {/* Name and Surname */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14">
              <div>
                <Label className="inline-block mb-1.5">NAME (as per ID)</Label>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label className="inline-block mb-1.5">
                  SURNAME (as per ID)
                </Label>
                <Input
                  type="text"
                  placeholder="Enter your surname"
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                />
              </div>
            </div>

            {/* ID Number and Cell Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14">
              <div>
                <Label className="inline-block mb-1.5">ID NUMBER</Label>
                <Input
                  type="text"
                  placeholder="Enter your ID number"
                  value={formData.idNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, idNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <Label className="inline-block mb-1.5">CELL PHONE NUMBER</Label>
                <Input
                  type="text"
                  placeholder="Enter your phone number"
                  value={formData.cellNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, cellNumber: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
              <div>
                <Label className="inline-block mb-1.5">EMAIL ADDRESS</Label>
                <Input
                  type="email"
                  placeholder="Force@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
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
              <RadioGroup
                value={formData.isOnlyOwner}
                onValueChange={(value) =>
                  setFormData({ ...formData, isOnlyOwner: value })
                }
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label
                    htmlFor="yes"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label
                    htmlFor="no"
                    className="text-sm font-normal cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Company Registered Question */}
            <div className="mb-6">
              <Label className="block mb-3 uppercase">
                Is your company registered?
              </Label>
              <RadioGroup
                value={formData.isCompanyRegistered}
                onValueChange={(value) =>
                  setFormData({ ...formData, isCompanyRegistered: value })
                }
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="company-registered-yes" />
                  <Label
                    htmlFor="company-registered-yes"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="company-registered-no" />
                  <Label
                    htmlFor="company-registered-no"
                    className="text-sm font-normal cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Sole Shareholder Question - Only show if isOnlyOwner is 'yes' */}
            {formData.isOnlyOwner === "yes" && (
              <div className="mb-6">
                <Label className="block mb-3 uppercase">
                  ARE YOU THE SOLE SHAREHOLDER?
                </Label>
                <RadioGroup
                  value={formData.isSoleShareholder}
                  onValueChange={(value) =>
                    setFormData({ ...formData, isSoleShareholder: value })
                  }
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="sole-shareholder-yes" />
                    <Label
                      htmlFor="sole-shareholder-yes"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="sole-shareholder-no" />
                    <Label
                      htmlFor="sole-shareholder-no"
                      className="text-sm font-normal cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}


            {/* Conditional fields based on company registration status */}
            {formData.isCompanyRegistered === "yes" && (
              <>
                {/* Registered Company Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
                  <div>
                    <Label className="inline-block mb-1.5">
                      REGISTERED BUSINESS NAME
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter your business name"
                      value={formData.registeredBusinessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          registeredBusinessName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label className="inline-block mb-1.5">
                      GROSS ANNUAL TURNOVER
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter annual turnover"
                      value={formData.grossAnnualTurnover}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          grossAnnualTurnover: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
                  <div>
                    <Label className="inline-block mb-1.5">
                      REGISTRATION NUMBER
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter your business registration number"
                      value={formData.registrationNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          registrationNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
                  <div>
                    <Label className="inline-block mb-1.5">PROVINCE</Label>
                    <CustomReactSelect
                      instanceId="company-province"
                      value={provinceOptions.find(
                        (opt) => opt.value === formData.province
                      )}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          province: selectedOption?.value || "",
                        })
                      }
                      options={provinceOptions}
                      placeholder="Please select"
                    />
                  </div>
                  <div>
                    <Label className="inline-block mb-1.5">CITY</Label>
                    <CustomReactSelect
                      instanceId="company-city"
                      value={cityOptions.find((opt) => opt.value === formData.city)}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          city: selectedOption?.value || "",
                        })
                      }
                      options={cityOptions}
                      placeholder="Please select"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Unregistered Company Fields */}
            {formData.isCompanyRegistered === "no" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
                  <div>
                    <Label className="inline-block mb-1.5">
                      BUSINESS NAME
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter your business name"
                      value={formData.registeredBusinessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          registeredBusinessName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label className="inline-block mb-1.5">
                      GROSS ANNUAL TURNOVER
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter annual turnover"
                      value={formData.grossAnnualTurnover}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          grossAnnualTurnover: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-14 mt-6">
                  <div>
                    <Label className="inline-block mb-1.5">PROVINCE</Label>
                    <CustomReactSelect
                      instanceId="company-province-unreg"
                      value={provinceOptions.find(
                        (opt) => opt.value === formData.province
                      )}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          province: selectedOption?.value || "",
                        })
                      }
                      options={provinceOptions}
                      placeholder="Please select"
                    />
                  </div>
                  <div>
                    <Label className="inline-block mb-1.5">CITY</Label>
                    <CustomReactSelect
                      instanceId="company-city-unreg"
                      value={cityOptions.find((opt) => opt.value === formData.city)}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          city: selectedOption?.value || "",
                        })
                      }
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
                will process your personal information collected from internal
                and external sources to administer your products and/or services
                {showFullPrivacy && (
                  <>
                    {" "}
                    in accordance with applicable laws. Your information may be
                    used for marketing purposes, fraud prevention, credit
                    assessments, and to comply with regulatory requirements. We
                    are committed to protecting your privacy and will only share
                    your information with authorized third parties as necessary
                    to provide our services. You have the right to access,
                    correct, or request deletion of your personal information at
                    any time. By proceeding with this application, you consent
                    to the processing of your personal data as described in our
                    Privacy Policy
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
              <Checkbox
                id="privacy"
                checked={formData.privacyAccepted}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, privacyAccepted: checked })
                }
              />
              <Label
                htmlFor="privacy"
                className="text-sm text-gray-medium cursor-pointer leading-relaxed"
              >
                I have read and understood the above and accept the terms of
                your{" "}
                <Link href="#" className="text-primary underline">
                  Privacy Statement
                </Link>
                .
              </Label>
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
              onClick={handleContinue}
              disabled={!formData.privacyAccepted}
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
