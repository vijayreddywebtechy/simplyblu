"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import RHFProvider from "../common/react-hook-form-provider";
import CompanyDetailsFields from "./CompanyDetailsFields";
import { companyDetailsSchema } from "./schema/companyDetailsSchema";

const CompanyDetails = ({ onNext, onBack }) => {
  const handleNext = (data) => {
    console.log(data);
    // onNext();
  };
  const handlePrev = () => {
    onBack();
  };
  return (
    <div className="border border-gray-200 rounded-xl">
      <RHFProvider
        submitFn={handleNext}
        resolver={yupResolver(companyDetailsSchema)}
      >
        <CompanyDetailsFields handlePrev={handlePrev} />
      </RHFProvider>
    </div>
  );
};

export default CompanyDetails;
