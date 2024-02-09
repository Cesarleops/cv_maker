import { useCvActions } from "@/app/hooks/useCvActions";

export const ActiveEditing = () => {
  const { cvData } = useCvActions();
  console.log("es", cvData.editionMode.isEditing);
  return cvData.editionMode.isEditing ? (
    <footer className="p-5 rounded-xl bg-sections text-green-500 font-mono">
      Please select the item that you want to edit
    </footer>
  ) : null;
};
