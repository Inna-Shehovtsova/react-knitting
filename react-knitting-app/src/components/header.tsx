import { FC } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive, isPending }) =>
              isActive ? { backgroundColor: "red", color: "green" } : {}
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/socks"
            style={({ isActive, isPending }) =>
              isActive ? { backgroundColor: "red", color: "green" } : {}
            }
          >Пример
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/counter"
            style={({ isActive, isPending }) =>
              isActive ? { backgroundColor: "red" } : {}
            }
          >
            Простой счетчик
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
