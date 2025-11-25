"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "./label";

const RHFRadioGroup = React.forwardRef(
  ({ name, options = [], className, defaultValue = "", ...props }, ref) => {
    const { control } = useFormContext();

    if (!control) {
      throw new Error("RadioGroup must be used within a FormProvider");
    }

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <div>
            <RadioGroupPrimitive.Root
              ref={ref}
              className={cn("flex gap-5 mt-2.5", className)}
              value={field.value}
              onValueChange={field.onChange}
              {...props}
            >
              {options.map((opt) => (
                <div key={opt.value} className="flex items-center gap-3">
                  <RadioGroupPrimitive.Item
                    value={opt.value}
                    id={`${name}-${opt.value}`}
                    className="aspect-square h-5 w-5 rounded-full border border-gray-light text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                      <Circle className="h-4 w-4 fill-current text-current" />
                    </RadioGroupPrimitive.Indicator>
                  </RadioGroupPrimitive.Item>
                  <Label
                    htmlFor={`${name}-${opt.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroupPrimitive.Root>

            {error && (
              <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    );
  }
);

RHFRadioGroup.displayName = "RHFRadioGroup";

export { RHFRadioGroup };
