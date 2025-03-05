import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      manifest: true,
      remotes: {
        test: {
          type: "module",
          name: "test",
          entry: "http://localhost:8090/remoteEntry.js",
        },
      },
      shared: {
        react: { singleton: true },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
