import { useState } from 'react';
import './App.css';
import Article from './components/Article';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  console.log("Content stored in your browser local storage:", window.localStorage.getItem("content"));

  const [mode, setMode] = useState("view"); //edit //view
  const [content, setContent] = useState(() => window.localStorage.getItem('content'));
  
  function saveContentInStorage(content) {
    // save new content in storage
    window.localStorage.setItem('content', content);
    console.log("content was saved in local storage:", window.localStorage.getItem('content'));
    // get updated content from storage
    setContent(window.localStorage.getItem('content').length ? window.localStorage.getItem('content') : ``);
  }
  
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {
          mode === "view" ?
            <Article setMode={setMode} content={content} />
          :
          <MarkdownEditor
            content={content}
            saveContentInStorage={saveContentInStorage}
            setMode={setMode}
          />
        }
      </div>
    </div>
  );
}

export default App;
