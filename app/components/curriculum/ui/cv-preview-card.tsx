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
      className={`${
        preview
          ? "rounded-none shadow-none px-0 py-0 w-auto "
          : " shadow-md px-10 py-5  rounded-xl w-1/2 "
      } bg-titles ${className}`}
    >
      {children}
    </section>
  );
};
