import { Header } from "./components/ui/header";
import { HeroSection } from "./components/ui/hero-section";

export default function Home() {
  return (
    <section>
      <Header />
      <section className="w-screen flex items-center justify-center h-screen ">
        <HeroSection />
      </section>
    </section>
  );
}
