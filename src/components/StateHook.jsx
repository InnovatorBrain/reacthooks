import React, { useState } from 'react';

const StateHook = () => {
  const [number, setNumber] = useState(10);

  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h2>{number}</h2>
      <button onClick={increase}>Click</button>
    </>
  );
};

export default StateHook;
