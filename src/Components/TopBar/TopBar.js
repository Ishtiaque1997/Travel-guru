import React, { useContext } from 'react';
import './TopBar.css'
import {Button,Navbar,Nav,NavDropdown} 
from 'react-bootstrap';
import logo from '../../Logo.png';
import { UserContext } from '../../App';
const TopBar = () => {
  const[loggedInUser,setLoggedInUser]=useContext(UserContext);
  return (
    <div className="topbar">
     <Navbar collapseOnSelect expand="lg"  variant="dark">
        <img className="logo"src={logo} alt=""/>
        <input  placeholder="Search your place" ></input>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
   
         <Nav className="mr-auto">
                <Nav.Link href="/news" >News</Nav.Link>
                <Nav.Link href="/destination" >Destination</Nav.Link>
                <Nav.Link href="/blog" >Blog</Nav.Link>
                <Nav.Link href="/contact" >Contact</Nav.Link> 
                <Button onClick={()=>setLoggedInUser({})}>Sign out</Button>   
        </Nav>
      <Nav>
   </Nav>
  </Navbar.Collapse>
</Navbar>
          <Button className="login"variant="warning">Login</Button>
          
       </div>
       
       
  );
};

export default TopBar;