import './App.css';
import ErrorBund from './ErrorBund';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>Error Boundary in React</h1>
      <ErrorBund >
        <User />
      </ErrorBund >

    </div>
  );
}

export default App;
