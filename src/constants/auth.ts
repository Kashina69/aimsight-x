export const USER_ROLES = ["participant", "enterprise", "admin"] as const;
export const AUTH_TABS = ["signin", "signup"] as const;

export type UserRole = typeof USER_ROLES[number];
export type AuthTab = typeof AUTH_TABS[number]; 