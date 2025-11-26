"use client";

import React, { useState } from "react";
import { VerticalStepper } from "@/components/ui/vertical-stepper";
import PersonalDetails from "@/components/simplyblue-application-steps/PersonalDetails";
import CompanyDetails from "@/components/simplyblue-application-steps/CompnayDetails";
import ProductSetup from "@/components/simplyblue-application-steps/ProductSetup";
import DeliveryDetails from "@/components/simplyblue-application-steps/DeliveryDetails";
import Conscents from "@/components/simplyblue-application-steps/Conscents";

const Page = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Personal Details",
      description: "This product is only for South African ID holders.",
      content: <PersonalDetails onNext={() => setActiveStep(1)} />,
    },
    {
      label: "Company Details",
      description: "",
      content: (
        <CompanyDetails
          onNext={() => setActiveStep(2)}
          onBack={() => setActiveStep(0)}
        />
      ),
    },
    {
      label: "Consents",
      description: "",
      content: <Conscents 
          onNext={() => setActiveStep(3)}
          onBack={() => setActiveStep(1)}
      />,
    },
    {
      label: "Product Setup",
      description: "",
      content: (
        <ProductSetup
          onNext={() => setActiveStep(4)}
          onBack={() => setActiveStep(2)}
        />
      ),
    },
    {
      label: "Delivery Details",
      description: "",
      content: (
        <DeliveryDetails
          onBack={() => setActiveStep(3)}
        />
      ),
    }
  ];

  return (
    <div className="page-container py-10">
      <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-gray-medium leading-tight mb-3.5">
        SimplyBlue Application
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-xl font-normal text-gray-medium leading-normal mb-12 md:mb-14">
        Please provide us with details to begin the application process. We’ll
        use this information to verify your business
      </p>

      <VerticalStepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={setActiveStep}
      />
    </div>
  );
};

export default Page;
