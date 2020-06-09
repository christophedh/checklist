import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CheckList from "./components/CheckList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckList />
      </header>
    </div>
  );
}

export default App;
