import React from "react";

function MoreButton({setSushiIndex, sushiIndex}) {
  return <button onClick={() => setSushiIndex(() => sushiIndex + 4)}>More sushi!</button>;
}

export default MoreButton;
