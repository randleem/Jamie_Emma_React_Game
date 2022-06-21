import { useState, useEffect } from "react";
import "./App.css";

import Input from "./components/Input";
import List from "./components/List";
import GroupSize from "./components/GroupSize";
import DisplayGroups from "./components/DisplayGroups";

function App() {
  const [item, setItem] = useState("");
  //const [listArray, setListArray] = useState([]);
  const [listArray, setListArray] = useState([
    "Emma",
    "Lara",
    "Tiff",
    "Suzie",
    "Imogen",
    "Charlotte",
    "Pascale",
    "Sian",
    "Emma P",
  ]);
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

  function resetList() {
    setListArray([]);
  }

  function resetGroups() {
    let emptyArray = [];
    for (let i = 0; i < groupSize; i++) {
      emptyArray.push([]);
    }
    console.log(`this is empty`, emptyArray);
    setGroupArray(emptyArray);
    console.log(`Should be emptyCells`, groupArray);
  }

  function handleRandomise() {
    resetGroups();
    setRandomise(true);
  }

  useEffect(() => {
    console.log(groupArray);
  }, [groupArray]);

  function generateGroups() {
    let listArrayCopy = [...listArray];
    let groupIterations = Math.ceil(listArray.length / groupSize);
    for (let i = 0; i < groupIterations; i++) {
      for (let j = 0; j < groupSize; j++) {
        if (listArrayCopy.length === 0) {
          break;
        }
        let randomNumber = Math.floor(Math.random() * listArrayCopy.length);
        let newArray = [...groupArray];
        newArray[j].push(listArrayCopy[randomNumber]);
        setGroupArray(newArray);
        listArrayCopy.splice(randomNumber, 1);
      }
    }
  }

  useEffect(() => {
    if (randomise) {
      console.log(`this is emptygroups`, groupArray);
      generateGroups();
      setRandomise(false);
      console.log(groupArray);
    }
  }, [randomise]);

  return (
    <div>
      <Input
        onSubmit={handleSubmit}
        item={item}
        setItem={setItem}
        handleReset={resetList}
      />
      <List listArray={listArray} />
      <GroupSize
        subtraction={handleGroupSubtraction}
        addition={handleGroupAddition}
        groupSize={groupSize}
      />
      <button onClick={handleRandomise}>Randomise</button>
      {groupArray[0].length > 0 && <DisplayGroups groupArray={groupArray} />}
    </div>
  );
}

export default App;
