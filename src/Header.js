import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import Login from './Login';
import LogOut from './LogOut';
import {  NavItem } from 'react-bootstrap';
import logo from './logo.png';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      // <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      //   <Navbar.Brand>The Header</Navbar.Brand>
      //   <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
      //   <NavItem><Link to="/Explore" className="nav-link">Explore</Link></NavItem>
      //   <NavItem><Link to="/Events" className="nav-link">Events</Link></NavItem>
      //   <NavItem><Link to="/HiddenGems" className="nav-link">Hidden Gems</Link></NavItem>
      //   <NavItem><Link to="/About" className="nav-link">About Us</Link></NavItem>
      //   <NavItem><Link to="/Anime" className="nav-link">Anime</Link></NavItem>
      //   <NavItem><Link to="/TV" className="nav-link">TV</Link></NavItem>

      // </Navbar>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
            <Link to="/" className="MAST"><img src={logo} alt="Logo" className="Logo"></img></Link>
            </div>

            <ul className="nav-links">
              
              
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Explore
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="./anime">Anime</Dropdown.Item>
                    <Dropdown.Item href="./TV">Series</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link to="/HiddenGems">Recommendations</Link>
              </li>
              
              <li>
              {isAuthenticated && 
                <Link to="/Profile">
                  Profile
                </Link>
                }
              </li>
              <li>
                <Link to="/About">
                  About Us
                </Link>
              </li>
              <li>
                <NavItem variant="secondary" style={{  paddingLeft: "10px" }}>
                  <Login />
                </NavItem>
                <NavItem variant="secondary" style={{  paddingLeft: "10px" }}>
                  <LogOut />
                </NavItem>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withAuth0(Header);
