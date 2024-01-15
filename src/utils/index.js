// import DOMPurify from "dompurify"; => 🐞 doesn't work on server side... so use this 👇
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

export async function prerenderSanitizeHtml(markdown = "") {
	marked.setOptions({
		gfm: true,
	});

	const prerendered_html = await marked(markdown);
	const prerendered_sanitized_html = DOMPurify.sanitize(prerendered_html, {
		ADD_TAGS: ["iframe"],
	});
	return prerendered_sanitized_html;
}

//==================== LOCAL STORAGE =====================//

export function getMarkdownFromLocalStorage() {
	if (typeof window !== "undefined") {
		const markdown = localStorage.getItem("markdown") || "";

		return markdown;
	} else {
		return console.error(
			"Cannot fetch data from local storage, becuase window is undefined..."
		);
	}
}

export function saveMarkdownInStorage(markdown) {
	if (typeof window !== "undefined") {
		return localStorage.setItem("markdown", markdown);
	} else {
		return console.error(
			"Cannot data in local storage, becuase window is undefined..."
		);
	}
}
