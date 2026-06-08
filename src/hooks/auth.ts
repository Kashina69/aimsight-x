import { createRequest } from "~/utils/api.utils";

export function useGetUser() {
  const {data} = createRequest("/api/authentication/me");
  return data;
}



