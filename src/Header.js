import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
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
                        <Link to="/">Movie WatchList</Link>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/">Watch List</Link></li>
                        <li><Link to="/HiddenGems">HiddenGems</Link></li>
                        <li><Link to="/Anime" className="btn">+ Anime</Link></li>
                        <li><Link to="/TV" className="btn">+ TV</Link></li>


                    </ul>
                </div>
            </div>
        </header>
    )
  }
}

export default Header;
