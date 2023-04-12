import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json()) 
    .then(sushiData => {
   
      setSushis(sushiData)
    })
  }, [])
  // console.log(sushis)

  function handleEatSushi(sushi) {
    if (money >= sushi.price) {
      const eatingSushi = sushis.map(s => s.id === sushi.id ? {...s, eaten: true} : s)
      setSushis(eatingSushi)
      // console.log("Yum", sushi)
      setMoney(() => money - sushi.price)
    }

  }
  

  const newSushis = sushis.slice(sushiIndex, sushiIndex + 4)
  // console.log(newSushis)

  return (
    <div className="app">
      <SushiContainer sushis={newSushis} setSushiIndex={setSushiIndex} sushiIndex={sushiIndex} handleEatSushi={handleEatSushi}/>
      <Table sushis={sushis} money={money}/>
    </div>
  );
}

export default App;
