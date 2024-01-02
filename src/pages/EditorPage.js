import { useEffect, useState } from "react";
import MarkdownEditor from "../components/MarkdownEditor";

export default function EditorPage() {
    console.log("Content stored in your browser local storage:", window.localStorage.getItem("content"));

    const [content, setContent] = useState(() => window.localStorage.getItem('content'));

    function saveContentInStorage(content) {
        // save new content in storage
        window.localStorage.setItem('content', content);
        console.log("content was saved in local storage:", window.localStorage.getItem('content'));
        // get updated content from storage
        setContent(window.localStorage.getItem('content'));
    }

    return (
        <MarkdownEditor
            content={content}
            saveContentInStorage={saveContentInStorage}
        />
    );
}