import React, { useState } from "react";
// react-router-bootstrap for link container:
import { LinkContainer } from "react-router-bootstrap";
import { useDarkMode } from "../context/useDarkMode";

function InternalNavLink({ to = "/", text, onClick = () => {}, iconName }) {
	return (
		<li className="nav-item" onClick={onClick}>
			<LinkContainer to={to}>
				<a className="nav-link">
					{iconName && <i className={`bi bi-${iconName} me-2`}></i>}
					{text && text}
				</a>
			</LinkContainer>
		</li>
	);
}

function ExternalNavLink({ to = "/", text, onClick = () => {}, iconName }) {
	return (
		<li className="nav-item" onClick={onClick}>
			<a className="nav-link" href={to} target="_blank" rel="noreferrer">
				{iconName && <i className={`bi bi-${iconName} me-2`}></i>}
				{text && text}
			</a>
		</li>
	);
}

export default function Navbar() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () =>
		!isNavCollapsed && setIsNavCollapsed(!isNavCollapsed); // for all nav elements except nav toggle !!!

	const INTERNAL_LINKS_ON_THE_LEFT = [
		{ to: "/", text: "about", iconName: "info-square" },
		{ to: "/markdown-guide", text: "markdown guide", iconName: "markdown" },
		{ to: "/html-guide", text: "html guide", iconName: "filetype-html" },
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
					onClick={() => setIsNavCollapsed(!isNavCollapsed)}
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
					id="navbarColor01"
				>
					<ul className="navbar-nav me-auto">
						{INTERNAL_LINKS_ON_THE_LEFT.map((link) => (
							<InternalNavLink
								key={link.to + "-nav-link"}
								to={link.to}
								text={link.text}
								onClick={handleNavCollapse}
								iconName={link.iconName}
							/>
						))}
					</ul>

					<hr />

					<ul className="navbar-nav">
						<InternalNavLink
							to="/editor"
							text="editor"
							iconName="pencil-square"
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
							iconName="github"
							onClick={handleNavCollapse}
						/>
					</ul>
				</div>
			</div>
		</nav>
	);
}
