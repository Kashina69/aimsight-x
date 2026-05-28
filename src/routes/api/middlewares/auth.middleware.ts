import { createMiddleware } from "@solidjs/start/middleware";
import { verifyToken } from "../utils/authentication/auth.utils";

const PROTECTED = ["/dashboard", "/settings", "/api/auth"];
const AUTH_ONLY  = ["/login", "/signup"];

export default createMiddleware({
  onRequest: async (event) => {
    const { pathname } = new URL(event.request.url);
    const cookies = event.request.headers.get("cookie") ?? "";
    const tokenMatch = cookies.match(/(?:^|;\s*)auth_token=([^;]+)/);
    const token = tokenMatch?.[1] ?? null;
    const payload = token ? await verifyToken(token) : null;
    const isAuthenticated = !!payload;

    const isProtected = PROTECTED.some((p) => pathname.startsWith(p));
    const isAuthOnly  = AUTH_ONLY.some((p) => pathname.startsWith(p));

    if (isProtected && !isAuthenticated) {
      const url = new URL("/login", event.request.url);
      url.searchParams.set("next", pathname);
      return Response.redirect(url, 302);
    }

    if (isAuthOnly && isAuthenticated) {
      return Response.redirect(new URL("/dashboard", event.request.url), 302);
    }
  },
});