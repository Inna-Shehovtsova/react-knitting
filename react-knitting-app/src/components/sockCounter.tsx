import React, {FC, useState} from "react";
import {Counter} from "./counter"
type State ={
  counter:number
}
type Props = {
  initCounter: number;
  row:number;
  stich:number;
  size:number;
}

export const SockCounter:FC<Props> =  (props:Props)=>{
   
      let [counter, setCounter] = useState(props.initCounter);
    
    const handleSumbmit =   (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
    }
   
      return  (
        <form onSubmit={handleSumbmit}><div>
           <Counter initCounter={counter}></Counter>
           <input className="description" value="test" data-testid="sockinput">
        </input></div>
       </form>
      )

  }

