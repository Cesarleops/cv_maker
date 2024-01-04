import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-screen p-5 flex items-center bg-[#3a3a3a] text-white">
      <h1 className="mr-auto">Here you will see an awesome name</h1>
      <ul className="flex gap-5">
        <li>
          <Link href="/signUp"> Sign In</Link>
        </li>
        <li>
          <button>EN | ES</button>
        </li>
      </ul>
    </header>
  );
};
