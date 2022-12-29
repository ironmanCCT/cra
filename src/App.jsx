import logo from "./logo.svg";
import "./App.css";
import Chart from "./Chart";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Chart></Chart>
    </div>
  );
}

export default App;
