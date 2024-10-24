import { Component } from "react";

import './counter.css'

class Child extends Component{

  
//initial state
constructor(props){
  super(props);
  this.state={
    a:10
  }

  //Binding to this 
  this.inc=this.inc.bind(this)
  this.dec=this.dec.bind(this)

}


// Using SetState(Object)

// mem(){
//   this.setState({
//    a:this.state.a+1
//   })
// }

// using setstate (function)  for Increment

inc=()=>{
  this.setState((prevstate)=>{
    console.log(prevstate);
  return({
    a:prevstate.a+1
  }
  )
  })
}
  
// for Decrement
dec=()=>{
  this.setState((prevstate)=>{
    console.log(prevstate);
  return({
    a:prevstate.a-1
  }
  )
  },()=>{
    console.log(this.state.a);

  })
}



    render(){

        return (
            <>
            <div className="counter">
              <button onClick={this.dec}>Decrement (-) </button>
              <h1 style={{color:"blue"}}> {this.state.a}</h1>
            <button onClick={this.inc}>Increment(+) </button>
            </div>
           
            </>
        )
    }
}
export default  Child