import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Testimonials from '../Testimonials/testimonials';


export default class WhyChoose extends Component{
  render(){
    return(
      <div className="mainbody">
         <div style={{padding:'60px 0px'}} className="choose">
           <h2 className="text-center heading">Why Choose Us?</h2>
           <div class="container">
             <div className="row big customers mobilerow4">
              
               <div className="col-md-3 col-sm-2 mb-2 imagecorp1 imgcorp1 text-center">
                 <img className="img-fluid" src={require("../../images/qual.png")} alt="" />
                 <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Quality Service</p>
               </div>

            

                 <div className="col-md-3 col-sm-2 mb-2 imagecorp1 imgcorp2 text-center" >
                   <img className="img-fluid " src={require("../../images/ontime.png")} alt=""/>
                   <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>On-Time Delivery</p>
                 </div>

              
                 <div className="col-md-3 col-sm-2 mb-2 imagecorp1 imgcorp3 text-center">
                   <img className="img-fluid" src={require("../../images/moneytrans.png")} alt=""/>
                   <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Transparent Pricing</p>
                 </div>

               

                 <div className="col-md-3 col-sm-2 mb-2 imagecorp1 imgcorp4 text-center" >
                   <img className="img-fluid " src={require("../../images/clientconfident.png")} alt=""/>
                   <p className="worktext" style={{paddingTop:'15px'}}>Client Confidentiality</p>
                 </div>
              </div>
              <div className="row mobile customers mobilerow4">
              
               <div className="col-md-5 col-5 col-sm-2 mb-2 imagecorp1 whymobile text-center">
                 <img className="img-fluid" src={require("../../images/qual.png")} alt="" />
                 <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Quality Service</p>
               </div>

            

                 <div className="col-md-3 col-5 col-sm-2 mb-2 imagecorp1 whymobile  text-center" >
                   <img className="img-fluid " src={require("../../images/ontime.png")} alt=""/>
                   <p className="worktext" style={{paddingTop:'15px'}}>On-Time Delivery</p>
                 </div>
                 </div>

                 <div className="row mobile customers mobilerow4">
              
                 <div className="col-md-5 col-5 col-sm-2 mb-2 imagecorp1 whymobile  text-center">
                   <img className="img-fluid" src={require("../../images/moneytrans.png")} alt=""/>
                   <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Transparent Pricing</p>
                 </div>

               

                 <div className="col-md-5 col-5 col-sm-2 mb-2 imagecorp1 whymobile   text-center" >
                   <img className="img-fluid " src={require("../../images/clientconfident.png")} alt=""/>
                   <p className="worktext" style={{paddingTop:'15px'}}>Client Confidentiality</p>
                 </div>
              </div>
            </div>
            </div>

            <div className="row ask">
              <div className="container askanexpert">
                <div className="ask1 ">
                  <div className="row "  >
                    <div className="col-md-4"></div>
                    <div className="col-md-4 col-sm-1 mb-2">
                    <div className="askbutton ">
                    <Link to ={`../products/${this.props.url}/send-a-query`}>
                  <div className="askb"></div>
                    </Link>
                    </div>
                    </div>
                
                  <div className="col-md-4"></div>
                  </div>

                  <div className="row expertrow"  >
                    <div className="col-md-1"></div>
                    <div className="col-md-3 col-sm-2 mb-2">
                    <img className="expertimg"  src={require("../../images/advice.png")}/>
                    <h5 className="heading8">Get professional  advice</h5>
                    </div>
                    <div  className="col-md-1"></div>
                    <div className="col-md-3 col-sm-2 mb-2">
                    <img className="expertimg" src={require("../../images/solutions.png")}/>
                    <h5 className="heading8">Quick innovative solutions</h5>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 col-sm-2 mb-2">
                    <img className="expertimg" src={require("../../images/professionals.png")}/>
                    <h5 className="heading8">Advice from leading professional</h5>
                    
                    </div>
                    <div className="col-md-1"></div>
                 </div>
              </div>
            </div>
          </div>
          <div className="container text-center ">
<div className="testim">
  <h2 className="testimonials">Testimonials</h2>
<Testimonials/>
</div>
</div>
          <div className="contactsec1 text-center">
          <div className="row contactstrips ">
            <div className="col-md-6 ">
              <h3 className="contactText">Ready to grow your business?</h3>
              <h5 className="subcontacttext">Together we make it happen </h5>
              </div>
              <div className="col-md-6">
                <div className="row">
               <div className="col-md-5"> 
              <Link to="#1"><button type="button" className="button6 ">
              <h6 className=" contactbuttontext ">Let's get started</h6></button></Link>
            </div>
            <div className="col-md-6"> 
              <Link to="/request-a-callback"><button type="button" className="button6 text-center">
              <h6 className=" contactbuttontext ">Request a callback</h6></button></Link>
            </div>
           
            </div>
           </div>
          </div>
          </div>
      </div>
    );
  }
}
