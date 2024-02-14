import { CvPreviewCard } from "../ui/cv-preview-card";

export const AboutPreview = ({
  type,
  text,
  preview = false,
}: {
  type: string;
  text: string;
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview} title={"About"} instruction={"about"}>
      <p className="text-pretty font-mono text-sm text-gray-500 mt-2 max-w-md break-words ">
        {text}
      </p>
    </CvPreviewCard>
  );
};
