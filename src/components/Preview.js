import React from "react"


export default function Preview(props) {

    return (
        <div id="preview">
            <div className="preview-header">
                <p className="preview-title">Preview</p>
            </div>
            {props.content}

        </div>
    )

}