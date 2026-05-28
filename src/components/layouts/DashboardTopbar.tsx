import { createMemo, Show } from "solid-js";

type DashboardTopbarProps = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  subtitle?: string;
  menuOpen: () => boolean;
  setMenuOpen: (value: boolean) => void;
  onToggleSidebar: () => void;
};

export default function DashboardTopbar(props: DashboardTopbarProps) {
  const initials = createMemo(() => {
    const first = props.user?.firstName?.[0] ?? "";
    const last = props.user?.lastName?.[0] ?? "";
    return `${first}${last}`.toUpperCase() || "EU";
  });

  return (
    <header class="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#1a1a1a] bg-[#f7f5f0] px-6 py-5 shadow-[3px_3px_0_#1a1a1a]">
      <button
        type="button"
        onClick={props.onToggleSidebar}
        class=" inline-flex items-center justify-center border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3 py-2 text-[16px] font-bold uppercase tracking-[2px] text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a]"
      >
        ☰
      </button>
      <div class="flex gap-4">
        <div class="hidden items-center gap-3 md:flex">
          <div class="flex h-11 w-11 items-center justify-center border-2 border-[#1a1a1a] bg-[#c8b89a] text-[14px] font-bold uppercase tracking-[2px] text-[#1a1a1a]">
            {initials()}
          </div>
          <div class="leading-[1.1]">
            <div class="text-[13px] font-bold uppercase tracking-[1.5px] [font-family:'Bebas_Neue',sans-serif]">
              {props.user?.firstName} {props.user?.lastName}
            </div>
            <div class="text-[11px] tracking-[1px] opacity-70 [font-family:'DM_Mono',monospace]">
              {props.user?.email}
            </div>
          </div>
        </div>
        <div class="relative ml-auto md:ml-0">
          <button
            type="button"
            onClick={() => props.setMenuOpen(!props.menuOpen())}
            class="inline-flex items-center justify-center gap-2 border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3 py-2 text-[12px] font-bold uppercase tracking-[2px] text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1a1a1a]"
          >
            <span>Account</span>
            <span>{props.menuOpen() ? "▲" : "▼"}</span>
          </button>

          <Show when={props.menuOpen()}>
            <div class="absolute right-0 z-20 mt-3 min-w-[220px] space-y-2 border-2 border-[#1a1a1a] bg-[#f7f5f0] p-4 shadow-[6px_6px_0_#1a1a1a]">
              <button class="w-full text-left border-2 border-[#1a1a1a] bg-[#e8e4dc] px-4 py-3 text-[13px] uppercase tracking-[1.5px] text-[#1a1a1a]">
                Account details
              </button>
              <button class="w-full text-left border-2 border-[#1a1a1a] bg-[#e8e4dc] px-4 py-3 text-[13px] uppercase tracking-[1.5px] text-[#1a1a1a]">
                Participant queries
              </button>
              <div class="border-t-[1.5px] border-[#1a1a1a]" />
              <button class="w-full text-left border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-3 text-[13px] uppercase tracking-[1.5px] text-[#f7f5f0]">
                Logout
              </button>
            </div>
          </Show>
        </div>
      </div>
    </header>
  );
}
