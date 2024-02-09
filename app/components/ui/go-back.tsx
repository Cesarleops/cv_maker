"use client";

import { useRouter } from "next/navigation";
import { CvIcons } from "./cv-icons";
import { useCv } from "@/app/hooks/useCv";
import { useCvActions } from "@/app/hooks/useCvActions";

export const GoBack = () => {
  const router = useRouter();
  const { stopEditing } = useCvActions();
  return (
    <button
      className="p-2 rounded-full bg-terciary"
      onClick={() => {
        stopEditing();
        router.back();
      }}
    >
      {CvIcons.goBack()}
    </button>
  );
};
