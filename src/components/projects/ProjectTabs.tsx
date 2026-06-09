import { For } from "solid-js";

export type ProjectTab = "create" | "active" | "edit" | "completed";

type ProjectTabsProps = {
  activeTab: ProjectTab;
  onChange: (tab: ProjectTab) => void;
};

const tabs = [
  { id: "create", label: "Create" },
  { id: "active", label: "Active" },
  { id: "edit", label: "Edit" },
  { id: "completed", label: "Completed" },
] as const;

export default function ProjectTabs(props: ProjectTabsProps) {
  return (
    <div
      class="
        flex
        items-center
        gap-2
        border-b
        border-[#C8C0B0]
        bg-[#F5F0E6]
        px-7
        py-3
      "
    >
      <For each={tabs}>
        {(tab, index) => (
          <>
            {/* Visual separator before the 'Edit' tab */}
            {index() === 2 && <div class="mx-1 h-5 w-px bg-[#C8C0B0]" />}

            <button
              type="button"
              onClick={() => props.onChange(tab.id)}
              class={`
                border
                border-[#1C1917]
                px-4
                py-[6px]
                text-[12px]
                font-medium
                transition-all
                ${
                  props.activeTab === tab.id
                    ? `
                      bg-[#1C1917]
                      text-[#F5F0E6]
                      shadow-[3px_3px_0_#1C1917]
                    `
                    : `
                      bg-[#FDFAF3]
                      text-[#1C1917]
                      hover:-translate-x-px
                      hover:-translate-y-px
                      hover:bg-[#EDE7D8]
                      hover:shadow-[3px_3px_0_#1C1917]
                    `
                }
              `}
            >
              {tab.label}
            </button>
          </>
        )}
      </For>
    </div>
  );
}