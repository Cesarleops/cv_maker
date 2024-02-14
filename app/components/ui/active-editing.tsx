import { useCvActions } from "@/app/hooks/useCvActions";

export const ActiveEditing = () => {
  const { cvData } = useCvActions();

  if (cvData.editionMode.isDeleting) {
    return (
      <footer className="p-5 rounded-xl bg-titles text-red-500 font-normal">
        Please select the item that you want to delete
      </footer>
    );
  }

  if (cvData.editionMode.isEditing)
    return (
      <footer className="p-5 rounded-xl bg-titles text-green-500 font-normal appear">
        Please select the item that you want to edit
      </footer>
    );
};
