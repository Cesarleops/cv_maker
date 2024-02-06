import { State } from "@/types";
import { CvPreviewCard } from "../ui/cv-preview-card";
import { CvIcons } from "../ui/cv-icons";
import { Icons } from "../ui/icons";

export const LinksType = ({
  links,
  preview = false,
}: {
  links: State["links"];
  preview?: boolean;
}) => {
  console.log("ll", links);
  return (
    <CvPreviewCard preview={preview}>
      <p className="text-xl font-bold">Links</p>
      {links.length > 0 ? (
        <ul className="flex gap-6 items-center justify-start mt-4">
          <li className="bg-[#212636] p-2 rounded-xl shadow-md animate-appear">
            <a href={links[0].email} target="_blank">
              {Icons.email({ className: "stroke-white" })}
            </a>
          </li>
          <li className="bg-[#212636] p-2 rounded-xl shadow-md animate-appear">
            <a href={links[0].github} target="_blank">
              {CvIcons.github({ className: "stroke-white" })}
            </a>
          </li>
          <li className="bg-[#212636] p-2 rounded-xl shadow-md animate-appear">
            <a href={links[0].portfolio} target="_blank">
              {CvIcons.portfolio({ className: "stroke-white" })}
            </a>
          </li>
          <li className="bg-[#212636] p-2 rounded-xl shadow-md animate-appear">
            <a href={links[0].linkedin} target="_blank">
              {CvIcons.linkedin({ className: "stroke-white" })}
            </a>
          </li>
        </ul>
      ) : null}
    </CvPreviewCard>
  );
};
