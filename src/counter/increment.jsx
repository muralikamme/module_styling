import { Component } from "react";
import './color.css'

class Increment extends Component{
//creating constructor function
    constructor(props){
        super(props);
        this.state={
          count:0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)

    }

//using function to change a value in state
    increment(){
        
        this.setState((ps)=>{
           
            return({
                count:ps.count+1  
            })
            
        })
    }
// using object setSate
    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }




   render(){
//conditions 
var a=""
  if(this.state.count>5){
    a= <h1 style={{color:"green"}}>{this.state.count}</h1>

  }else if(this.state.count <=5 && this.state.count>=0){
    a= <h1 style={{color:"yellow"}}>{this.state.count}</h1>

  }else{
    a= <h1 style={{color:"red"}}>{this.state.count}</h1>

  }




    return(
        <>
      
        <div className="counter">
            {console.log(this.state)}
            
   <button onClick={this.decrement}>Decrement</button>
    {a}
    <button onClick={this.increment}>Increment</button>
    </div>


        </>
    )
   }


}

export default Increment