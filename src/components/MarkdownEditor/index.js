import { useEffect, useState } from "react";
import { getMarkdownFromLocalStorage, saveMarkdownInStorage } from "../../utils";
import MarkdownRenderer from "../MarkdownRenderer";

export default function MarkdownEditor({
    markdown = "Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!",
    isEditorMode = true,
}) {
    const [localMarkdown, setLocalMarkdown] = useState(isEditorMode ? getMarkdownFromLocalStorage() : markdown);

    return (
        
            <div className="markdown-editor-component">
                <textarea
                    className="markdown-editor"
                    value={localMarkdown}
                    placeholder="Type something using Markdown syntax or HTML (also with inline styles 😉) & see how it will be rendered!"
                    onChange={(e) => {
                        const updatedMarkdown = e.target.value;
                        setLocalMarkdown(updatedMarkdown);

                        isEditorMode && saveMarkdownInStorage(updatedMarkdown);
                    }}
                />
                <MarkdownRenderer markdown={localMarkdown} />
            </div>
    );
}