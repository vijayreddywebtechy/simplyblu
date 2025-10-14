import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LabelWithTooltip = ({ 
  label, 
  tooltipText, 
  tooltipIcon,
  tooltipSide = "top", // "top" | "right" | "bottom" | "left"
  tooltipAlign = "center", // "start" | "center" | "end"
  className = "",
  labelClassName = "",
  tooltipDelayDuration = 150,
  iconWidth = 14,
  iconHeight = 14,
  htmlFor,
}) => {
  return (
    <div className={`inline-flex items-center mb-1.5 ${className}`}>
      <label 
        htmlFor={htmlFor}
        className={`font-bspro text-xs font-medium text-gray-500 block ${labelClassName}`}
      >
        {label}
      </label>
      {tooltipText && tooltipIcon && (
        <TooltipProvider delayDuration={tooltipDelayDuration}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label={`Info about ${label}`}
                className="ml-1.5 cursor-pointer"
              >
                <Image 
                  src={tooltipIcon} 
                  width={iconWidth} 
                  height={iconHeight} 
                  alt="info icon" 
                />
              </button>
            </TooltipTrigger>
            <TooltipContent side={tooltipSide} align={tooltipAlign}>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default LabelWithTooltip;

// Usage examples:

// With tooltip:
// <LabelWithTooltip 
//   label="NAME (as per ID)" 
//   tooltipText="Add to library"
//   tooltipIcon={toolTipIcon}
//   tooltipSide="right"
//   tooltipAlign="start"
// />

// Without tooltip:
// <LabelWithTooltip 
//   label="EMAIL ADDRESS" 
// />

// With htmlFor (links label to input):
// <LabelWithTooltip 
//   label="PASSWORD" 
//   tooltipText="Must be at least 8 characters"
//   tooltipIcon={toolTipIcon}
//   htmlFor="password-input"
// />