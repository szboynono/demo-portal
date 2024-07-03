import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import index from "./docs/resources/index.md?raw";
import overview from "./docs/resources/overview.md?raw";
import faq from "./docs/resources/faq.md?raw";
import MarkdownRenderer from "./components/MarkdownRenderer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "resources",
        element: <Resources />,
        children: [
          {
            path: "",
            element: <MarkdownRenderer markdownContent={index} />,
          },
          {
            path: "overview",
            element: <MarkdownRenderer markdownContent={overview} />,
          },
          {
            path: "faq",
            element: <MarkdownRenderer markdownContent={faq} />,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
