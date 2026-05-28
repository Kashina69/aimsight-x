import { createSignal, Show } from "solid-js";
import DashboardSidebar from "~/components/layouts/DashboardSidebar";
import DashboardTopbar from "~/components/layouts/DashboardTopbar";

type DashboardLayoutProps = {
  rootPath: string;
  children: any;
};

const user = {
  firstName: "Maya",
  lastName: "R.",
  email: "maya@nexa.co",
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);
  const [userMenuOpen, setUserMenuOpen] = createSignal(false);

  return (
    <div class="min-h-screen bg-[#f7f5f0] text-[#1a1a1a] [font-family:'Space_Grotesk',sans-serif]">
      <div class="mx-auto flex min-h-screen max-w-[1600px]">
        <div class="hidden md:block">
          <DashboardSidebar rootPath={props.rootPath} />
        </div>

        <div class="flex-1">
          <DashboardTopbar
            user={user}
            subtitle="Project control center"
            menuOpen={userMenuOpen}
            setMenuOpen={setUserMenuOpen}
            onToggleSidebar={() => setSidebarOpen(true)}
          />

          <main class="min-h-[calc(100vh-88px)] border-b-2 border-[#1a1a1a] bg-[#f7f5f0] px-6 py-6">
            {props.children}
          </main>
        </div>
      </div>

      <Show when={sidebarOpen()}>
        <div class="fixed inset-0 z-40 overflow-y-auto bg-[#f7f5f0] p-5 shadow-[8px_8px_0_#1a1a1a] md:hidden">
          <DashboardSidebar rootPath={props.rootPath} onClose={() => setSidebarOpen(false)} />
        </div>
      </Show>
    </div>
  );
}
