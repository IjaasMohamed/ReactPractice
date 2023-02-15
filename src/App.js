function App() {
  return (
    <div className="container">
      <h1 className="display-4">Learn React</h1>
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
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
      </div>
    </div>
  );
}

export default App;
