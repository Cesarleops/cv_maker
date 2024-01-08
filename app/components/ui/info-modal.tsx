import Link from "next/link";
import { CvIcons } from "../curriculum/cv-icons";
import { AppButton } from "./button";

interface Props {
  content: React.ReactNode;
  title: string;
  subtitle: string;
}
export const InformationModal = ({ content, title, subtitle }: Props) => {
  return (
    <section className="flex flex-col h-[300px] w-[300px] border-2 border-terciary rounded-2xl p-5 gap-4">
      <header className="flex justify-between items-center">
        <div>
          <h4 className="text-primary font-bold">{title}</h4>
          <p className="text-secondary text-sm">{subtitle}</p>
        </div>

        <button className="p-2 rounded-full bg-terciary">
          <Link href={"/home"}>{CvIcons.goBack()}</Link>
        </button>
      </header>
      <div className="flex flex-col gap-5">{content}</div>
      <AppButton text="Save" />
    </section>
  );
};
