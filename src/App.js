import "./App.css";
import ButtonGrid from "./components/ButtonGrid";
import Display from "./components/Display";
import React, { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState("");
  const [inputMemory, setInputMemory] = useState("");
  const [isDecimal, setIsDecimal] = useState(false);
  const [answered, setAnswered] = useState(false);


  function handleNumber(number) {
    if (answered) {
      setUserInput(number.toString());
      setAnswered(false);
    } else if (isNaN(userInput)) {
      setUserInput(number.toString());
    } else {
      setUserInput(userInput.toString() + number.toString())
    }
  }

  function handleOperator(operator) {
    setInputMemory(inputMemory + Number(userInput) + operator);
    setUserInput("");
    setIsDecimal(false);
    setAnswered(false);
  }

  function handleDecimal() {
    if (!isDecimal) {
      setIsDecimal(true);
      setUserInput(userInput + ".");
    }

  }

  function handleEquals() {
    let equation;
    if (answered) {
      setUserInput(0);
      setAnswered(false);
      return;
    }
    // eslint-disable-next-line eqeqeq
    else if (userInput == 0 || userInput == "" || isNaN(userInput)) {
      equation = inputMemory.slice(1, -1)
      setInputMemory(equation);
    } else {
      equation = inputMemory + Number(userInput)
      setInputMemory(equation);
    }

    // eslint-disable-next-line no-eval
    let answer = eval(equation.replace(/[^-()\d/*+.]/g, ''));
    setUserInput(answer);
    setInputMemory("");
    setAnswered(true);
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
