import React from "react";
import logo from "./logo.svg";
import "./App.css";

//테스트를 위한 주석달기

function App() {
  return (
    <div className="App">
      {/*업로드 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
