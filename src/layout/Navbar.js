import React, { useState } from "react";
// react-router-bootstrap for link container:
import { LinkContainer } from "react-router-bootstrap";
import { useDarkMode } from "../context/useDarkMode";

function InternalNavLink({
	to = "/",
	text = "some internal link",
	onClick = () => {},
}) {
	return (
		<li className="nav-item" onClick={onClick}>
			<LinkContainer to={to}>
				<a className="nav-link">{text}</a>
			</LinkContainer>
		</li>
	);
}

function ExternalNavLink({
	to = "/",
	text = "some external link",
	onClick = () => {},
}) {
	return (
		<li className="nav-item" onClick={onClick}>
			<a className="nav-link" href={to} target="_blank" rel="noreferrer">
				{text}
			</a>
		</li>
	);
}

export default function Navbar() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	const INTERNAL_LINKS_ON_THE_LEFT = [
		{ to: "/", text: "about" },
		{ to: "/markdown-guide", text: "markdown guide" },
		{ to: "/html-guide", text: "html guide" },
	];

	return (
		<nav
			className={`navbar navbar-expand-md fixed-top bg-${
				isDarkMode ? "dark" : "light"
			}`}
		>
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

				<div
					className={`${isNavCollapsed ? "collapse" : null} navbar-collapse`}
					id="navbarColor01"
				>
					<ul className="navbar-nav me-auto">
						{INTERNAL_LINKS_ON_THE_LEFT.map((link) => (
							<InternalNavLink
								key={link.to + "-nav-link"}
								to={link.to}
								text={link.text}
								onClick={handleNavCollapse}
							/>
						))}
					</ul>

					<hr />

					<ul className="navbar-nav">
						<InternalNavLink
							to="/editor"
							text="editor"
							onClick={handleNavCollapse}
						/>
						{/* DARK MODE TOGGLE */}
						<li className="nav-item">
							<i
								className={`bi bi-${isDarkMode ? "sun" : "moon"} nav-link`}
								onClick={() => {
									toggleDarkMode();
									handleNavCollapse();
								}}
							></i>
						</li>
						{/* REPO LINK */}
						<ExternalNavLink
							to="https://github.com/vadimgierko/markdown-text-editor"
							text={<i className="bi bi-github"></i>}
							onClick={handleNavCollapse}
						/>
					</ul>
				</div>
			</div>
		</nav>
	);
}
