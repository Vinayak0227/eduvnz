import React, { Component } from 'react';
var boxess = (props) => {
return (
    <div>
        <h3> {props.heading} </h3>
        <p> {props.para} </p>       
        {props.children}
     </div>
  
)


    
};

export  default boxess;