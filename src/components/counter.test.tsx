import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import { Provider } from "react-redux";
import store from "../redux/store"
import { BrowserRouter, Routes, Route } from "react-router-dom";
test("renders counter", async () => {
  render(<Provider store={store}><BrowserRouter>
      <Routes><Route path="/" element={<Counter />} /></Routes></BrowserRouter></Provider>);
  console.log("test ", screen.debug());
  const buttonElement = screen.getByTestId("counterincr");
  expect(buttonElement).toBeInTheDocument();
  const buttonElement2 = screen.getByTestId("counterdecr");
  expect(buttonElement2).toBeInTheDocument();
  const buttonElement3 = screen.getByTestId("counterres");
  expect(buttonElement3).toBeInTheDocument();
  
});
