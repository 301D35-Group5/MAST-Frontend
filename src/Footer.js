import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer-16371">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 text-center">
              <div class="footer-site-logo mb-4">
                <img alt="logo" src='https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=666&height=532' className='footerLogo'></img>
              </div>
              <ul class="list-unstyled nav-links mb-5">
                <li><a className="footerA" href="./">Home</a></li>
                <li><a className="footerA" href="./TV">Series</a></li>
                <li><a className="footerA" href="./Anime">Anime</a></li>
                <li><a className="footerA" href="./HiddenGems">Recommendations</a></li>
                <li><a className="footerA" href="./About">About Us</a></li>
              </ul>
              <div class="copyright">
                <p class="mb-0"><small>&copy; MAST. All Rights Reserved.</small></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;