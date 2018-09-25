import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import './homepage.css';
import LetsGetStarted from '../LetsGetStarted/letsgetstarted';
import Form from './form';
import Testimonials from '../Testimonials/testimonials';
import Twitter from './Twitter';
import Sectionabout from './sectionabout';
import Counter from './counter';
import $ from 'jquery';
import Facebook from './Facebook';


import ProductSection from './ProductSection';

import ProductMegaSidebar from '../MegaSidebar/ProductMegaSidebar';
import ServicesMegaSidebar from '../MegaSidebar/ServicesMegaSidebar';

let context = null;
class HomePage extends Component {



  constructor(props){
    super();

    context = this;


    /* slider state added default as 1 for first button */
    this.state = {filter:"strategicTraning",
                  sliderState:1};
    this.changeFilter =this.changeFilter.bind(this);
  }
  componentDidMount(){
 
  }
  


  changeFilter(filters) {
    debugger;
      this.setState({filter:filters});
     
    
        
    }

    changeSliderState(orderNumber){

        this.setState({sliderState:orderNumber});

    }

  render() {
    
    const {sliderState} = this.state;
    const active = "btn btn-info faqfilterbutton"
    const deactive = "btn btn-warning faqfilterbutton";

    return (
      <div className="mainbody">

      <header>
        <div className="carousel slide banner" data-ride="carousel" id="1">
          <div className="carousel-inner">
            <div className={"carousel-item car7  active homepage"+sliderState}>
              <div className="container textblock1 paddingTop-5">
              
                <div className="row ">
                <div className="col-md-7">
                  {/* ICONS FOR FIRST BUTTON CLICK  

                 {sliderState==1 ?
                   <div className="col-md-7 firstcol big">
                    <div className="row iconrow">
                      <div className="col-md-6 banimage">
                        <Link to="/products/incorporate+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require('../../images/N11.png')} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Company Registration</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 banimage">
                        <Link to="/products/protect+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require("../../images/N12.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">IP Protection</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="row iconrow2">
                      <div className="col-md-6 banimage">
                        <Link to="/products/comply+">
                          <div className="row">
                            <div className="col-md-5">
                              <img className="banimg" src={require("../../images/N10.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Annual Filing</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 banimage">
                        <Link to="/products/tax+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require("../../images/N14.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Tax Compliance</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div> : ''
                 }

              {/*     END OF ICONS FOR FIRST BUTTON 

              ICONS FOR SECOND BUTTON 
              {sliderState==2 ?
               <div className="col-md-7 firstcol big">
                    <div className="row iconrow">
                      <div className="col-md-6 banimage">
                        <Link to="/products/incorporate+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require('../../images/N11.png')} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Start Private Limited</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 banimage">
                        <Link to="/products/protect+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require("../../images/N11.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Start Limited Liability partnership</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="row iconrow2">
                      <h1 className="mainrowtext1"> Let’s get your idea off the ground
</h1>
                      <h1 className="mainrowtext2">When in doubt, ask us 
</h1>
                    </div>

                     <div className="row iconrow2">
                     <div className="row">
               <div className="col-md-5 "></div>
               <div className="col-md-6"><Link to="/post-a-job"><button type="button" className="button31"><h3 className="heading15">Post a Job </h3></button></Link></div>
               <div className="col-md-2"></div>
               </div>
                    </div>
                  </div> : ''
              }


                  END OF ICONS FOR SECOND BUTTON */}


              {/*   ICONS FOR 3RD BUTTON 

 {sliderState==3 ?
               <div className="col-md-7 firstcol big">
               <div className="row iconrow">
                 <div className="col-md-6 banimage">
                   <Link to="/products/incorporate+">
                     <div className="row">
                       <div className="col-md-5">
                         <img src={require('../../images/N11.png')} />
                       </div>
                       <div className="col-md-6">
                         <h6 className="bantext">Register trademark
</h6>
                       </div>
                     </div>
                   </Link>
                 </div>

                 <div className="col-md-6 banimage">
                   <Link to="/products/protect+">
                     <div className="row">
                       <div className="col-md-5">
                         <img src={require("../../images/N11.png")} />
                       </div>
                       <div className="col-md-6">
                         <h6 className="bantext">Compliance for Private Limited Company
</h6>
                       </div>
                     </div>
                   </Link>
                 </div>
               </div>

               <div className="row iconrow2">
                 <h1 className="mainrowtext1"> We are here to amplify your growth

</h1>
                 <h1 className="mainrowtext2">Share your requirement
</h1>
               </div>

                <div className="row iconrow2">
                <div className="row">
          <div className="col-md-5 "></div>
          <div className="col-md-6"><Link to="/post-a-job"><button type="button" className="button31"><h3 className="heading15">Post a Job </h3></button></Link></div>
          <div className="col-md-2"></div>
          </div>
               </div>
             </div> : ''
         }


                  {/* ICON FOR 4TH BUTTON 
                  {sliderState==4 ?
                  <div className="col-md-7 firstcol big">
                  <div className="row iconrow">
                    <div className="col-md-6 banimage">
                      <Link to="/products/incorporate+">
                        <div className="row">
                          <div className="col-md-5">
                            <img src={require('../../images/N11.png')} />
                          </div>
                          <div className="col-md-6">
                            <h6 className="bantext">International presence strategy
</h6>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="col-md-6 banimage">
                      <Link to="/products/protect+">
                        <div className="row">
                          <div className="col-md-5">
                            <img src={require("../../images/N11.png")} />
                          </div>
                          <div className="col-md-6">
                            <h6 className="bantext">Investment & funding advisory
</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="row iconrow2">
                 <h1 className="mainrowtext1"> Scale up with confidence<br/><br/><br/>        

</h1>
                 <h1 className="mainrowtext2">Consult our experts
</h1>
               </div>
                   <div className="row iconrow2">
                   <div className="row">
             <div className="col-md-5 "></div>
             <div className="col-md-6"><Link to="/post-a-job"><button type="button" className="button31"><h3 className="heading15">Post a Job </h3></button></Link></div>
             <div className="col-md-2"></div>
             </div>
                  </div>
                </div> : ''
            }

                  {/* END OF ICONS */}
</div>
                <div className="col-md-5">


                 <LetsGetStarted/>

                 </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
   

      <div className="row tagstrip1">
        
       
    
    <div className={sliderState==1 ?'col-md-3 homestripitem1 heading9 active' : 'col-md-3 homestripitem1'} id="f1">
   
    <div className="" >
    <h2 className="heading9 " onClick={()=> this.changeSliderState(1)}>Source material</h2>
    </div>
    </div>
    <div className={sliderState==2 ?'col-md-3 homestripitem1 active' : 'col-md-3 homestripitem1'} id="f2">
    
    <div className="">
    <h2 className="heading9" onClick={()=> this.changeSliderState(2)}>Trending Now</h2>
    </div>
    </div>
    <div className={sliderState==3 ?'col-md-3 homestripitem1 active' : 'col-md-3 homestripitem1'} id="f3">
   
    <div className="">
    <h2 className="heading9" onClick={()=> this.changeSliderState(3)}>
Update & Upgrade technology
</h2>
    </div>
    </div>
    <div className={sliderState==4 ?'col-md-3 homestripitem1 active' : 'col-md-3 homestripitem1'} id="f4">
    <div className="arrow-down" id="f4-arrow"></div>
    <div className="">
    <h2 className="heading9" onClick={()=> this.changeSliderState(4)}>Professionals at your service</h2>
    </div>
    
   
   
    </div>
        </div>
        
       
        <section id="productSection">

        <div className="man1"></div>
       </section>
<ProductMegaSidebar/>
<Counter/>
<section id="serviceSection">
</section>
<ServicesMegaSidebar/>
<Counter/>
<div className="sendquery">
       <div className="queryheaddiv">
       <h2 className="queryhead">Send a query</h2>
       </div>
       <div className="row">
       <div className="col-md-6">
       <div className="queryform">
       <h4 className="queryheadtext">Get advice from professionals for quick and innovative solutions</h4> 
       <div className="how ">
      <h2 className="text-center headinghow">How it works?</h2>
      
      <div className="row customers5">
        <div className="col-md-1"></div>
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp1 text-center">
        <img className="img-fluid" src={require("../../images/confused.png")} alt=""/>
        <p style={{paddingTop:'15px', paddingLeft:'5px',fontSize:'12px'}}>Ask your query</p>

        </div>
        <div className="col-md-2 line1"> </div>
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp2 text-center" ref ="imgcorp2">
        <img className="img-fluid" src={require("../../images/expert1.png")} alt=""/>
        <p className="text-center" style={{paddingTop:'15px',fontSize:'12px'}}>Get an answer from an expert</p>
           </div>

       
        <div className="col-md-2 line2"></div>
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp3 text-center" ref ="imgcorp3">
        <img className="img-fluid" src={require("../../images/happy.png")} alt=""/>
        <p style={{paddingTop:'15px', paddingLeft:'5px',fontSize:'12px'}}>Resolve your issue</p>
          
        </div>
        <div className="col-md-1"></div>
       
        </div>
       
        <div class="container mobile">
      <div className="row customers5">
       
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp1 text-center">
        <img className="img-fluid" src={require("../../images/confused.png")} alt=""/>
        <p style={{paddingTop:'15px', paddingLeft:'5px'}}>Ask your query</p>

        </div>
       
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp2 text-center" ref ="imgcorp2">
        <img className="img-fluid" src={require("../../images/expert1.png")} alt=""/>
        <p className="text-center" style={{paddingTop:'15px'}}>Get an answer from an expert</p>
           </div>

       
        
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp3 text-center" ref ="imgcorp3">
        <img className="img-fluid" src={require("../../images/happy.png")} alt=""/>
        <p style={{paddingTop:'15px', paddingLeft:'5px'}}>Resolve your issue</p>
          
        </div>
        
       
        </div>
        </div>
      </div>

       </div>
       </div>
       <div className="col-md-6">
      <div className="queryform">

   <form name="contactForm" id="e1">
         
         <div className="control-group form-group">
           <div className="controls">
             <input type="hidden" className="form-control" id="subject" placeholder="Full Name" value="Value Plus/Home page/Lets get started" required data-validation-required-message="Please enter your name." />
             <div className="row"> 
             <div className="col-md-6 title"><select   className="form-control" name="typeOfEntity" placeholder="Select">
                                 
                                  <option>Mr</option>
                                  <option>Ms</option>
                                  <option>Mrs</option>
                                  
                                </select>
          </div>
             <div className="col-md-6">
          <input type="text"  className="form-control" name="name" placeholder="Full Name" required data-validation-required-message="Please enter your name." />
         
          </div>
          </div>
           </div>
         </div>
         <div className="row">
         <div className="col-md-6">
         <div className="control-group form-group">
           <div className="controls">

             <input type="email" className="form-control" id="email" placeholder=" Email Id" required data-validation-required-message="Please enter your email address." />
           </div>
         </div>
         </div>
           <div className="col-md-6">
           <div className="control-group form-group">
               <div className="controls">

                 <input type="tel" className="form-control" id="phone" placeholder="Contact No" required data-validation-required-message="Please enter your phone number." />
               </div>
             </div>

           </div>
           </div>
         
         <div className="row">

          
           <div className="control-group form-group" style={{margin:'13px'}}>
            <div className="controls">
            
              <textarea rows="6" cols="95"
              className="form-control" id="message"
              name="message" placeholder="Your query"
                onChange={this.onChange}
                value={this.state.message}
               data-validation-required-message="Your query
              "
              maxlength="999" style={{resize:'none'}}></textarea>
            </div>
          </div>
          
         </div>
         <div className="row">
         <div className="col-md-4"></div>
         <div className="col-md-4 text-center">
         <div id="success"></div>
          {/*For success/fail messages*/}
          <button type="submit" className="btn btn-primary btn-block querybutton heading6" id="sendMessageButton" style={{ backgroundColor:'#f7e92a'}}>Send Query</button></div>
          <div className="col-md-4"></div>
          </div>
       </form>
       </div>
       </div>
       </div>
       </div>

<div className="row text-center ">
<div className="testim">
  <h2 className="testimonials">Testimonials</h2>
<Testimonials/>
</div>
</div>

<div className="contactsec1 text-center">
<div className="row contactstrips ">
  
    
     <div className="col-md-4"> 
     <div className="actioncard">
     <div><i class="fa red fa-gears" style={{fontSize:'60px'}}></i></div>
    <Link to="#1"><button type="button" className="button6 ">
    <h6 className=" contactbuttontext ">How it works?</h6></button></Link>
    </div>
  </div>
  <div className="col-md-4">
    <h3 className="contactText">Fulfill business needs with click of a button
</h3>
    
    <Link to="#1"><button type="button" className="button6 ">
    <h6 className=" contactbuttontext ">Let's get started</h6></button></Link>
    </div>
  <div className="col-md-4"> 
  <div className="actioncard">
  <div><i class="fa red fa-question-circle-o" style={{fontSize:'60px'}}></i></div>
    <Link to="/needhelp"><button type="button" className="button6 ">
    <h6 className=" contactbuttontext ">Need help?</h6></button></Link>
  </div>
  </div>
 
  
</div>
</div>

<div className="subscribe">
<div className="row">
<div className="col-md-6 ">
<h4 id="subscribe-text">Subscribe to our Newsletter</h4>
</div>
<div className="col-md-4 text-center">

        <form id="subscribe">
          
          <input style={{fontSize:'14px', paddingLeft:'20px', borderRadius:'none'}}type="email" size="20" onChange={this.onChange} value={this.state.email} className = "email-input" placeholder="Your Email" id="subscribeemail" name="email"/>
          <button onClick={this.submitForm}  className="buttonsubs">Subscribe </button>
          <div id="success1"></div>
        </form>
</div>
</div>
</div>
      </div>


    );
  }
}

export default HomePage;
