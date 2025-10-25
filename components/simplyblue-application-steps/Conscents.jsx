"use client";

import React, { useState } from "react";
import CustomCheckbox from "../ui/CustomCheckbox";
import CustomRadio from "../ui/CustomRadio";
import infoIcon from "@/public/icons/icn_info.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const headingClass =
  "font-bspro text-sm font-medium leading-normal text-gray-950 mb-3";

const textClass =
  "font-bspro text-sm font-normal leading-normal text-gray-950 mb-3";

const Conscents = ({ onBack }) => {
  const router = useRouter();
  const [purchaseOption, setPurchaseOption] = useState("rent");

  const onHandleNext = () => {
    router.push("/simplyblu/merchant-app-and-card-machine");
  };

  return (
    <div className="border border-gray-200 rounded-xl">
      <div className="p-4">
        <h6 className={headingClass}>Data privacy</h6>
        <p className={textClass}>
          Please be advised that Standard Bank will process your personal
          information collected from internal and external sources to administer
          your products and/or services. This includes all subsidiaries of
          Standard Bank Group and Standard Bank South Africa which may engage
          with you directly or indirectly as we personalise your experience.
        </p>
        <p className={`${textClass} mb-7`}> Our Privacy Statement informs you what personal information is, what
          personal information we process, how we process your information,
          where we collect your information, who we share your information with,
          your rights as a data subject such as the right to access or object to
          the processing of your personal information and the complaints contact
          details of both Standard Bank and the Information Regulator. Please be
          advised that it is your responsibility to read our privacy statement
          which is available on our website at www.standardbank.co.za/privacy
          and upon request from our branch or consultants. See Less</p>
        <CustomCheckbox label="I have read and understood the contents of the Privacy Statement" className="mb-7" />
        <h6 className={headingClass}>Marketing</h6>
        <p className={`${textClass} mb-7`}>
          Please answer the questions below regarding the processing of your
          personal information for marketing purposes:
        </p>
        <h6 className={headingClass}>Data sharing within the Group</h6>
        <p className={textClass}>
          A member of The Group may wish to bring you exclusive offers and/or
          services that may benefit you. Are you happy for us to share your data
          within our Group for this purpose?
        </p>
        <div className="flex gap-6 mb-7">
          <CustomRadio
            id="rent"
            name="purchase-option"
            value="rent"
            label="Rent"
            checked={purchaseOption === "rent"}
            onChange={(e) => setPurchaseOption(e.target.value)}
          />
          <CustomRadio
            id="buy"
            name="purchase-option"
            value="buy"
            label="Buy"
            checked={purchaseOption === "buy"}
            onChange={(e) => setPurchaseOption(e.target.value)}
          />
        </div>
        <h6 className={headingClass}>Data sharing with Third Parties</h6>
        <p className={`${textClass} mb-7`}>We may partner with third parties outside of our Group in order to bring you exclusive offers and/or services that may benefit you. Are you happy for us to share your data with these third parties for this purpose?</p>
        <h6 className={headingClass}>Data Sharing Across Boarders Within The Group</h6>
        <p className={textClass}>A member of The group outside of this country may wish to send you exclusive offers and/or services that may benefit you. your information will be protected the same way it is protected locally. are you happy for us to share your data for this purpose?</p>
        <div className="flex gap-6 mb-9">
          <CustomRadio
            id="rent"
            name="purchase-option"
            value="rent"
            label="Rent"
            checked={purchaseOption === "rent"}
            onChange={(e) => setPurchaseOption(e.target.value)}
          />
          <CustomRadio
            id="buy"
            name="purchase-option"
            value="buy"
            label="Buy"
            checked={purchaseOption === "buy"}
            onChange={(e) => setPurchaseOption(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2.5 mb-8">
          <Image src={infoIcon} width={16} height={16} alt="info icon" />{" "}
          <p className="font-bspro text-sm sm:text-base leading-normal text-primary-light">
            Please note that you have the right to change your consent and preferences at any time in the future at any branch, by contacting your relationship manager, calling us on 0860 123 000, emailing us on information@standardbank.co.za or logging to our banking channels to update your preferences.
          </p>
        </div>
      </div>
              {/* Footer Buttons */}
        <div className="flex justify-between mt-6 bg-slate-50 px-4 py-2 rounded-b-xl">
          <Button variant="outline" size="sm" className="border-0 bg-transparent text-primary uppercase hover:bg-blue-100" onClick={onBack}>BACK</Button>
          <Button variant="outline" size="sm" className="border-0 bg-transparent text-primary uppercase hover:bg-blue-100"  onClick={() => onHandleNext()}>NEXT</Button>
        </div>
    </div>
  );
};

export default Conscents;
