import { FC } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (<div>
      <div>
        
          <NavLink
            to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }           
          > Главная
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/socks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
          >Носок
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
