// Styles
import { useEffect } from "react";
import"./landing-page.css";

// Utils
import { getCodeIndex } from "@utils";

// Render
export default function LandingPage(){
    useEffect(() => {
        getCodeIndex();
    }, []);

    return(
        <main className="landing">
            <div className="one-line">
                <p>Hi, I am</p>
                <h2 className="ml-mid">Asmin Gautam.</h2>
            </div>
            <div className="details">
                I mainly work in <code className="snippet">frontend</code> with <code className="snippet">React</code>.
            </div>
        </main>
    );
}