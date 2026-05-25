import { createResource, For, Show } from "solid-js";
import { getRequestEvent } from "solid-js/web";

type DummyUser = {
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
  users?: DummyUser[];
  total?: number;
};

async function fetchUsers() {
  const request = getRequestEvent()?.request;
  const url = request
    ? new URL("/api/authentication/", request.url).toString()
    : "/api/authentication/";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to load dashboard data");
  }

  const data = (await response.json()) as DummyUserResponse;
  return data.users ?? [];
}

function Dashboard() {
  const [users] = createResource(fetchUsers);

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
                  <article class="border-2 border-ink bg-bg p-4 shadow-neo">
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
                  </article>
                )}
              </For>
            </div>
          </Show>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;