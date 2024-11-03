import React, {FC, useState} from "react";
import {Counter} from "./counter"

import { useSelector, useDispatch } from "react-redux";
import { setSize, setRow,setStich,setModel,getNextRow,getPreviosRow } from "../redux/sockSlice";

export const SockCounter:FC =  ()=>{
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
    const handleChangeCounter = (event:React.FormEvent<HTMLFormElement>)=>{

    }   
      return  (
        <form onSubmit={handleSumbmit}>
           <p>Схема вязания носков {name} размера {size}, плотности {stich}/{row}</p>
            
             <div> <button className="decrement"onClick={() => dispatch(getPreviosRow())}
          data-testid="counterdecr">-</button></div>
           <div>
             <p className="show"  
             data-testid="counterinput">{counter}</p>
             </div>
          <div> <button className="increment" onClick={() => dispatch(getNextRow())}
          data-testid="counterincr">+</button></div>
               
          
            <div>
          
           
           <input className="description" value={rowDesc.desc} data-testid="description"></input>
           <input className="rowdescription" value={rowDesc.row} data-testid="rowdescription">
        </input></div>
       </form>
      )

  }

