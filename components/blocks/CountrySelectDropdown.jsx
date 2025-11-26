"use client";
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CountrySelectDropdown = ({ 
  value, 
  onChange, 
  placeholder = "Select Country",
  className = "" 
}) => {
  const [selectedValue, setSelectedValue] = useState(value || "");

  const countryOptions = [
    {
      label: "Africa",
      options: [
        { value: "ao", label: "Angola", flag: "🇦🇴" },
        { value: "bw", label: "Botswana", flag: "🇧🇼" },
        { value: "ci", label: "Côte d'Ivoire", flag: "🇨🇮" },
        { value: "cd", label: "DRC", flag: "🇨🇩" },
        { value: "eg", label: "Egypt", flag: "🇪🇬" },
        { value: "sz", label: "Eswatini", flag: "🇸🇿" },
        { value: "gh", label: "Ghana", flag: "🇬🇭" },
        { value: "ke", label: "Kenya", flag: "🇰🇪" },
        { value: "ls", label: "Lesotho", flag: "🇱🇸" },
        { value: "mw", label: "Malawi", flag: "🇲🇼" },
        { value: "mu", label: "Mauritius", flag: "🇲🇺" },
        { value: "mz", label: "Mozambique", flag: "🇲🇿" },
        { value: "na", label: "Namibia", flag: "🇳🇦" },
        { value: "ng", label: "Nigeria", flag: "🇳🇬" },
        { value: "za", label: "South Africa", flag: "🇿🇦" },
        { value: "tz", label: "Tanzania", flag: "🇹🇿" },
        { value: "ug", label: "Uganda", flag: "🇺🇬" },
        { value: "zm", label: "Zambia", flag: "🇿🇲" },
        { value: "zw", label: "Zimbabwe", flag: "🇿🇼" },
      ]
    },
    {
      label: "Europe",
      options: [
        { value: "eu", label: "Europe", flag: "🇪🇺" },
        { value: "im", label: "Isle of Man", flag: "🇮🇲" },
        { value: "je", label: "Jersey", flag: "🇯🇪" },
        { value: "gb", label: "United Kingdom", flag: "🇬🇧" },
      ]
    },
    {
      label: "Asia Middle East",
      options: [
        { value: "cn", label: "China", flag: "🇨🇳" },
        { value: "ae", label: "United Arab Emirates", flag: "🇦🇪" },
      ]
    },
    {
      label: "Americas",
      options: [
        { value: "us", label: "United States of America", flag: "🇺🇸" },
      ]
    }
  ];

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue);
    
    // Find the full country object
    const country = countryOptions
      .flatMap(group => group.options)
      .find(option => option.value === newValue);
    
    if (onChange && country) {
      onChange(country);
    }
  };

  const getSelectedCountry = () => {
    return countryOptions
      .flatMap(group => group.options)
      .find(option => option.value === selectedValue);
  };

  const selectedCountry = getSelectedCountry();

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder}>
          {selectedCountry && (
            <div className="flex items-center gap-2">
              <span className="text-xl">{selectedCountry.flag}</span>
              <span>{selectedCountry.label}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-80">
        {countryOptions.map((group, groupIndex) => (
          <SelectGroup key={groupIndex}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.options.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{country.flag}</span>
                  <span>{country.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountrySelectDropdown;
