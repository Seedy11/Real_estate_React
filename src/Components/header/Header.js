import React, { useState } from 'react'
import {Link } from "react-router-dom"
import  { Container, Nav } from 'react-bootstrap'
import NavHeader from './Header.element'
import Logo from '../../Images/logo.png'


function Header() {

const [showMenu, setShowMenu ] = useState(false);
 function switch_menu() {
  setShowMenu(!showMenu)
 }
  return (
    <Container>
    <img src={Logo} className="card-img-top" alt="..." style={{width: '7rem',}}/>
<NavHeader >

   <Nav variant="pills" >
   
   <Nav.Item className="justify-content-center">
      <Nav.Link><Link to='/'>Home</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item className="justify-content-center">
      <Nav.Link to="login"><Link to="login">Login</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item className="justify-content-center">
      <Nav.Link className='textColor'><Link to="letting">Letting</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item className="justify-content-center">
      <Nav.Link> <Link to="buying">Buying</Link></Nav.Link>
    </Nav.Item>
    
    </Nav>
    
    
  </NavHeader>
  </Container>
  )
}

export default Header