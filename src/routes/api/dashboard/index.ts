import type { APIEvent } from "@solidjs/start/server";

export async function GET(_event: APIEvent) {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch dummy data" }),
      {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}