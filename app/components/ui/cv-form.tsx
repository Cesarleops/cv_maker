import Link from "next/link";
import { CvIcons } from "./cv-icons";
import { adjustedTitle } from "@/app/lib/helpers";

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
export const CvInfoForm = ({ children, title, subtitle }: Props) => {
  return (
    <section className="flex flex-col min-h-fit w-full sm:w-1/2 border-2 border-sections rounded-2xl p-5 gap-4">
      <header className="flex justify-between items-center">
        <div>
          <h4 className="text-titles font-bold text-xl">
            {adjustedTitle(title)}
          </h4>
          <p className="text-secondary text-sm">{subtitle}</p>
        </div>

        <button className="p-2 rounded-full bg-terciary">
          <Link href={"/home"}>{CvIcons.goBack()}</Link>
        </button>
      </header>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
};
