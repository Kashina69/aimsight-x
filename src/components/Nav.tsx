import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname
      ? "border-[#1a1a1a]"
      : "border-transparent hover:border-[#1a1a1a]";
  return (
    <nav class="sticky top-0 z-20 border-b-2 border-[#1a1a1a] bg-[#f7f5f0]">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-10">
            <A
              href="/"
              class="text-[28px] tracking-[4px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]"
            >
              Aimsight
            </A>
            <ul class="flex flex-wrap items-center gap-6 text-[13px] uppercase tracking-[2px] text-[#1a1a1a] [font-family:'DM_Mono',monospace] pt-2">
              <li class={`border-b-2 ${active("/")} pb-1`}>
                <A href="/">Home</A>
              </li>
              <li class={`border-b-2 ${active("/about")} pb-1`}>
                <A href="/about">About</A>
              </li>
            </ul>
          </div>
          <A
            href="/authentication"
            class="inline-flex h-10 items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 text-[12px] font-bold uppercase tracking-[2px] text-[#f7f5f0] shadow-[3px_3px_0_#1a1a1a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1a1a1a]"
          >
            Get started
          </A>
        </div>
      </div>
    </nav>
  );
}
