import { auth } from "@/auth";

export default async function Collections() {
  const ses = await auth();
  console.log("sesion", ses);
  return (
    <section>
      <p>Ca</p>
    </section>
  );
}
