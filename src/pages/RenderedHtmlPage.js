import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

export default function RenderedHtmlPage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        const md = localStorage.getItem('content');
        setContent(md)
    }, [])

    return (
        <MarkdownRenderer markdown={content} />
    );
}