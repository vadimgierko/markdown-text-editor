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
		isEditorMode: false,
	},
	{
		path: "/markdown-guide",
		markdown: MARKDOWN_GUIDE,
		isEditorMode: false,
	},
	{
		path: "/html-guide",
		markdown: HTML_GUIDE,
		isEditorMode: false,
	},
	{
		path: "/editor",
		markdown: "",
		isEditorMode: true,
	},
];

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: ROUTES.map(({ markdown, path, isEditorMode }) => ({
				path,
				element: (
					<MarkdownEditor
						key={path}
						markdown={markdown}
						isEditorMode={isEditorMode}
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
