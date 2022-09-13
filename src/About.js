import React from "react";
import"./About.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

class About extends React.Component {

  render() {
    return (
      <div className="aboutUs">
        <h1 className="head">About Us</h1>
        <hr></hr>
        <h3 className="head">Our Goal</h3>
        <article>
          <p>
            We are a team of talented and passionate people who wanted to make a
            website that can give us and everyone a home to find their best show
            to watch, so we designed and built MAST to give people access to
            search, find, add to watchlist and even make their own
            recommendation and join our community of entertaining to help other
            people to find suggestions and shows based on other users reviews
            and recommendations making it easier for new people to find
            something to pick up on. So we are glad that we could of make
            something that can add more joy to the world by giving people a
            website where they can run from the cruel worl we live in these
            days.
          </p>
        </article>
        <hr></hr>
        <h3 className="head">Our Team</h3>
        <p>
          Remeber the talened and passionate team i mentioned before ?! Let me
          introduce you to our team who made such an amazing website :
        </p>
        <div>
          <ul class="grid">
            <li class="grid-item">
              <img
                src="http://organicthemes.com/demo/fresh/files/2014/03/profile-pic-300x300.jpg"
                alt=""
                class="square-pf"
              />
              <h3 class="member-name">Mohammad Khader</h3>
              <span class="member-title">Leader</span>
            </li>
            <li class="grid-item">
              <img
                src="http://organicthemes.com/demo/fresh/files/2014/03/profile-pic-300x300.jpg"
                alt=""
                class="square-pf"
              />
              <h3 class="member-name">Asad Hijawi</h3>
              <span class="member-title">Back End + Front End</span>
            </li>
            <li class="grid-item">
              <img
                src="http://organicthemes.com/demo/fresh/files/2014/03/profile-pic-300x300.jpg"
                alt=""
                class="square-pf"
              />
              <h3 class="member-name">Mostafa Al-Belbeisi</h3>
              <span class="member-title">Back End + Front End</span>
            </li>
            <li class="grid-item">
              <img
                src="http://organicthemes.com/demo/fresh/files/2014/03/profile-pic-300x300.jpg"
                alt=""
                class="square-pf"
              />
              <h3 class="member-name">Tareq Al-Zoubi</h3>
              <span class="member-title">Back End + Front End</span>
            </li>
            <li class="grid-item">
              <img
                src="http://organicthemes.com/demo/fresh/files/2014/03/profile-pic-300x300.jpg"
                alt=""
                class="square-pf"
              />
              <h3 class="member-name">Mohammad Al-Hanoti</h3>
              <span class="member-title">Back End + WEB Design</span>
            </li>
            <li class="grid-item">
              <img
                src="http://organicthemes.com/demo/fresh/files/2014/03/profile-pic-300x300.jpg"
                alt=""
                class="square-pf"
              />
              <h3 class="member-name">Shaden Shanab</h3>
              <span class="member-title">Front End + WEB Design</span>
            </li>
          </ul>
        </div>
        <div class="social_icons">
          {/* <div class="square-i">
            <div class="icons">
            <a href="#" class="fa fa-facebook"></a>
            </div>
          </div>
          <div class="square-i">
            <div class="icons">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </div>
          </div>
          <div class="square-i">
            <div class="icons">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>
          <div class="square-i">
            <div class="icons">
              <i class="fa fa-dribbble" aria-hidden="true"></i>
            </div>
            
          </div>
          <div class="square-i">
            <div class="icons">
              <i class="fa fa-dribbble" aria-hidden="true"></i>
            </div>
            
          </div>
          <div class="square-i">
            <div class="icons">
              <i class="fa fa-dribbble" aria-hidden="true"></i>
            </div>
            
          </div> */}
        </div>
      </div>
    ); 
  }
};

export default About;