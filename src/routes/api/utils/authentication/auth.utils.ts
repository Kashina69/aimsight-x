import { getRequestEvent } from "solid-js/web";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import type { JWTPayload, UserPublic, UserDocument } from "~/types/auth";
import { resolve } from "node:path";
import { config as loadEnv } from "dotenv";

loadEnv({ path: resolve(process.cwd(), ".env") });

const COOKIE_NAME = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;



const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

const SALT_ROUNDS = 12;
const TOKEN_TTL = "7d";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}


function getCookieOptions() {
  return [
    `HttpOnly`,
    `Path=/`,
    `Max-Age=${COOKIE_MAX_AGE}`,
    `SameSite=Lax`,
    process.env.NODE_ENV === "production" ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

export function setAuthCookie(response: Response, token: string): void {
  response.headers.append(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; ${getCookieOptions()}`
  );
}

export function clearAuthCookie(response: Response): void {
  response.headers.append(
    "Set-Cookie",
    `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`
  );
}

export function getTokenFromRequest(event: { request: Request }): string | null {
  const cookies = event.request.headers.get("cookie") ?? "";
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match?.[1] ?? null;
}

export async function getAuthenticatedUser(
  event: { request: Request }
): Promise<JWTPayload | null> {
  const token = getTokenFromRequest(event);
  if (!token) return null;
  return verifyToken(token);
}

// ─── Password ────────────────────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// ─── JWT ─────────────────────────────────────────────────────────────────────

export async function signToken(payload: JWTPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_TTL)
    .sign(JWT_SECRET);
}

export async function verifyToken(
  token: string
): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JWTPayload;
  } catch {
    return null;
  }
}






// ─── Serializer ──────────────────────────────────────────────────────────────

export function toPublicUser(doc: UserDocument): UserPublic {
  return {
    id: doc._id.toString(),
    email: doc.email,
    name: doc.name,
    createdAt: doc.createdAt,
  };
}