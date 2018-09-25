import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './training.css';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import TrainingNavbar from '../TrainingNavbar/TrainingNavbar';
import WhyChoose from '../WhyChoose/whychoose';
import Footer from '../Footer/footer';
export default class Strategic extends Component {
  render() {
    return (
      <div className="mainbody">
      <TrainingNavbar
      subhead = "STRATEGIC"
      url = "strategic" />
      <div className="carousel slide" data-ride="carousel" id="1">
      <div className="carousel-inner">

        <div className="carousel-item active car1 training">
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
                  
                   <div className="control-group form-group"><div className="controls"> <label className="dialoguetext">Training Category:</label></div>
                  <div className="col-md-12"><select  onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Select">
                            
                             <option>All</option>
                             <option>Ideation bootcamp
</option>
                             <option>Product market fit

</option>                    
                            <option>Business Modelling
</option>
                            <option>Branding

  </option>
                            <option>Growth
  </option>
                            <option>Impact design

  </option>
                           </select>
     </div></div>

                  <div id="success"></div>
                  <button type="submit" className="btn btn-block btn-primary button10 heading6" id="sendMessageButton" style={{ color:'#000000'}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="trainfirstsec big">
    <div className="container mysec">
      <h2 className="text-center heading">Our Trainings</h2>
      <div className="row trainrow mobilerow2 " >
        <div className="col-md-3 col-sm-2 mb-2  text-center ">
         <div className="trainsec2">
         <div className="traicons"><img src={require("../../images/t1.png")}/></div>
         <h4 className="traintext">Ideation Bootcamp</h4>  
         </div>
         </div>
        <div className="col-lg-1 text-center ">

        </div>
        <div className="col-md-3 col-sm-2 mb-2  text-center ">
        <div className="trainsec2">
        <div className="traicons"><img className="circles2" src={require("../../images/t2.png")}/></div>
         <h4 className="traintext">Product Market Fit</h4>  
         </div>
        </div>
        <div className="col-lg-1 text-center ">

        </div>
        <div className="col-md-3 col-sm-2 mb-2 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img  className="circles2" src={require("../../images/t3.png")}/></div>
         <h4 className="traintext">Business Modelling</h4>  
         </div>
        </div>
      </div>
      <div className="row trainrow mobilerow2 " >
        <div className="col-md-3 col-sm-2 mb-2 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img  className="circles2"src={require("../../images/t4.png")}/></div>
         <h4 className="traintext">Growth</h4>  
         </div>
        </div>
        <div className="col-lg-1 text-center ">

        </div>
        <div className="col-md-3 col-sm-2 mb-2 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img className="circles2" src={require("../../images/t5.png")}/></div>
         <h4 className="traintext">Branding</h4>  
         </div>
        </div>
        <div className="col-lg-1 text-center ">

        </div>
        <div className="col-md-3 col-sm-2 mb-2  text-center ">
        <div className="trainsec2">
        <div className="traicons"><img className="circles2" src={require("../../images/t6.png")}/></div>
         <h4 className="traintext">Impact Design</h4>  
         </div>
        </div>
      </div>
    </div>
    </div>
    <div className="trainfirstsec mobile">
    <div className="container mysec1">
      <h2 className="text-center heading">Our Trainings</h2>
      <div className="row trainrow mobilerow3 " >
        <div className=" col-sm-2 mb-2 col-5 text-center ">
         <div className="trainsec2">
         <div className="traicons"><img src={require("../../images/t1.png")}/></div>
         <h4 className="traintext">Ideation Bootcamp</h4>  
         </div>
         </div>
       

       
        <div className="col-md-3 col-sm-2 mb-2 col-5  text-center ">
        <div className="trainsec2">
        <div className="traicons"><img className="circles2" src={require("../../images/t2.png")}/></div>
         <h4 className="traintext">Product Market Fit</h4>  
         </div>
        </div>
      
        </div>
        <div className="row trainrow mobilerow3 " >
        <div className="col-md-3 col-sm-2 mb-2 col-5 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img  className="circles2" src={require("../../images/t3.png")}/></div>
         <h4 className="traintext">Business Modelling</h4>  
         </div>
        </div>
     
      
        <div className="col-md-3 col-sm-2 mb-2 col-5 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img  className="circles2"src={require("../../images/t4.png")}/></div>
         <h4 className="traintext">Growth</h4>  
         </div>
        </div>
        

        </div>
        
        <div className="row trainrow mobilerow3 " >

        <div className="col-md-3 col-sm-2 mb-2 col-5 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img className="circles2" src={require("../../images/t5.png")}/></div>
         <h4 className="traintext">Branding</h4>  
         </div>
        </div>
       

       
        <div className="col-md-3 col-sm-2 mb-2 col-5 text-center ">
        <div className="trainsec2">
        <div className="traicons"><img className="circles2" src={require("../../images/t6.png")}/></div>
         <h4 className="traintext">Impact Design</h4>  
         </div>
        </div>
      </div>
      </div>
      </div>
   

    <div className="row"  style={{backgroundColor:'#EBF8FE'}}>
      <div className="container text-center">
        <h1 style={{textAlign:'center'}} className="heading">Clients</h1>
        <div className="row circle-row ">

          <div className="col-lg-2 iconborder">

            <img className="circles2" src={require("../../images/corporate1.png")}/>
            <p className="text-center iconcontent">Corporate</p>
            <p className="text-center aboutcontent">Building innovative environment and nurturing intrapreneurs
            </p>

          </div>

          <div className="col-lg-2 iconborder">

            <img className="circles2" src={require("../../images/startup1.png")}/>
            <p className="text-center iconcontent">Startup</p>
            <p className="text-center aboutcontent">Grow your business to new heights

            </p>
          </div>
          <div className="col-lg-2 iconborder">
            <img className="circles2" src={require("../../images/social.png")}/>
            <p className="text-center iconcontent">Social</p>
            <p className="text-center aboutcontent">Build a sustainable enterprise and scale your impact</p>

          </div>

          <div className="col-lg-2  iconborder">
            <img className="circles2" src={require("../../images/incubator1.png")}/>
            <p className="text-center iconcontent">Incubator/<br/>Accelerator</p>
            <p className="text-center aboutcontent">Find the best startup through our pre incubation program
            </p>

          </div>
        </div>

      </div>
    </div>



    <div className="row" id="features">
      <div className="container text-center mysec">
        <h1 style={{textAlign:'center'}} className="heading">Our Approach</h1>
        <div className="mysec">
          <div className="row  ">
            <div className="col-lg-5 text-center trainsec1">

              <h2 className="heading64">Learning not Training</h2>
              <h6 className="content1">We focus on the context of the participant, rather than simply instructing or telling them about concepts and theories.

                                  </h6>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5 text-center trainsec1" >

              <h2 className="heading64">Tutoring and Facilitation</h2>
              <h6 className="content1">We create learning environment where participants can bond with their peers to build each other’s experience and strengths.
                                  </h6>
            </div>

          </div>
          <div className="row ">
            <div className="col-lg-5 text-center trainsec1" >

              <h2 className="heading64">Programmes not Courses</h2>
              <h6 className="content1">Courses are a fixed entity, whereas we provide programmes that are a collection of modules and experiences responsive to learner’s needs.



                                  </h6>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5 text-center trainsec1" >

              <h2 className="heading64">Learning and Development</h2>
              <h6 className="content1"> We are part of a workplace process of continuous improvement that is practical and applied, rather than a formal education structure.

                                      </h6>
            </div>

          </div>
        </div>
      </div>
    </div>
    <WhyChoose url = "strategic" />
    <Footer />


</div>

    );
  }
}
