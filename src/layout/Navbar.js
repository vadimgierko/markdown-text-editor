import React, { useState } from 'react';
// react-router-bootstrap for link container:
import { LinkContainer } from "react-router-bootstrap";
import { useStore } from '../context/useStore';

function InternalNavLink({ to = "/", text = "some internal link", onClick = () => { } }) {
    return (
        <li className="nav-item" onClick={onClick}>
            <LinkContainer to={to}>
                <a className="nav-link">{text}</a>
            </LinkContainer>
        </li>
    );
}

function ExternalNavLink({ to = "/", text = "some external link", onClick = () => { } }) {
    return (
        <li className="nav-item" onClick={onClick}>
            <a
                className="nav-link"
                href={to}
                target="_blank"
                rel="noreferrer"
            >{text}</a>
        </li>
    );
}

export default function Navbar() {
    const { isDarkMode, toggleDarkMode, isCustomRenderer, toggleRenderer } = useStore();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const INTERNAL_LINKS_ON_THE_LEFT = [
        { to: "/", text: "about" },
        { to: "/markdown-guide", text: "markdown guide" },
        { to: "/html-guide", text: "html guide" },
        { to: "/editor", text: "editor" }
    ];

    // TODO: consider adding this to navbar class: bg-${isDarkMode ? "dark-subtle" : "light-subtle"}
    return (
        <nav className={`navbar navbar-expand-sm fixed-top`}>
            <div className="container-fluid">
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
                        {
                            INTERNAL_LINKS_ON_THE_LEFT.map(link => <InternalNavLink key={link.to + "-nav-link"} to={link.to} text={link.text} onClick={handleNavCollapse} />)
                        }
                    </ul>

                    <ul className="navbar-nav">
                        {/* EDITOR TOGGLE */}
                        <li className='nav-item'>
                            <label className='nav-link'>
                                <input
                                    type="checkbox"
                                    id="mode-toggler"
                                    checked={!isCustomRenderer}
                                    onChange={toggleRenderer}
                                />{" "}
                                use react-markdown renderer
                            </label>
                        </li>
                        {/* DARK MODE TOGGLE */}
                        <li className='nav-item'>
                            <i class={`bi bi-${isDarkMode ? "sun" : "moon"} nav-link`} onClick={toggleDarkMode}></i>
                        </li>
                        {/* REPO LINK */}
                        <ExternalNavLink to="https://github.com/vadimgierko/markdown-text-editor" text={<i class="bi bi-github"></i>} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}