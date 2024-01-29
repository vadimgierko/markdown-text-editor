import Head from "next/head";
import MarkdownEditor from "../MarkdownEditor";

export interface PageData {
	head: {
		title: string;
		description: string;
	};
	markdown: string;
	html: string; // for SSG/ getStaticProps to renderer HTML on page load & in page source
	isEditorPage: boolean;
}

export default function Page({ pageData }: { pageData: PageData }) {
	const { head, markdown, html, isEditorPage } = pageData;
	return (
		<>
			<Head>
				<meta name="author" content="Vadim Gierko" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/markdown-text-editor/favicon.ico" />
				<meta name="description" content={head.description} />
				<title>{head.title}</title>
			</Head>
			<MarkdownEditor
				markdown={markdown}
				isEditorPage={isEditorPage}
				prerenderedHtml={html} // for SSG/ getStaticProps to renderer HTML on page load & in page source
			/>
		</>
	);
}
