import './App.css';
import LostItemsList from "./LostItemsList";

function App() {

  const addNumbers = (a, b) => {
    return a + b;
  }

  function addNumbers2(a, b) {
    return a + b;
  }


  return (
    <div className="App">
        <h1>Hello World!</h1>
        <p>hi, { addNumbers(1, 2) }</p>
        <LostItemsList lostItems={["Hello world", "Hi"]} />
    </div>
  );
}

export default App;
