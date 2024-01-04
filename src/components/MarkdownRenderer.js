import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { Link } from "react-router-dom";

/**
 * @returns `<Link />` from react-router-dom if the link is internal or `<a>` redirecting to a new tab if the link is external
 */
function ReactRouterLink(props) {
	return props.href.match(/^(https?:)?\/\//) ? (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	) : (
		<Link to={props.href}>{props.children}</Link>
	);
}

export default function MarkdownRenderer({ markdown }) {
	if (!markdown) return null;

	return (
		<ReactMarkdown
			className="markdown-renderer"
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[
				// enables rendering HTML tags:
				rehypeRaw,
				// enables code highlighting:
				rehypeHighlight,
			]}
			components={{ a: ReactRouterLink }}
		>
			{markdown}
		</ReactMarkdown>
	);
}