import { createSignal } from "solid-js";
import { getRequestEvent } from "solid-js/web";

// ─── Types ───────────────────────────────────────────────────────────────────

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestState<T> {
  data: () => T | null;
  loading: () => boolean;
  error: () => string | null;
  status: () => number | null;
  ok: () => boolean;
  refetch: () => Promise<void>;
}

// ─── URL helper ──────────────────────────────────────────────────────────────

function resolveUrl(url: string): string {
  const request = getRequestEvent()?.request;
  return request ? new URL(url, request.url).toString() : url;
}

function getForwardedHeaders(): Record<string, string> {
  const request = getRequestEvent()?.request;
  if (!request) return {};
  return { cookie: request.headers.get("cookie") ?? "" };
}

// ─── Core ────────────────────────────────────────────────────────────────────

export function createRequest<T = unknown>(
  url: string,
  payload?: unknown,
  method?: HttpMethod
): RequestState<T> {
  const [data, setData] = createSignal<T | null>(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [status, setStatus] = createSignal<number | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setStatus(null);

    try {
      const resolvedUrl = resolveUrl(url);
      const hasBody = payload !== undefined;

      // Determine method: explicit > infer from payload > GET
      const httpMethod: HttpMethod = method ?? (hasBody ? "POST" : "GET");

      const body =
        hasBody && httpMethod !== "GET" && httpMethod !== "DELETE"
          ? JSON.stringify(payload)
          : undefined;

      const response = await fetch(resolvedUrl, {
        method: httpMethod,
        headers: {
          ...getForwardedHeaders(),
          ...(body ? { "Content-Type": "application/json" } : {}),
        },
        body,
      });

      setStatus(response.status);

      if (!response.ok) {
        let message = `HTTP ${response.status}`;
        try {
          const errBody = await response.json();
          message = errBody?.message ?? errBody?.error ?? message;
        } catch {
          // non-JSON error body — keep the status message
        }
        setError(message);
        setData(null);
        return;
      }

      // 204 No Content — valid success, no body
      if (response.status === 204) {
        setData(null);
        return;
      }

      const json = (await response.json()) as T;
      setData(() => json);
    } catch (err) {
      setStatus(null);
      setError(err instanceof Error ? err.message : "Network error");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // Auto-execute immediately (replaces onMount / createResource trigger)
  execute();

  return {
    data,
    loading,
    error,
    status,
    ok: () => {
      const s = status();
      return s !== null && s >= 200 && s < 300;
    },
    refetch: execute,
  };
}