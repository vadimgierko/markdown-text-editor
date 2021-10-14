import ReactMarkdown from "react-markdown";

export default function Article({ content, setMode }) {
    return (
      <div>
        <ReactMarkdown source={content} />
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setMode("edit")}
        >Edit</button>
      </div>
    );
}