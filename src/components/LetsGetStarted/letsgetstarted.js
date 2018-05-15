import React,{Component} from 'react';
import _ from 'underscore';
import './letsgetstarted.css';
export default class LetsGetStarted extends Component{




  constructor(props){
    
      super();
      this.state = {
        productCategory:[
          
{productId:"1",
name:"Start Private Limited Company"
},
{productId:"1",
name:"Start Public Limited company"
},
{productId:"1",
name:"Start One Person Company"
},
{productId:"1",
name:"Start Limited Liability Partnership"
},
{productId:"1",
name:"Start Partnership"
},
{productId:"1",
name:"Start Section 8 company/NGO"
},
{productId:"1",
name:"Start Trust"
},
{productId:"1",
name:"Start Society"
},
{productId:"1",
name:"Start Nidhi Company"
},
{productId:"1",
name:"Start Producer Company"
},{
          productId:"2",
          name:"ROC Compliance for Pvt ltd"
        },
        {
          productId:"2",
          name:"ROC compliance for One person company"
        },
        {
          productId:"2",
          name:"ROC compliance for LLP"
        },
        {
          productId:"2",
          name:"Compliance Package for Pvt Ltd"
        },
        {
          productId:"2",
          name:"Compliance Package for One Person company"
        },
        {
          productId:"2",
          name:"Compliance Package  for LLP"
        },
        {
          productId:"2",
          name:"Appointment for  Director"
        },
        {
          productId:"2",
          name:"Resignation for  Director"
        },
        {
          productId:"2",
          name:"Change in  Name"
        },
        {
          productId:"2",
          name:"Change in Registered Address"
        },
        {
          productId:"2",
          name:"Compliance Package  for LLP"
        },
        {
          productId:"2",
          name:"Alteration of Share Capital"
        },
        {
          productId:"3",
          name:"GST Registration"
        },
        {
          productId:"3",
          name:"GST Migration"
        },
        {
          productId:"3",
          name:"GST Compliance"
        },
        {
          productId:"3",
          name:"TDS Compliance"
        },
        {
          productId:"3",
          name:"Income Tax Compliance"
        },{productId:"4",
        name:"Trademark Registration"
        },
        {productId:"4",
        name:"Trademark Renewal"
        },
        {productId:"4",
        name:"Trademark Objection Reply"
        },
        {productId:"4",
        name:"Trademark Licensing"
        },
        {productId:"4",
        name:"Trademark Transfer"
        },
        {productId:"4",
        name:"Copyright Registration"
        },
        {productId:"4",
        name:"Copyright Objection Reply"
        },
        {productId:"5",
        name:"Winding up One Person Company"
        }
      ,
      {productId:"5",
      name:"Winding up Limited Liability Partnership"
      },
      {productId:"5",
      name:"Winding up Private Limited Company"
      }],
        product:[{
          productId:"1",
          name:"Incorporate+",
           },
       {
        productId:"2",
        name:"Comply+",
      },
      {
        productId:"3",
        name:"Tax+"
      },
      {
        productId:"4",
        name:"Protect+"
      }, {
        productId:"5",
        name:"Wind Up+"
      }],
       filteredCategory:[],
    };

       this.filterproduct=this.filterproduct.bind(this);
      
       
      
          
  }     
  
   //at start we want filteredcategory to be for incorporate + so we are filtering product category with productId=1
  componentDidMount(){

    var filteredCategory=_.where(this.state.productCategory,{productId:"1"});
    this.setState({filteredCategory:filteredCategory}); 
  }
           
          

          filterproduct( product ){
            var filteredCategory;
            var productValue = product.target.value;
          console.log(product.target.value,"value");
          console.log(this.state.productCategory,"product category before");
           
         
         filteredCategory=_.where(this.state.productCategory,{productId:productValue});
         console.log(filteredCategory,"filtered category after");
         this.setState({filteredCategory:filteredCategory});
         console.log(this.state.filteredCategory,"filtered state after");


        
            

          }

  



 
  render(){
    return(
      <div className="col-lg-4 dialogue4">
        <form name="contactForm" id="contactForm">
         
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
            <label for="sel1" className="dialoguetext" >Type of entity :</label>
            <select className="form-control" id="typeOfEntity" placeholder="Type of entity">
                                      <option>Privated Limited Company</option>
                                      <option>Public limited Company</option>
                                      <option>One Person Company</option>
                                      <option>Limited Liability Partnership</option>
                                      <option>Partnership</option>
                                      <option>Section 8 company/NGO</option>
                                      <option>Trust</option>
                                      <option>Society</option>
                                      <option>NBFC</option>
                                      <option>Individual</option>
                                      <option>Other</option>
                                    </select>
          </div>

          <div className="row">

            <div className="col-lg-6 textfields"  >
              <div className=" control-group form-group ">
                <label for="sel1" className="dialoguetext">Select Product:</label>
                <select className="form-control" id="product" onChange={this.filterproduct} >
                {this.state.product.map((pc)=>{
                  return <option value={pc.productId} key={pc.productId}> {pc.name} </option>;
                })}
                                    </select>
              </div>
            </div>
            <div className="col-lg-6 textfields" >
              <div className=" control-group form-group ">
                <label for="sel1" className="dialoguetext">Product Category:</label>
                <select className="form-control" id="productCategory">
                                            
                                           {this.state.filteredCategory.map((pc,index)=>{
                                             return <option key={index}> {pc.name} </option>;
                                           })}


                                        </select>
              </div>
            </div>
          </div>

          <div id="success"></div>
          {/*For success/fail messages*/}
          <button type="submit" className="btn btn-primary btn-block mainbutton heading6" id="sendMessageButton" style={{  backgroundColor:'#f7e92a'}}>Let's Get Started</button>
        </form>
      </div>
    );
  }
}
