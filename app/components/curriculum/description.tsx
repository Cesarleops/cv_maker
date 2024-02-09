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
    <CvPreviewCard
      preview={preview}
      title={type === "about" ? "About" : preview ? "" : "Introduction"}
      instruction={type === "about" ? "about " : "introduction"}
    >
      <p className="text-pretty font-mono text-sm text-gray-500 mt-2 max-w-xl break-words">
        {text}
      </p>
    </CvPreviewCard>
  );
};
