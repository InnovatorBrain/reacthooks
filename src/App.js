// App.js
import React from 'react';

import './App.css';
import ReducerHook from './components/ReducerHook';
import UseEffectHook from './components/useEffectHook';
import RefHook from './components/RefHook';

function App() {
  return (
    <>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>UseReducerHook</h2>
      <ReducerHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>UseEffectHook</h2>
      <UseEffectHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>RefHook</h2>
      <RefHook />
    </>
  );
}

export default App;
