import type { APIEvent } from "@solidjs/start/server";
import { isValidEmail } from "../../utils/authentication/store";

type SignupPayload = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: "participant" | "enterprise";
    organization?: string;
};

export default async function validateSignupPayload(event: APIEvent) {
	const payload = (await event.request.json()) as SignupPayload;
	const email = payload.email?.trim() ?? "";
	const password = payload.password ?? "";
	const firstName = payload.firstName?.trim() ?? "";
	const lastName = payload.lastName?.trim() ?? "";
	const role = payload.role ?? "participant";
	const organization = payload.organization?.trim();

	if (!isValidEmail(email)) {
		return { error: new Response(JSON.stringify({ error: "Invalid email" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		}) };
	}

	if (password.length < 8) {
		return { error: new Response(JSON.stringify({ error: "Password too short" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		}) };
	}

	if (!firstName || !lastName) {
		return { error: new Response(JSON.stringify({ error: "Name is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		}) };
	}

	if (role === "enterprise" && !organization) {
		return { error: new Response(JSON.stringify({ error: "Organization is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		}) };
	}

	return {
		payload: {
			email,
			password,
			firstName,
			lastName,
			role,
			organization,
		} satisfies SignupPayload,
	};
}