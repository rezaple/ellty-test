import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const RowVariants = cva(
  "flex flex-row bg-white w-auto min-h-[42px] items-center justify-between py-[8px]",
  {
    variants: {
      padding: {
        default: "px-2",
        custom: "pl-[22px] pr-[15px]"
      },
    },
    defaultVariants: {
      padding: "default",
    },
  },
);


type RowProps = {
    label: string,
    children: React.ReactNode,
    className?: string,
    padding?: any,
}

function Row({children, label, padding, className} : RowProps) {
  return (
    <div className={cn(RowVariants({ padding, className }))}>
        <span>{label}</span>
        {children}
    </div>

  )
}

export default Row