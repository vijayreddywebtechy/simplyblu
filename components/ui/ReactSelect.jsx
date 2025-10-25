"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import arrowDownSolid from "@/public/icons/icn_arrow_solid_down.svg";

// Dynamically import react-select to prevent hydration errors
const Select = dynamic(() => import("react-select"), { ssr: false });

export default function CustomReactSelect({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  isDisabled = false,
  isClearable = true,
  required = false,
}) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      minHeight: "42px",
      height: "42px",
      borderRadius: "0.5rem",
      border: state.isFocused
        ? "1px solid #2563eb"
        : "1px solid #d1d5db",
      backgroundColor: state.isDisabled ? "#f9fafb" : "#ffffff",
      color: state.isDisabled ? "#6b7280" : "#111827",
      fontFamily: "var(--font-bspro), sans-serif",
      fontSize: "0.875rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      boxShadow: state.isFocused
        ? "0 0 0 1px var(--color-primary)"
        : "none",
      transition: "all 0.15s ease-in-out",
      cursor: state.isDisabled ? "not-allowed" : "default",
      "&:hover": { border: "1px solid #d1d5db" },
    }),
    valueContainer: (base) => ({ ...base, padding: 0, margin: 0 }),
    input: (base) => ({ ...base, margin: 0, padding: 0, color: "#111827" }),
    placeholder: (base) => ({ ...base, color: "#6b7280", margin: 0 }),
    singleValue: (base) => ({ ...base, color: "#111827", margin: 0 }),
    menu: (base) => ({
      ...base,
      borderRadius: "0.5rem",
      border: "1px solid #e5e7eb",
      marginTop: "4px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      zIndex: 20,
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "0.875rem",
      fontFamily: "var(--font-bspro), sans-serif",
      backgroundColor: state.isSelected
        ? "#2563eb"
        : state.isFocused
        ? "#eff6ff"
        : "#ffffff",
      color: state.isSelected ? "#ffffff" : "#111827",
      cursor: "pointer",
      padding: "8px 12px",
      transition: "background-color 0.15s ease",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "0 6px",
      color: "transparent",
      "&:hover": { color: "transparent" },
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  // Custom dropdown arrow
  const DropdownIndicator = () => (
    <Image
      src={arrowDownSolid}
      alt="Dropdown arrow"
      width={10}
      height={6}
      className="mr-2"
    />
  );

  return (
    <div className="w-full">
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isClearable={isClearable}
        styles={customStyles}
        classNamePrefix="react-select"
        components={{ DropdownIndicator }}
        required={required}
      />
    </div>
  );
}
