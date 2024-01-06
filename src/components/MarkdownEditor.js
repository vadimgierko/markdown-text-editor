import { useEffect, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import { getMarkdownFromLocalStorage, saveMarkdownInStorage } from "../utils";

export default function MarkdownEditor({
    markdown = "# Hello, World!",
    mode = "editor",
    isDarkMode = false
}) {
    const [localMarkdown, setLocalMarkdown] = useState();

    useEffect(() => {
        if (mode === "editor") {
            const storedMarkdown = getMarkdownFromLocalStorage();
            console.log(storedMarkdown)
            setLocalMarkdown(storedMarkdown);
        } else if (mode === "page") {
            setLocalMarkdown(markdown)
        }
    }, []);

    return (
        <div className="markdown-editor-component">
            <textarea
                className="markdown-editor"
                value={localMarkdown}
                placeholder="Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!"
                onChange={(e) => {
                    const updatedMarkdown = e.target.value;
                    setLocalMarkdown(updatedMarkdown);

                    mode === "editor" && saveMarkdownInStorage(updatedMarkdown);
                }}
            />
            <MarkdownRenderer markdown={localMarkdown} isDarkMode={isDarkMode} />
        </div>
    );
}