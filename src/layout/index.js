import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";

export default function Layout() {
	const { isDarkMode } = useDarkMode();

	// fetch light/dark mode css for code highlighting in github style
	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = isDarkMode
			? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.css" // Dark mode styles
			: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs.css"; // Light mode styles

		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link); // Clean up the previous stylesheet when unmounting or switching modes
		};
	}, [isDarkMode]);

	return (
		<div className="container-fluid layout">
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
