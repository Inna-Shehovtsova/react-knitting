import { FC } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { signIn, signOut } from "../redux/loginSlice";
import { useSelector, useDispatch } from "react-redux";

export const Header: FC = () => {
  const isAutorized = useSelector((state: any) => state.login.isAuthorized);
  const name = useSelector((state: any) => state.login.name);
  const dispatch = useDispatch();

  if (isAutorized) {
    return (
      <div>
        <div>
          <p>
            Привет, {name}{" "}
            <button className="signout" onClick={() => dispatch(signOut())}>
              выйти
            </button>
          </p>
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {" "}
            Главная
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/socks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Носок
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/counter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Простой счетчик
          </NavLink>
        </div>

        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <div>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {" "}
          Войти
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {" "}
          Главная
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/socks"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Носок
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/counter"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Простой счетчик
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};
