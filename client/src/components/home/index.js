import React from 'react';
import './home.css';
import HomeLink from '../homeLink';
import {Link} from 'react-router-dom';

export default function Home(props){
  
  return (
    <div className='home'>
      <div className="hero-image">
        <div className='faded'>
          <h1 className="tagline">Your new <span className="info-highlight2">best friend</span> is waiting to be <span className="info-highlight2">adopted</span></h1>
        </div>
      </div>
      <div className="featured-pet-text-container">
        <h3>Featured Pets</h3>
      </div>
      <div className="home-link-container">
        <Link to={'/search'}>
        <div className="pet-container">
          <h4>Billy <span className="info-highlight">Age: 1</span></h4>
          <div className="image-container">
            <div className="hover-text">adoptme</div>
            <img alt= "Billy the dog" src="http://scienceblogs.com/insolence/files/2017/04/Dogrunning.jpg" className="featured-pet"/>
          </div>
        </div>
        </Link>
        <div className="pet-container">
          <h4>Ronald <span className="info-highlight">Age: 4</span></h4>
          <div className="image-container">
            <div className="hover-text">adoptme</div>
            <img alt="Ronald the bird" src="https://www.pets4homes.co.uk/images/birds_hero.png" className="featured-pet"/>
          </div>
        </div>
        <div className="pet-container">
          <h4>Curious <span className="info-highlight">Age: 1</span></h4>
          <div className="image-container">
            <div className="hover-text">adoptme</div>
            <img alt="Curious the cat" src="http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_300/ch_300/w_300/APL/uploads/2014/10/kitten-cuteness300.jpg" className="featured-pet"/>
          </div>
        </div>
        <div className="pet-container">
          <h4>Snow <span className="info-highlight">Age: 2</span></h4>
          <div className="image-container">
            <div className="hover-text">adoptme</div>
            <img alt="Snow the dog" src="https://www.what-dog.net/Images/faces2/scroll0015.jpg" className="featured-pet"/>
          </div>
        </div>
      </div>
    </div>   
  );
}