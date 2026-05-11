import { A } from "@solidjs/router";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>
        <A href="/">Home</A>
      </p>
    </main>
  );
}
