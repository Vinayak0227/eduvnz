import './Benifit.css'
import React,{Component} from 'react';
const  benefit = () => {
    
    
return(     
    <section className="benefit" id="bgCloud">  
        <div className="row">
            <div className="col-md-6" align="right" id="institutesImage">
                <img loading="lazy" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/benefits.png" height="300px" width="300px" alt="benefits for institutes" className="img-responsive institute-img center"/>
            </div>
            <div className="col-md-6 benefit-style" align="left">
                 <ul className="benefitsul">
                     <li>
                         <span className="benefits font-size16">Better</span> <span className="benefits1 font-size16"> Cash-Flows</span>
                         
                      </li>
                      <li>
                        <span className="benefits font-size16">Increase</span> <span className="benefits1 font-size16">Enrolments</span>
                        
                      </li>
                      <li>
                         <span className="benefits font-size16">Instant Decisioning Tool</span> <span className="benefits1 font-size16">Provided to Your Team</span>
                         
                      </li>
                      <li>
                           <span className="benefits font-size16">Simple Technology</span> 
                          <span className="benefits1 font-size16"> Providing Complete Transparency</span>
                          
                      </li>
                      <li>
                          <span className="benefits font-size16">Reduce Drop-Outs</span> 
                           <span className="benefits1 font-size16">  as Students Get Easy Financial Assistance</span>
                           
                      </li> 
                      <li>
                          <span className="benefits font-size16">Run Impactful Campaigns with</span><span className="benefits1 font-size16"> Eduvanz to Reach Out to New Students
                          
                      </span></li>
                 </ul>

            </div>
        </div>
        </section>
    );

}
export default benefit;


        