import { Component } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class Head extends Component{
    render(){
        return(

            <>

        
      <Navbar bg="dark" data-bs-theme="dark" className="navbar" color="text-primary">
        <Container>
          <Navbar.Brand href="#home">Foodie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#Feautures">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </>
            
  
        )
    }
}
export default Head