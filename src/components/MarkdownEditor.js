import { useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import { useNavigate } from "react-router-dom";

export default function MarkdownEditor({ content, saveContentInStorage = null }) {
    const [contentForEdition, setContentForEdition] = useState(content);
    const navigate = useNavigate();

    return (
        <div className="row">
            <div className="col-lg mt-2 mx-2">
                <hr />
                <h3 className="text-center">Markdown Editor</h3>
                <hr />
                <textarea
                    defaultValue={contentForEdition}
                    onChange={(e) => setContentForEdition(e.target.value)}
                    style={{ width: "100%", height: "80%" }}
                />
                {saveContentInStorage && <button
                    type="button"
                    className="btn btn-success my-2"
                    onClick={() => {
                        saveContentInStorage(contentForEdition);
                        navigate("/rendered-html");
                    }}
                >Save & Render Markdown Text</button>}
            </div>
            <div className="col-lg m-2">
                <hr />
                <h3 className="text-center">Rendered Output</h3>
                <hr />
                <div>
                    <MarkdownRenderer markdown={contentForEdition} />
                </div>
            </div>
        </div>
    );
}