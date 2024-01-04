import React, { useState } from 'react';
// react-router-bootstrap for link container:
import { LinkContainer } from "react-router-bootstrap";

function InternalNavLink({ to = "/", text = "some internal link", onClick = () => { } }) {
    return <li className="nav-item" onClick={onClick}>
        <LinkContainer to={to}>
            <a className="nav-link">{text}</a>
        </LinkContainer>
    </li>
}

function ExternalNavLink({ to = "/", text = "some external link", onClick = () => { } }) {
    return <li className="nav-item" onClick={onClick}>
        <a
            className="nav-link"
            href={to}
            target="_blank"
            rel="noreferrer"
        >{text}</a>
    </li>
}

export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const LINKS = [
        { to: "/markdown-guide", text: "markdown guide" },
        { to: "/html-guide", text: "html guide" },
        { to: "/editor", text: "editor" }
    ];

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
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
                            LINKS.map(link => <InternalNavLink key={link.to + "-nav-link"} to={link.to} text={link.text} onClick={handleNavCollapse} />)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}