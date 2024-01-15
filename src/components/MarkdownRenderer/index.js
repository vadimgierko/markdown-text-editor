import CustomMarkdownRenderer from "./CustomMarkdownRenderer";
import ReactMarkdownRenderer from "./ReactMarkdownRenderer";
import { useMarkdownEditor } from "@/context/useMarkdownEditor";

export default function MarkdownRenderer({
	markdown = "Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!",
}) {
	const { isCustomRenderer } = useMarkdownEditor();

	if (isCustomRenderer) return <CustomMarkdownRenderer markdown={markdown} />;

	return <ReactMarkdownRenderer markdown={markdown} />;
}
