"use client";

import { useRouter } from "next/navigation";
import { CvIcons } from "./cv-icons";
import { useCv } from "@/app/hooks/useCv";
import { useCvActions } from "@/app/hooks/useCvActions";

export const GoBack = () => {
  const router = useRouter();
  const { goBack } = useCvActions();
  return (
    <button
      className="p-2 rounded-full bg-terciary"
      onClick={() => {
        goBack();
        router.back();
      }}
    >
      {CvIcons.goBack()}
    </button>
  );
};
