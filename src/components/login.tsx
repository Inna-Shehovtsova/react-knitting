import React, { FC, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { signIn, setLogin } from "../redux/loginSlice";
import { fetchSockModels } from "../redux/modelsSlice";
import { useNavigate } from "react-router-dom";
import store from "../redux/store";

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<typeof store.dispatch>();
  const login = useSelector((state: any) => state.login.name);
  const isAutorized = useSelector((state: any) => state.login.isAuthorized);

  return (
    <form className="login">
      <div>
        <input
          value={login}
          onChange={(event) => dispatch(setLogin(event.target.value))}
          data-testid="loigninput"
        ></input>
      </div>
      <div>
        {" "}
        <button
          onClick={() => {
            dispatch(signIn());
            console.log(login);
            dispatch(fetchSockModels(login));
            console.log("after login");
            navigate("/");
          }}
          data-testid="loginB"
        >
          Войти
        </button>
      </div>
    </form>
  );
};
