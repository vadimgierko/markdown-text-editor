import { createContext, useContext, useState } from "react";

const MarkdownEditorContext = createContext();

export const useMarkdownEditor = () => useContext(MarkdownEditorContext);

export const MarkdownEditorProvider = ({ children }) => {
	const [isCustomRenderer, setIsCustomRenderer] = useState(true);
	const [isEditorShown, setIsEditorShown] = useState(true);
	const [isRendererShown, setIsRendererShown] = useState(true);

	// Compute styles based on current state
	const editorStyles = isEditorShown
		? isRendererShown
			? { width: "50%", padding: "0 1em" }
			: { width: "100%", padding: "0 1em" }
		: { display: "none" };

	const rendererStyles = isRendererShown
		? isEditorShown
			? { width: "50%", padding: "0 1em" }
			: { width: "100%", padding: "0 0em" } // when html full screen no padding !!!
		: { display: "none" };

	// Toggle functions
	const toggleCustomRenderer = () => setIsCustomRenderer(!isCustomRenderer);
	const toggleEditor = () => setIsEditorShown(!isEditorShown);
	const toggleRenderer = () => setIsRendererShown(!isRendererShown);

	// Show/hide functions
	const showEditor = () => setIsEditorShown(true);
	const hideEditor = () => setIsEditorShown(false);
	const showRenderer = () => setIsRendererShown(true);
	const hideRenderer = () => setIsRendererShown(false);

	const value = {
		// Custom Renderer
		isCustomRenderer,
		toggleCustomRenderer,
		// Editor
		isEditorShown,
		toggleEditor,
		showEditor,
		hideEditor,
		// Renderer
		isRendererShown,
		toggleRenderer,
		showRenderer,
		hideRenderer,
		// Styles
		editorStyles,
		rendererStyles,
	};

	return (
		<MarkdownEditorContext.Provider value={value}>
			{children}
		</MarkdownEditorContext.Provider>
	);
};
