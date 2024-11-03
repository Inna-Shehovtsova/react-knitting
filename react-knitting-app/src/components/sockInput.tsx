import React, {FC, useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSize, setRow,setStich,setModel,getNextRow,getPreviosRow,setName } from "../redux/sockSlice";
import { useNavigate ,NavLink} from "react-router-dom";


export const SockInput:FC =  ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const counter = useSelector((state:any) => state.sockCounter.count);
    const row = useSelector((state:any) => state.sockCounter.row);
    const stich= useSelector((state:any) => state.sockCounter.stich);
    const rowDesc = useSelector((state:any) => state.sockCounter.rowDesc);
    const size = useSelector((state:any) => state.sockCounter.size);
    const name = useSelector((state:any) => state.sockCounter.name);
    
      
    const handleSumbmit =   (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
    }

      
      return  (<main>
        <div><p>Я давно хотела сделать сайт-помощник для вяжущих занятых людей. Бывает, что не хочется 
        лишний раз вспоминать, как вязать носки, порядок действий, количество петель и рядов.                 
    </p><p>Сейчас можно просто ввести данные и получить рассчет носков и вязать по описаниию</p>
    <p>Если нужен <NavLink
            to="/counter">просто счетчик</NavLink> рядов - можно воспользоваться </p>
        <form className="model" onSubmit={handleSumbmit}><div>    
           <label htmlFor="projname">Название проекта</label>      
           <input className="projname" value={name}  onChange={(event) => dispatch(setName(event.target.value))} 
            data-testid="projname" name="projname">
        </input></div>
        <div>     
            <label htmlFor="projstich">Количество петель на 10 см</label>        
           <input className="projstich" type="number" size={4} maxLength={4} value={stich} onChange={(event) => dispatch(setStich(event.target.value))}
           data-testid="projstich" name="projstich">
        </input></div>
        <div>      
            <label htmlFor="projrow">Количество рядов на 10 см</label>      
           <input className="projrow" type="number" size={4} maxLength={4} value={row} onChange={(event) => dispatch(setRow(event.target.value))}
           data-testid="projrow" name="projrow">
        </input></div>
        <div>    
             <label htmlFor="projsize">Размер носков</label>        
           <input className="projsize" type="number" size={4} maxLength={4} value={size} onChange={(event) => dispatch(setSize(event.target.value))}
           data-testid="projsize"  name="projsize">
        </input></div>
        <div> <button className="createSock" onClick={(event) =>{ dispatch(setModel());
            navigate("/socks");}
        }
        data-testid="createSock">Создать модель</button></div>
       </form></div></main>
      )

  }

