import React, {FC, useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSize, setRow,setStich,setModel,getNextRow,getPreviosRow,setName } from "../redux/sockSlice";



export const SockInput:FC =  ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state:any) => state.sockCounter.count);
    const row = useSelector((state:any) => state.sockCounter.row);
    const stich= useSelector((state:any) => state.sockCounter.stich);
    const rowDesc = useSelector((state:any) => state.sockCounter.rowDesc);
    const size = useSelector((state:any) => state.sockCounter.size);
    const name = useSelector((state:any) => state.sockCounter.name);
    
      
    const handleSumbmit =   (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
    }

      
      return  (
        <form onSubmit={handleSumbmit}><div>           
           <input className="projname" value={name}  onChange={(event) => dispatch(setName(event.target.value))} 
            data-testid="projname">
        </input></div>
        <div>           
           <input className="projstich" value={stich} onChange={(event) => dispatch(setStich(event.target.value))}
           data-testid="projstich">
        </input></div>
        <div>           
           <input className="projrow" value={row} onChange={(event) => dispatch(setRow(event.target.value))}
           data-testid="projrow">
        </input></div>
        <div>           
           <input className="projsize" value={size} onChange={(event) => dispatch(setSize(event.target.value))}
           data-testid="projsize">
        </input></div>
        <div> <button className="createSock" onClick={(event) => dispatch(setModel())}
        data-testid="createSock">Создать</button></div>
       </form>
      )

  }

