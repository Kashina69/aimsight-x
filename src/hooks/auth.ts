import { createRequest } from "~/utils/api";

export function useGetUser() {
  const {data} = createRequest("/api/authentication/me");
  return data;
}



