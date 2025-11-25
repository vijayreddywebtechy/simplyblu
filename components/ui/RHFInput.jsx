"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

const RHFInput = React.forwardRef(
  ({ name, className, type = "text", ...props }, ref) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const error = errors?.[name]?.message;

    return (
      <div className="w-full">
        <input
          id={name}
          type={type}
          ref={ref}
          className={cn(
            "flex h-10 md:h-12 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm md:text-base text-gray-medium transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500 focus-visible:ring-red-500" : "",
            className
          )}
          aria-invalid={!!error}
          {...props}
          {...register(name)}
        />
        {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
      </div>
    );
  }
);

RHFInput.displayName = "RHFInput";

export { RHFInput };
