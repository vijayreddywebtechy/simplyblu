"use client";

import React from "react";
import { Check } from "lucide-react";

export function VerticalStepper({ steps, activeStep, onStepClick, className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const isLast = index === steps.length - 1;

        const circleClass = `
          relative flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border-2 transition-all
          ${isCompleted ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90" : ""}
          ${isActive ? "border-primary bg-primary text-primary-foreground shadow-lg" : ""}
          ${!isActive && !isCompleted ? "border-border bg-muted text-muted-foreground" : ""}
          ${onStepClick ? "cursor-pointer hover:shadow-md" : "cursor-default"}
        `;

        const labelClass = `
          transition-colors font-bspro text-base font-medium leading-normal mt-[2px] md:mt-1.5
          ${isActive ? "text-primary" : ""}
          ${isCompleted ? "text-gray-dark" : ""}
          ${!isActive && !isCompleted ? "text-gray-light" : ""}
        `;

        const descClass = `
          transition-colors font-bspro text-sm md:text-base font-normal leading-normal mt-1
          ${isActive ? "text-gray-medium" : "text-gray-light"}
        `;

        return (
          <div key={index} className="flex gap-2 md:gap-4">
            {/* Step Circle + Connector */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => onStepClick?.(index)}
                disabled={!onStepClick}
                className={circleClass}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-base font-medium leading-normal">{index + 1}</span>
                )}
              </button>

              {/* Line below circle */}
              {!isLast && (
                <div
                  className={`w-[1px] flex-1 min-h-[60px] transition-colors ${
                    isCompleted ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>

            {/* Step Content */}
            <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
              <div className={labelClass}>{step.label}</div>
              {step.description && <div className={descClass}>{step.description}</div>}
              {isActive && step.content && <div className="mt-3 md:mt-5 md:-ml-0 -ml-2.5">{step.content}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
