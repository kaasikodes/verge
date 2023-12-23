/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// TODO: Fix inablity to use react testing library assertions
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setupTest.ts"],
  },
});
