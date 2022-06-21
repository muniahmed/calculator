import "./App.css";
import ButtonGrid from "./components/ButtonGrid";
import Display from "./components/Display";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [inputMemory, setInputMemory] = useState("");
  const [isDecimal, setIsDecimal] = useState(false);


  function handleNumber(number) {
    setUserInput(userInput.toString() + number.toString())
  }

  function handleOperator(operator) {
    setInputMemory(inputMemory + Number(userInput) + operator);
    setUserInput("");
    setIsDecimal(false);
  }

  function handleDecimal() {
    if (!isDecimal) {
      setIsDecimal(true);
      setUserInput(userInput + ".");
    }
  }

  function handleEquals() {
    console.log(inputMemory);

    setInputMemory("");
    setUserInput("");

  }

  function clearDisplay() {
    setUserInput("");
    setInputMemory("");
    setIsDecimal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Display userInput={userInput} inputMemory={inputMemory} />
        <ButtonGrid handleNumber={handleNumber} handleOperator={handleOperator} clearDisplay={clearDisplay} handleDecimal={handleDecimal} handleEquals={handleEquals} />
      </header>
    </div>
  );
}

export default App;
