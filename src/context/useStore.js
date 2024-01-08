import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [isCustomRenderer, setIsCustomRenderer] = useState(true);

	// Update data-bs-theme attribute on initial load and whenever isDarkMode changes
	useEffect(() => {
		// Function to update data-bs-theme attribute based on isDarkMode state
		const updateThemeAttribute = () => {
			const htmlElement = document.querySelector("html");
			if (htmlElement) {
				htmlElement.setAttribute(
					"data-bs-theme",
					isDarkMode ? "dark" : "light"
				);
			}
		};

		updateThemeAttribute();
	}, [isDarkMode]);

	const value = {
		isDarkMode,
		toggleDarkMode: () => setIsDarkMode(!isDarkMode),
		isCustomRenderer,
		toggleRenderer: () => setIsCustomRenderer(!isCustomRenderer),
	};

	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	);
};
