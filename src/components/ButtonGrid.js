import React from "react";
import { NumberButton, OperatorButton, EqualsButton, ClearButton } from "./Button.js";
import "./ButtonGrid.css";


function ButtonGrid(props) {
    return <div className="container">
        <ClearButton></ClearButton>
        <OperatorButton symbol="/"></OperatorButton>
        <OperatorButton symbol="x"></OperatorButton>
        <NumberButton id="seven" symbol={7}></NumberButton>
        <NumberButton id="eight" symbol={8}></NumberButton>
        <NumberButton id="nine" symbol={9}></NumberButton>
        <OperatorButton symbol="-"></OperatorButton>
        <NumberButton id="four" symbol={4}></NumberButton>
        <NumberButton id="five" symbol={5}></NumberButton>
        <NumberButton id="six" symbol={6}></NumberButton>
        <OperatorButton symbol="+"></OperatorButton>
        <NumberButton id="one" symbol={1}></NumberButton>
        <NumberButton id="two" symbol={2}></NumberButton>
        <NumberButton id="three" symbol={3}></NumberButton>
        <EqualsButton ></EqualsButton>
        <NumberButton id="zero" symbol={0}></NumberButton>
        <NumberButton symbol={"."}></NumberButton>
    </div>
}

export default ButtonGrid;