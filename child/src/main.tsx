import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// @ts-expect-error Typescript sucks sometimes
import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
);
