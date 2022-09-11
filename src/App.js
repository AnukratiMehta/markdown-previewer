import Preview from './components/Preview';
import { useState } from 'react';
import Header from './components/Header';

function App() {

  const [content, setContent] = useState("")

  function handleChange(event) {
    setContent(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      
      <textarea id="editor" onChange={handleChange}>
        <div className="editor-header">
          <p className="editor-title">Editor</p>
        </div>
      </textarea>
      <Preview content={content}/>
      
    </div>
  );
}

export default App;
