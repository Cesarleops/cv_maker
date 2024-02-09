import { HeroSection } from "./components/ui/hero-section";

export default function Home() {
  return (
    <section className="h-screen">
      <header className="w-screen p-5 flex items-center font-extrabold text-2xl">
        <h1 className="mr-auto text-titles">Curry</h1>
      </header>
      <section className="w-screen flex items-center justify-center   ">
        <HeroSection />
      </section>
    </section>
  );
}
