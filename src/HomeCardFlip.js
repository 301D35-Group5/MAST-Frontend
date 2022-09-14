import React from "react";
 import "./flip.css";
 import { Row,Col } from 'react-bootstrap';
 import { Link } from "react-router-dom";
 import { withAuth0 } from '@auth0/auth0-react';
 import NavItem from 'react-bootstrap/NavItem';
 import Login from './Login';

 class Flip extends React.Component{
    
render(){
  const { isAuthenticated } = this.props.auth0;
    return(
<>

<Row xs={1} md={3} lg={3} xl={3} xxl={3} className="g-4">
{/* flip-card-container  */}
<Col>
<div class="flip-card-container" >
  <div class="flip-card">

    <div class="card-front">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://media0.giphy.com/media/l0cydYWK8uWpXEaplL/200w.gif?cid=82a1493bivd1h4ewfe8p3jyc13b09d9kr85h63kxjre8zadv&rid=200w.gif&ct=g" alt="House of the dragon"></img>
        <figcaption class="figcaptionFlip">Trending Series</figcaption>
     </figure>

      <ul class="uiFlip">
        <li class ="liFlip">The Boys</li>
        <li class ="liFlip">A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.</li>
        <li class ="liFlip">IMDB 8.7 ⭐</li>
        <li class ="liFlip">Amazon Prime</li>
       
      </ul>
    </div>

    <div class="card-back">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://media.discordapp.net/attachments/1017376095227617325/1019520148090130432/High_Resolution_Logo.png?width=774&height=580" alt="Brohm Lake"></img>
      </figure>
      <Link to="/TV" class="buttonFlip" >Explore more Series</Link>
     
      

      <div class="design-container">
        <span class="design design--1"></span>
        <span class="design design--2"></span>
        <span class="design design--3"></span>
        <span class="design design--4"></span>
        <span class="design design--5"></span>
        <span class="design design--6"></span>
        <span class="design design--7"></span>
        <span class="design design--8"></span>
      </div>
    </div>

  </div>
</div>
</Col>
{/* <!-- /flip-card-container -->

<!-- flip-card-container --> */}
<Col>
<div class="flip-card-container" >
  <div class="flip-card">

    <div class="card-front">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://25.media.tumblr.com/2d7ce9746c7687a00f2919da9de5e35e/tumblr_mvyvq7nUpE1r3maj7o1_500.gif" alt="Anime"></img>
        <figcaption class="figcaptionFlip">Trending Anime</figcaption>
      </figure >

      <ul class="uiFlip">
        <li class ="liFlip">One Piece</li>
        <li class ="liFlip">Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".</li>
        <li class ="liFlip">IMDB 8.9 ⭐</li>
        <li class ="liFlip">Toei Animation</li>
       
      

      </ul>
    </div>

    <div class="card-back">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://media.discordapp.net/attachments/1017376095227617325/1019520148090130432/High_Resolution_Logo.png?width=774&height=580" alt="imageh-2"></img>
      </figure>
      <Link to="/Anime" class="buttonFlip"> Explore more anime</Link>

   

      <div class="design-container">
        <span class="design design--1"></span>
        <span class="design design--2"></span>
        <span class="design design--3"></span>
        <span class="design design--4"></span>
        <span class="design design--5"></span>
        <span class="design design--6"></span>
        <span class="design design--7"></span>
        <span class="design design--8"></span>
      </div>
    </div>

  </div>
</div>
</Col>
{/* <!-- /flip-card-container -->

<!-- flip-card-container --> */}


{/* HERE IS THE CHANGE******************************************************************************** */}



<Col> 
<div class="flip-card-container" >
  <div class="flip-card">

    <div class="card-front">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/04/Film.gif" alt="Recomendation"></img>
        
        <figcaption class="figcaptionFlip">Recommendation</figcaption>
      </figure>

      <ul class="uiFlip">
        <li class ="liFlip">Explore people recommendation</li>
        <li class ="liFlip">People recommendation might change your mind!</li>
      </ul>
    </div>

    <div class="card-back">
      {/* <!-- only if the image is necessary --> */}
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://media.discordapp.net/attachments/1017376095227617325/1019520148090130432/High_Resolution_Logo.png?width=774&height=580" alt="Logo"></img>
      </figure>
      {isAuthenticated && <Link to="/HiddenGems" class="buttonFlip" >Recomendation</Link>}
      {!isAuthenticated &&  <NavItem class="buttonFlip" style={{ color: "white", paddingLeft: "25px" }}>
                  <Login />
                </NavItem>}

     

      {/* <!-- can add svg here and remove these eight spans --> */}
      <div class="design-container">
        <span class="design design--1"></span>
        <span class="design design--2"></span>
        <span class="design design--3"></span>
        <span class="design design--4"></span>
        <span class="design design--5"></span>
        <span class="design design--6"></span>
        <span class="design design--7"></span>
        <span class="design design--8"></span>
      </div>
    </div>

  </div>
</div>
</Col>
{/* <!-- /flip-card-container --> */}

</Row>
</>
    )
}
}
export default withAuth0(Flip);