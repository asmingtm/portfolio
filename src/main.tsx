// React
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Router
import { RouterProvider } from "react-router";
import { routes } from "@app/routes";

// Styles
import "@styles/css";

// Render
const root = document.getElementById("root");
createRoot(root!).render(
  // <StrictMode>
    <RouterProvider router={routes} />
  // </StrictMode>
);