import { CvCreator } from "../components/curriculum/cv-creator";

export default function HomePage() {
  return (
    <div>
      <header className="w-screen h-6 pl-4 pt-4">Menu</header>
      <div className="relative flex flex-col items-center justify-center h-screen w-screen ">
        <CvCreator />
      </div>
    </div>
  );
}
