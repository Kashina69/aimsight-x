import { createResource } from "solid-js";
import { getRequestEvent } from "solid-js/web";

export function createUrl(url: string) {
  const request = getRequestEvent()?.request;
  const newUrl = request
    ? new URL(url, request.url).toString()
    : url;
  return { request, newUrl };
}

export function fetchApiResource(url: string, payload?: unknown) {
  const key = () =>
    payload === undefined ? url : `${url}|${JSON.stringify(payload)}`;

  const [data] = createResource(key, async () => {
    const { request, newUrl } = createUrl(url);
    const body = payload === undefined ? undefined : JSON.stringify(payload);

    const response = await fetch(newUrl, {
      method: body ? "POST" : "GET",
      headers: {
        ...(request
          ? {
              cookie: request.headers.get("cookie") ?? "",
            }
          : {}),
        ...(body
          ? {
              "Content-Type": "application/json",
            }
          : {}),
      },
      body,
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  });

  return data;
}
