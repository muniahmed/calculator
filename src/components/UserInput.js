import React from "react";
import "./UserInput.css"

function UserInput(props) {
    return <div id="UserInput">
        <p id="InputMemory" value={props.inputMemory}></p>
        <p id="Input" value={props.input}></p>
    </div>
}

export default UserInput;