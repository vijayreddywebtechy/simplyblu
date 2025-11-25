'use client';
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React from "react";

const data = {
  callBack: {
    title: "We'll call you back",
    description1:
      "We see you've already completed the pre-application process. We'll be in touch to",
    description2: "assist you further.",
  },
  unsuccessful: {
    title: "Your application was unsuccessful",
    description1:
      "Unfortunately, you don't meet our regulatory requirements. Please visit your nearest branch for more information.",
  },
  inactiveCIPC: {
    title: "Your application was unsuccessful",
    description1:
      "Our systems indicate that your business is inactive according to CIPC records. Please ensure your business is active to proceed with the application.",
    description2: "For further assistance, kindly visit your nearest branch.",
  },
  activeCIPC: {
    title: "Your application requires further review",
    description1:
      "Thank you for updating your CIPC status. However, your application needs additional verification. Our team will contact you shortly to assist you further.",
  },
  moreInfo: {
    title: "Additional Information Required",
    description1:
      "To proceed with your SimplyBLU application, we require some additional information. Please check your email or SMS for further instructions.",
    description2:
      "If you have any questions, feel free to reach out to our support team.",
  },
};

const page = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return (
    <div className="mt-12 p-4 w-[50%] mx-auto text-center">
      <h2 className="text-xl sm:text-3xl lg:text-[28px] text-gray-600 my-8 sm:my-6 px-2">
        {data[type].title}
      </h2>

      <p className="text-sm sm:text-base text-gray-400">
        {data[type].description1}
      </p>
      {data[type]?.description2 && (
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          {data[type].description2}
        </p>
      )}

      <Button className="mt-6 mb-4 sm:h-[50px] text-white uppercase">
        BACK TO BROWSING
      </Button>
    </div>
  );
};

export default page;
