import Page, { PageData } from "@/components/Page";

export default function Editor({ pageData }: { pageData: PageData }) {
	return <Page pageData={pageData} />;
}

export async function getStaticProps() {
	const pageData: PageData = {
		head: {
			title: "Markdown Editor",
			description:
				"Write Markdown extended with Github Flavored Markdown (GFM), HTML tags with inline CSS styles, embed elements and auto	highlighted code and see how it is rendered as an HTML!",
		},
		markdown: "",
		isEditorPage: true,
		html: "",
	};

	return {
		props: {
			pageData,
		},
	};
}
