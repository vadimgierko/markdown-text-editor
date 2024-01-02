import React, { useState } from 'react';
// react-router-bootstrap for link container:
import { LinkContainer } from "react-router-bootstrap";

export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <LinkContainer to="/">
                    <a className="navbar-brand mb-0 h1">React Markdown Editor</a>
                </LinkContainer>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded={isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? "collapse" : null} navbar-collapse`} id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://www.markdownguide.org/cheat-sheet/"
                                target="_blank"
                                rel="noreferrer"
                            >How to format text with Markdown language?</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <LinkContainer to="/editor">
                                <a className="nav-link">editor</a>
                            </LinkContainer>
                        </li> |
                        <li className="nav-item">
                            <LinkContainer to="/rendered-html">
                                <a className="nav-link">rendered HTML</a>
                            </LinkContainer>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}