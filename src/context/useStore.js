import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [isCustomRenderer, setIsCustomRenderer] = useState(true);
	const [isEditorShown, setIsEditorShown] = useState(true);
	const [isRendererShown, setIsRendererShown] = useState(true);

	// Compute styles based on current state
	const editorStyles = isEditorShown
		? isRendererShown
			? { width: "50%" }
			: { width: "100%" }
		: { display: "none" };

	const rendererStyles = isRendererShown
		? isEditorShown
			? { width: "50%" }
			: { width: "100%" }
		: { display: "none" };

	// Toggle functions
	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
	const toggleCustomRenderer = () => setIsCustomRenderer(!isCustomRenderer);
	const toggleEditor = () => setIsEditorShown(!isEditorShown);
	const toggleRenderer = () => setIsRendererShown(!isRendererShown);

	// Show/hide functions
	const showEditor = () => setIsEditorShown(true);
	const hideEditor = () => setIsEditorShown(false);
	const showRenderer = () => setIsRendererShown(true);
	const hideRenderer = () => setIsRendererShown(false);

	// Update theme attribute on dark mode change
	useEffect(() => {
		const updateThemeAttribute = () => {
			const htmlElement = document.querySelector("html");
			if (htmlElement) {
				htmlElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
			}
		};
		updateThemeAttribute();
	}, [isDarkMode]);

	const value = {
		// Dark Mode
		isDarkMode,
		toggleDarkMode,
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
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	);
};
