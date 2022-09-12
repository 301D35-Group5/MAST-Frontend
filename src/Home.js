import React from 'react';
import Flip from "./HomeCardFlip";
import Cards from './HomeCards';
import "./Home.css";
import NavItem from 'react-bootstrap/NavItem';
import Login from './Login';
class Home extends React.Component {
 


  render() {


    return (
      <section class="body">
   

   

  
        <section class="headHomePart">
        <article>
       <img src='https://i.imgur.com/LANaf1p.png' alt='logo'></img>
        </article>
        <article>
        <h3 class="heading-top">What is MAST?</h3>
        <h2>You can find here your desired show and you can share your opinion about it.</h2>
        <a class="read-more" href='./About.js'>more info</a>
        </article>
        </section>
        <Cards/>
        <Flip/>

        <section class="headHomePart">
        <article>
        <h3 class="heading-top">Watch list</h3>
        <h2>Add the show to your watch list and watch it later.</h2>
        
        <NavItem style={{ color: "white", paddingLeft: "25px" }}>
                  <Login />
                </NavItem>
        
          </article>
          <article>
          <img src='https://images8.alphacoders.com/104/thumb-1920-1041513.jpg' alt='Watch list'></img>
          
          </article>
        </section>
        </section>
      
    )
  }
}

export default Home;