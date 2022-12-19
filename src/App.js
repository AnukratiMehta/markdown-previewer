import Preview from './components/Preview';
import { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';

function App() {

  const [content, setContent] = useState("")

  function handleChange(event) {
    setContent(event.target.value)
  }

  const [editorSize, setEditorSize] = useState(true)

  function toggleEditorSize() {
    setEditorSize(prevState => !prevState)
  }

  const [previewSize, setPreviewSize] = useState(true)

  function togglePreviewSize() {
    setPreviewSize(prevState => !prevState)
  }


  return (
    <div className="App">
      <Header />
      <div className='columns'>

        <Editor handleChange={handleChange} toggleEditorSize={toggleEditorSize} editorSize={editorSize} />

        <Preview content={content} togglePreviewSize={togglePreviewSize} previewSize={previewSize} />
      </div>

    </div>
  );
}

export default App;
