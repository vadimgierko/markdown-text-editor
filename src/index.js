import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// css for highlighting code in github style
// (without this rehype-highlight will not be working):
import "highlight.js/styles/github.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import { ABOUT } from './content/about';
import { MARKDOWN_GUIDE } from './content/markdown-guide';
import { HTML_GUIDE } from './content/html-guide';
import MarkdownEditor from './components/MarkdownEditor';

const ROUTES = [
  {
    path: "/",
    markdown: ABOUT,
    mode: "page"
  },
  {
    path: "/markdown-guide",
    markdown: MARKDOWN_GUIDE,
    mode: "page"
  },
  {
    path: "/html-guide",
    markdown: HTML_GUIDE,
    mode: "page"
  },
  {
    path: "/editor",
    markdown: "",
    mode: "editor"
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: ROUTES.map(({ markdown, path, mode }) => ({
      path,
      element: <MarkdownEditor key={path} markdown={markdown} mode={mode} />,
    }))
  },
],
  // ==================== WARNING! ===================
  // UNCOMMENT CODE BELOW WHEN DEPLOY VIA GITHUB PAGES,
  // COMMENT THE CODE WHEN DEV IN CODESPACES OR CODE EDITOR:
  //{basename: process.env.PUBLIC_URL}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
