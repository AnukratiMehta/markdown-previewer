import React from "react";
import ReactMarkdown from "react-markdown";



export default function Preview(props) {

    return (
        <div >
            <div className="preview-header">
                <p className="preview-title">Preview</p>
                <button onClick={props.togglePreviewSize}>SIZE</button>
            </div>
            
           <div id="preview" className={props.previewSize ? "max": ""}>
           <ReactMarkdown>
            {props.content}
                </ReactMarkdown>
            </div>
        </div>
    )

}

        