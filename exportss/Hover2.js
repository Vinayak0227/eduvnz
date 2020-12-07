import React from 'react';
import HoverComponent from './HoverComponent2';
import './HoverComponent.css';
import HoverComponent2 from './HoverComponent2';



 

const Hover2=()=>{
    return(
    <div>

           {/* <div>
                <h3> APPLY FOR EDUVANZ LOANS </h3>
                <p> Step Towards a Brighter Future with Eduvanz Loan Find out how </p>
            </div>
             */}
            
            <div className="container">
            <div className="row margin" align="center">
                <div className="col-md-4 zoom wow pulse applyAnimation padd" data-wow-duration="1s">
                    <HoverComponent2 header='Get Instant Approval' text='Know Your Approval Status{<br>}In Seconds' src='https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/were-fast.png'></HoverComponent2>
                </div>
                <div className="col-md-4 zoom wow pulse applyAnimation padd" data-wow-duration="1s">
                    <HoverComponent2 header='100% Online Process' text="Submit Your Application Form via{<br>} Mobile App or Website" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/paperless.png"></HoverComponent2>
                </div>
                <div className="col-md-4 zoom wow pulse applyAnimation padd" data-wow-duration="1s">
                    <HoverComponent2 header='Studsent-Friendly' text='Low Cost Loans + Flexible Tenures{<br>}+ No Hidden Charges' src='https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/student-friendly.png'></HoverComponent2>
                </div>
               
                
            </div>
            </div>
        

        
           
    </div> 

    );
}
export default Hover2;