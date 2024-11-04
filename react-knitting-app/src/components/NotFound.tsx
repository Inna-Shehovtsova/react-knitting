import { FC } from "react";
import {  NavLink } from "react-router-dom";
export const NotFound: FC = () => {
  return (
    <div>
      Ой, такой страницы нет. Но можно
      <p>
        {" "}
        <NavLink to="/">перейти на главную</NavLink>
      </p>
    </div>
  );
};
