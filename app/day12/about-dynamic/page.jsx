import { cookies } from "next/headers";

export default async function About() {
  const cookiesStore = await cookies();

  const theme = cookiesStore.get("theme");
  console.log(theme);
  return (
    <div>
      <h1>About Page Dynamic component {new Date().getMilliseconds()}</h1>
    </div>
  );
}
