import React, { FormEvent } from "react";
type State ={
  counter:number
}
type Props = {
  initCounter: number;
}

export class Counter extends React.Component<Props, State> {
    constructor(props:any) {
      super(props);
      this.state = {counter: props.initCounter};
      
      //console.log(this.state)
    }
  
     increment (event: React.MouseEvent){
      //console.log(this.state);
      this.setState({counter: this.state.counter+1});
    }
    decrement (event: React.MouseEvent){
     // console.log(this.state);
      if( this.state.counter > 0)
        this.setState({counter: this.state.counter-1});
    else
    this.setState({counter:0});
    }
    reset  (event: React.MouseEvent){
      this.setState({counter:0});
    }
     handleSumbmit  (event:React.FormEvent<HTMLFormElement>){
      event.preventDefault();
    }
    change(event:React.ChangeEvent<HTMLInputElement>){
      this.setState({counter: Number.parseInt(event.target.value) });
      
    }
    render() {
      return  (
        <form onSubmit={this.handleSumbmit}>
          <div>
           <input className="show" onChange={this.change.bind(this)} 
           value={this.state.counter} data-testid="counterinput"></input>
           </div>
        <div> <button className="increment" onClick={this.increment.bind(this)}
        data-testid="counterincr">+</button></div>
        <div> <button className="decrement" onClick={this.decrement.bind(this)}
        data-testid="counterdecr">-</button></div>
        <div> <button className="reset" onClick={this.reset.bind(this)}
        data-testid="counterres">R</button></div>
        </form>
      )
    }
  }

