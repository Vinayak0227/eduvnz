import React,{Component} from 'react';
import './HoverComponent.css';

const HoverComponent2 = (props)=> {

  return (
  
        <div>
            <img loading='lazy' src={props.src} className="imageAlignment"></img>
            <br></br>
            <br></br>
            <h3>{props.header}</h3>
            <br></br>
            
            <p>{props.text.split('/n').map((item, i) => <p key={i}>{item}</p>)}</p>
        </div>
     
    
   
  );
}

export default HoverComponent2;