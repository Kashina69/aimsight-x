import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import visualizer from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro(),
    // visualizer({
    //     open: true,
    //     filename: "./docs/stats.html",
    //   }),
  ]
});
