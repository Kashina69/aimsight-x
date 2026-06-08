import { JWTPayloadType } from "~/types/auth.types";

export const checkIsAuthenticated = (): boolean => {
  // const token = localStorage.getItem("accessToken");

  // if (!token) return false;

  // try {
  // const payload: JWTPayloadType = JSON.parse(
  // atob(token.split(".")[1])
  // );

  // if (!payload.exp) return true;

  // return payload.exp * 1000 > Date.now();

  // } catch {
  //   return false;
  // }
  return true
};