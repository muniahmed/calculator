import React from "react";
import "./Button.css";


function NumberButton(props) {
    return <div id={props.id} className="Button NumberButton" >
        <p>{props.symbol}</p>
    </div>
}

function OperatorButton(props) {
    return <div className="Button OperatorButton" >
        <p>{props.symbol}</p>
    </div>
}

function EqualsButton(props) {
    return <div className="Button EqualsButton" >
        <p>=</p>
    </div>
}


function ClearButton(props) {
    return <div className="Button ClearButton" >
        <p>AC</p>
    </div>
}




export { NumberButton, OperatorButton, EqualsButton, ClearButton };