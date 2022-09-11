import React from "react";



export default function Preview(props) {

    return (
        <div >
            <div className="preview-header">
                <p className="preview-title">Preview</p>
                <button onClick={props.togglePreviewSize}>SIZE</button>
            </div>
            
           <div id="preview" className={props.previewSize ? "max": ""}>
            {props.content}
            </div>
        </div>
    )

}

        