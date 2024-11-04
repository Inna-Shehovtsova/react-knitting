import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./components/counter";
import { SockCounter } from "./components/sockCounter";
import { SockInput } from "./components/sockInput";

import { NotFound } from "./components/NotFound";
import { Header } from "./components/header";
import { Login } from "./components/login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<SockInput />} />
          <Route path="socks" element={<SockCounter />} />
          <Route path="counter" element={<Counter />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
