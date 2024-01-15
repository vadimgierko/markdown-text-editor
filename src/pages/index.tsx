import Page, { PageData } from "@/components/Page";
import { ABOUT } from "@/content/about";
import { prerenderSanitizeHtml } from "@/utils";

export default function About({ pageData }: { pageData: PageData }) {
	return <Page pageData={pageData} />;
}

export async function getStaticProps() {
	const pageData: PageData = {
		head: {
			title: "Markdown Editor | About",
			description:
				"Battle-tested Online split-screen Markdown/ HTML Editor with a Live Preview initially written in React & rewritten in Next.js. Write & renderer Markdown, HTML, inline CSS styles, highlighted code & embeds!",
		},
		markdown: ABOUT,
		isEditorPage: false,
		html: await prerenderSanitizeHtml(ABOUT),
	};

	return {
		props: {
			pageData,
		},
	};
}
