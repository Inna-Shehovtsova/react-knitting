import React, {FC, useState} from "react";

import store from "../redux/store"
import { useSelector, useDispatch } from "react-redux";
import { setSize, setRow,setStich,setModel,getNextRow,getPreviosRow } from "../redux/sockSlice";
import {updateSockModel} from "../redux/modelsSlice"
import {TSockSaveNamed} from "../functions/sock"
import {RootState} from "../redux/store"
export const SockCounter:FC =  ()=>{
    const dispatch = useDispatch<typeof store.dispatch>();
    const counter = useSelector((state:RootState) => state.sockCounter.count);
    const row = useSelector((state:RootState)=> state.sockCounter.row);
    const stich= useSelector((state:RootState) => state.sockCounter.stich);
    const rowDesc = useSelector((state:RootState) => state.sockCounter.rowDesc);
    const size = useSelector((state:RootState) => state.sockCounter.size);
    const name = useSelector((state:RootState) => state.sockCounter.name);
    const username = useSelector((state:RootState)=>state.login.name);
    const isAuthorized = useSelector((state:RootState)=>state.login.isAuthorized);
    const handleSumbmit =   (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
    }
     
    if(isAuthorized)
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
        </p>
        <button onClick={() =>{ 
            let t:TSockSaveNamed = 
                {name:name, 
                    row:row, 
                    stich:stich,
                     size:size,
                      username:username,
                    progress:counter};
         dispatch(updateSockModel(t))}}
          data-testid="saveprogress">Сохранить успехи</button>
        </div>
       </form>
      )

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
        </p>
       
        </div>
       </form>
      )
  }

