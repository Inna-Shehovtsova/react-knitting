import React from "react";
import { render, screen } from "@testing-library/react";
import { SockCounter } from "./sockCounter";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
test("renders counter", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SockCounter />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  );
  screen.debug();
  console.log("test ", screen.debug());
  const buttonElement = screen.getByTestId("counterincr");
  expect(buttonElement).toBeInTheDocument();
  const buttonElement2 = screen.getByTestId("counterdecr");
  expect(buttonElement2).toBeInTheDocument();

  const inputEl = screen.getByTestId("counterinput");
  expect(inputEl).toBeInTheDocument();
});
