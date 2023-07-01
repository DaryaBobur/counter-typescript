import React, { useState } from "react";
import './CounterStyled.css';


interface IState {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<IState>({ count: 0 });

  const increment = (): void => {
    setState({ count: state.count + 1 });
  };

  const decrement = (): void => {
    if(state.count <= 0) {
        return;
    }
    setState({ count: state.count - 1 });
  };



  return (
    <>
      <div className="container">
        <h1 className="title">Counter</h1>
        <p className="counter-num">{state.count}</p>
        <button className="btn" type="button" onClick={increment}>+</button>
        <button className="btn" type="button" onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default Counter;
