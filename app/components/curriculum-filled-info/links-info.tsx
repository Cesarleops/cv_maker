"use client";

import { useCvContext } from "@/app/context/store";

import { CvIcons } from "../ui/cv-icons";
import { Icons } from "../ui/icons";

export const LinksInfo = () => {
  const {
    cvData: { links },
  } = useCvContext();
  return (
    <ul className="flex gap-6 items-center justify-start mt-4">
      {links.email && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          {Icons.email({ className: "stroke-gray-500" })}
        </li>
      )}
      {links.linkedin && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          {CvIcons.linkedin({ className: "stroke-gray-500" })}
        </li>
      )}

      {links.github && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          {CvIcons.github({ className: "stroke-gray-500" })}
        </li>
      )}
      {links.portfolio && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 ">
          {CvIcons.portfolio({ className: "stroke-gray-500" })}
        </li>
      )}
    </ul>
  );
};
