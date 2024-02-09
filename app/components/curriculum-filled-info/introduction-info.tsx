"use client";
import { useCvContext } from "@/app/context/store";

export const IntroductionInfo = () => {
  const {
    cvData: { introduction },
  } = useCvContext();

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll max-h-16">
      {introduction && (
        <article className="bg-[#212636] p-2 flex gap-2 rounded-xl text-titles font-mono ">
          <p className="max-w-full text-pretty break-words text-sm">
            {introduction}
          </p>
        </article>
      )}
    </section>
  );
};
