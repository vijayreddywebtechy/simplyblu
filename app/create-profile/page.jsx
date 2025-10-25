'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import sbShield from "@/public/img/sb-shield.png"


export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    preferredName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      preferredName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 flex sm:items-center justify-center px-3 pt-6 sm:p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-[440px] md:max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <Image src={sbShield}  alt="sb shield" />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="text-center mb-6 sm:mb-7 md:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-3 sm:mb-4 md:mb-5 font-medium">
              Create Your Profile
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 px-2">
              Create a username & password you'll remember
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6 md:space-y-7">
            {/* Preferred Name */}
            <div className="space-y-2">
              <Input
                id="preferredName"
                type="text"
                value={formData.preferredName}
                onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
                className="w-full h-10 sm:h-11 text-base border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg"
                placeholder="Preferred Name"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-10 sm:h-11 text-base border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg"
                placeholder="Email Address"
              />
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 leading-snug">
                Check that your email address is correct as we'll be sending a verification code to this address
              </p>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full h-10 sm:h-11 text-base border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg"
                placeholder="Username"
              />
            </div>

            {/* Create Password */}
            <div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full h-10 sm:h-11 text-base pr-16 sm:pr-20 border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg"
                  placeholder="Create Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors flex items-center gap-0.5 sm:gap-1 min-h-[44px] sm:min-h-0"
                >
                  {showPassword ? (
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">HIDE</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:hidden" />
                      <span className="hidden xs:inline">SHOW</span>
                      <span className="xs:hidden">SHOW</span>
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full h-10 sm:h-11 text-base pr-16 sm:pr-20 border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors flex items-center gap-0.5 sm:gap-1 min-h-[44px] sm:min-h-0"
                >
                  {showConfirmPassword ? (
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">HIDE</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:hidden" />
                      <span className="hidden xs:inline">SHOW</span>
                      <span className="xs:hidden">SHOW</span>
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-2 sm:pt-3 md:pt-4">
              <Button
                onClick={handleSubmit}
                className="w-full sm:h-[50px] text-sm sm:text-base text-white uppercase"
              >
                NEXT
              </Button>
              <Button
                variant="ghost"
                onClick={handleCancel}
                className="w-full sm:h-[50px] text-sm sm:text-base text-primary uppercase hover:text-blue-700 hover:bg-blue-50 "
              >
                CANCEL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}