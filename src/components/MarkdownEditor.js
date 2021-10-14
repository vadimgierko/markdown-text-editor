export default function MarkdownEditor({
    markdownInput,
    setMarkdownInput,
    saveMarkdownInputInStorage,
    setMode
  }) {
    console.log("content passed for edition:", markdownInput);
    //setMarkdownInput(markdownInput);
    return (
      <>
        <h3 className="text-center">Markdown Editor</h3>
        <hr />
        <textArea
          defaultValue={markdownInput}
          onChange={(e) => {
            setMarkdownInput(e.target.value);
          }}
          style={{width: "100%", height: "80%"}}
        >{markdownInput}</textArea>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            saveMarkdownInputInStorage();
            setMode("view");
          }}
        >Save & Render Markdown Text</button>
      </>
    );
}