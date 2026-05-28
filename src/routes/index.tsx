import { Show } from "solid-js";
import { Navigate } from "@solidjs/router";

import { useGetUser } from "~/hooks/auth";

import { AuthSelection } from "~/components/authentication/Auth";

export default function Home() {
  const user = useGetUser();

  const destination = () => {
    if (!user()) return "/";
    return "/enterprise/projects";
  };

  return (
    <Show
      when={user()}
      fallback={<AuthSelection />}
    >
      <Navigate href={destination()} />
    </Show>
  );
}
