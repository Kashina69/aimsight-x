import type { APIEvent } from "@solidjs/start/server";
import { err, okWithCookie } from "../../utils/api";
import { getUsersCollection } from "../../config/dbConfig";
import { signToken, toPublicUser, verifyPassword } from "../../utils/authentication/auth.utils";
// import {
// 	createSession,
// 	ensureAdminFromEnv,
// 	findUserByEmail,
// 	isValidEmail,
// 	publicUser,
// 	serializeSessionCookie,
// 	verifyPassword,
// } from "~/routes/api/utils/authentication/store";

// type SigninPayload = {
// 	email?: string;
// 	password?: string;
// 	role?: "participant" | "enterprise" | "admin";
// };

// type ValidationResult = {
// 	valid: boolean;
// 	error?: string;
// 	data?: { email: string; password: string; role?: string };
// };

// async function validateSigninPayload(event: APIEvent): Promise<ValidationResult> {
// 	const payload = (await event.request.json()) as SigninPayload;
// 	const email = payload.email?.trim() ?? "";
// 	const password = payload.password ?? "";
// 	const role = payload.role;

// 	if (!isValidEmail(email)) {
// 		return { valid: false, error: "Invalid email" };
// 	}

// 	if (!password) {
// 		return { valid: false, error: "Password is required" };
// 	}

// 	return { valid: true, data: { email, password, role } };
// }

// export async function POST(event: APIEvent) {
// 	const validation = await validateSigninPayload(event);
// 	if (!validation.valid) {
// 		return new Response(JSON.stringify({ error: validation.error }), {
// 			status: 400,
// 			headers: { "Content-Type": "application/json" },
// 		});
// 	}

// 	const { email, password, role } = validation.data!;

// 	if (role === "admin") {
// 		const admin = ensureAdminFromEnv();
// 		if (!admin) {
// 			return new Response(JSON.stringify({ error: "Admin not configured" }), {
// 				status: 403,
// 				headers: { "Content-Type": "application/json" },
// 			});
// 		}
// 	}

// 	const user = findUserByEmail(email);
// 	if (!user || !verifyPassword(user, password)) {
// 		return new Response(JSON.stringify({ error: "Invalid credentials" }), {
// 			status: 401,
// 			headers: { "Content-Type": "application/json" },
// 		});
// 	}

// 	if (role && user.role !== role) {
// 		return new Response(JSON.stringify({ error: "Role mismatch" }), {
// 			status: 403,
// 			headers: { "Content-Type": "application/json" },
// 		});
// 	}

// 	const session = createSession(user.id);
// 	return new Response(JSON.stringify({ user: publicUser(user) }), {
// 		status: 200,
// 		headers: {
// 			"Content-Type": "application/json",
// 			"Set-Cookie": serializeSessionCookie(session.token),
// 		},
// 	});
// }



// src/routes/api/authentication/signin.ts

export async function POST(event: APIEvent) {
  const body = await event.request.json();
  const { email, password } = body;

  if (!email || !password) {
    return err("Email and password are required", 400);
  }

  const users = await getUsersCollection();
  const user = await users.findOne({ email: email.toLowerCase().trim() });

  const dummyHash = "$2b$12$invalidhashinvalidhashinvalidhash";
  const passwordValid = await verifyPassword(
    password,
    user?.passwordHash ?? dummyHash
  );

  if (!user || !passwordValid) {
    return err("Invalid email or password", 401);
  }

  const token = await signToken({ sub: user._id.toString(), email: user.email });
  return okWithCookie(toPublicUser(user), token);
}