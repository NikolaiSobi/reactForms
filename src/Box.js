import React from "react";

const Box = ({id, color, width, height, deleteBox}) => {
    return (
        <div id={id} style={{ backgroundColor: color, width:width, height:height, display: "inline-block" }}>
            <button onClick={() => deleteBox(id)}>X</button>
        </div>
    )
}

export default Box