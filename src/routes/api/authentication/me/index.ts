import type { APIEvent } from "@solidjs/start/server";
// import {
//   getSessionCookieName,
//   getUserFromSession,
//   parseCookies,
//   publicUser,
// } from "~/routes/api/utils/authentication/store";

// export async function GET(event: APIEvent) {
//   const cookies = parseCookies(event.request.headers.get("cookie"));
//   const token = cookies[getSessionCookieName()];
//   const user = getUserFromSession(token);

//   if (!user) {
//     return new Response(JSON.stringify({ user: null }), {
//       status: 401,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   return new Response(JSON.stringify({ user: publicUser(user) }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }



// src/routes/api/auth/me.ts
import { ObjectId } from "mongodb";
import { err, ok } from "../../utils/api";
import { getUsersCollection } from "../../config/dbConfig";
import { getAuthenticatedUser, toPublicUser } from "../../utils/authentication/auth.utils";

export async function GET(event: APIEvent) {
  const payload = await getAuthenticatedUser(event);
  if (!payload) return err("Unauthorized", 401);

  const users = await getUsersCollection();
  const user = await users.findOne({ _id: new ObjectId(payload.sub) });
  if (!user) return err("User not found", 404);

  return ok(toPublicUser(user));
}