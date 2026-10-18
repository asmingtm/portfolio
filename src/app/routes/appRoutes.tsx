import { createBrowserRouter } from "react-router";
import { AppProvider } from "@providers";
import { AppLayout } from "@layouts";
import { ErrorPage } from "@features";
import { featuresRoutes } from "@routes";

export const routes = createBrowserRouter([
    {
        element: <AppProvider />,
        children: [{
            element: <AppLayout />,
            children: featuresRoutes
        }]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]);