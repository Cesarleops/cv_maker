import Link from "next/link";
import { CvIcons } from "../../ui/cv-icons";

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
export const CvInfoForm = ({ children, title, subtitle }: Props) => {
  const adjustedTitle = (title: string) => {
    const newTitle = title[0].toLocaleUpperCase() + title.slice(1);
    return newTitle;
  };

  console.log(adjustedTitle(title));
  return (
    <section className="flex flex-col min-h-[300px] min-w-[300px] border-2 border-terciary rounded-2xl p-5 gap-4">
      <header className="flex justify-between items-center">
        <div>
          <h4 className="text-primary font-bold text-xl">
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
