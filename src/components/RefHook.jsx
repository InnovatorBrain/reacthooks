import React, { useRef } from 'react'


const RefHook = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "Most Welcome!";
  }

  return (
    <>
      <h2>Anything</h2>
      <input type="text" ref={inputRef} placeholder="Enter anything" />
      <button onClick={onClick}>Click here</button>
    </>
  )
}

export default RefHook