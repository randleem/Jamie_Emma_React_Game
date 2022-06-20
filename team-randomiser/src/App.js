import { useState, useEffect } from "react";
import "./App.css";

import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [item, setItem] = useState("");
  const [listArray, setListArray] = useState([]);
  const [groupSize, setGroupSize] = useState(1);
  const [groupArray, setGroupArray] = useState([[]]);
  const [randomise, setRandomise] = useState(false);

  function handleSubmit() {
    if (item.length > 0) {
      setListArray([...listArray, item]);
      setItem("");
    } else {
      return;
    }
  }

  function handleGroupAddition() {
    setGroupSize(groupSize + 1);
    setGroupArray([...groupArray, []]);
    // console.log(`this is groupArray1`, groupArray);
  }
  function handleGroupSubtraction() {
    setGroupSize(groupSize - 1);
    setGroupArray([...groupArray.splice(0, groupArray.length - 1)]);
    //console.log(`this is groupArray1`, groupArray);
  }

  useEffect(() => {
    //console.log(groupArray);
  }, [groupArray]);
  //[{group: 0, list: ["emma", "Cheryl", "Dave"]},
  // {group: 1, list: ["jamie", "bernice", "Bob"]]

  function generateGroups() {
    let listArrayCopy = [...listArray];
    let groupIterations = Math.ceil(listArray.length / groupSize);
    for (let i = 0; i < groupIterations; i++) {
      //console.log(`this is GS`, groupSize);
      for (let j = 0; j < groupSize; j++) {
        let randomNumber = Math.floor(Math.random() * listArrayCopy.length);
        console.log(`RN`, randomNumber);
        //console.log(groupArray);
        console.log(`tt`, listArrayCopy[randomNumber]);
        setGroupArray([...groupArray, [...groupArray[j]]]);
        listArrayCopy.splice(randomNumber, 1);
        //console.log(`thisis listarraycopy`, listArrayCopy);
      }
    }
  }

  useEffect(() => {
    if (randomise) {
      // set up an arary of objects - no. Groups key, value = empty array
      generateGroups();
      setRandomise(false);
      console.log(groupArray);
    }
  }, [randomise]);

  return (
    <div>
      <Input onSubmit={handleSubmit} item={item} setItem={setItem} />
      <List listArray={listArray} />
      <div>
        <button onClick={handleGroupSubtraction}>-</button>
        <h2>{groupSize}</h2>
        <button onClick={handleGroupAddition}>+</button>
      </div>
      <button onClick={() => setRandomise(true)}>Randomise</button>
    </div>
  );
}

export default App;
