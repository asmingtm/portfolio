// Router
import { createBrowserRouter } from "react-router";

// Layouts
import { AppLayout } from "@layouts";

// Pages
import { ContactPage, LandingPage, ProjectsPage, SkillsPage } from "@pages";

// Routes
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/skills",
                element: <SkillsPage />
            },
            {
                path: "/projects",
                element: <ProjectsPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
        ]
    }
]);