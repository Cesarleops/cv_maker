interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const AppButton = ({ text, ...props }: Props) => {
  return (
    <button
      className="bg-primary text-white rounded-xl h-10 w-[200px]"
      {...props}
    >
      {text}
    </button>
  );
};
