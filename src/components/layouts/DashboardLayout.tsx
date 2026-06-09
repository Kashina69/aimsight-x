import { createSignal, Show } from "solid-js";

import DashboardSidebar from "~/components/layouts/DashboardSidebar";
import DashboardTopbar from "~/components/layouts/DashboardTopbar";

type DashboardLayoutProps = {
  rootPath: string;
  children: any;
  title?: string;
};

const user = {
  firstName: "Knight",
  lastName: "User",
  email: "knight@yopmail.com",
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  return (
    <div
      class="
        flex
        h-screen
        overflow-hidden
        bg-[#F5F0E6]
        text-[#1C1917]
      "
    >
      {/* Desktop Sidebar */}
      <div class="hidden lg:block">
        <DashboardSidebar rootPath={props.rootPath} />
      </div>

      {/* Mobile Sidebar */}
      <Show when={sidebarOpen()}>
        <>
          <div
            class="
              fixed
              inset-0
              z-40
              bg-black/40
              lg:hidden
            "
            onClick={() => setSidebarOpen(false)}
          />

          <div
            class="
              fixed
              left-0
              top-0
              z-50
              h-screen
              lg:hidden
            "
          >
            <DashboardSidebar
              rootPath={props.rootPath}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </>
      </Show>

      {/* Main */}
      <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <DashboardTopbar
          title={props.title}
          user={user}
          onToggleSidebar={() => setSidebarOpen(true)}
        />

        <main
          class="
            flex-1
            overflow-y-auto
            bg-[#F5F0E6]
            px-7
            py-6
          "
        >
          {props.children}
        </main>
      </div>
    </div>
  );
}