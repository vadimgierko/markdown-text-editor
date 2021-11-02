import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Article({ content, setMode }) {
    return (
      <div style={{marginTop: 80}}>
        {
            content ?
                <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
            :
                <h3>There is no article here... Create one!</h3>
        }
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setMode("edit")}
        >{content ? "Edit article" : "Create article"}</button>
      </div>
    );
}