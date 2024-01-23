import { CvPreviewCard } from "../ui/cv-preview-card";

export const LinksType = ({
  links,
  preview = false,
}: {
  links: string[];
  preview?: boolean;
}) => {
  return (
    <CvPreviewCard preview={preview}>
      <p className="text-xl font-bold">Links</p>

      <ul className="flex gap-4 items-center">
        {links.map((link) => (
          <li
            className={`
    animate-appear`}
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
    </CvPreviewCard>
  );
};
