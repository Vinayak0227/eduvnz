import React from 'react';
import HoverComponent from './HoverComponent';
import './HoverComponent.css';



 

const Hover=()=>{
    return(
    

<div className="row process" align="center">
            <div className="container">
                <div className="col-md-3 zoom wow pulse applyAnimation" data-wow-duration="1s">
                    <h3 className="select">1. Select</h3><br/>
                    <img loading="lazy" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/select.png" alt="university" className="imageAlignment"/>
                    <p className="applySectionSunHeading">Choose your desired <br/>Institute and course.</p><br/>
                </div>
                <div className="col-md-3 zoom wow pulse applyAnimation" data-wow-duration="1s">
                    <h3 className="select">2. Apply</h3><br/>
                    <img loading="lazy" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/apply.png" alt="apply" className="imageAlignment"/>
                    <p className="applySectionSunHeading">Provide and verify your<br/> details and documents online.</p><br/>
                </div>
                <div className="col-md-3 zoom wow pulse applyAnimation" data-wow-duration="1s">
                    <h3 className="select">3. Approval</h3><br/>
                    <img loading="lazy" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/sanction.png" alt="sanction" className="imageAlignment"/>
                    <p className="applySectionSunHeading approvalSection">On the spot approval and instant support from our loan advisors. 
                    </p><br/>
                </div>
                <div className="col-md-3 zoom wow pulse applyAnimation" data-wow-duration="1s">
                    <h3 className="select">4. Learn &amp; Repay</h3><br/>
                    <img loading="lazy" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/disbursal.png" alt="disbursal" className="imageAlignment"/>
                    <p className="applySectionSunHeading approvalSection">Loan disbursed to your institute as you repay in flexible EMIs.</p><br/>
                </div>
            </div>
        </div>
                
            
        

        
           
 

    );
}
export default Hover;