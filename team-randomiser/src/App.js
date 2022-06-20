import { useState, useEffect } from "react";
import "./App.css";

import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [item, setItem] = useState("");
  const [listArray, setListArray] = useState([]);
  const [groupSize, setGroupSize] = useState(1);
  const [groupArray, setGroupArray] = useState([]);
  const [randomise, setRandomise] = useState(false);

  function handleSubmit() {
    if (item.length > 0) {
      setListArray([...listArray, item]);
      setItem("");
    } else {
      return;
    }
  }

  useEffect(() => {
    console.log(listArray);
  }, [listArray]);

  return (
    <div>
      <Input onSubmit={handleSubmit} item={item} setItem={setItem} />
      <List listArray={listArray} />
      <div>
        <button onClick={() => setGroupSize(groupSize - 1)}>-</button>
        <h2>{groupSize}</h2>
        <button onClick={() => setGroupSize(groupSize + 1)}>+</button>
      </div>
      <button onClick={() => setRandomise(true)}>Randomise</button>
    </div>
  );
}

export default App;
