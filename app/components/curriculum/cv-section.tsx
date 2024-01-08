import { CvButton } from "./cv-button";

interface Props {
  className: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}
export const CvSection = ({
  title,
  subtitle,
  className,
  children,
  icon,
}: Props) => {
  return (
    <section
      className={`relative flex flex-col justify-between  bg-[#f5f5f5]  w-[278px] p-5 rounded-[10px] ${className} `}
    >
      <div>
        <p className="text-lg">{title}</p>
        <p className="text-secondary text-sm">{subtitle}</p>
      </div>

      {children}
      {!(title === "Whats your name ?") ? (
        <CvButton title={title.toLocaleLowerCase()} icon={icon} />
      ) : null}
    </section>
  );
};
