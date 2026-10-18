import type { ModalVisibility } from "../../../shared/types";
import { FaGithub, FaCheck } from "react-icons/fa";

export function InfoModal({ visibility, closeAction }: { visibility: ModalVisibility, closeAction: VoidFunction }) {
    return (
        <section className={`modal modal-${visibility}`}>
            <div className="block">
                <p className="block-title">Note</p>
                <p className="block-summary">
                    To be honest, at my level I do not need a portfolio, that's why: I am building this very slowly because I want to update it as I learn new stuff.
                </p>
                <p className="block-summary">I will polish it as much as I can!</p>
                <p className="block-summary">100% Asmin & 0% A.I.</p>
            </div>
            <div className="action-group">
                <a href="https://github.com/asmingtm/portfolio" className="btn btn-solid">
                    <p className="btn-label">
                        Project's repository
                    </p>
                    <FaGithub className="btn-icon" />
                </a>
                <button className="btn btn-primary" onClick={closeAction}>
                    <p className="btn-label">
                        Okie, got it!
                    </p>
                    <FaCheck className="btn-icon" />
                </button>
            </div>
        </section>
    );
}