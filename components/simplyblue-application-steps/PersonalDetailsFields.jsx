import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import infoIcon from "@/public/icons/icn_info.svg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PersonalDetailsFields = ({ options }) => {
  return (
    <>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-medium mb-5 sm:mb-6 md:mb-8">
          Personal Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <Label className="inline-flex mb-1.5">NAME (as per ID)</Label>
            <Input
              type="text"
              name="fname"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">SURNAME (as per ID)</Label>
            <Input type="text" name="lname" placeholder="Enter your surname" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">ID NUMBER</Label>
            <Input
              type="number"
              name="idNo"
              placeholder="Enter your ID number"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">CELL NUMBER</Label>
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">EMAIL ADDRESS</Label>
            <Input type="email" name="email" placeholder="Force@gmail.com" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">NATIONALITY</Label>
            <CustomReactSelect
              instanceId="personal-nationality"
              name="nationality"
              options={options}
              placeholder="Please Select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">COUNTRY OF CITIZENSHIP</Label>
            <CustomReactSelect
              instanceId="personal-citizenship"
              name="citizenship"
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
        <RadioGroup
          name="isPublicOfficial"
          defaultValue="comfortable"
          className="flex mt-2.5 gap-5"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="yes" id="r1" />
            <Label htmlFor="r1" className="text-sm">
              Yes
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="no" id="r2" />
            <Label htmlFor="r2" className="text-sm">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Tax Resident */}
      <div className="p-4">
        <Label className="inline-flex mb-1.5">
          ARE YOU A TAX RESIDENT OUTSIDE OF SOUTH AFRICA?
        </Label>
        <RadioGroup
          name="isSouthAfricaResident"
          defaultValue="comfortable"
          className="flex mt-2.5 gap-5"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="yes" id="r1" />
            <Label htmlFor="r1" className="text-sm">
              Yes
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="no" id="r2" />
            <Label htmlFor="r2" className="text-sm">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Info note */}
      <div className="flex items-center gap-2.5 p-4 mb-8">
        <Image src={infoIcon} width={16} height={16} alt="info icon" />
        <p className="font-bspro text-sm md:text-base leading-normal text-gray-medium text-[#3889FF] font-normal">
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
            <Input placeholder="e.g. 134 Raglan Street" name="street" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">UNIT NUMBER (OPTIONAL)</Label>
            <Input placeholder="e.g. 12" name="unit" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">
              COMPLEX/BUILDING NAME (OPTIONAL)
            </Label>
            <Input
              placeholder="e.g. Eye of Africa Estate"
              name="buildingName"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">SUBURB</Label>
            <Input placeholder="e.g. Sandton" name="suburbName" />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">CITY/TOWN</Label>
            <CustomReactSelect
              instanceId="personal-city"
              name="city"
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
              name="province"
              options={options}
              placeholder="Please Select"
            />
          </div>

          <div>
            <Label className="inline-flex mb-1.5">POSTAL CODE</Label>
            <Input type="number" placeholder="e.g. 2091" name="postalCode" />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
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

export default PersonalDetailsFields;
