import { Link } from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

/**
 * @returns next `<Link />` if the link is internal or `<a>` redirecting to a new tab if the link is external
 */
function LinkRenderer(props) {
	return props.href.match(/^(https?:)?\/\//) ? (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	) : (
		<Link href={props.href}>{props.children}</Link>
	);
}

export default function ReactMarkdownRenderer({ markdown }) {
	return (
		<ReactMarkdown
			className="markdown-renderer"
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[
				// enables rendering HTML tags:
				rehypeRaw,
				// enables code highlighting:
				// ❗WARNING!❗
				// to enable ✅ correct highlighting 👉 fetch css styles & always define language for code blocks
				// in this project I fetch CSS styles in <Layout /> !!!
				rehypeHighlight,
			]}
			components={{ a: LinkRenderer }}
		>
			{markdown}
		</ReactMarkdown>
	);
}
