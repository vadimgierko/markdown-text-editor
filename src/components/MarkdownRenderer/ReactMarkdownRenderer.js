import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import hljs from "highlight.js";
import { useEffect } from "react";
import { useStore } from "../../context/useStore";

/**
 * @returns `<Link />` from react-router-dom if the link is internal or `<a>` redirecting to a new tab if the link is external
 */
function LinkRenderer(props) {
	return props.href.match(/^(https?:)?\/\//) ? (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	) : (
		<Link to={props.href}>{props.children}</Link>
	);
}

export default function ReactMarkdownRenderer({ markdown }) {
	
	// highlight code:
	useEffect(() => {
		// hljs.highlightAll();
		document.querySelectorAll("code").forEach((block) => {
			hljs.highlightElement(block);
		});
	}, [markdown]);

	return (
		<ReactMarkdown
			className="markdown-renderer"
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[
				// enables rendering HTML tags:
				rehypeRaw,
				// enables code highlighting:
				// rehypeHighlight,
			]}
			components={{ a: LinkRenderer }}
		>
			{markdown}
		</ReactMarkdown>
	);
}