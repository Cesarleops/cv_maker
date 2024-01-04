export const SignUp = () => {
  return (
    <section className="flex items-center justify-center h-screen w-screen">
      <form className="bg-[#f5f5f5] w-[500px] h-[500px] flex flex-col  items-center gap-5 p-10 rounded-lg">
        <label className="flex flex-col" htmlFor="username">
          Username
          <input type="text" name="username" />
        </label>
        <label className="flex flex-col">
          Email
          <input type="email" name="email" />
        </label>
        <label className="flex flex-col" htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>

        <button className="bg-black text-white rounded-xl w-40 h-10">
          Continue
        </button>
      </form>
    </section>
  );
};
