import type { RouteObject } from "react-router";
import { LandingPage } from "@features";

export const featuresRoutes: RouteObject[] = [
    {
        index: true,
        element: <LandingPage />
    },
    {
        path: "/projects",
        element: "ProjectsPage"
    },
    {
        path: "/contact",
        element: "ContactPage"
    },
];