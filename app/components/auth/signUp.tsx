import { Icons } from "../ui/icons";
import { AppInput } from "../ui/input";
export const SignUp = () => {
  return (
    <section className="flex items-center justify-center h-screen w-screen">
      <form className="bg-white border-solid border-[#e9eaed] border-2 w-[400px] h-[500px] flex flex-col  gap-5 p-10 rounded-3xl shadow-lg">
        <label className="flex flex-col font-semibold" htmlFor="username">
          Username
          <AppInput type="text" name="username" placeholder="Your name" />
        </label>
        <label className="flex flex-col font-semibold">
          Email
          <AppInput type="email" name="email" placeholder="craftcv@cool.com" />
        </label>
        <label className="flex flex-col font-semibold" htmlFor="password">
          Password
          <div className="flex items-center gap-4">
            <AppInput type="password" name="password" placeholder="xxxxxxx" />

            {Icons.checked({ className: "fill-green-300" })}
          </div>
        </label>
        <button className="bg-black text-white font-medium rounded-xl w-40 h-10">
          Continue
        </button>
      </form>
    </section>
  );
};
