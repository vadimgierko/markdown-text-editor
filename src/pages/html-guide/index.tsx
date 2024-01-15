import Page, { PageData } from "@/components/Page";
import { HTML_GUIDE } from "@/content/html-guide";
import { prerenderSanitizeHtml } from "@/utils";

export default function HtmlGuide({ pageData }: { pageData: PageData }) {
	return <Page pageData={pageData} />;
}

export async function getStaticProps() {
	const pageData: PageData = {
		head: {
			title: "Markdown Editor | HTML Guide",
			description:
				"Learn how to format text using HTML tags, inline CSS styles & add embeds!",
		},
		markdown: HTML_GUIDE,
		isEditorPage: false,
		html: await prerenderSanitizeHtml(HTML_GUIDE),
	};

	return {
		props: {
			pageData,
		},
	};
}
