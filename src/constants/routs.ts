export const PROTECTED = ["/dashboard", "/settings", "/api/auth"];
export const AUTH_ONLY  = ["/login", "/signup"];

export type ProtectedRoutes = typeof PROTECTED[number];
export type AuthOnlyRoutes = typeof AUTH_ONLY[number]; 