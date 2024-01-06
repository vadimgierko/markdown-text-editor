// import { Link } from "react-router-dom";

//=========================> MIGRATE FROM THIS:

// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import rehypeHighlight from "rehype-highlight";

//=========================> TO THIS:

// for converting markdown into HTML:
import { marked } from "marked";
// for sanitizing HTML:
import DOMPurify from "dompurify";
// for code highlighting:
import hljs from "highlight.js";
import { useEffect, useState } from "react";

/**
 * @returns `<Link />` from react-router-dom if the link is internal or `<a>` redirecting to a new tab if the link is external
 */
// function LinkRenderer(props) {
// 	return props.href.match(/^(https?:)?\/\//) ? (
// 		<a href={props.href} target="_blank" rel="noreferrer">
// 			{props.children}
// 		</a>
// 	) : (
// 		<Link to={props.href}>{props.children}</Link>
// 	);
// }

export default function MarkdownRenderer({
	markdown = "# Hello, World!",
	isDarkMode = false, // optional
}) {
	const [html, setHtml] = useState();

	useEffect(() => {
		// add support for GitHub Flavored Markdown:
		marked.setOptions({
			gfm: true,
			footnotes: true,
			// Other options...
		});
		// convert markdown into HTML:
		const dirty_html = marked.parse(markdown);
		// sanitize HTML:
		const sanitized_html = DOMPurify.sanitize(dirty_html, {
			ADD_TAGS: ["iframe"], // enable iframes
		});
		setHtml(sanitized_html);
	}, [markdown]);

	useEffect(() => {
		// highlight code:
		// hljs.highlightAll();
		document.querySelectorAll("code").forEach((block) => {
			hljs.highlightElement(block);
		});
	}, [html]);

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

	return <div className="markdown-renderer" dangerouslySetInnerHTML={{ __html: html }}></div>

	// return (
	// 	<ReactMarkdown
	// 		className="markdown-renderer"
	// 		remarkPlugins={[remarkGfm]}
	// 		rehypePlugins={[
	// 			// enables rendering HTML tags:
	// 			rehypeRaw,
	// 			// enables code highlighting:
	// 			rehypeHighlight,
	// 		]}
	// 		components={{ a: LinkRenderer }}
	// 	>
	// 		{markdown}
	// 	</ReactMarkdown>
	// );
}