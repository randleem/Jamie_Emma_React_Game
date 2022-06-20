import { useState, useEffect } from "react";
import "./App.css";

import Input from "./components/Input";
import ListItem from "./components/ListItem";

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
      <ListItem />
      <h1>{item}</h1>

      <h2>this is h2 {listArray}</h2>
    </div>
  );
}

export default App;
