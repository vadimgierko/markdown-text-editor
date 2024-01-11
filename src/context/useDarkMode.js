import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	// Update theme attribute on dark mode change
	useEffect(() => {
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
		// Dark Mode
		isDarkMode,
		toggleDarkMode,
	};

	return (
		<DarkModeContext.Provider value={value}>
			{children}
		</DarkModeContext.Provider>
	);
};
