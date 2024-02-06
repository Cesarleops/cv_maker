import { cn } from "@/app/lib/utils";
import { CvButton } from "./cv-button";

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
  return (
    <section
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

      <CvButton title={title} icon={icon} />
    </section>
  );
};
