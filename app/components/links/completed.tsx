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
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 bg-titles">
          {Icons.email({ className: "stroke-sections" })}
        </li>
      )}
      {links.linkedin && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 bg-titles ">
          {CvIcons.linkedin({ className: "stroke-sections" })}
        </li>
      )}

      {links.github && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 bg-titles ">
          {CvIcons.github({ className: "stroke-sections" })}
        </li>
      )}
      {links.portfolio && (
        <li className=" rounded-lg border-[1px] border-solid  border-borders p-2 bg-titles ">
          {CvIcons.portfolio({ className: "stroke-sections" })}
        </li>
      )}
    </ul>
  );
};
