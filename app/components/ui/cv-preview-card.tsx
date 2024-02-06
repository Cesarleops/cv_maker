import { cn } from "@/app/lib/utils";

export const CvPreviewCard = ({
  children,
  className,
  preview = false,
}: {
  children: React.ReactNode;
  className?: string;
  preview?: boolean;
}) => {
  return (
    <section
      className={cn("bg-[#ffffff]", className, {
        "rounded-none shadow-none px-0 py-0 w-auto ": preview,
        "shadow-md px-10 py-5 w-full rounded-xl sm:w-1/2 ": !preview,
      })}
    >
      {children}
    </section>
  );
};
