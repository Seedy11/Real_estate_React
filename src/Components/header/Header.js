import React, { useState } from 'react'
import {Link } from "react-router-dom"
import  { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavHeader from './Header.element'
import Logo from '../../Images/logo.png'
import HeaderContainer from './Header.element'


function Header() {


  return (

      <HeaderContainer>

  
   <Navbar  expand="lg">
     
        <Navbar.Brand href="#home"><img src={Logo} className="card-img-top" alt="..." style={{width: '7rem',}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link to="login"><Link to="login">Login</Link></Nav.Link>
          
            <NavDropdown title="Sales" id="basic-nav-dropdown">
            <NavHeader>
              <NavDropdown.Item href="#action/3.1"><Link to="letting">Letting</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="buying">Buying</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
               </NavHeader>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  
    </HeaderContainer>
 
  )
}

export default Header