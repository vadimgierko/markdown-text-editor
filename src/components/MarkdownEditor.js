import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function MarkdownEditor({ content, saveContentInStorage, setMode }) {
    //console.log("content passed for edition:", content);
    
    const [contentForEdition, setContentForEdition] = useState(content);

    return (
        <>
            <div className="col border rounded m-2">
                <h3 className="text-center">Markdown Editor</h3>
                <hr />
                <textarea
                    defaultValue={contentForEdition}
                    onChange={(e) => setContentForEdition(e.target.value)}
                    style={{width: "100%", height: "80%"}}
                />
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        saveContentInStorage(contentForEdition);
                        setMode("view");
                    }}
                >Save & Render Markdown Text</button>
            </div>
            <div className="col border rounded m-2">
                <h3 className="text-center">Rendered Output</h3>
                <hr />
                <div>
                    <ReactMarkdown children={contentForEdition} />
                </div>
            </div>
        </>
    );
}