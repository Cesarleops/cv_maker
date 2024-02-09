interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
  kind?: "edit" | "primary";
}
export const Button = ({ title, icon, kind = "primary", ...props }: Props) => {
  return kind === "edit" ? (
    <aside className="absolute rounded-full right-5 top-5">
      {icon ? (
        <div className="relative">
          <div className="relative bg-[#262626] cursor-auto p-2 rounded-full transition-colors duration-150 group-hover:bg-pink-500 ">
            {icon}
          </div>
        </div>
      ) : null}
    </aside>
  ) : (
    <button
      className="text-sections hover:scale-105 bg-pink-500 h-10 rounded-xl flex items-center justify-center w-32 "
      {...props}
      name="addButton"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-white"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        <line x1="12" x2="12" y1="7" y2="13" />
        <line x1="15" x2="9" y1="10" y2="10" />
      </svg>
    </button>
  );
};
