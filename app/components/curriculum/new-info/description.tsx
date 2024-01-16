export const DescriptionType = ({
  type,
  text,
}: {
  type: string;
  text: string;
}) => {
  return (
    <section className="min-h-[200px] rounded-xl w-1/2 bg-terciary shadow-md p-10">
      <p className="text-xl font-bold">
        {type === "about" ? "About" : "Introduction"}
      </p>
      {text}
    </section>
  );
};
