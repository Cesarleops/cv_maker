import { State } from "@/types";
import { Icons } from "./icons";
import { CvIcons } from "./cv-icons";

export const CvLinks = ({ links }: { links: State["links"] }) => {
  return (
    <ul className="flex gap-6 items-center justify-start mt-4">
      {links.email && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          <a
            href={`mailto:${links.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Icons.email({ className: "stroke-gray-500" })}
          </a>
        </li>
      )}
      {links.linkedin && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            {CvIcons.linkedin({ className: "stroke-gray-500" })}
          </a>
        </li>
      )}

      {links.github && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            {CvIcons.github({ className: "stroke-gray-500" })}
          </a>
        </li>
      )}
      {links.portfolio && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          <a href={links.portfolio} target="_blank" rel="noopener noreferrer">
            {CvIcons.portfolio({ className: "stroke-gray-500" })}
          </a>
        </li>
      )}
    </ul>
  );
};
