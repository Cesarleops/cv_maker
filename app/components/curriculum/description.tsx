import { CvPreviewCard } from "../ui/cv-preview-card";

export const DescriptionType = ({
  type,
  text,
  preview = false,
}: {
  type: string;
  text: string;
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview}>
      <p className="text-xl font-bold">
        {type === "about" ? "About" : preview ? "" : "Introduction"}
      </p>
      <p className="text-pretty font-mono text-sm  text-gray-500 mt-2 max-w-xl">
        {text}
      </p>
    </CvPreviewCard>
  );
};
