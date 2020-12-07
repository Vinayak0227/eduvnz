import Carosel from './Carosel/Carosel';
import Boxess  from './component/Boxess';
import './App.css';
import React, { Component } from 'react';
import Boxcontents from './component/Boxcontent'
import Bluebutton from './component/Bluebutton'
import Hover from './component/Hover';
import Hover2 from './component/Hover2';
import Benifit from './component/Benifit';
import Rewards from './component/Rewards';
class App extends Component{


  render() {
    return (
    <div className = "App"> 
    <Carosel/>
    <Boxess heading = 'APPLY FOR EDUVANZ LOANS' para='Step Towards a Brighter Future with Eduvanz Loan... Find out how!'>
     <Hover/> 
     </Boxess>
     <Bluebutton text = 'Apply now'/>
    
    <Boxess>
     <Hover2/> 
    </Boxess>

    <Boxess heading = 'BENEFITS FOR PARTNERED INSTITUTES' para='Increase Enrolments By 40% with Our Partnership'>
     <Benifit/> 
     <Bluebutton text = 'Get in touch'/>
    </Boxess>

    <Boxess heading = 'EDUVANTAGE CLUB REWARDS PROGRAM' para='Get Exclusive Rewards and Offers from the Best Brands'>
     <Rewards/>s
     <Bluebutton text = 'Know more '/>
    </Boxess>



    </div>
    );


      
    




  }
}

export default App;
