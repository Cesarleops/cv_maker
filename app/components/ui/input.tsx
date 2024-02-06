type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

import { cn } from "@/app/lib/utils";
import { ForwardedRef, forwardRef } from "react";

export const AppInput = forwardRef(function AppInput(
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      className={cn(
        "text-sections p-2 w-4/5 rounded-xl  placeholder:text-sm placeholder:text-secondary ",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
