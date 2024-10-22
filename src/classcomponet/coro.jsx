
import { Component } from "react";

import Carousel from 'react-bootstrap/Carousel';




class Caros extends Component{
    render(){
        
        return (

            <>
             <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />
        <Carousel.Caption>
      
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp1874165.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRist-3vqzqesuhiVyD2kOnHZa2o9ciLnVQzQ&s"
          alt="Third slide"
        />
      

        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


               </>
               
        )
    }
}
export default Caros