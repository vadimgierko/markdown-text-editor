import React, { useState } from 'react';

export default function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand mb-0 h1" href="#">Markdown Text Editor</a>
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
                                href="https://github.com/vadimgierko/markdown-text-editor"
                                target="_blank"
                                rel="noreferrer"
                            >See code</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://www.markdownguide.org/cheat-sheet/"
                                target="_blank"
                                rel="noreferrer"
                            >How to format text with Markdown language?</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}