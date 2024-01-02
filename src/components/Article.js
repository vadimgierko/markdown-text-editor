import MarkdownRenderer from "./MarkdownRenderer";

export default function Article({ content, setMode }) {
    return (
      <article>
        {
            content ?
                <MarkdownRenderer markdown={content} />
            :
                <h3>There is no article here... Create one!</h3>
        }
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setMode("edit")}
        >{content ? "Edit article" : "Create article"}</button>
      </article>
    );
}