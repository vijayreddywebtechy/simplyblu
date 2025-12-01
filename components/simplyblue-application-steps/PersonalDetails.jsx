"use client";

import RHFProvider from "@/providers/ReactHookFormProvider";
import { personalDetailsSchema } from "./schema/personalDetailsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalDetailsFields from "./PersonalDetailFields";

const PersonalDetails = ({ onNext }) => {
  const options = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "tailwind", label: "Tailwind CSS" },
  ];

  const handleNext = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <div className="border border-gray-200 rounded-xl">
      {/* Personal Details */}
      <RHFProvider
        submitFn={handleNext}
        resolver={yupResolver(personalDetailsSchema)}
      >
        <PersonalDetailsFields options={options} handleNext={handleNext} />
      </RHFProvider>
    </div>
  );
};

export default PersonalDetails;
