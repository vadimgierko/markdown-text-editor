import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import { ABOUT } from "./content/about";
import { MARKDOWN_GUIDE } from "./content/markdown-guide";
import { HTML_GUIDE } from "./content/html-guide";

import MarkdownEditor from "./components/MarkdownEditor";

const ROUTES = [
	{
		path: "/",
		markdown: ABOUT,
		isEditorPage: false,
	},
	{
		path: "/markdown-guide",
		markdown: MARKDOWN_GUIDE,
		isEditorPage: false,
	},
	{
		path: "/html-guide",
		markdown: HTML_GUIDE,
		isEditorPage: false,
	},
	{
		path: "/editor",
		markdown: "",
		isEditorPage: true,
	},
];

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: ROUTES.map(({ markdown, path, isEditorPage }) => ({
				path,
				element: (
					<MarkdownEditor
						key={path}
						markdown={markdown}
						isEditorPage={isEditorPage}
					/>
				),
			})),
		},
	],
	// ===================❗ WARNING! ❗===================
	// UNCOMMENT CODE BELOW WHEN DEPLOY VIA GITHUB PAGES,
	// COMMENT THE CODE WHEN DEV IN CODESPACES OR CODE EDITOR:
	{ basename: process.env.PUBLIC_URL }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
