import { useState } from 'react';
import './App.css';
import Article from './components/Article';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownRenderScreen from './components/MarkdownScreen';

function App() {
  const [mode, setMode] = useState("view"); //edit // create //view
  const [markdownInput, setMarkdownInput] = useState(``);
  const [markdownFromStorage, setMarkdownFromStorage] = useState(``);
  const [content, setContent] = useState(() => window.localStorage.getItem('markdownInput'));
  
  function saveMarkdownInputInStorage() {
    window.localStorage.setItem('markdownInput', markdownInput);
    console.log("markdown text was saved in local storage:", window.localStorage);
    getMarkdownInputFromStorage();
    setContent(markdownInput);
  }
  
  function getMarkdownInputFromStorage() {
    let fetchedMarkdown = window.localStorage.getItem('markdownInput');
    setMarkdownFromStorage(fetchedMarkdown);
    console.log("markdown text was fetched from local storage:", fetchedMarkdown);
  }
  
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {
          mode === "view" ?
            <Article setMode={setMode} content={content} />
          :
          <>
            <div className="col border rounded m-2">
              <MarkdownEditor
                markdownInput={content}
                setMarkdownInput={setMarkdownInput}
                saveMarkdownInputInStorage={saveMarkdownInputInStorage}
                setMode={setMode}
                setContent={setContent}
              />
            </div>
            <div className="col border rounded m-2">
              <MarkdownRenderScreen
                markdownFromStorage={markdownInput}
              />
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
