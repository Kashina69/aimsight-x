import { createSignal, Show } from "solid-js";
import { Navigate } from "@solidjs/router";
import { useGetUser } from "~/hooks/auth";
import { AuthSelection } from "~/components/authentication/Auth";
import { checkIsAuthenticated } from "~/utils/auth.utils";

export default function Home() {
  const user = useGetUser();
  const isAuthenticated = checkIsAuthenticated()
  
  const [show, setShow] = createSignal(true)

  const destination = () => {
    if (user()) return "/";
    return "/enterprise/projects";
  };

  return (
    <Show
      when={show}
      fallback={<AuthSelection />}
    >
      <Navigate href={destination()} />
    </Show>
  );
}
