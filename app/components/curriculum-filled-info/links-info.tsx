"use client";

import { useCvContext } from "@/app/context/store";
import { CvIcons } from "../ui/cv-icons";
import { Icons } from "../ui/icons";

export const LinksInfo = () => {
  const {
    cvData: { links },
  } = useCvContext();
  return (
    links.length > 0 && (
      <ul className="flex gap-6 items-center justify-center ">
        <li className="bg-[#212636] p-2 rounded-xl shadow-md">
          <a href={links[0].email}>
            {Icons.email({ className: "stroke-white" })}
          </a>
        </li>
        <li className="bg-[#212636] p-2 rounded-xl shadow-md">
          <a href={links[0].github} target="_blank">
            {CvIcons.github({ className: "stroke-white" })}
          </a>
        </li>
        <li className="bg-[#212636] p-2 rounded-xl shadow-md">
          <a href={links[0].portfolio}>
            {CvIcons.portfolio({ className: "stroke-white" })}
          </a>
        </li>
        <li className="bg-[#212636] p-2 rounded-xl shadow-md">
          <a href={links[0].linkedin}>
            {CvIcons.linkedin({ className: "stroke-white" })}
          </a>
        </li>
      </ul>
    )
  );
};
