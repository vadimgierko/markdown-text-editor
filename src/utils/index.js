export function getMarkdownFromLocalStorage() {
	const markdown = localStorage.getItem("markdown") || "";

	return markdown;
}

export function saveMarkdownInStorage(markdown) {
	return localStorage.setItem("markdown", markdown);
}
