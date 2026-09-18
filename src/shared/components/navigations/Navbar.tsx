// Components
import { Navigator } from "@components"

// Render
export default function Navbar(){
    return(
        <nav className="navbar">
            <Navigator link="/" label="me" />
            <Navigator link="/skills" label="skills" />
            <Navigator link="/projects" label="projects" />
            <Navigator link="/contact" label="contact" />
        </nav>
    );
}