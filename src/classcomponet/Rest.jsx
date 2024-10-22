import { Component} from "react";

import './rest.css'



//import navbar
import Head from './navbar'
import Caros from "./coro";
class Restaurant extends Component{
    render(){
        return (

            <>
        <Head/>
        <Caros/>

            </>
        )
    }
}
export default    Restaurant