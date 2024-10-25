// import { Component } from "react";

// import Child22 from './second12';

// class Increment2 extends Component{
// //creating constructor function
//     constructor(props){
//         super(props);
//         this.state={
//           count:0
//         }
//         this.increment=this.increment.bind(this)
        

//     }

// //using function to change a value in state
//     increment(){
        
//         this.setState((ps)=>{
           
//             return({
//                 count:ps.count+1  
//             })
            
//         })
//     }





//    render(){

//     return(
//         <>
//        {console.log("hii this is parent ")}
//        <h1>hii im Parent</h1>
//         <Child22/>

      
      
//             {console.log(this.state.count)}
            
//    <h1>{this.state.count}</h1>
   
//     <button onClick={this.increment}>Increment</button>
   


//         </>
//     )
//    }


// }

// export default Increment2




import React, { Component } from 'react';

class FetchData extends Component {
  // Constructor
  constructor(props) {
    super(props); // Pass props to super
    this.state = {
      count: 0,
      api: [],
    };
    console.log("constructor");
  }

  // Static getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("static getDerivedStateFromProps");
    return null; // No state update based on props
  }

  // componentDidMount
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          api: res, // Set API data into state
        });
      })
      .catch((rej) => {
        console.log(rej);
      });

    console.log("componentDidMount");
  }

  // Render
  render() {
    console.log(this.state.api);

    // Mapping over API data
    const apiData = this.state.api.map((val, ind) => {
      return (
        <div key={ind}>
          <h1>Price: {val.price}</h1>
          <h2>Category: {val.category}</h2>
          <p>Description: {val.description}</p>
        </div>
      );
    });

    return (
      <>
        <h1>Fetched Data:</h1>
        {apiData}
      </>
    );
  }
}

export default FetchData;
