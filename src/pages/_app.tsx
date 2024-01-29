import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";
import { DarkModeProvider } from "@/context/useDarkMode";
import { MarkdownEditorProvider } from "@/context/useMarkdownEditor";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<DarkModeProvider>
			<MarkdownEditorProvider>
				<Layout>
					<Component {...pageProps} />
					<GoogleAnalytics gaId="G-CTCXH3NEMQ" />
				</Layout>
			</MarkdownEditorProvider>
		</DarkModeProvider>
	);
}
