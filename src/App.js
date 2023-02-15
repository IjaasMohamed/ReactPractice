import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Learn React</h1>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
