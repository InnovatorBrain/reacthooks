import React,{useLayoutEffect,useEffect,useRef} from 'react'

const LayoutEffect = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  },[]);
  useEffect(() => {
    inputRef.current.value="Faizan Ahmad";
  },[]);

  return (
    <>
    <input type="text" value="Faixan" ref={inputRef}/>
    
    </>
  )
}

export default LayoutEffect