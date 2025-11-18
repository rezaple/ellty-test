import React, { useState } from 'react';
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  variant?: any;
  size?: any;
  checkedstate?: any;
}

const checkboxVariants = cva(
  "rounded-[6px] cursor-pointer appearance-none border border-gray-200 relative transition-all",
  {
    variants: {
      variant: {
        default: "bg-white",
      },
      disabled: {
        false: null,
        true: ["cursor-not-allowed"],
      },
      checkedstate: {
        default: "checked:bg-new-blue-200 checked:border-new-blue-200 checked:hover:bg-new-blue-500 checked:hover:border-new-blue-500 checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:w-[6px] checked:after:h-[15px] checked:after:border-white checked:after:border-r-[1.70px] checked:after:border-b-[1.70px] checked:after:rotate-45 checked:after:-translate-x-1/2 checked:after:-translate-y-[60%] active:shadow-2xl active:ring-new-blue-200-op5 active:ring-offset-3 active:ring-offset-new-blue-200-op5 active:bg-white active:border-gray-350 active:border-[1.70px] active:after:content-[''] active:after:absolute active:after:left-1/2 active:after:top-1/2 active:after:w-[6px] active:after:h-[15px] active:after:border-gray-400 active:after:border-r-[1.70px] active:hover:bg-white active:hover:border-gray-350 active:after:border-b-[1.70px] active:after:rotate-45 active:after:-translate-x-1/2 active:after:-translate-y-[60%]",
        press: "checked:bg-white checked:border-gray-350 checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:w-[6px] checked:after:h-[15px] checked:after:border-gray-200 checked:after:border-r-[1.70px] checked:after:border-b-[1.70px] checked:after:rotate-45 checked:after:-translate-x-1/2 checked:after:-translate-y-[60%]",
        onclick: "checked:bg-white checked:border-gray-350  checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:w-[6px] checked:after:h-[15px] checked:after:border-gray-400 checked:after:border-r-[1.70px] checked:after:border-b-[1.70px] checked:after:rotate-45 checked:after:-translate-x-1/2 checked:after:-translate-y-[60%] checked:shadow-2xl checked:ring-new-blue-200-op5 checked:ring-offset-3 checked:ring-offset-new-blue-200-op5",
        active: "checked:bg-new-blue-200 checked:border-new-blue-200  checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:w-[6px] checked:after:h-[15px] checked:after:border-white checked:after:border-r-[1.70px] checked:after:border-b-[1.70px] checked:after:rotate-45 checked:after:-translate-x-1/2 checked:after:-translate-y-[60%]",
        active_hover: "checked:bg-new-blue-500 checked:border-new-blue-500 checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:w-[6px] checked:after:h-[15px] checked:after:border-white checked:after:border-r-[1.70px] checked:after:border-b-[1.70px] checked:after:rotate-45 checked:after:-translate-x-1/2 checked:after:-translate-y-[60%]",
        active_hover_shadow: "checked:bg-new-blue-500 checked:border-new-blue-500 checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:w-[6px] checked:after:h-[15px] checked:after:border-white checked:after:border-r-[1.70px] checked:after:border-b-[1.70px] checked:after:rotate-45 checked:after:-translate-x-1/2 checked:after:-translate-y-[60%] checked:shadow-2xl checked:ring-new-blue-200-op5 checked:ring-offset-3 checked:ring-offset-new-blue-200-op5",
      },
      size: {
        default: "w-[25px] h-[25px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      checkedstate: "default",
    },
  },
);

function Checkbox({
  checked = false,
  disabled = false,
  className,
  variant,
  size,
  checkedstate,
}: CheckboxProps) {
  
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newChecked = e.target.checked;
    setInternalChecked(newChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={internalChecked}
        onChange={handleChange}
        disabled={disabled}
        className={cn(checkboxVariants({ variant, size, checkedstate, className, disabled }))}
      />
      
    </>
  );
}

export default Checkbox;