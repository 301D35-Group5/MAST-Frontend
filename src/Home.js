import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import "./HomeCards.css";
import NavItem from 'react-bootstrap/NavItem';
import Login from './Login';
class Home extends React.Component {
 


  render() {


    return (
      <section class="body">
        <section class="dark">
	<div class="container py-4">
		<h1 class="h1 text-center" id="pageHeaderTitle">Top Rated</h1>

		<article class="postcard dark blue">
			<a class="postcard__img_link" href='https://www.imdb.com/title/tt0944947/' target='_blank' rel='noreferrer'>
				<img class="postcard__img" src="https://images5.alphacoders.com/325/325117.jpg" alt="game of thrones" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue">Game of Thrones</h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>April 17, 2011
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.</div>
			
        <ul class="postcard__tagbox">
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Action</li>
					
				
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Drama</li>
					
				
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Adventure</li>
          <li class="tag__item play red">
						<a href="https://www.imdb.com/title/tt0944947/" target='_blank' rel='noreferrer'><i class="fas fa-play mr-2"></i>IMDB 9.2⭐</a>
					</li>
					
				</ul>
        <ul class="postcard__tagbox">
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>45 mins.for each Episode</li>
					
				</ul>
			</div>
		</article>
		<article class="postcard dark red">
			<a class="postcard__img_link" href="https://www.imdb.com/title/tt0903747/" target='_blank' rel='noreferrer'>
				<img class="postcard__img" src="https://wallpaperaccess.com/full/781822.jpg" alt="breaking bad" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red">Breaking bad</h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>January 20, 2008
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Drama</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Crime</li>
          <li class="tag__item"><i class="fas fa-clock mr-2"></i>Thriller</li>
					<li class="tag__item play red">
						<a href="https://www.imdb.com/title/tt0903747/" target='_blank' rel='noreferrer'><i class="fas fa-play mr-2"></i>IMDB 9.5⭐</a>
					</li>
				</ul>
        <ul class="postcard__tagbox">
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>45 mins.for each Episode</li>
					
				</ul>
			</div>
		</article>
		<article class="postcard dark green">
			<a class="postcard__img_link" href="https://www.imdb.com/title/tt2560140/" target='_blank' rel='noreferrer'>
				<img class="postcard__img" src="https://4.bp.blogspot.com/-lOdN0Uj8xj0/XSRKIPIJjMI/AAAAAAAAAjs/9Je5vmbiszcBsB6srkp8qtKrRwp1zouoQCKgBGAs/w1920-h1080-c/colossal-titan-attack-titan-attack-on-titan-uhdpaper.com-4K-176.jpg" alt="Attack on titan" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green">Attack on titan</h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>April 7, 2013
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Animation</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Action</li>
          <li class="tag__item"><i class="fas fa-clock mr-2"></i>Adventure</li>
					<li class="tag__item play green">
						<a href="https://www.imdb.com/title/tt2560140/" target='_blank' rel='noreferrer'><i class="fas fa-play mr-2"></i>IMDB 9⭐</a>
					</li>
				</ul>
        <ul class="postcard__tagbox">
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>20 mins.for each Episode</li>
					
				</ul>
			</div>
		</article>
		<article class="postcard dark yellow">
			<a class="postcard__img_link" href="https://www.imdb.com/title/tt0877057/" target='_blank' rel='noreferrer'>
				<img class="postcard__img" src="https://store-images.s-microsoft.com/image/apps.3148.79126df6-c7e8-4a03-bef4-9138b07e7a8f.13b073c6-2aac-4192-8706-bdad400dc182.baadee90-6f8c-41ec-b6d7-7048dc3af5a6" alt="Death note" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title yellow">Death note</h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>October 4, 2006
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Animation</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Crime</li>
          <li class="tag__item"><i class="fas fa-clock mr-2"></i>Drama</li>
					<li class="tag__item play yellow">
						<a href='https://www.imdb.com/title/tt0877057/' target='_blank' rel='noreferrer'><i class="fas fa-play mr-2"></i>IMDB 9⭐</a>
					</li>
				</ul>
        <ul class="postcard__tagbox">
					
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>20 mins.for each Episode</li>
					
				</ul>
			</div>
		</article>
	</div>
</section>


  
        <section class="headHomePart">
        <article>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/7107111.jpg"
          alt="House of the Dragon"
        />
        <Carousel.Caption>
          <div>
          <h3>Trending now !</h3>
          <p>House of the Dragon Breaks Records as the Most-Watched Premiere in HBO History</p>
          </div>      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.alphacoders.com/126/1264673.jpg"
          alt="Rings of Power"
        />

        <Carousel.Caption>
          <h3>Lord of the rings: Rings of Power</h3>
          <p>Rings of Power debut watched by 25 million viewers — an Amazon Prime Video record.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper.dog/large/904532.jpg"
          alt="Attack on titan"
        />

        <Carousel.Caption>
          <h3>Most popular ANIME !</h3>
          <p>
          Attack on Titan is the most popular anime TV show in the world in 2021-22 !
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </article>
        <article>
        <h3 class="heading-top">What is MAST?</h3>
        <h2>You can find here your show and you can share your opinion about it.</h2>
        <a class="read-more" href='./About.js'>more info</a>
        </article>
        </section>
        
        <section class="Bored">
        <article class="Bored1">
        <h3 class="heading-top">Bored?</h3>
        <h2>Sellect your favorite category and enjoy your favorite show!</h2>     
        </article>
        <article class="Bored-2-col">
          <img src='https://content.thriveglobal.com/wp-content/uploads/2021/02/boredom.png'alt='bored'></img>
        </article>
        
        </section>

        <section class="headHomePart">
          <article>
          <img src='https://www.incimages.com/uploaded_files/image/1920x1080/people-diverse-speaking-1940x900_34755.jpg' alt='HiddenGem'></img>
          </article>
          <article>
          <h3 class="heading-top">Take others opinion 💭</h3>
        <h2>People opinion about the show will change your mind!</h2>
        <p>You can also share your opinion about your favorite show in our <a class="read-more" href='./HiddenGems.js'>HiddenGem</a></p>
       
          </article>
        </section>

        <section class="headHomePart">
        <article>
        <h3 class="heading-top">Watch list</h3>
        <h2>Add the show to your watch list and then watch it later.</h2>
        <h4>sign in now for free</h4>
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