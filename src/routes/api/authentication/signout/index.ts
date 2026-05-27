import type { APIEvent } from "@solidjs/start/server";
import {
  destroySession,
  getSessionCookieName,
  parseCookies,
  serializeSessionCookie,
} from "~/routes/api/utils/authentication/store";

export async function POST(event: APIEvent) {
  const cookies = parseCookies(event.request.headers.get("cookie"));
  const token = cookies[getSessionCookieName()];
  if (token) {
    destroySession(token);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": serializeSessionCookie(null),
    },
  });
}
