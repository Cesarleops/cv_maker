import { cn } from "@/app/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  kind?: "edit" | "primary";
}
export const Button = ({
  title,
  children,
  kind = "primary",
  className,
  icon,
  ...props
}: Props) => {
  return kind === "edit" ? (
    <aside className="absolute rounded-full right-5 top-5">
      {icon ? (
        <div className="relative">
          <div className="relative bg-[#262626] cursor-auto p-2 rounded-full transition-colors duration-150 group-hover:bg-titles ">
            {icon}
          </div>
        </div>
      ) : null}
    </aside>
  ) : (
    <button
      className={cn(
        "text-sections  bg-titles h-10 rounded-xl flex items-center justify-center w-32 ",
        className
      )}
      name="addButton"
      {...props}
    >
      {children}
    </button>
  );
};
