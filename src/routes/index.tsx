import { Show } from "solid-js";

import { useGetUser } from "~/hooks/auth";

import { AuthSelection } from "~/components/authentication/Auth";
import Dashboard from "~/components/dashboard/Dashboard";

export default function Home() {
  const user = useGetUser();

  return (
    <Show when={user()} fallback={<AuthSelection />}>
      <Dashboard />
    </Show>
  );
}
