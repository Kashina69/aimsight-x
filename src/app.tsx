import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

function AppLayout(props: { children: any }) {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const showNav = ["/", "/about", "/dashboard"].includes(pathname);

  return (
    <>
      {showNav ? <Nav /> : null}
      <Suspense>{props.children}</Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router
      root={props => <AppLayout>{props.children}</AppLayout>}
    >
      <FileRoutes />
    </Router>
  );
}
