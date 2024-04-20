import React, { useState } from "react";

export default function Counter() {
  const [count, setCont] = useState(0);
  const inCrementHandler = () => {
    setCont((count) => count + 1);
  };
  const deCrementHandler = () => {
    setCont((count) => count - 1);
  };
  const resetHandler = () => {
    setCont((count) => 0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count :{count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={inCrementHandler}
            disabled={count === 5 ? true : false}
          >
            +
          </button>
          <button
            className="btn card__btn"
            onClick={deCrementHandler}
            disabled={count === -5 ? true : false}
          >
            -
          </button>
          <button className="btn card__btn" onClick={resetHandler}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}
