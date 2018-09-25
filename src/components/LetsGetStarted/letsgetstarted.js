import React,{Component} from 'react';
import _ from 'underscore';
import './letsgetstarted.css';
import $ from 'jquery';
export default class LetsGetStarted extends Component{




  constructor(props){
    
      
      super();
        this.handleLine = this.handleLine.bind(this);
      }
      componentDidMount(){
        this.handleLine();
      }
  handleLine(){
        
    const f1= this.refs.f1;
    const f2= this.refs.f2;
   
    const e1= this.refs.e1;
  const e2= this.refs.e2;
  
 
  $("#e1,#e1mob").css('display', 'block');
  $("#e2,#e2mob").css('display', 'none');
  $("#f1").addClass("active2");
      
  $(function(){
    $("#f1,#e1").click(function(){
      $("#f1").addClass("active2");
      $("#f2").removeClass("active2");
      $("#e1,#e1mob").css('display', 'block');
   
      $("#e2,#e2mob").css('display', 'none');
     
      
     
     });
    });

    $(function(){
        $("#f2,#e2").click(function(){
          $("#f2").addClass("active2");
          $("#f1").removeClass("active2");
          $("#e1,#e1mob").css('display', 'none');
         
          $("#e2,#e2mob").css('display', 'block');
         
         });
        });

       
  
   

         

        
            

          }

  



 
  render(){
    return(
      <div className="col-md-12 dialogue4">
      <div className="row">
      <div className="col-md-6 tab " id="f1">
      
      <h2 className="tabtext">Products</h2>
      </div>
      <div className="col-md-6 tab" id="f2">
      <h2 className="tabtext">Services</h2>
      </div>
      </div>
        <form name="contactForm" id="e2">
         
          <div className="control-group form-group">
            <div className="controls">
              <input type="hidden" className="form-control" id="subject" placeholder="Full Name" value="Value Plus/Home page/Lets get started" required data-validation-required-message="Please enter your name." />
              <div className="row"> 
              <div className="col-md-5 title"><select   className="form-control" name="typeOfEntity" placeholder="Select">
                                  
                                   <option>Mr</option>
                                   <option>Ms</option>
                                   <option>Mrs</option>
                                   
                                 </select>
           </div>
              <div className="col-md-7">
           <input type="text"  className="form-control" name="name" placeholder="Full Name" required data-validation-required-message="Please enter your name." />
          
           </div>
           </div>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">

              <input type="email" className="form-control" id="email" placeholder=" Email Id" required data-validation-required-message="Please enter your email address." />
            </div>
          </div>
          <div className="row">

            <div className="col-lg-6 textfields1" >
              <div className="control-group form-group">
                <div className="controls">

                  <input type="tel" className="form-control" id="phone" placeholder="Contact No" required data-validation-required-message="Please enter your phone number." />
                </div>
              </div>

            </div>
            <div className="col-lg-6 textfields1" >
              <div className="control-group form-group">
                <div className="controls">

                  <input type="text" className="form-control" id="city" placeholder="City Name" required data-validation-required-message="Please enter your city name."/>
                </div>
              </div>
            </div>
          </div>
          <div className=" control-group form-group">
            
            <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
                                      <option>Type of category</option>
                                      <option>X2</option>
                                      <option>X2</option>
                                     
                                    </select>
          </div>

          <div className="row">

            <div className="col-lg-6 textfields"  >
            <div className=" control-group form-group">
          
            <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
                                      <option>Service Type</option>
                                      <option>X2</option>
                                      <option>X2</option>
                                     
                                    </select>
          </div>
            </div>
           
          </div>


          <div id="success"></div>
          {/*For success/fail messages*/}
          <button type="submit" className="btn btn-primary btn-block mainbutton heading6" id="sendMessageButton" style={{  backgroundColor:'#f7e92a'}}>Let's Get Started</button>
          <p className="smalltext">No spam. No sharing. 100% Confidentiality</p>
        </form>





        <form name="contactForm" id="e1">
         
          <div className="control-group form-group">
            <div className="controls">
              <input type="hidden" className="form-control" id="subject" placeholder="Full Name" value="Value Plus/Home page/Lets get started" required data-validation-required-message="Please enter your name." />
              <div className="row"> 
              <div className="col-md-5 title"><select   className="form-control" name="typeOfEntity" placeholder="Select">
                                  
                                   <option>Mr</option>
                                   <option>Ms</option>
                                   <option>Mrs</option>
                                   
                                 </select>
           </div>
              <div className="col-md-7">
           <input type="text"  className="form-control" name="name" placeholder="Full Name" required data-validation-required-message="Please enter your name." />
          
           </div>
           </div>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">

              <input type="email" className="form-control" id="email" placeholder=" Email Id" required data-validation-required-message="Please enter your email address." />
            </div>
          </div>
          <div className="row">

            <div className="col-lg-6 textfields1" >
              <div className="control-group form-group">
                <div className="controls">

                  <input type="tel" className="form-control" id="phone" placeholder="Contact No" required data-validation-required-message="Please enter your phone number." />
                </div>
              </div>

            </div>
            <div className="col-md-6">
            <div className=" control-group form-group">
            
            <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
                                      <option>Product Type </option>
                                      <option>X2</option>
                                      <option>X3</option>
                                      <option>X4</option>
                                      <option>X5</option>
                                      <option>X6</option>
                                      
                                    </select>
          </div>
            </div>
           
          </div>
          <div className="row">
          <div className="col-md-6">
          <div className=" control-group form-group">
           
           <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
                                     <option>Product Category</option>
                                     <option>X2</option>
                                     <option>X3</option>
                                     <option>X4</option>
                                     <option>X5</option>
                                     <option>X6</option>
                                     
                                   </select>
         </div>
          </div>
          <div className="col-md-6">
          <div className=" control-group form-group">
            
            <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
                                      <option>Product Item</option>
                                      <option>X2</option>
                                      <option>X3</option>
                                      <option>X4</option>
                                      <option>X5</option>
                                      <option>X6</option>
                                      
                                    </select>
          </div>
          </div>
          </div>


          <div className="row">

            <div className="col-lg-6 textfields"  >
            <div className="control-group form-group">
            <div className="controls">

              <input type="email" className="form-control" id="email" placeholder="Quantity" required data-validation-required-message="Please enter the quantity" />
            </div>
          </div>
            </div>
            <div className="col-lg-6 textfields" >
            <div className=" control-group form-group">
           
           <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
           <option>Unit</option>
                                     <option>  Boxes</option>
                                     <option>Cartons</option>
                                     <option>Centimeters</option>
                                     <option>Containers</option>
                                     <option>Cubic Meters</option>
                                     <option>Dozens</option>
                                     <option>Feet</option>
                                     <option>Gallons (UK)</option>
                                     <option>Gallons (US)</option>
                                     <option>Grams</option>
                                     <option>Inches</option>
                                     <option>Kilograms</option>
                                     <option>Kilometers</option>
                                     <option>Liters</option>
                                     <option>Meters</option>
                                     <option>Metric Tons</option>
                                     <option>Milliliters</option>
                                     <option>Millimeters</option>
                                     <option>Ounces</option>
                                     <option>Pairs</option>
                                     <option>Pieces</option>
                                     <option>Pints (UK)</option>
                                     <option>Pints (US)</option>
                                     <option>Pounds</option>
                                     <option>Quarts</option>
                                     <option>Sets</option>
                                     <option>Sheets</option>
                                     <option>Square Feet</option>
                                     <option>Square Inches</option>
                                     <option>Square Meters</option>
                                     <option>Square Yards</option>
                                     <option>Tons (UK)</option>
                                     <option>Tons (US)</option>
                                     <option>Yards</option>

                                     
                                   </select>
         </div>
            </div>
          </div>
        

          <div id="success"></div>
          {/*For success/fail messages*/}
          <button type="submit" className="btn btn-primary btn-block mainbutton heading6" id="sendMessageButton" style={{  backgroundColor:'#f7e92a'}}>Let's Get Started</button>
          <p className="smalltext">No spam. No sharing. 100% Confidentiality</p>
        </form>
      </div>
    );
  }
}
