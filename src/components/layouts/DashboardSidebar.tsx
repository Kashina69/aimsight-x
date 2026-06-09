import { For, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

type DashboardSidebarProps = {
  rootPath: string;
  onClose?: () => void;
  class?: string;
};

const sections = [
  {
    title: "Project Management",
    items: [
      {
        label: "Manage",
        icon: "⊞",
        href: "/manage",
      },
      {
        label: "Launch",
        icon: "◎",
        href: "/launch",
      },
      {
        label: "Archived",
        icon: "▣",
        href: "/archived",
      },
    ],
  },
  {
    title: "Results",
    items: [
      {
        label: "Insights",
        icon: "↗",
        href: "/insights",
      },
      {
        label: "Insights PRO — JEDI",
        icon: "◈",
        href: "/insights-pro",
      },
      {
        label: "Cross Tabs",
        icon: "⊞",
        href: "/cross-tabs",
      },
      {
        label: "Raw Data",
        icon: "☰",
        href: "/raw-data",
      },
    ],
  },
  {
    title: "Role Management",
    items: [
      {
        label: "Users",
        icon: "◎",
        href: "/users",
      },
      {
        label: "Roles",
        icon: "◇",
        href: "/roles",
      },
    ],
  },
  {
    title: "Participants",
    items: [
      {
        label: "Project Invitations",
        icon: "✉",
        href: "/invitations",
      },
      {
        label: "Your Participants",
        icon: "◎",
        href: "/participants",
      },
      {
        label: "Project Submissions",
        icon: "▣",
        href: "/submissions",
      },
    ],
  },
];

export default function DashboardSidebar(props: DashboardSidebarProps) {
  const location = useLocation();

  const isActive = (href: string) =>
    location.pathname === `${props.rootPath}${href}`;

  return (
    <aside
      class={`
        flex
        h-screen
        w-[220px]
        min-w-[220px]
        flex-col
        overflow-y-auto
        border-r
        border-[#3A342C]
        bg-[#1C1917]
        text-[#F5F0E6]
        ${props.class ?? ""}
      `}
    >
      {/* Logo */}
      <div class="border-b border-[#3A342C] px-[18px] py-5">
        <div class="flex items-center gap-3">
          <div
            class="
              flex
              h-[30px]
              w-[30px]
              items-center
              justify-center
              rounded-full
              border
              border-[#F5F0E6]
              bg-[#B85C2A]
              text-[13px]
              font-bold
              text-[#F5F0E6]
            "
          >
            A
          </div>

          <div>
            <div
              class="
                font-serif
                text-[15px]
                font-bold
                tracking-[0.02em]
              "
            >
              aimsight
            </div>

            <div
              class="
                text-[9px]
                uppercase
                tracking-[0.08em]
                text-[#8A837A]
              "
            >
              Capture · Measure · Decide
            </div>
          </div>
        </div>

        <Show when={props.onClose}>
          <button
            onClick={props.onClose}
            class="
              mt-4
              w-full
              border
              border-[#8A837A]
              px-3
              py-2
              text-[11px]
              uppercase
              tracking-wider
              text-[#F5F0E6]
              md:hidden
            "
          >
            Close
          </button>
        </Show>
      </div>

      {/* Navigation */}
      <div class="flex-1">
        <For each={sections}>
          {(section) => (
            <div class="px-3 pb-2 pt-5">
              <div
                class="
                  px-2
                  pb-2
                  text-[9px]
                  uppercase
                  tracking-[0.12em]
                  text-[#6B6358]
                "
              >
                {section.title}
              </div>

              <div class="space-y-1">
                <For each={section.items}>
                  {(item) => (
                    <A
                      href={`${props.rootPath}${item.href}`}
                      class={`
                        flex
                        items-center
                        gap-2
                        rounded-sm
                        border
                        px-2
                        py-[7px]
                        text-[13px]
                        transition-colors
                        ${isActive(item.href)
                          ? `
                              border-[#8C3C14]
                              bg-[#B85C2A]
                              font-medium
                              text-[#F5F0E6]
                            `
                          : `
                              border-transparent
                              text-[#C8C0B0]
                              hover:bg-[#2C2620]
                              hover:text-[#F5F0E6]
                            `
                        }
                      `}
                    >
                      <span
                        class={`w-4 text-center ${isActive(item.href)
                            ? "opacity-100"
                            : "opacity-70"
                          }`}
                      >
                        {item.icon}
                      </span>

                      <span>{item.label}</span>
                    </A>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Footer */}
      <div class="mt-auto border-t border-[#3A342C] px-[18px] py-4">
        <div class="flex items-center gap-3">
          <div
            class="
              flex
              h-[30px]
              w-[30px]
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
            K
          </div>

          <div class="min-w-0 flex-1">
            <div
              class="
                truncate
                text-[12px]
                font-semibold
                text-[#F5F0E6]
              "
            >
              knight
            </div>

            <div
              class="
                truncate
                text-[10px]
                text-[#6B6358]
              "
            >
              knight@yopmail.com
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}