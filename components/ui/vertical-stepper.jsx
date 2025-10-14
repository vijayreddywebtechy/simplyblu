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
          relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all
          ${isCompleted ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700" : ""}
          ${isActive ? "border-blue-600 bg-blue-600 text-white shadow-lg" : ""}
          ${!isActive && !isCompleted ? "border-gray-300 bg-white text-gray-600" : ""}
          ${onStepClick ? "cursor-pointer hover:shadow-md" : "cursor-default"}
        `;

        const labelClass = `
          mb-1 font-medium transition-colors
          ${isActive ? "text-blue-600" : ""}
          ${isCompleted ? "text-gray-900" : ""}
          ${!isActive && !isCompleted ? "text-gray-500" : ""}
        `;

        const descClass = `
          text-sm transition-colors mb-2
          ${isActive ? "text-gray-700" : "text-gray-500"}
        `;

        return (
          <div key={index} className="flex gap-4">
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
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </button>

              {/* Line below circle */}
              {!isLast && (
                <div
                  className={`w-0.5 flex-1 min-h-[60px] transition-colors ${
                    isCompleted ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              )}
            </div>

            {/* Step Content */}
            <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
              <div className={labelClass}>{step.label}</div>
              {step.description && <div className={descClass}>{step.description}</div>}
              {isActive && step.content && <div className="mt-4">{step.content}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
