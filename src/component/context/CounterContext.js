import React, { useReducer } from "react";

export const CounterContext = React.createContext();
const INIT_STATE = {
  counter: 0,
};
//  action { type:"", payload: someData}
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, counter: action.payload };
    case "INCREMENT":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
const CounterContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function decrement() {
    dispatch({
      type: "DECREMENT",
      payload: state.counter - 1,
    });
  }
  function increment() {
    dispatch({
      type: "INCREMENT",
      payload: state.counter + 1,
    });
  }
  console.log(state);
  return (
    <CounterContext.Provider
      value={{ counter: state.counter, decrement, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvaider;
