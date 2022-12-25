import React from 'react'
import {Link} from 'react-router-dom';
import './home-link.css';

export default function HomeLink(props){
  return(
    <div className="home-link">
      <h1>{props.title}</h1>
      <div className="blurb-conainer">
        <p>{props.blurb}</p>
      </div>
      <Link to={`${props.route}`}>
        <button>GO</button>
      </Link>
    </div>  
  )
}