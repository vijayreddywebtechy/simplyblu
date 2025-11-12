"use client";

import Image from "next/image";
import schema from "./signup-schema";
import sbShield from "@/public/img/sb-shield.png";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFProvider from "../common/react-hook-form-provider";
import { useRouter } from "next/navigation";
import SignUpFields from "./signup-fields";

export default function SignUpForm() {
  const router = useRouter();

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    router.push("/simplyblu/application");
    // TODO: Store it in local or session
  };

  const onCancel = () => {
    router.push("/simplyblu/select-suits");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 flex sm:items-center justify-center px-3 pt-6 sm:p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-[440px] md:max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <Image src={sbShield} alt="sb shield" />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="text-center mb-6 sm:mb-7 md:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-medium mb-3 sm:mb-4 md:mb-5 font-medium">
              Create Your Profile
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-light px-2">
              Create a username & password you'll remember
            </p>
          </div>
          <RHFProvider resolver={yupResolver(schema)} submitFn={handleSubmit}>
            <SignUpFields onCancel={onCancel} />
          </RHFProvider>
        </div>
      </div>
    </div>
  );
}
