// app.config.ts  ← sits at project root, same level as package.json
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  middleware: "./src/middlewares/auth.middleware.ts",
});