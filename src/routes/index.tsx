import { A } from "@solidjs/router"; // anchor tag
import { createSignal } from "solid-js";
import { AuthSelection } from "~/components/authentication/Auth";
import Dashboard from "~/components/dashboard/Dashboard";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = createSignal(true);
  console.log(isAuthenticated());
  return (
    <div>
      {
        isAuthenticated() ? <Dashboard /> : <AuthSelection />
      }
    </div>
  );
}
