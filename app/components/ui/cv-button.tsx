"use client";

import Link from "next/link";

interface Props {
  title: string;
  icon: React.ReactNode;
}
export const CvButton = ({ title, icon }: Props) => {
  return (
    <div className="absolute  rounded-full right-5 top-5">
      <Link href={`/home/${title.toLocaleLowerCase()}`}>
        {icon ? (
          <div className="relative">
            <button className="relative bg-[#262626] cursor-auto p-2 rounded-full transition-colors duration-150 group-hover:bg-lime-400 ">
              {icon}
            </button>
          </div>
        ) : null}
      </Link>
    </div>
  );
};
