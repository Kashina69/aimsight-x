import { setAuthCookie } from "./authentication/auth.utils";

type ApiSuccess<T> = { data: T; error: null };
type ApiError   = { data: null; error: string };

export function ok<T>(data: T, status = 200): Response {
  return new Response(JSON.stringify({ data, error: null }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function err(message: string, status: number): Response {
  return new Response(JSON.stringify({ data: null, error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Helper when you need to attach a cookie AND return a body
export function okWithCookie<T>(data: T, token: string, status = 200): Response {
  const res = new Response(JSON.stringify({ data, error: null }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
  setAuthCookie(res, token);
  return res;
}