// import type { APIEvent } from "@solidjs/start/server";
// import {
//   destroySession,
//   getSessionCookieName,
//   parseCookies,
//   serializeSessionCookie,
// } from "~/routes/api/utils/authentication/store";

import { ok } from "../../utils/api";
import { clearAuthCookie } from "../../utils/authentication/auth.utils";

// export async function POST(event: APIEvent) {
//   const cookies = parseCookies(event.request.headers.get("cookie"));
//   const token = cookies[getSessionCookieName()];
//   if (token) {
//     destroySession(token);
//   }

//   return new Response(JSON.stringify({ ok: true }), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Set-Cookie": serializeSessionCookie(null),
//     },
//   });
// }



// src/routes/api/authentication/signout.ts

export async function POST() {
  const res = ok({ message: "Signed out" });
  clearAuthCookie(res);
  return res;
}