import { createMiddleware } from "@solidjs/start/middleware";
import type { FetchEvent } from "@solidjs/start/server/types";
import { verifyToken } from "../routes/api/utils/authentication/auth.utils";
import { AUTH_ONLY, PROTECTED } from "~/constants/routs";

function getCookieFromEvent(event:FetchEvent){
  return event.request.headers.get("cookie") ?? "";
}

function getAuthTokenFromEvent(event:FetchEvent) {
  const cookies = getCookieFromEvent(event);
  const tokenMatch = cookies.match(/(?:^|;\s*)auth_token=([^;]+)/);
  return tokenMatch?.[1] ?? null;
}
function getPathNameFromReqEvent(event:FetchEvent){
  const { pathname } = new URL(event.request.url);
  return pathname
}
export default createMiddleware({
  onRequest: async (event) => {
    console.log(typeof event);
    const pathname = getPathNameFromReqEvent(event)
    const token = getAuthTokenFromEvent(event);
    const payload = token ? await verifyToken(token) : null;
    console.log(payload);
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