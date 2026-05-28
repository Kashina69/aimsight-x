import { createResource, createSignal, For, Show } from "solid-js";
import { getRequestEvent } from "solid-js/web";
import Modal from "~/components/Modal";

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  image?: string;
  company?: { name?: string };
  address?: { city?: string };
};

type DummyUserResponse = {
  users?: UserType[];
  total?: number;
};

async function fetchUsers() {
  const request = getRequestEvent()?.request;
  const url = request
    ? new URL("/api/dashboard/", request.url).toString()
    : "/api/dashboard/";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to load dashboard data");
  }

  const data = (await response.json()) as DummyUserResponse;
  return data.users ?? [];
}

function Dashboard() {
  const [users] = createResource(fetchUsers);
  const [selectedUser, setSelectedUser] = createSignal<UserType | null>(null);
  const selectedUserName = () => {
    const user = selectedUser();
    return user ? `${user.firstName} ${user.lastName}` : "Participant";
  };

  return (
    <main class="min-h-screen bg-bg text-ink px-6 py-10 font-body">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header class="border-2 border-ink bg-surface p-6 shadow-neo">
          <h1 class="font-display text-4xl text-ink-dark">
            Research dashboard
          </h1>
          <p class="mt-3 text-base text-ink leading-relaxed text-justify">
            Live participant records pulled from the authentication API.
          </p>
          <p class="mt-2 text-sm text-ink">
            Source: /api/authentication/auth
          </p>
        </header>

        <section class="border-2 border-ink bg-bg p-6 shadow-neo">
          <h2 class="font-display text-2xl text-ink-dark">Roster</h2>
          <Show
            when={!users.loading && !users.error}
            fallback={
              <div class="mt-4 border-2 border-ink bg-surface p-4 shadow-neo-sm">
                <p class="text-sm text-ink">
                  {users.error
                    ? "Unable to load the roster right now."
                    : "Loading roster..."}
                </p>
              </div>
            }
          >
            <div class="mt-4 grid gap-4 md:grid-cols-2">
              <For each={users()}>
                {(user) => (
                  <article>
                    <button
                      type="button"
                      class="w-full border-2 border-ink bg-bg p-4 text-left shadow-neo transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-4 focus:ring-offset-[#f7f5f0] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_#1a1a1a]"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div class="flex gap-4">
                        <div class="h-16 w-16 border-2 border-ink bg-surface shadow-neo-sm">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={`${user.firstName} ${user.lastName}`}
                              class="h-full w-full object-cover grayscale"
                            />
                          ) : null}
                        </div>
                        <div class="flex flex-col gap-1">
                          <h3 class="font-display text-lg text-ink-dark">
                            {user.firstName} {user.lastName}
                          </h3>
                          <p class="text-sm text-ink">{user.email}</p>
                          {user.company?.name ? (
                            <p class="text-xs text-ink-light">
                              {user.company.name}
                            </p>
                          ) : null}
                          {user.address?.city ? (
                            <p class="text-xs text-ink-light">
                              {user.address.city}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  </article>
                )}
              </For>
            </div>
          </Show>
        </section>
      </div>
      <Modal
        open={Boolean(selectedUser())}
        title={selectedUserName()}
        titleId={`${selectedUserName()}+"id"`}
        onClose={() => setSelectedUser(null)}
      >
        <Show when={selectedUser()}>
          {(user) => (
            <div class="grid gap-5 md:grid-cols-[160px_1fr]">
              <div class="border-2 border-[#1a1a1a] bg-[#e8e4dc] p-3 shadow-[4px_4px_0_#1a1a1a]">
                <div class="aspect-square border-2 border-[#1a1a1a] bg-[#f7f5f0]">
                  {user().image ? (
                    <img
                      src={user().image}
                      alt={selectedUserName()}
                      class="h-full w-full object-cover grayscale"
                    />
                  ) : null}
                </div>
                <p class="mt-3 text-[10px] uppercase tracking-[2px] opacity-70 [font-family:'DM_Mono',monospace]">
                  ID #{user().id}
                </p>
              </div>

              <div class="flex flex-col gap-4">
                <div>
                  <p class="text-[10px] uppercase tracking-[2px] opacity-70 [font-family:'DM_Mono',monospace]">
                    Participant record
                  </p>
                  <h3 class="mt-1 text-[40px] tracking-[1px] [font-family:'Bebas_Neue',sans-serif]">
                    {user().firstName} {user().lastName}
                  </h3>
                </div>

                <dl class="grid gap-3 sm:grid-cols-2">
                  <div class="border-2 border-[#1a1a1a] bg-[#e8e4dc] p-3">
                    <dt class="text-[10px] uppercase tracking-[2px] opacity-70 [font-family:'DM_Mono',monospace]">
                      Email
                    </dt>
                    <dd class="mt-1 break-words text-[14px] leading-[1.6]">
                      {user().email}
                    </dd>
                  </div>
                  <Show when={user().phone}>
                    <div class="border-2 border-[#1a1a1a] bg-[#e8e4dc] p-3">
                      <dt class="text-[10px] uppercase tracking-[2px] opacity-70 [font-family:'DM_Mono',monospace]">
                        Phone
                      </dt>
                      <dd class="mt-1 break-words text-[14px] leading-[1.6]">
                        {user().phone}
                      </dd>
                    </div>
                  </Show>
                  <Show when={user().company?.name}>
                    <div class="border-2 border-[#1a1a1a] bg-[#e8e4dc] p-3">
                      <dt class="text-[10px] uppercase tracking-[2px] opacity-70 [font-family:'DM_Mono',monospace]">
                        Company
                      </dt>
                      <dd class="mt-1 break-words text-[14px] leading-[1.6]">
                        {user().company?.name}
                      </dd>
                    </div>
                  </Show>
                  <Show when={user().address?.city}>
                    <div class="border-2 border-[#1a1a1a] bg-[#e8e4dc] p-3">
                      <dt class="text-[10px] uppercase tracking-[2px] opacity-70 [font-family:'DM_Mono',monospace]">
                        City
                      </dt>
                      <dd class="mt-1 break-words text-[14px] leading-[1.6]">
                        {user().address?.city}
                      </dd>
                    </div>
                  </Show>
                </dl>
              </div>
            </div>
          )}
        </Show>
      </Modal>
    </main>
  );
}

export default Dashboard;