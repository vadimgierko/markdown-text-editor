import { useEffect, useState } from "react";
import {
	getMarkdownFromLocalStorage,
	saveMarkdownInStorage,
} from "@/utils/index";
import MarkdownRenderer from "../MarkdownRenderer";
import { useDarkMode } from "../../context/useDarkMode";
import { useMarkdownEditor } from "../../context/useMarkdownEditor";

export default function MarkdownEditor({
	markdown = "Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!",
	isEditorPage = false,
	prerenderedHtml = "", // for SSG/ getStaticProps to renderer HTML on page load & in page source
}) {
	const { isDarkMode } = useDarkMode();
	const {
		isCustomRenderer,
		toggleCustomRenderer,
		isEditorShown,
		isRendererShown,
		editorStyles,
		rendererStyles,
		showRenderer,
		showEditor,
		hideRenderer,
		hideEditor,
	} = useMarkdownEditor();

	const [localMarkdown, setLocalMarkdown] = useState();

	// NEED TO FETCH FROM LOCAL STORAGE IN USE EFFECT
	// BECAUSE IT RUNS ON CLIENT
	useEffect(() => {
		if (isEditorPage) {
			const md = getMarkdownFromLocalStorage();
			setLocalMarkdown(md);
		} else {
			setLocalMarkdown(markdown);
		}
	}, [isEditorPage, markdown]);

	return (
		<div className="markdown-editor-component">
			<div className="markdown-editor-navbar">
				{/* SHOW EDITOR TOGGLE */}
				<label className="me-1">
					<input
						type="checkbox"
						checked={isEditorShown}
						onChange={
							isEditorShown
								? isRendererShown
									? hideEditor
									: () => {}
								: showEditor
						}
					/>{" "}
					editor
				</label>
				{/* SHOW RENDERER TOGGLE */}
				<label className="me-1">
					<input
						type="checkbox"
						checked={isRendererShown}
						onChange={
							isRendererShown
								? isEditorShown
									? hideRenderer
									: () => {}
								: showRenderer
						}
					/>{" "}
					renderer
				</label>
				{/* CUSTOM RENDERER TOGGLE */}
				<label className="">
					<input
						type="checkbox"
						checked={!isCustomRenderer}
						onChange={toggleCustomRenderer}
					/>{" "}
					use react-markdown
				</label>
			</div>
			<div
				className={`markdown-editor-container ${
					(!isEditorShown || !isRendererShown) && "container"
				}`}
			>
				<textarea
					className={`markdown-editor ${
						isDarkMode ? "bg-dark-subtle" : "bg-light-subtle"
					}`}
					value={localMarkdown}
					placeholder="Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!"
					onChange={(e) => {
						const updatedMarkdown = e.target.value;
						setLocalMarkdown(updatedMarkdown);

						isEditorPage && saveMarkdownInStorage(updatedMarkdown);
					}}
					style={editorStyles}
				/>
				<div style={rendererStyles}>
					{localMarkdown ? (
						<MarkdownRenderer markdown={localMarkdown} />
					) : (
						<article
							className="markdown-renderer"
							dangerouslySetInnerHTML={{ __html: prerenderedHtml }}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
