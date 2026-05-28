import { For, Show } from "solid-js";
import { A } from "@solidjs/router";

const sections = [
  {
    title: "Project Management",
    icon: "📁",
    items: [
      { label: "Manage", href: "/manage" },
      { label: "Launch", href: "/launch" },
      { label: "Archived", href: "/archived" },
    ],
  },
  {
    title: "Results",
    icon: "📊",
    items: [
      { label: "Insights", href: "/insights" },
      { label: "Insights PRO - JEDI", href: "/insights-pro" },
      { label: "Cross Tabs", href: "/cross-tabs" },
      { label: "Raw Data", href: "/raw-data" },
    ],
  },
  {
    title: "Role Management",
    icon: "🛡️",
    items: [
      { label: "Users", href: "/users" },
      { label: "Roles", href: "/roles" },
    ],
  },
  {
    title: "Participant Management",
    icon: "🧑‍🤝‍🧑",
    items: [
      { label: "Project invitations", href: "/invitations" },
      { label: "Your Participants", href: "/participants" },
      { label: "Project Submissions", href: "/submissions" },
    ],
  },
];

export default function DashboardSidebar(props) {
  return (
    <aside class={`flex h-full min-h-screen flex-col gap-8 border-r-2 border-[#1a1a1a] bg-[#f7f5f0] text-[#1a1a1a] ${props.class ?? ""}`}>
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a] text-[18px] font-bold uppercase tracking-[2px] text-[#f7f5f0]">
            E
          </div>
          <div>
            <div class="text-[11px] uppercase tracking-[3px] opacity-75 [font-family:'DM_Mono',monospace]">
              Enterprise
            </div>
            <div class="text-[24px] tracking-[2px] [font-family:'Bebas_Neue',sans-serif]">
              Dashboard
            </div>
          </div>
        </div>

        <Show when={props.onClose}>
          <button
            type="button"
            onClick={props.onClose}
            class="md:hidden inline-flex items-center justify-center border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3 py-2 text-[12px] font-bold uppercase tracking-[2px] text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a]"
          >
            Close
          </button>
        </Show>
      </div>

      <nav class="space-y-8">
        <For each={sections}>
          {(section) => (
            <div class="space-y-3">
              <div class="flex items-center gap-3 border-b-2 border-[#1a1a1a] pb-3">
                <span class="text-[18px]">{section.icon}</span>
                <span class="text-[11px] uppercase tracking-[2px] [font-family:'DM_Mono',monospace]">
                  {section.title}
                </span>
              </div>
              <div class="space-y-2">
                <For each={section.items}>
                  {(item) => (
                    <A
                      href={`${props.rootPath}${item.href}`}
                      class="group flex items-center gap-3 border-2 border-[#1a1a1a] bg-[#f7f5f0] px-4 py-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[#1a1a1a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#1a1a1a]"
                    >
                      <span class="text-[14px]">•</span>
                      <span>{item.label}</span>
                    </A>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </nav>

      <div class="mt-auto">
        <button
          type="button"
          class="inline-flex w-full items-center justify-center gap-2 border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-3 text-[12px] font-bold uppercase tracking-[2px] text-[#f7f5f0] shadow-[4px_4px_0_#1a1a1a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1a1a1a]"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
