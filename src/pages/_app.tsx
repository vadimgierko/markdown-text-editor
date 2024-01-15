import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";
import { DarkModeProvider } from "@/context/useDarkMode";
import { MarkdownEditorProvider } from "@/context/useMarkdownEditor";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<DarkModeProvider>
			<MarkdownEditorProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MarkdownEditorProvider>
		</DarkModeProvider>
	);
}
