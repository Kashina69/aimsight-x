import type { APIEvent } from "@solidjs/start/server";
import {
  getSessionCookieName,
  getUserFromSession,
  parseCookies,
  publicUser,
} from "~/routes/api/utils/authentication/store";

export async function GET(event: APIEvent) {
  const cookies = parseCookies(event.request.headers.get("cookie"));
  const token = cookies[getSessionCookieName()];
  const user = getUserFromSession(token);

  if (!user) {
    return new Response(JSON.stringify({ user: null }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ user: publicUser(user) }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
