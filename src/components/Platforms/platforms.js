import React, { Component } from 'react';
import './platforms.css';
import {Link} from 'react-router-dom';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import Footer from '../Footer/footer';

export default class Platforms extends Component {
  render() {
    return (
      <div className="mainbody">
      <ConsultingNavbar
      subhead = "PLATFORMS"
      sqhide = "hide" rqhide ="hide" />
     <div className="carousel slide" data-ride="carousel" id="1">
     <div className="carousel-inner">

       <div className="carousel-item car2 active platforms">
         <div className="container textblock1">
           <div className="row ">
             <div className="col-lg-9"></div>
             <div className="col-lg-3 dialogue">
               <form name="sentMessage" id="contactForm" novalidate>
                 <h5 className="text-center dialoguetextmain"> {"Let's get started"}</h5>

                 <div className="control-group form-group">
                 <div className="controls">
                 <div className="row"> 
                 <div className="col-md-5 title"><select  onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Select">
                                     
                                      <option>Mr</option>
                                      <option>Ms</option>
                                      <option>Mrs</option>
                                      
                                    </select>
              </div>
                 <div className="col-md-7">
              <input type="text"  onChange={this.onChange} className="form-control" name="name" placeholder="Full Name" required data-validation-required-message="Please enter your name." />
            
              </div>
              </div>
                   <p className="help-block" />
                 </div>
               </div>
                 <div className="control-group form-group">
                   <div className="controls">

                     <input type="tel" className="form-control" id="phone" placeholder="Enter your contact no" required data-validation-required-message="Please enter your phone number."/>
                   </div>
                 </div>
                 <div className="control-group form-group">
                   <div className="controls">

                     <input type="email" className="form-control" id="email" placeholder="Enter your email" required data-validation-required-message="Please enter your email address."/>
                   </div>
                 </div>

                 <div id="success"></div>

                 <button type="submit" className="btn btn-primary btn-block button10 heading6" id="sendMessageButton" style={{ color:'#000000'}}>Submit</button>
               </form>
             </div>
           </div>
         </div>


       </div>

     </div>
   </div>


   <a target="_blank" href="http://opportuneety.com">
   <div className="opportuneety1 oppobanner " >

     <div className="row">
       <div className="col-lg-6">

       </div>

       <div className="col-lg-6">
         <h2 className="platformcontent waitstyle" ><div>Waiting for the right opportunity?</div>
         <div>Let us help you..</div></h2>

         <h1 className="text-center mysec opposec" >#Opportuneety</h1>

       </div>

     </div>
     </div></a>

    
   <Footer />

</div>

    );
  }
}
