import type { APIEvent } from "@solidjs/start/server";
import {
	createSession,
	createUser,
	serializeSessionCookie,
	publicUser,
} from "~/routes/api/utils/authentication/store";
import validateSignupPayload from "./validateSignupPayload";

export async function POST(event: APIEvent) {
	const result = await validateSignupPayload(event);
	if ("error" in result) {
		return result.error;
	}

	const { email, password, firstName, lastName, role, organization } = result.payload;

	try {
		const user = createUser({
			email,
			password,
			firstName,
			lastName,
			role,
			organization,
		});

		const session = createSession(user.id);
		return new Response(JSON.stringify({ user: publicUser(user) }), {
			status: 201,
			headers: {
				"Content-Type": "application/json",
				"Set-Cookie": serializeSessionCookie(session.token),
			},
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : "Signup failed";
		return new Response(JSON.stringify({ error: message }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}
}