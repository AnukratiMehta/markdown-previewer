import React from "react";


export default function Editor(props) {

    return (
        <div>
            <div className="editor-header">
                <p className="editor-title">Editor</p>
                <button onClick={props.toggleEditorSize}>SIZE</button>
            </div>
            
            

            <textarea id="editor" className={props.editorSize ? "max": ""} onChange={props.handleChange} >
        
            </textarea>
            
            
        </div>
    )
}