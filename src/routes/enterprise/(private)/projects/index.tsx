import { createSignal, For } from "solid-js";
import ProjectCard from "~/components/projects/ProjectCards";
import ProjectTabs, { ProjectTab } from "~/components/projects/ProjectTabs";
import { Project } from "~/types/project.types";


export const projects: Project[] = [
  {
    id: "AIMS-KNIGHT-018",
    title: "April 22",
    sector: "Banking / Finance",
    solutions: "Account Services",
    locations: 0,
    owner: "Knight",
    note: "Customer onboarding research project.",
    createdAt: "2026-04-22",
    status: "active",
  },
  {
    id: "AIMS-KNIGHT-014",
    title: "New MR 27",
    sector: "Government Services",
    solutions: "Documentation & Service Access",
    locations: 2,
    owner: "Knight",
    createdAt: "2026-03-27",
    status: "active",
  },
  {
    id: "AIMS-KNIGHT-011",
    title: "Sampler Test",
    sector: "Banking / Finance",
    solutions: "Loans & Mortgages",
    locations: 4,
    owner: "Knight",
    createdAt: "2026-02-18",
    status: "active",
  },
    {
    id: "AIMS-KNIGHT-018",
    title: "April 22",
    sector: "Banking / Finance",
    solutions: "Account Services",
    locations: 0,
    owner: "Knight",
    note: "Customer onboarding research project.",
    createdAt: "2026-04-22",
    status: "active",
  },
  {
    id: "AIMS-KNIGHT-014",
    title: "New MR 27",
    sector: "Government Services",
    solutions: "Documentation & Service Access",
    locations: 2,
    owner: "Knight",
    createdAt: "2026-03-27",
    status: "active",
  },
  {
    id: "AIMS-KNIGHT-011",
    title: "Sampler Test",
    sector: "Banking / Finance",
    solutions: "Loans & Mortgages",
    locations: 4,
    owner: "Knight",
    createdAt: "2026-02-18",
    status: "active",
  },
];

export default function ProjectsIndex() {
  const [activeTab, setActiveTab] = createSignal<ProjectTab>("active");


  return (
    <div class="space-y-6 bg-[#F5F0E6] min-h-screen">
      {/* 1. Tabs */}
      <ProjectTabs activeTab={activeTab()} onChange={setActiveTab} />

      <div class="px-7 space-y-6">
        {/* 2. Header */}
        <div class="flex items-center gap-3">
          <span class="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8A837A]">
            {activeTab()} Projects
          </span>
          <div class="h-px flex-1 bg-[#C8C0B0]" />
          <span class="border border-[#C8C0B0] px-2 py-1 font-mono text-[10px] text-[#8A837A]">
            {projects.length} Projects
          </span>
        </div>

        {/* 3. Grid */}
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          <For each={projects}>
            {(project) => <ProjectCard project={project} />}
          </For>
        </div>
      </div>
    </div>
  );
}