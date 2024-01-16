"use client";

import { AppInput } from "../../ui/input";
import { addToList } from "@/app/lib/actions";
import { useRef } from "react";
import { AppButton } from "../../ui/button";
import { useCv } from "@/app/hooks/useCv";
export const ListedInfoForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { formAction } = useCv(addToList, "links", inputRef);

  return (
    <section className="flex flex-col gap-4">
      <form className="flex gap-2" action={formAction}>
        <AppInput
          type="text"
          id="listItem"
          name="listItem"
          placeholder="awesomeemail@example.com"
          ref={inputRef}
        />

        <AppButton text="Add" type="submit" />
      </form>
    </section>
  );
};
