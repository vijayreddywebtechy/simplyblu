"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./label";

function RHFCheckbox({ name, label, ...restProps }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex items-start gap-2">
          <Checkbox
            checked={field.value || false}
            onCheckedChange={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            {...restProps}
          />

          {label && (
            <Label className="text-sm text-gray-medium cursor-pointer leading-relaxed">
              {label}
            </Label>
          )}

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

export default RHFCheckbox;
