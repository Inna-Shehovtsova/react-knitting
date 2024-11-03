
import React, {FC, useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

type Props = {
  name:string;
}


export const Counter:FC<Props> =  (props:Props)=>{
  const dispatch = useDispatch();
  const counter = useSelector((state:any) => state.counter.count);
 
    
  const handleSumbmit =   (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
  }

    return  (
 
    
          <form className="counter" onSubmit={handleSumbmit}>
            <div> <button className="reset" onClick={() => dispatch(reset())}
          data-testid="counterres">R</button></div>
             <div> <button className="decrement"onClick={() => dispatch(decrement())}
          data-testid="counterdecr">-</button></div>
           <div>
             <p className="show"  
             data-testid="counterinput">{counter}</p>
             </div>
          <div> <button className="increment" onClick={() => dispatch(increment())}
          data-testid="counterincr">+</button></div>
        
          
          </form>
        

    )

}
