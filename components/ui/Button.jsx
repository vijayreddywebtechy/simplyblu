import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "left",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded md:rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary border-2 border-transparent",
    secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary border-2 border-transparent",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary bg-transparent",
    ghost: "text-foreground hover:bg-foreground/10 focus:ring-foreground/20 border-2 border-transparent",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm gap-1.5",
    md: "h-10 px-4 text-base gap-2",
    lg: "h-12 2xl:h-[50px] px-4 md:px-6 text-sm md:text-base gap-2",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-5 h-5 md:w-6 md:h-6",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={iconSizes[size]}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={iconSizes[size]}>{icon}</span>
      )}
    </button>
  );
};

export default Button;


{/* <Button onClick={() => console.log('Clicked!')}>
  Primary Button
</Button>

<Button variant="secondary" onClick={handleSubmit}>
  Submit
</Button>

<Button variant="outline" disabled>
  Disabled
</Button>

<Button size="sm" onClick={() => alert('Small button!')}>
  Small
</Button>

<Button type="submit" variant="primary">
  Submit Form
</Button> */}

// import { ChevronRight, Download, Plus } from "lucide-react";

// Button with left icon
{/* <Button icon={<Download />}>
  Download
</Button> */}

// Button with right icon
{/* <Button icon={<ChevronRight />} iconPosition="right">
  Next
</Button> */}

// Different sizes with icons
{/* <Button size="sm" icon={<Plus />}>
  Add
</Button> */}

{/* <Button size="md" icon={<Download />}>
  Download
</Button> */}

{/* <Button size="lg" icon={<ChevronRight />} iconPosition="right">
  Continue
</Button> */}

// Icon only button (no text)
{/* <Button icon={<Plus />} className="w-11" aria-label="Add item">
</Button> */}

// Multiple variants with icons
{/* <Button variant="secondary" icon={<Download />}>
  Secondary
</Button> */}

{/* <Button variant="outline" icon={<Plus />}>
  Outline
</Button> */}