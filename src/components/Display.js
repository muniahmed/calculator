import React from "react";
import "./Display.css"

function Display(props) {
    return <div id="Display">
        <p id="InputMemory" >{props.inputMemory}</p>
        <p id="UserInput" >{props.userInput}</p>
    </div>
}

export default Display;