import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";

const SignUpFields = ({ onCancel }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { reset } = useFormContext();

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <div className="space-y-5 sm:space-y-6 md:space-y-7">
      {/* Preferred Name */}
      <div className="space-y-2">
        <Input
          id="preferredName"
          type="text"
          name="preferredName"
          className="border-0 border-b border-gray-light rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          placeholder="Preferred Name"
        />
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <Input
          id="email"
          type="email"
          name="email"
          className="border-0 border-b border-gray-light rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          placeholder="Email Address"
        />
        <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 leading-snug">
          Check that your email address is correct as we'll be sending a
          verification code to this address
        </p>
      </div>

      {/* Username */}
      <div className="space-y-2">
        <Input
          id="username"
          type="text"
          name="username"
          className="border-0 border-b border-gray-light rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          placeholder="Username"
        />
      </div>

      {/* Create Password */}
      <div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            className="border-0 border-b border-gray-light rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
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
                <span className="hidden xs:inline text-sm">SHOW</span>
                <span className="xs:hidden text-sm">SHOW</span>
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
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            className="border-0 border-b border-gray-light rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
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
                <span className="hidden xs:inline text-sm">SHOW</span>
                <span className="xs:hidden text-sm">SHOW</span>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3 pt-2 sm:pt-3 md:pt-4">
        <Button type="submit" className="w-full h-10 md:h-12 uppercase">
          NEXT
        </Button>
        <Button
          variant="ghost"
          onClick={handleCancel}
          className="w-full h-10 md:h-12 text-primary uppercase hover:text-primary hover:bg-primary/10"
        >
          CANCEL
        </Button>
      </div>
    </div>
  );
};

export default SignUpFields;
