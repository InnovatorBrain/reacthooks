import React, { useReducer } from 'react';

const ReducerHook = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "carChange":
        return { ...state, car: action.payload };
      case "modelChange":
        return { ...state, model: action.payload };
      case "colorChnage":
        return { ...state, color: action.payload };
      case "lightsChange":
        return { ...state, Lights: action.payload }; 
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    car: "BMW",
    model: "2023",
    color: "Green",
    Lights: "On",
  });

  return (
    <div>
      <h2>The {state.car} {state.model} {state.color} {state.Lights} is ready to go!</h2>
      <button onClick={() => dispatch({ type: "carChange", payload: "Mercedes" })}>Change Car</button>
      <button onClick={() => dispatch({ type: "modelChange", payload: "2025" })}>Change Model</button>
      <button onClick={() => dispatch({ type: "colorChange", payload: "Yellow" })}>Change Color</button>
      <button onClick={() => dispatch({ type: "lightsChange", payload: "On & Off" })}>Change Lights</button>
    </div>
  );
};
export default ReducerHook;