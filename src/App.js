import "./App.css";
import ButtonGrid from "./components/ButtonGrid";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInput />
        <ButtonGrid />
      </header>
    </div>
  );
}

export default App;
