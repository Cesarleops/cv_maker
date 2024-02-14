export const EmptyInfo = ({ title }: { title: string }) => {
  return (
    <div className="print:hidden ">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex flex-col items-center gap-2 justify-center">
        <p className="text-md font-light text-gray-300">
          Looks like you haven´t added anything here
        </p>
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
          className="stroke-gray-300"
        >
          <path d="m13.5 8.5-5 5" />
          <path d="m8.5 8.5 5 5" />
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
};
