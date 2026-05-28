import type { APIEvent } from "@solidjs/start/server";
// import {
// 	createSession,
// 	createUser,
// 	serializeSessionCookie,
// 	publicUser,
// } from "~/routes/api/utils/authentication/store";
import validateSignupPayload from "./validateSignupPayload";

// export async function POST(event: APIEvent) {
// 	const result = await validateSignupPayload(event);
// 	if ("error" in result) {
// 		return result.error;
// 	}

// 	const { email, password, firstName, lastName, role, organization } = result.payload;

// 	try {
// 		const user = createUser({
// 			email,
// 			password,
// 			firstName,
// 			lastName,
// 			role,
// 			organization,
// 		});

// 		const session = createSession(user.id);
// 		return new Response(JSON.stringify({ user: publicUser(user) }), {
// 			status: 201,
// 			headers: {
// 				"Content-Type": "application/json",
// 				"Set-Cookie": serializeSessionCookie(session.token),
// 			},
// 		});
// 	} catch (error) {
// 		const message = error instanceof Error ? error.message : "Signup failed";
// 		return new Response(JSON.stringify({ error: message }), {
// 			status: 400,
// 			headers: { "Content-Type": "application/json" },
// 		});
// 	}
// }


// src/routes/api/authentication/signup.ts
import { MongoServerError } from "mongodb";
import { err, okWithCookie } from "../../utils/api";
import { getUsersCollection } from "../../config/dbConfig";
import { hashPassword, signToken, toPublicUser } from "../../utils/authentication/auth.utils";

export async function POST(event: APIEvent) {
  // const body = await event.request.json();

  const result = await validateSignupPayload(event);
  if ("error" in result) {
    return result.error;
  }

  const { email, password, firstName, lastName, role, organization } = result.payload;


  if (!email || !password || !firstName) return err("All fields are required", 400);
  if (password.length < 8) return err("Password must be at least 8 characters", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return err("Invalid email", 400);

  const users = await getUsersCollection();

  try {
    const now = new Date();
    const result = await users.insertOne({
      email: email.toLowerCase().trim(),
      passwordHash: await hashPassword(password),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      createdAt: now,
      updatedAt: now,
    });

    const user = await users.findOne({ _id: result.insertedId });
    if (!user) return err("Failed to create user", 500);

    const token = await signToken({ sub: user._id.toString(), email: user.email });
    return okWithCookie(toPublicUser(user), token, 201);

  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      return err("An account with this email already exists", 409);
    }
    console.error("[signup]", error);
    return err("Internal server error", 500);
  }
}