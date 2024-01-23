interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const AppButton = ({ text, ...props }: Props) => {
  return (
    <button
      className="text-sections bg-lime-400 h-10 rounded-xl w-32 "
      {...props}
    >
      {text}
    </button>
  );
};
