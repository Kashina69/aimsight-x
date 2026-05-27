import { fetchApiResource } from "~/utils/api";

export function useGetUser() {
  return fetchApiResource("/api/authentication/me");
}



