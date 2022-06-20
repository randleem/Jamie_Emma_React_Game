import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [listArray, setListArray] = useState([]);
  const [groupSize, setGroupSize] = useState(1);
  const [groupArray, setGroupArray] = useState([]);
  const [randomise, setRandomise] = useState(false);

  return <div>Hello React App</div>;
}

export default App;
