import ReactMarkdown from "react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";

export default function MarkdownEditor({ content, saveContentInStorage, setMode }) {
    
    const [contentForEdition, setContentForEdition] = useState(content);

    return (
        <div className="row" style={{marginTop: 60}}>
            <div className="col-lg mt-2 mx-2" style={{marginBottom: 90}}>
                <hr />
                <h3 className="text-center">Markdown Editor</h3>
                <hr />
                <textarea
                    defaultValue={contentForEdition}
                    onChange={(e) => setContentForEdition(e.target.value)}
                    style={{width: "100%", height: "80%"}}
                />
                <button
                    type="button"
                    className="btn btn-success my-2"
                    onClick={() => {
                        saveContentInStorage(contentForEdition);
                        setMode("view");
                    }}
                >Save & Render Markdown Text</button>
            </div>
            <div className="col-lg m-2">
                <hr />
                <h3 className="text-center">Rendered Output</h3>
                <hr />
                <div>
                    <ReactMarkdown children={contentForEdition} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
        </div>
    );
}