import React, { FC, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setValue } from "../redux/counterSlice";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.count);

  const handleSumbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="counter" onSubmit={handleSumbmit}>
      <div>
        {" "}
        <button
          className="reset"
          onClick={() => dispatch(reset())}
          data-testid="counterres"
        >
          R
        </button>
      </div>
      <div>
        {" "}
        <button
          className="decrement"
          onClick={() => dispatch(decrement())}
          data-testid="counterdecr"
        >
          -
        </button>
      </div>
      <div>
        <input
          className="show"
          type="number"
          size={4}
          maxLength={4}
          value={counter}
          onChange={(event) =>
            dispatch(setValue(Number.parseInt(event.target.value)))
          }
          data-testid="counterinput"
        ></input>
      </div>
      <div>
        {" "}
        <button
          className="increment"
          onClick={() => dispatch(increment())}
          data-testid="counterincr"
        >
          +
        </button>
      </div>
    </form>
  );
};
