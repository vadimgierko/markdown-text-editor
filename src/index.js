import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// css for highlighting code in github style
// (without this rehype-highlight will not be working):
import "highlight.js/styles/github.css";
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RenderedHtmlPage from './pages/RenderedHtmlPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutPage />
      },
      {
        path: "/editor",
        element: <EditorPage />
      },
      {
        path: "/rendered-html",
        element: <RenderedHtmlPage />
      },
    ]
  },
],
  // basename={process.env.PUBLIC_URL} <= use this in the router if app is published on gh pages
  {basename: process.env.PUBLIC_URL}
);


import ReactDOM from 'react-dom/client';
import EditorPage from './pages/EditorPage';
import AboutPage from './pages/AboutPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
