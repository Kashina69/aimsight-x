import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname
      ? "border-ink"
      : "border-transparent hover:border-ink";
  return (
    <nav class="sticky top-0 z-10 bg-surface border-b-2 border-ink">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <A href="/" class="font-display text-3xl text-ink-dark">
            Aimsight
          </A>
          <div class="flex items-center gap-4">
            <A
              href="/"
              class="font-display px-4 h-10 bg-bg border-2 border-ink shadow-neo-sm active:shadow-neo-none active:translate-x-1 active:translate-y-1 transition-all duration-75 inline-flex items-center justify-center"
            >
              Get started
            </A>
          </div>
        </div>
        <ul class="flex flex-wrap items-center gap-6">
          <li class={`border-b-2 ${active("/")} pb-1 font-display text-ink-dark`}>
            <A href="/">Home</A>
          </li>
          <li class={`border-b-2 ${active("/about")} pb-1 font-display text-ink-dark`}>
            <A href="/about">About</A>
          </li>
        </ul>
      </div>
    </nav>
  );
}
