import { cn } from "@/app/lib/utils";
import { ActiveEditing } from "./active-editing";

export const CvPreviewCard = ({
  children,
  className,
  preview = false,
  instruction,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  preview?: boolean;
  title?: string;
  instruction?: string;
}) => {
  return (
    <div className="w-full  flex flex-col h-fit gap-5">
      <section
        className={cn("bg-[#fff] h-fit", className, {
          "rounded-none shadow-none px-0 py-0 w-auto ": preview,
          "shadow-md px-10 py-5 rounded-xl bg-radial-alt point-size": !preview,
        })}
      >
        <h1 className="font-bold text-xl">{title}</h1>

        {!preview && (
          <p className="text-secondary text-sm text-pretty ">
            In this box you will see your {instruction} data as you add it.
          </p>
        )}

        {children}
      </section>
      {!preview && <ActiveEditing />}
    </div>
  );
};
