import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, setSushiIndex, sushiIndex, handleEatSushi }) {

  const sushiMapping = sushis.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi}  handleEatSushi={handleEatSushi}/>
  })
  return (
    <div className="belt">
      {sushiMapping}
      <MoreButton setSushiIndex={setSushiIndex} sushiIndex={sushiIndex}/>
    </div>
  );
}

export default SushiContainer;
