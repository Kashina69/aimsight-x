import { createSignal, Show } from "solid-js";

type DashboardTopbarProps = {
  title?: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onToggleSidebar: () => void;
};

export default function DashboardTopbar(props: DashboardTopbarProps) {
  const [search, setSearch] = createSignal("");
  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <header
      class="
        flex
        h-[52px]
        items-center
        justify-between
        border-b
        border-[#1C1917]
        bg-[#F5F0E6]
        px-7
      "
    >
      {/* Left */}
      <div class="flex items-center gap-4">
        <button
          type="button"
          onClick={props.onToggleSidebar}
          class="
            flex
            h-8
            w-8
            items-center
            justify-center
            border
            border-[#1C1917]
            bg-[#FDFAF3]
            text-sm
            shadow-[3px_3px_0_#1C1917]
            transition-all
            hover:-translate-x-px
            hover:-translate-y-px
            hover:shadow-[4px_4px_0_#1C1917]
            md:hidden
          "
        >
          ☰
        </button>

        <h1
          class="
            font-serif
            text-[22px]
            font-bold
            tracking-[-0.01em]
            text-[#1C1917]
          "
        >
          {props.title ?? "Manage Projects"}
        </h1>
      </div>

      {/* Right */}
      <div class="flex items-center gap-3">
        {/* Search */}
        <div
          class="
            hidden
            items-center
            gap-2
            border
            border-[#1C1917]
            bg-[#FDFAF3]
            px-3
            py-[5px]
            shadow-[3px_3px_0_#1C1917]
            md:flex
          "
        >
          <span class="text-[#8A837A]">⌕</span>

          <input
            value={search()}
            onInput={(e) => setSearch(e.currentTarget.value)}
            placeholder="Search project..."
            class="
              w-[180px]
              border-none
              bg-transparent
              text-[13px]
              text-[#1C1917]
              outline-none
              placeholder:text-[#8A837A]
            "
          />
        </div>

        {/* User Menu */}
        <div class="relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen())}
            class="
              flex
              items-center
              gap-3
              border
              border-[#1C1917]
              bg-[#FDFAF3]
              px-3
              py-[5px]
              shadow-[3px_3px_0_#1C1917]
              transition-all
              hover:-translate-x-px
              hover:-translate-y-px
              hover:shadow-[4px_4px_0_#1C1917]
            "
          >
            <div
              class="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-[#8C3C14]
                bg-[#B85C2A]
                text-[11px]
                font-bold
                text-[#F5F0E6]
              "
            >
              {props.user.firstName[0]}
              {props.user.lastName[0]}
            </div>

            <div class="hidden text-left lg:block">
              <div
                class="
                  max-w-[120px]
                  truncate
                  text-[12px]
                  font-semibold
                  text-[#1C1917]
                "
              >
                {props.user.firstName} {props.user.lastName}
              </div>

              <div
                class="
                  max-w-[120px]
                  truncate
                  text-[10px]
                  text-[#8A837A]
                "
              >
                {props.user.email}
              </div>
            </div>

            <span class="text-[10px] text-[#8A837A]">
              {menuOpen() ? "▲" : "▼"}
            </span>
          </button>

          <Show when={menuOpen()}>
            <div
              class="
                absolute
                right-0
                top-[calc(100%+10px)]
                z-50
                w-[240px]
                border
                border-[#1C1917]
                bg-[#FDFAF3]
                p-2
                shadow-[4px_4px_0_#1C1917]
              "
            >
              <button
                class="
                  w-full
                  border
                  border-transparent
                  px-3
                  py-2
                  text-left
                  text-[13px]
                  text-[#1C1917]
                  hover:bg-[#EDE7D8]
                "
              >
                Account Details
              </button>

              <button
                class="
                  w-full
                  border
                  border-transparent
                  px-3
                  py-2
                  text-left
                  text-[13px]
                  text-[#1C1917]
                  hover:bg-[#EDE7D8]
                "
              >
                Participant Queries
              </button>

              <div class="my-2 border-t border-[#C8C0B0]" />

              <button
                class="
                  w-full
                  border
                  border-[#8C3C14]
                  bg-[#B85C2A]
                  px-3
                  py-2
                  text-left
                  text-[13px]
                  font-medium
                  text-[#F5F0E6]
                "
              >
                Logout
              </button>
            </div>
          </Show>
        </div>
      </div>
    </header>
  );
}