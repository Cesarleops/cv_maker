"use client";

import Link from "next/link";

interface Props {
  title: string;
  icon: React.ReactNode;
}
export const CvButton = ({ title, icon }: Props) => {
  return (
    <div className="absolute bottom-3 right-3">
      <Link href={`/home/${title}`}>
        <button className="bg-[#fbfdf7] cursor-auto p-2 rounded-full shadow-md hover:scale-105 hover:border-black hover:border-[1px] hover:border-solid transition-colors duration-100 ">
          {icon}
        </button>
      </Link>
    </div>
  );
};
