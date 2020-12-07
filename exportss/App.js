import Carosel from './Carosel/Carosel';
import Boxess  from './component/Boxess';
import './App.css';
import React, { Component } from 'react';
import Boxcontents from './component/Boxcontent'
import Bluebutton from './component/Bluebutton'
import Hover from './component/Hover';
import Hover2 from './component/Hover2';
import Benifit from './component/Benifit';
class App extends Component{


  render() {
    return (
    <div className = "App"> 
    <Carosel/>
    <Boxess heading = 'APPLY FOR EDUVANZ LOANS' para='Step Towards a Brighter Future with Eduvanz Loan... Find out how!'>
     <Hover/> 
     <Bluebutton text = 'Apply now'/>
    </Boxess>
    <Boxess>
     <Hover2/> 
    </Boxess>

    <Boxess heading = 'BENEFITS FOR PARTNERED INSTITUTES' para='Increase Enrolments By 40% with Our Partnership'>
     <Benifit/> 
     <Bluebutton text = 'Get in touch'/>
    </Boxess>



    </div>
    );


      
    




  }
}

export default App;
