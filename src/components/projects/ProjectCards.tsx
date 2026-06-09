import { Show, createSignal } from "solid-js";
import { Project } from "~/types/project.types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard(props: ProjectCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);

  return (
    <div class="flex w-full max-w-sm flex-col border border-[#C8C0B0] bg-[#F5F0E6] shadow-sm">
      {/* Header */}
      <div class="flex items-center justify-between border-b border-[#C8C0B0] px-4 py-3">
        <div class="flex items-center gap-2">
          {/* Status Indicator */}
          <span
            class={`h-2 w-2 rounded-full ${
              props.project.status === "active" ? "bg-green-600" : "bg-gray-400"
            }`}
          />
          <span class="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">
            {props.project.status}
          </span>
        </div>

        {/* Dropdown Container */}
        <div class="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen())}
            class="
              border
              border-[#1C1917]
              bg-[#F5F0E6]
              px-2
              py-1
              text-[11px]
              text-[#4A453F]
              transition-colors
              hover:bg-[#EDE7D8]
            "
          >
            Change Status
          </button>

          {/* Dropdown Menu */}
          <Show when={isDropdownOpen()}>
            <div
              class="
                absolute
                right-0
                top-full
                z-10
                mt-1
                w-32
                border
                border-[#1C1917]
                bg-[#F5F0E6]
                shadow-md
              "
            >
              <button
                class="w-full px-3 py-2 text-left text-[11px] text-[#4A453F] hover:bg-[#EDE7D8]"
                onClick={() => setIsDropdownOpen(false)}
              >
                Set Active
              </button>
              <button
                class="w-full px-3 py-2 text-left text-[11px] text-[#4A453F] hover:bg-[#EDE7D8]"
                onClick={() => setIsDropdownOpen(false)}
              >
                Set Inactive
              </button>
              <button
                class="w-full px-3 py-2 text-left text-[11px] text-[#4A453F] hover:bg-[#EDE7D8]"
                onClick={() => setIsDropdownOpen(false)}
              >
                Set Completed
              </button>
            </div>
          </Show>
        </div>
      </div>

      {/* Body */}
      <div class="flex-1 p-4">
        <h3
          class="
            font-serif
            text-[18px]
            font-bold
            text-[#1C1917]
          "
        >
          {props.project.title}
        </h3>

        <div
          class="
            mt-1
            font-mono
            text-[10px]
            tracking-wide
            text-[#8A837A]
          "
        >
          ID: {props.project.id}
        </div>

        <div
          class="
            mt-4
            grid
            grid-cols-[90px_1fr]
            gap-x-3
            gap-y-2
          "
        >
          <span class="text-[11px] text-[#8A837A]">Sector</span>
          <span class="text-[12px] text-[#4A453F]">
            {props.project.sector}
          </span>

          <span class="text-[11px] text-[#8A837A]">Solutions</span>
          <span class="text-[12px] text-[#4A453F]">
            {props.project.solutions}
          </span>

          <span class="text-[11px] text-[#8A837A]">Locations</span>
          <span class="font-mono text-[12px] text-[#B85C2A]">
            {props.project.locations}
          </span>

          <span class="text-[11px] text-[#8A837A]">Owner</span>
          <span class="text-[12px] text-[#4A453F]">
            {props.project.owner}
          </span>

          <span class="text-[11px] text-[#8A837A]">Manager</span>
          <span class="text-[12px] italic text-[#8A837A]">
            {props.project.manager ?? "Not assigned"}
          </span>
        </div>

        <Show when={props.project.note}>
          <div
            class="
              mt-4
              border-l-2
              border-[#C8C0B0]
              bg-[#EDE7D8]
              px-3
              py-2
              text-[12px]
              italic
              text-[#4A453F]
            "
          >
            {props.project.note}
          </div>
        </Show>
      </div>

      {/* Footer */}
      <div
        class="
          flex
          items-center
          justify-between
          border-t
          border-[#C8C0B0]
          bg-[#EDE7D8]
          px-4
          py-2
        "
      >
        <span
          class="
            font-mono
            text-[11px]
            text-[#8A837A]
          "
        >
          Created {props.project.createdAt}
        </span>

        <span
          class="
            border
            border-[#B85C2A]
            bg-[#F5E8DF]
            px-2
            py-1
            font-mono
            text-[10px]
            uppercase
            text-[#B85C2A]
          "
        >
          Ownership
        </span>
      </div>
    </div>
  );
}

