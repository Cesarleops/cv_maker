type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

import { ForwardedRef, forwardRef } from "react";

export const AppInput = forwardRef(function AppInput(
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      className={`text-sections p-2 rounded-xl ${className} placeholder:text-sm placeholder:text-secondary `}
      {...props}
      ref={ref}
    />
  );
});
