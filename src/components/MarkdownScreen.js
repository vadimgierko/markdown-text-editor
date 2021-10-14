import ReactMarkdown from "react-markdown";

export default function MarkdownRenderScreen({ markdownFromStorage }) {
    return (
      <>
        <h3 className="text-center">Rendered Output</h3>
        <hr />
        <div>
          <ReactMarkdown source={markdownFromStorage} />
        </div>
      </>
    );
}