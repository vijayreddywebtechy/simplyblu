"use client";

import React from "react";
import Select, { components as selectComponents } from "react-select";
import { ChevronDown, Check } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

// Design system color tokens - matches Tailwind CSS variables
// Note: React Select uses inline styles, so we need actual HSL values, not CSS variables
const colors = {
  // Border colors
  input: "hsl(210 16% 44%)",         // --input (#5c6c80)
  ring: "hsl(212, 100%, 44%)",         // --ring (focus color - primary)
  
  // Text colors
  greyLight: "hsl(210, 16%, 44%)",     // --gray-light (#5c6c80) for placeholder
  greyMedium: "hsl(210, 48%, 20%)",    // --gray-medium (#1a314d) for selected value
  foreground: "hsl(210, 48%, 20%)",    // --foreground for options
  
  // Background colors
  background: "hsl(0, 0%, 100%)",      // --background (white)
  accent: "hsl(214, 100%, 95%)",       // light blue for hover
  accentActive: "hsl(214, 100%, 90%)", // darker blue for active
};

// Responsive sizing
const sizing = {
  radius: "0.375rem",        // rounded-md
  minHeightMobile: "2.5rem", // h-10
  minHeightDesktop: "3rem",  // h-12
  fontSizeDefault: "14px",   // 14px default
  fontSizeMd: "16px",        // 16px on md screens
};

const customSelectStyles = {
  control: (base, state) => {
    const isFocused = state.isFocused || state.menuIsOpen;

    return {
      ...base,
      backgroundColor: "transparent",
      borderColor: colors.input,
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: sizing.radius,
      minHeight: sizing.minHeightMobile,
      boxShadow: isFocused ? `0 0 0 1px ${colors.ring}` : "none",
      outline: "none",
      transition: "box-shadow 0.15s ease-in-out",
      "&:hover": {
        borderColor: colors.input,
      },
      "@media (min-width: 768px)": {
        minHeight: sizing.minHeightDesktop,
      },
    };
  },
  singleValue: (base) => ({
    ...base,
    color: colors.greyMedium,
    fontSize: sizing.fontSizeDefault,
    "@media (min-width: 768px)": {
      fontSize: sizing.fontSizeMd,
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: sizing.fontSizeDefault,
    color: colors.greyLight,
    "@media (min-width: 768px)": {
      fontSize: sizing.fontSizeMd,
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? colors.accent : colors.background,
    color: colors.foreground,
    cursor: "pointer",
    "&:active": {
      backgroundColor: colors.accentActive,
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.375rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    zIndex: 50,
  }),
};

// --- Custom Dropdown Indicator ---
const DropdownIndicator = (props) => {
  return (
    <selectComponents.DropdownIndicator {...props}>
      <ChevronDown
        size={22}
        className="text-primary"
        strokeWidth={1.8} // custom color
      />
    </selectComponents.DropdownIndicator>
  );
};

// --- Remove the indicator separator completely ---
const IndicatorSeparator = () => null;

// --- Custom Option component (adds checkmark) ---
const Option = (props) => {
  return (
    <selectComponents.Option {...props}>
      <div className="flex items-center w-full">
        <span className="w-6 flex justify-center">
          {props.isSelected && (
            <Check size={18} className="text-primary" strokeWidth={1.5} />
          )}
        </span>
        <span>{props.label}</span>
      </div>
    </selectComponents.Option>
  );
};

function CustomReactSelect({ name, instanceId, ...restProps }) {
  const { control } = useFormContext();
  // When used inside React Hook Form
  if (control && name) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <Select
              {...restProps}
              instanceId={instanceId}
              value={
                restProps.options?.find((opt) => opt.value === field.value) ||
                null
              }
              onChange={(selectedOption) =>
                field.onChange(selectedOption?.value || "")
              }
              onBlur={field.onBlur}
              styles={customSelectStyles}
              components={{ DropdownIndicator, IndicatorSeparator, Option }}
            />
            {fieldState.error && (
              <p className="text-red-500 text-xs sm:text-sm">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />
    );
  }

  // When used as a standalone select (non-form usage)
  return (
    <Select
      {...restProps}
      instanceId={instanceId}
      styles={customSelectStyles}
      components={{ DropdownIndicator, IndicatorSeparator, Option }}
    />
  );
}

export default CustomReactSelect;
