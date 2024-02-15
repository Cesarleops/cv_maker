import { useCvActions } from "@/app/hooks/useCvActions";
import { Button } from "./button";
import { CvIcons } from "./cv-icons";
import { cn } from "@/app/lib/utils";

export const CvControls = ({ section }: { section: string }) => {
  const { setEditing, setDeleting, cvData } = useCvActions();

  return (
    <footer className="flex gap-3 items-center">
      <Button
        title="add"
        disabled={
          cvData.editionMode.isDeleting ||
          (cvData.editionMode.isEditing && !cvData.editionMode.editingSection)
        }
        className={cn("w-20 hover:scale-105", {
          "w-12": section === "skills",
        })}
      >
        {cvData.editionMode.isDeleting ||
        (cvData.editionMode.isEditing && !cvData.editionMode.editingSection) ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-sections"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-sections"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </Button>
      {cvData[section].length !== 0 && (
        <>
          <Button
            className={cn(
              "p-2 flex items-center justify-center bg-sections w-20 rounded-xl hover:border-[1px] border-green-500",
              {
                "w-12": section === "skills",
                "border-[1px] border-green-500": cvData.editionMode.isEditing,
              }
            )}
            onClick={() => setEditing(section)}
            type="button"
          >
            {CvIcons.edit()}
          </Button>
          <Button
            type="button"
            className={cn(
              "p-2 flex items-center justify-center bg-sections w-20 rounded-xl hover:border-[1px] border-red-500",
              {
                "w-12": section === "skills",
                "border-[1px] border-red-500": cvData.editionMode.isDeleting,
              }
            )}
            onClick={() => setDeleting()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-red-500"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </Button>
        </>
      )}
    </footer>
  );
};
