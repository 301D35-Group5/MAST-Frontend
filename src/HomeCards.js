import React from "react";
import "./HomeCards.css";

class Cards extends React.Component{
    render(){
        return(
            <>
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
            </>
        )
    }
}
export default Cards;