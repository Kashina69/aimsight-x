import { A } from "@solidjs/router"; // anchor tag
import { createSignal } from "solid-js";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);
  return (
    <main>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <p>
        <A href="/about">About</A>
      </p>


      <div class="flex gap-4 m-6">
        <div class="flex flex-1 justify-center items-center bg-gray-100 border rounded min-h-24 font-semibold text-lg">
          Enterprise
        </div>
        <div class="flex flex-1 justify-center items-center bg-gray-100 border rounded min-h-24 font-semibold text-lg">
          Participant
        </div>
      </div>

      <div class="flex gap-4 m-6">
        <div class="flex flex-col flex-1 justify-center items-center gap-2 bg-gray-100 p-4 border rounded min-h-24 font-semibold text-lg">
          <h1 class="mb-2 font-bold text-xl">Enterprise Authentication</h1>
          <A class="bg-sky-700 hover:bg-sky-800 my-1 px-4 py-2 rounded text-white transition" href="/authentication/enterprise/signin">
            Sign In
          </A>
          <A class="my-1 text-sky-700 hover:underline" href="/authentication/enterprise/signup">
            Sign Up
          </A>
        </div>
        <div class="flex flex-col flex-1 justify-center items-center gap-2 bg-gray-100 border rounded min-h-24 font-semibold text-lg">
          <h1 class="mb-2 font-bold text-xl">Participant Authentication</h1>
        <div class="flex gap-4">
        <A href="/authentication/participant/signin">
            Sign In
          </A>
          <A  href="/authentication/participant/signup">
            Sign Up
          </A>
        </div>
        </div>
        <div class="flex flex-col flex-1 justify-center items-center gap-2 bg-gray-100 p-4 border rounded min-h-24 font-semibold text-lg">
          <h1 class="mb-2 font-bold text-xl">Admin Authentication</h1>
          <A class="bg-sky-700 hover:bg-sky-800 my-1 px-4 py-2 rounded text-white transition" href="/authentication/admin/signin">
            Sign In
          </A>
        </div>
      </div>


    </main>
  );
}
