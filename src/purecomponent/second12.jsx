import { Component, PureComponent } from "react";

class Child22 extends PureComponent{
    render(){
        return (
            <>
            {console.log(this.state)}
            
            {console.log("hii im child ")}
            </>
        )
    }
}
export default Child22