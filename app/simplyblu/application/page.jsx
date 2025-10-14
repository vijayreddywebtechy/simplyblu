"use client";

import React, { useState } from "react";
import { VerticalStepper } from "@/components/ui/vertical-stepper";
import PersonalDetails from "@/components/simplyblue-application-steps/PersonalDetails";
import CompanyDetails from "@/components/simplyblue-application-steps/CompanyDetails";
import ProductSetup from "@/components/simplyblue-application-steps/ProductSetup";
import DeliveryDetails from "@/components/simplyblue-application-steps/DeliveryDetails";
import Conscents from "@/components/simplyblue-application-steps/Conscents";

const Page = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Personal Details",
      description: "Provide your personal details",
      content: <PersonalDetails onNext={() => setActiveStep(1)} />,
    },
    {
      label: "Company Details",
      description: "Add your company information",
      content: (
        <CompanyDetails onNext={() => setActiveStep(2)} onBack={() => setActiveStep(0)} />
      ),
    },
    {
      label: "Product Setup",
      description: "Set up your product preferences",
      content: (
        <ProductSetup onNext={() => setActiveStep(3)} onBack={() => setActiveStep(1)} />
      ),
    },
    {
      label: "Delivery Details",
      description: "Enter delivery information",
      content: (
        <DeliveryDetails onNext={() => setActiveStep(4)} onBack={() => setActiveStep(2)} />
      ),
    },
    {
      label: "Consents",
      description: "Review and confirm consents",
      content: <Conscents onBack={() => setActiveStep(3)} />,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-[32px] font-normal text-secondary leading-tight mb-3.5">SimplyBlue Application</h1>
      <p className="text-xl font-normal text-secondary leading-normal mb-16">Please provide us with details to begin the application process. We’ll use this information to verify your business</p>
      <VerticalStepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={setActiveStep}
      />
    </div>
  );
};

export default Page;
