interface Props {
  size: "small" | "medium" | "large";
}
export const InformationModal = ({ size }: Props) => {
  return (
    <section className="relative">
      <button className="absolute top-4 right-4 p-5 bg-[#f5f6f7]"></button>
    </section>
  );
};
