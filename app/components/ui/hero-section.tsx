import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-5 pt-60">
      <h1 className="text-6xl font-bold text-sections">
        Creative curriculum crafting
      </h1>
      <p className="text-xl font-mono text-gray-500 ">
        Automated creation, position-oriented, user-friendly.
      </p>
      <div className="flex gap-4">
        <Link href={"/home"}>
          <button className="flex group gap-2 text-gray-500   w-[200px] items-center justify-center bg-sections font-semibold p-2 mt-5 rounded-xl shadow-sm hover:border-2  border-titles ease-in duration-150 transition-colors hover:text-titles ">
            Create
          </button>
        </Link>
      </div>
    </section>
  );
};
