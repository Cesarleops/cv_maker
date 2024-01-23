"use client";
import { useState } from "react";
import { Icons } from "./icons";
import Link from "next/link";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section
      className={`bg-sections rounded-full w-[150px] h-[60px] scale-1 flex flex-col items-center justify-center transition-all duration-500 ease-in ${
        showMenu ? "w-[250px] scale-[1.30]  " : ""
      }`}
      onClick={() => setShowMenu(!showMenu)}
    >
      {!showMenu ? (
        Icons.menu({
          className: "w-6 h-6 stroke-white",
        })
      ) : (
        <section className="flex gap-4 items-center ">
          <Link href="/home/preview">
            <button className="animate-appear duration-500 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-titles"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </button>
          </Link>
          <Link href="home/signup">
            <button className="animate-appear duration-500 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-titles"
              >
                <path d="M13 4h3a2 2 0 0 1 2 2v14" />
                <path d="M2 20h3" />
                <path d="M13 20h9" />
                <path d="M10 12v.01" />
                <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
              </svg>
            </button>
          </Link>
        </section>
      )}
    </section>
  );
};
