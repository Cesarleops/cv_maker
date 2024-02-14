"use client";
import { useCvContext } from "@/app/context/store";

export const AboutInfo = () => {
  const {
    cvData: { about },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 ">
      {about && (
        <article className="bg-titles flex gap-2 rounded-xl text-sections font-mono p-2 max-h-16 overflow-y-scroll">
          <p className="max-w-full text-sm text-pretty break-words">{about}</p>
        </article>
      )}
    </section>
  );
};
