import React from "react";
 import "./flip.css";
 import { Row,Col } from 'react-bootstrap';
 import { Link } from "react-router-dom";


 class Flip extends React.Component{
    
render(){
    return(
<>

<Row xs={1} md={3} className="g-4">
{/* flip-card-container  */}
<Col>
<div class="flip-card-container" >
  <div class="flip-card">

    <div class="card-front">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://wallpaperaccess.com/full/7107111.jpg" alt="House of the dragon"></img>
        <figcaption class="figcaptionFlip">Trending Series</figcaption>
     </figure>

      <ul class="uiFlip">
        <li class ="liFlip">House of the dragon</li>
        <li class ="liFlip">House of the Dragon Breaks Records as the Most-Watched Premiere in HBO History</li>
        <li class ="liFlip">IMDB 8.8 ⭐</li>
        <li class ="liFlip">HBO</li>
       
      </ul>
    </div>

    <div class="card-back">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=592&height=473" alt="Brohm Lake"></img>
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
        <img class="imgFlip" src="https://static.zerochan.net/Yor.Briar.full.3627421.jpg" alt="Anime"></img>
        <figcaption class="figcaptionFlip">Trending Anime</figcaption>
      </figure >

      <ul class="uiFlip">
        <li class ="liFlip">Spy x Family</li>
        <li class ="liFlip">SPY x FAMILY Viewership hits record figures of 8 million till now</li>
        <li class ="liFlip">IMDB 8.6 ⭐</li>
        <li class ="liFlip">Wit Studio</li>
       
      

      </ul>
    </div>

    <div class="card-back">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=592&height=473" alt="imageh-2"></img>
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
<Col>
<div class="flip-card-container" >
  <div class="flip-card">

    <div class="card-front">
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://images3.alphacoders.com/122/1224844.jpg" alt="TOP GUN: MAVERICK"></img>
        <figcaption class="figcaptionFlip">Trending Movies</figcaption>
      </figure>

      <ul class="uiFlip">
        <li class ="liFlip">TOP GUN: MAVERICK</li>
        <li class ="liFlip"> TOP GUN: MAVERICK currently stands as the No. 6 highest-grossing film in domestic box-office history and the No. 1 film of 2022</li>
        <li class ="liFlip">IMDB 8.5 ⭐</li>
        <li class ="liFlip">Paramount Pictures</li>
        
      </ul>
    </div>

    <div class="card-back">
      {/* <!-- only if the image is necessary --> */}
      <figure class="fig">
        <div class="img-bg"></div>
        <img class="imgFlip" src="https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=592&height=473" alt="Logo"></img>
      </figure>
      <Link to="/Anime" class="buttonFlip" > Explore more Movies</Link>

     

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
export default Flip;