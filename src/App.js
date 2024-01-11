import { DarkModeProvider } from "./context/useDarkMode";
import { MarkdownEditorProvider } from "./context/useMarkdownEditor";
import Layout from "./layout";

function App() {
	return (
		<DarkModeProvider>
			<MarkdownEditorProvider>
				<Layout />
			</MarkdownEditorProvider>
		</DarkModeProvider>
	);
}

export default App;
