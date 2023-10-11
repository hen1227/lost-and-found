import './App.css';
import LostItemsList from "./LostItemsList";
import {useEffect, useState} from "react";

function App() {

    const [lostItems, setLostItems] = useState([]);

  const addNumbers = (a, b) => {
    return a + b;
  }

  function addNumbers2(a, b) {
    return a + b;
  }

  const updateLostItems = () => {
      fetch('http://localhost:4004/lostItems')
            .then(response => response.json())
            .then(data => setLostItems(data.items));
  }

    useEffect(() => {
        updateLostItems();
    }, []);


  return (
    <div className="App">
        <h1>Hello World!</h1>
        <p>hi, { addNumbers(1, 2) }</p>
        {lostItems && lostItems.length === 0 && <p>There are no lost items.</p>}
        {lostItems && lostItems.length > 0 &&
            <LostItemsList lostItems={lostItems} />
        }
    </div>
  );
}

export default App;
