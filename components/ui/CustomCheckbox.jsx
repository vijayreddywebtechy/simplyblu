import { forwardRef } from "react";

const CustomCheckbox = forwardRef(({ 
  id,
  name,
  checked,
  onChange,
  label,
  disabled = false,
  error = false,
  errorMessage,
  size = "md", // "sm" | "md" | "lg"
  className = "",
  labelClassName = "",
  checkboxClassName = "",
  ...props
}, ref) => {
  
  const sizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  const checkmarkSizes = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3"
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="inline-flex items-start">
        <div className="relative flex items-center p-0.5 border-2 border-gray-400 rounded">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <label
            htmlFor={id}
            className={`
              ${sizeClasses[size]}
              flex items-center justify-center
              cursor-pointer
              transition-all duration-200
              ${disabled 
                ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
                : error
                ? 'border-red-500 bg-white hover:border-red-600'
                : 'border-gray-400 bg-white hover:border-blue-500'
              }
              peer-checked:bg-blue-600 peer-checked:border-primary
              peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:border-gray-400
              ${checkboxClassName}
            `}
          >
            <svg
              className={`
                ${checkmarkSizes[size]}
                text-white
                opacity-0
                peer-checked:opacity-100
                transition-opacity duration-200
              `}
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
        </div>
        
        {label && (
          <label
            htmlFor={id}
            className={`
              ml-2 text-sm sm:text-base font-bspro text-gray-700 cursor-pointer select-none
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${labelClassName}
            `}
          >
            {label}
          </label>
        )}
      </div>
      
      {error && errorMessage && (
        <span className="text-xs text-red-500 mt-1 ml-7">
          {errorMessage}
        </span>
      )}
    </div>
  );
});

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;

// Usage examples:

// Basic:
// <CustomCheckbox 
//   id="terms"
//   name="terms"
//   checked={isChecked}
//   onChange={(e) => setIsChecked(e.target.checked)}
//   label="I agree to the terms and conditions"
// />

// With error:
// <CustomCheckbox 
//   id="consent"
//   checked={consent}
//   onChange={(e) => setConsent(e.target.checked)}
//   label="Required consent"
//   error={true}
//   errorMessage="You must accept to continue"
// />

// Different sizes:
// <CustomCheckbox id="small" size="sm" label="Small" />
// <CustomCheckbox id="medium" size="md" label="Medium" />
// <CustomCheckbox id="large" size="lg" label="Large" />

// Disabled:
// <CustomCheckbox 
//   id="disabled"
//   checked={true}
//   disabled={true}
//   label="Disabled checkbox"
// />

// With React Hook Form:
// import { useForm } from "react-hook-form";
// 
// const { register, formState: { errors } } = useForm();
// 
// <CustomCheckbox
//   id="agreement"
//   label="I agree"
//   error={!!errors.agreement}
//   errorMessage={errors.agreement?.message}
//   {...register("agreement", { required: "This field is required" })}
// />