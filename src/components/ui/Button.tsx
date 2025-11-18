import React from 'react'
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "rounded-[4px] cursor-pointer box  hover:bg-new-orange-200 active:bg-new-orange-200 flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-new-orange-500",
        active: "bg-new-orange-200",
      },
      size: {
        default: "py-2.5 px-5 w-auto md:min-w-[340px] h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({children, className, variant, size} : ButtonProps) {

  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
        {children}
    </button>
  )
}

export default Button