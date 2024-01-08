import { AppInput } from "../ui/input";

export const ListedInfo = () => {
  return (
    <section className="flex flex-col gap-4">
      <AppInput type="text" placeholder="awesomeemail@example.com" />

      <AppInput type="text" placeholder="awesomeportfolio.com" />
    </section>
  );
};
