import React, {useState} from "react";

function Table({ sushis, plates = [], money }) {
  
  sushis.forEach(s => s.eaten ? plates.push(s) : null)
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  // console.log(plates)
  const pricing = plates.map(plate => plate.price)
  console.log(pricing)
  // if (pricing) pricing.reduce((accumulator, currentValue) => accumulator + currentValue)

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
