import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import deviceFeatures from "@/assets/images/blocks/device_features.jpg";
import acceptAllCards from "@/assets/images/blocks/accept_all_cards.jpg";
import { Button } from "../ui/button";

const DeviceFeatures = () => {
  const features = [
    {
      text: "Wi-Fi Capability and dual SIM",
    },
    {
      text: "Receipt Printing",
    },
    {
      text: "High speed processor",
    },
    {
      text: "Seamlessly integrates with your preferred delivery apps",
    },
    {
      text: "SimplyBLU App with instant e-commerce, inventory management, and more",
    },
  ];
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl sm:rounded-2xl overflow-hidden">
      <div className="w-full max-w-full sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary mb-3 sm:mb-4 md:mb-5 font-medium leading-tight">
          Device features
        </h2>
        <p className="text-sm sm:text-base text-secondary mb-4 sm:mb-5 md:mb-6">
          SimplyBLU is available exclusively through Standard Bank.
        </p>
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-9">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} />
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[262px]">
          <Image
            src={acceptAllCards}
            alt="Accept all cards"
            width={262}
            height={40}
            className="w-full h-auto"
          />
        </div>
        <Button className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 h-11 sm:h-12 md:h-[50px] w-full sm:w-auto sm:min-w-[200px] lg:max-w-60 text-sm sm:text-base">
          APPLY NOW
        </Button>
      </div>
      <div className="relative w-full">
        <Image
          src={deviceFeatures}
          alt="Device Features"
          width={720}
          height={720}
          className="h-full max-w-full ml-auto"
        />
      </div>
    </div>
  );
};

export default DeviceFeatures;
