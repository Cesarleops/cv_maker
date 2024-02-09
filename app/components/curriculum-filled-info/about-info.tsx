"use client";
import { useCvContext } from "@/app/context/store";

export const AboutInfo = () => {
  const {
    cvData: { about },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll max-h-16 ">
      {about && (
        <article className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono">
          <p className="max-w-full text-sm text-pretty break-words">{about}</p>
        </article>
      )}
    </section>
  );
};
