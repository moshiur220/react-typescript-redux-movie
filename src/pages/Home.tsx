import React from 'react'
import "../styles/home.css"
import { Link } from "react-router-dom";

function Home() {
  return (
   <>
   <div className='homepage'>
   <header>
<div className="container">
  <nav>
  <ul className="nav-container">
      <li className="nav-item"><a href="#">HOME</a></li>
      <li className="nav-item has-subnav">
        <a href="#">MOVIES</a>
            <div className="subnav">
              <ul>
               <li>Live Stream</li>
               <li>3D</li>
              </ul>
            </div>
      </li>
    <li className="nav-item">
		
		  <Link to="/login"><a href="#">LOGIN</a></Link>
		</li>
	     
    </ul>
  </nav>
</div>
</header>

<div className="accordion">
	<ul>
		<li>
			<div className="image_title">
				<a href="#">Transformers: The Last Knight</a>
			</div>
			<a href="https://ibb.co/gGv6QS"><img src="https://image.ibb.co/k7P0kS/transformers4_640x320.jpg" alt="transformers4_640x320" /></a>
		</li>
		<li>
			<div className="image_title">
				<a href="#">Blade Runner 2049</a>
			</div>
			<a href="https://ibb.co/cXjfKn"><img src="https://image.ibb.co/ct9rQS/Blade_Runner2049_640x320.jpg" alt="Blade_Runner2049_640x320" /></a>
		</li>
		<li>
			<div className="image_title">
				<a href="#">Guardians of the Galaxy: Vol. 2</a>
			</div>
			<a href="https://ibb.co/b4nLkS"><img src="https://image.ibb.co/jAu0kS/GOG2_640x320.jpg" alt="GOG2_640x320" /></a>
		</li>
		<li>
			<div className="image_title">
				<a href="#">Spiderman: Homecoming</a>
			</div>
			<a href="https://ibb.co/mC5Uen"><img src="https://image.ibb.co/da7xX7/spiderman_homecoming_640x320.jpg" alt="spiderman_homecoming_640x320"/></a>
		</li>
		<li>
			<div className="image_title">
				<a href="#">Wonder Woman</a>
			</div>
			<a href="https://ibb.co/enV1s7"><img src="https://image.ibb.co/dHdAkS/Wonder_Woman_640x320.jpg" alt="Wonder_Woman_640x320" /></a>
		</li>
	</ul>
</div>
<div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>Mission: Impossible – Fallout</h1>
				<div className="card_cat">
					<p className="PG">PG - 13</p>
					<p className="year">2018</p>
					<p className="genre">Action | Adventure </p>
					<p className="time">2h 28m</p>
				</div>
				<p className="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
				<a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
			<div className="social-btn">
     
				<button>
					<i className="fas fa-play"></i> SEE TRAILER
				</button>
		
				<button>
					<i className="fas fa-download"></i> DOWNLOAD
				</button>
			
				<button>
					<i className="fas fa-thumbs-up"></i> 97%
				</button>
			
				<button>
					<i className="fas fa-star"></i>
				</button>
			</div>	
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt=""/>
				</div>
				<div className="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
   </>
  )
}

export default Home