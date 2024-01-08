import { AppInput } from "../ui/input";
import { ListedInfo } from "./listed-info";

export const Editing = ({ section }: { section: string }) => {
  if (section === "experience")
    return (
      <ul>
        <li>Pu</li>
      </ul>
    );
  if (section === "links" || "skills") return <ListedInfo />;
  return <AppInput type="text" placeholder="type sum" />;
};
