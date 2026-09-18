// Router
import { NavLink } from "react-router";

// Helpers
const getNavigatorClass = (isActive: boolean) => {
    return isActive ? "navigator navigator-active" : "navigator";
}

// Types
interface NavigatorProps{
    link: string;
    label?: string;
}

// Render
export default function Navigator({ link, label }: NavigatorProps){
    return(
        <NavLink to={link} className={e => getNavigatorClass(e.isActive)}>
            { label && <p className="navigator-label">{ label ?? "Text" }</p> }
            <i className="material-symbols-rounded navigator-icon">
                close
            </i>
        </NavLink>
    );
}