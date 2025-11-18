import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const LineVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "bg-gray-200",
      },
      size: {
        default: "h-[0.7px] w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type LineProps = {
  className?: string, 
  variant?: any, 
  size?: any
}

function Line({className, variant, size} : LineProps) {
  return (
    <div className={cn(LineVariants({ variant, size, className }))}></div>
  )
}

export default Line