import { cn } from "@/app/lib/utils";
import { Button } from "./button";
import Link from "next/link";

interface Props {
  className: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}
export const CvSection = ({
  title,
  subtitle,
  className,
  children,
  icon,
}: Props) => {
  return title === "Whats your name ?" || title === "Location" ? (
    <div
      className={cn(
        "relative group flex flex-col  bg-sections  w-[278px] p-5 rounded-[10px] gap-5",
        className
      )}
    >
      <div>
        <p className="text-lg font-semibold text-titles pointer-events-none">
          {title}
        </p>
        <p className="text-secondary text-sm text-pretty max-w-[170px]">
          {subtitle}
        </p>
      </div>

      {children}

      <Button title={title} icon={icon} kind="edit" />
    </div>
  ) : (
    <Link
      href={`/home/${title.toLocaleLowerCase()}`}
      className={cn(
        "relative group flex flex-col  bg-sections  w-[278px] p-5 rounded-[10px] gap-5 hover:border-[1px] hover:border-pink-500",
        className
      )}
    >
      <div>
        <p className="text-lg font-semibold text-titles pointer-events-none">
          {title}
        </p>
        <p className="text-secondary text-sm text-pretty max-w-[170px]">
          {subtitle}
        </p>
      </div>
      {children}

      <Button title={title} icon={icon} kind="edit" />
    </Link>
  );
};
