import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const deps = require("./package.json").dependencies;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "test",
      filename: "remoteEntry.js",
      exposes: {
        "./TestComponent": "./src/components/TestComponent.tsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
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
    deps: {
      moduleDirectories: ["node_modules", path.resolve("../../packages")],
    }
  },
});
