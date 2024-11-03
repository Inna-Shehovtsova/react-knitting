import React, {FC, useState} from "react";
type Props = {
    name:string;
}
type State ={   
    row:number;
    stich:number;
    size:number;
}

export const SockInput:FC<Props> =  (props:Props)=>{
    let [state, setState] = useState({row:10, stich:10, size:37});   

    const handleSumbmit =   (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
    }
    const handleChangeRow=(event:React.ChangeEvent<HTMLInputElement>)=>{
       
        setState({...state, row : Number.parseInt(event.target.value) });
        
      }
      const handleChangeStich=(event:React.ChangeEvent<HTMLInputElement>)=>{
       
        setState({...state, stich : Number.parseInt(event.target.value) });
        
      }
      const handleChangeSize=(event:React.ChangeEvent<HTMLInputElement>)=>{
       
        setState({...state, size : Number.parseInt(event.target.value) });
        
      }
      const handleChangeName=(event:React.ChangeEvent<HTMLInputElement>)=>{
       
        props.name =event.target.value 
        
      }
      const handleClick=(event:any)=>{        
        
      }
      return  (
        <form onSubmit={handleSumbmit}><div>           
           <input className="projname" value={props.name}  onChange={handleChangeName}  data-testid="projname">
        </input></div>
        <div>           
           <input className="projstich" value="10" onChange={handleChangeStich} data-testid="projstich">
        </input></div>
        <div>           
           <input className="projrow" value="10" onChange={handleChangeRow} data-testid="projrow">
        </input></div>
        <div>           
           <input className="projsize" value="37" onChange={handleChangeSize} data-testid="projsize">
        </input></div>
        <div> <button className="createSock" onClick={handleClick}
        data-testid="createSock">Создать</button></div>
       </form>
      )

  }

