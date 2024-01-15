import React, { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/context/useDarkMode";

interface NavLinkProps {
	to: string;
	text: string | null | undefined;
	onClick: () => void;
	iconName: string;
}

function InternalNavLink({
	to = "/",
	text,
	onClick = () => {},
	iconName,
}: NavLinkProps) {
	return (
		<li className="nav-item" onClick={onClick}>
			<Link className="nav-link" href={to}>
				{iconName && <i className={`bi bi-${iconName} me-2`}></i>}
				{text && text}
			</Link>
		</li>
	);
}

function ExternalNavLink({
	to = "/",
	text,
	onClick = () => {},
	iconName,
}: NavLinkProps) {
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
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
				<Link className="navbar-brand mb-0 h1" href="/">
					React Markdown Editor
				</Link>
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
								style={{ cursor: "pointer" }}
								className={`nav-link bi bi-${
									isDarkMode ? "sun" : "moon"
								} nav-link`}
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
							text={null}
						/>
					</ul>
				</div>
			</div>
		</nav>
	);
}
