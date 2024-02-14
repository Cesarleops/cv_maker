import { CvPreviewCard } from "../ui/cv-preview-card";

export const IntroductionPreview = ({
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
      title={preview ? "" : "Introduction"}
      instruction={"Introduction"}
    >
      <p className="text-pretty font-mono text-sm text-gray-500 mt-2 max-w-md break-words ">
        {text}
      </p>
    </CvPreviewCard>
  );
};
