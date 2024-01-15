import Page, { PageData } from "@/components/Page";
import { MARKDOWN_GUIDE } from "@/content/markdown-guide";
import { prerenderSanitizeHtml } from "@/utils";

export default function MarkdownGuide({ pageData }: { pageData: PageData }) {
	return <Page pageData={pageData} />;
}

// This function gets called at build time
export async function getStaticProps() {
	const pageData: PageData = {
		head: {
			title: "Markdown Editor | Markdown Guide",
			description:
				"Learn how to use pure Markdown syntax extended with GitHub Flavored Markdown to format your text!",
		},
		markdown: MARKDOWN_GUIDE,
		isEditorPage: false,
		html: await prerenderSanitizeHtml(MARKDOWN_GUIDE),
	};

	return {
		props: {
			pageData,
		},
	};
}
