import React,{Component} from 'react';
import './HoverComponent.css';

const HoverComponent = (props)=> {

  return (
  
        <div>
            <h3>{props.header}</h3>
            <br></br>
            <img loading='lazy' src={props.src} className="imageAlignment"></img>
            <br></br>
            <p>{props.text.split('/n').map((item, i) => <p key={i}>{item}</p>)}</p>
        </div>
     
    
   
  );
}

export default HoverComponent;