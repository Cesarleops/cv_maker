import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";

import { CvLinks } from "../ui/cv-links";

export const LinksType = ({
  links,
  preview = false,
}: {
  links: State["links"];
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview} title="Links" instruction="links">
      <CvLinks links={links} />
    </CvPreviewCard>
  );
};
