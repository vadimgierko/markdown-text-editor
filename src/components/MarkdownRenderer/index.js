import { useEffect } from "react";
import { useStore } from "../../context/useStore";

import CustomMarkdownRenderer from "./CustomMarkdownRenderer";
import ReactMarkdownRenderer from "./ReactMarkdownRenderer";

export default function MarkdownRenderer({
	markdown = "Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!",
}) {
	const { isDarkMode, isCustomRenderer } = useStore();

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

	if (isCustomRenderer) return <CustomMarkdownRenderer markdown={markdown} />;

	return <ReactMarkdownRenderer markdown={markdown} />;
}
