import React from "react";
import "./Button.css";


function NumberButton(props) {
    return <div id={props.id} className="Button NumberButton" value={props.symbol} onClick={() => { props.handleNumber(props.symbol) }}>
        <p>{props.symbol}</p>
    </div>
}

function DecimalButton(props) {
    return <div id={props.id} className="Button NumberButton" value={props.symbol} onClick={() => { props.handleDecimal() }}>
        <p>.</p>
    </div>
}

function OperatorButton(props) {
    return <div id={props.id} className="Button OperatorButton" onClick={() => { props.handleOperator(props.symbol) }}>
        <p>{props.symbol}</p>
    </div>
}

function EqualsButton(props) {
    return <div id={props.id} className="Button EqualsButton" onClick={() => { props.handleEquals() }}>
        <p>=</p>
    </div>
}

function ClearButton(props) {
    return <div id={props.id} className="Button ClearButton" onClick={props.clearDisplay}>
        <p>AC</p>
    </div>
}




export { NumberButton, DecimalButton, OperatorButton, EqualsButton, ClearButton };