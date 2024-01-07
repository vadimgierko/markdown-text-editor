import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isCustomRenderer, setIsCustomRenderer] = useState(true);

	const value = {
		isDarkMode,
		toggleDarkMode: () => setIsDarkMode(!isDarkMode),
		isCustomRenderer,
		toggleRenderer: () => setIsCustomRenderer(!isCustomRenderer)
	};

	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	);
};