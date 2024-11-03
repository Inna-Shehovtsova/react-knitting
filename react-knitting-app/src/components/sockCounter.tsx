import React, {FC, useState} from "react";


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
     
    
      return  (
        <form className="model" onSubmit={handleSumbmit}>
           <p>Схема вязания носков {name} размера {size}, плотности {stich}/{row}</p>
            
             <div className="counter"> <button className="decrement"onClick={() => dispatch(getPreviosRow())}
          data-testid="counterdecr">-</button>
             <p className="show"  
             data-testid="counterinput">{counter}</p>
              <button className="increment" onClick={() => dispatch(getNextRow())}
          data-testid="counterincr">+</button></div>
               
          
            <div>
          
           
           <p className="description"  data-testid="description">{rowDesc.desc}</p>
           <p className="rowdescription"  data-testid="rowdescription">{rowDesc.row}
        </p></div>
       </form>
      )

  }

