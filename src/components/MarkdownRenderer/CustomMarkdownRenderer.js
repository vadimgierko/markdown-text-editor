import { useEffect, useState } from "react";

// for converting markdown into HTML:
import { marked } from "marked";
// for sanitizing HTML:
import DOMPurify from "dompurify";
// for code highlighting:
import hljs from "highlight.js";
import { useRouter } from "next/router";

export default function CustomMarkdownRenderer({ markdown }) {
	const [html, setHtml] = useState("");

	const router = useRouter();

	// convert markdown into html & sanitize it:
	useEffect(() => {
		marked.setOptions({
			gfm: true,
		});

		// modify internal & external links:
		const modifyLinks = (htmlContent) => {
			const modifiedHtml = htmlContent.replace(
				/<a href="([^"]+)">([^<]+)<\/a>/g,
				(match, href, content) => {
					if (href.startsWith("/")) {
						return `<a href="${href}" data-internal-link="${href}">${content}</a>`;
					} else {
						return `<a href="${href}" target="_blank" rel="noopener noreferrer">${content}</a>`;
					}
				}
			);
			return modifiedHtml;
		};

		const dirty_html = marked.parse(markdown);
		const sanitized_html = DOMPurify.sanitize(dirty_html, {
			ADD_TAGS: ["iframe"],
		});
		const modifiedHtml = modifyLinks(sanitized_html);

		setHtml(modifiedHtml);
	}, [markdown]);

	useEffect(() => {
		// highlight code:
		// hljs.highlightAll();
		document.querySelectorAll("code").forEach((block) => {
			hljs.highlightElement(block);
		});
	}, [html]);

	useEffect(() => {
		const handleInternalLinkClick = (e) => {
			const target = e.target;
			const href = target.getAttribute("data-internal-link");
			if (href) {
				e.preventDefault();
				router.push(href);
			}
		};

		const container = document.getElementsByClassName("markdown-renderer")[0];
		if (container) {
			container.addEventListener("click", handleInternalLinkClick);
		}

		return () => {
			if (container) {
				container.removeEventListener("click", handleInternalLinkClick);
			}
		};
	}, [router]);

	return (
		<article
			className="markdown-renderer"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
