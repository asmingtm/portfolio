// Router
import { Navbar } from "@components";
import { Outlet } from "react-router";

// Render
export default function AppLayout(){
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    );
}