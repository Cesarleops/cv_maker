import { AppInput } from "../ui/input";
import { ListedInfo } from "../user/listed-info";

interface Props {
  section: string;
}

export const CvInfoFormType = ({ section }: Props) => {
  if (section === "experience")
    return (
      <ul>
        <li>Pu</li>
      </ul>
    );
  if (section === "links" || "skills") return <ListedInfo />;
  return <AppInput type="text" placeholder="type sum" />;
};
