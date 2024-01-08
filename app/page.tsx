import { Header } from "./components/ui/header";
import { HeroSection } from "./components/ui/hero-section";

export default function Home() {
  return (
    <section className="h-screen">
      <Header />
      <section className="w-screen flex items-center justify-center   ">
        <HeroSection />
      </section>
    </section>
  );
}
