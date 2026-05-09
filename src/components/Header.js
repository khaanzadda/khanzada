import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import ci from "../assets/ci.png";
export default function Header() {
    return (
        <header className="main-header">
            <div className="header-left">
                <img
                    src={logo}
                    alt="Taha Hashmi"
                    className="brand-logo"
                />
            </div>
            <div className="header-right">
                <button
                    className="contact-btn"
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/khanzada-khan-581713254/",
                            "_blank",
                            "noopener,noreferrer"
                        )
                    }
                >
                    CONTACT NOW
                </button>
                <button className="menu-btn" aria-label="More options">
                    <img src={ci} alt="Menu" className="menu-icon" />
                </button>
            </div>
        </header>
    );
}
