type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const AppInput = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`border-[#ecedee] p-2 border-solid border-2 rounded-xl ${className} placeholder:text-sm placeholder:text-secondary `}
      {...props}
    />
  );
};
