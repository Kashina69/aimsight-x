import { A } from "@solidjs/router"; // anchor tag

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <p>
        <A href="/about">About</A>
      </p>
    </main>
  );
}
