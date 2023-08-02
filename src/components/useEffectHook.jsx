import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useEffectHook = () => {
  const [count, setCount] = useState(0);                                       /* useState */
  const [data, setData] = useState("");                                       /* useState */
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => { setData(res.data[0].email) })                              /* API */
      .catch((error) => { console.error('Error fetching data:', error); });
  }, [count]);

  return (
    <>
      <h3>The init  Data is {data} </h3>
      <h3>The count is {count} </h3>
      <button onClick={() => setCount(count +1 )}>Change Effect on every click</button>
    </>
  );
}

export default useEffectHook;
