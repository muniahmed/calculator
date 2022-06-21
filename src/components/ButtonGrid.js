import React from "react";
import { NumberButton, DecimalButton, OperatorButton, EqualsButton, ClearButton } from "./Button.js";
import "./ButtonGrid.css";


function ButtonGrid(props) {
    return <div className="container">
        <ClearButton id="clear" clearDisplay={props.clearDisplay}></ClearButton>
        <OperatorButton id="divide" symbol="/" handleOperator={props.handleOperator}></OperatorButton>
        <OperatorButton id="multiply" symbol="*" handleOperator={props.handleOperator}></OperatorButton>
        <NumberButton id="seven" symbol={7} handleNumber={props.handleNumber}></NumberButton>
        <NumberButton id="eight" symbol={8} handleNumber={props.handleNumber}></NumberButton>
        <NumberButton id="nine" symbol={9} handleNumber={props.handleNumber}></NumberButton>
        <OperatorButton id="subtract" symbol="-" handleOperator={props.handleOperator}></OperatorButton>
        <NumberButton id="four" symbol={4} handleNumber={props.handleNumber}></NumberButton>
        <NumberButton id="five" symbol={5} handleNumber={props.handleNumber}></NumberButton>
        <NumberButton id="six" symbol={6} handleNumber={props.handleNumber}></NumberButton>
        <OperatorButton id="add" symbol="+" handleOperator={props.handleOperator}></OperatorButton>
        <NumberButton id="one" symbol={1} handleNumber={props.handleNumber}></NumberButton>
        <NumberButton id="two" symbol={2} handleNumber={props.handleNumber}></NumberButton>
        <NumberButton id="three" symbol={3} handleNumber={props.handleNumber}></NumberButton>
        <EqualsButton id="equals" handleEquals={props.handleEquals}></EqualsButton>
        <NumberButton id="zero" symbol={0} handleNumber={props.handleNumber}></NumberButton>
        <DecimalButton id="decimal" symbol={"."} handleDecimal={props.handleDecimal}></DecimalButton>
    </div>
}

export default ButtonGrid;