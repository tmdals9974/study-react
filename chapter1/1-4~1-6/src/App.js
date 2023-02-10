import logo from "./logo.svg";
import "./App.css";
import TestCSSinJS from "./cssTest/testCSSinJS";
import TestModuleCSS from "./cssTest/testModuleCSS";

function App() {
  function onClick() {
    import("./data.json").then(({ default: data }) => {
      console.log(data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>dynamic import</button>
        <TestCSSinJS size="big"></TestCSSinJS>
        <TestModuleCSS></TestModuleCSS>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
