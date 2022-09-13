import React from 'react';
import './Footer.css';
import { ModalFooter } from 'react-bootstrap';
import logo from './logo.png'

class Footer extends React.Component {
  render() {
    return (
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>The Footer</Navbar.Brand>
      // </Navbar>
      <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span>We are a team of talented and passionate people who wanted to make a website that can give us and everyone a home to find their best show to watch, so we designed and built MAST to give people access to search, find, add to watchlist and even make their own recommendation and join our community of entertaining to help other people to find suggestions and shows based on other users reviews and recommendations making it easier for new people to find something to pick up on. So we are glad that we could of make something that can add more joy to the world by giving people a website where they can run from the cruel worl we live in these days.
    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Street name and number</span> Amman, Jordan</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> MAST<span> <img className='footerLogo' src={logo}/> </span></h2>
    
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Company Name &copy; 2016</p>
  </div>
</footer>
    )
  }
}

export default Footer;

