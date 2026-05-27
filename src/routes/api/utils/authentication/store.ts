import { createHash, randomUUID } from "node:crypto";
import { resolve } from "node:path";
import { config as loadEnv } from "dotenv";

loadEnv({ path: resolve(process.cwd(), ".env"), quiet: true });

export type AuthRole = "participant" | "enterprise" | "admin";

export type UserRecord = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: AuthRole;
  organization?: string;
  passwordHash: string;
  createdAt: string;
};

type SessionRecord = {
  token: string;
  userId: string;
  createdAt: number;
};

const usersByEmail = new Map<string, UserRecord>();
const usersById = new Map<string, UserRecord>();
const sessions = new Map<string, SessionRecord>();

const SESSION_COOKIE = "nexa_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

function hashPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

function nowIso() {
  return new Date().toISOString();
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function createUser(input: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: AuthRole;
  organization?: string;
}) {
  const email = normalizeEmail(input.email);
  if (usersByEmail.has(email)) {
    throw new Error("Account already exists");
  }

  const record: UserRecord = {
    id: randomUUID(),
    email,
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    role: input.role,
    organization: input.organization?.trim() || undefined,
    passwordHash: hashPassword(input.password),
    createdAt: nowIso(),
  };

  usersByEmail.set(email, record);
  usersById.set(record.id, record);
  return record;
}

export function verifyPassword(record: UserRecord, password: string) {
  return record.passwordHash === hashPassword(password);
}

export function findUserByEmail(email: string) {
  return usersByEmail.get(normalizeEmail(email));
}

export function findUserById(id: string) {
  return usersById.get(id);
}

export function createSession(userId: string) {
  const token = randomUUID();
  const session: SessionRecord = {
    token,
    userId,
    createdAt: Date.now(),
  };
  sessions.set(token, session);
  return session;
}

export function destroySession(token: string) {
  sessions.delete(token);
}

export function getUserFromSession(token: string | undefined) {
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (Date.now() - session.createdAt > SESSION_TTL_MS) {
    sessions.delete(token);
    return null;
  }
  return findUserById(session.userId) ?? null;
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export function parseCookies(header: string | null) {
  const cookies: Record<string, string> = {};
  if (!header) return cookies;
  header.split(";").forEach((part) => {
    const [rawKey, ...rest] = part.trim().split("=");
    if (!rawKey) return;
    cookies[rawKey] = decodeURIComponent(rest.join("="));
  });
  return cookies;
}

export function serializeSessionCookie(token: string | null) {
  const parts = [`${SESSION_COOKIE}=${token ?? ""}`];
  parts.push("Path=/");
  parts.push("HttpOnly");
  parts.push("SameSite=Lax");
  if (process.env.NODE_ENV === "production") {
    parts.push("Secure");
  }
  if (!token) {
    parts.push("Max-Age=0");
  }
  return parts.join("; ");
}

export function ensureAdminFromEnv() {
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!email || !password) {
    return null;
  }
  const existing = findUserByEmail(email);
  if (existing) return existing;

  return createUser({
    email,
    password,
    firstName: "Admin",
    lastName: "User",
    role: "admin",
  });
}

export function publicUser(record: UserRecord) {
  return {
    id: record.id,
    email: record.email,
    firstName: record.firstName,
    lastName: record.lastName,
    role: record.role,
    organization: record.organization,
    createdAt: record.createdAt,
  };
}
