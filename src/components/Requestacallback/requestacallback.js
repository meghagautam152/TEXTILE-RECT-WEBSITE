import React,{Component} from 'react';
import ProductNavbar from '../ProductNavbar/productnavbar';
import NavbarMain from '../NavbarMain/navbarmain';
import Footer from '../Footer/footer';

import $ from "jquery";
import _ from "underscore";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'

export default class Requestacallback extends Component{

  constructor(props){
    super();
    this.state={  name: "",
    title:"",
    company:"",
    subject:"",
    email:"",
    phone:"",
    message:"",
    success: false};
    this.submitForm = this.submitForm.bind(this);
  }


  hide() {
    this.setState({ success: false });
}
  

  submitForm(e) {
    this.setState({ success: false });
    e.preventDefault();
    var api = "http://ficklebeans.com/mail/query.php";
    $.ajax({
      url: api,
      method: "GET",
      crossOrigin : true,
      data: {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        
        message:this.state.message,
        company:this.state.company,
        title:this.state.title,
         type:1,
        subject: `Value Plus/${this.props.match.params.url}/query`,
       
      },
      success: function(data) {
        this.setState({ success: true });
      }.bind(this),
      error: function(xhr, status, err) {}.bind(this)
    });
  }
  onChange = e => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };


  render(){
    const {url} = this.props.match.params;
   
    let priceurl;
    switch (url) {
      case "incorporate+":
        priceurl = "/incorporate/pricing";
        break;
      case "comply+":
        priceurl = "/comply/pricing";
        break;
      case "protect+":
        priceurl = "/protect/pricing";
        break;
      case "tax+":
        priceurl = "/tax/pricing";
        break;
      default:

    }
    return(
      <div>
     <NavbarMain/>
     <div className="request">
      <div className="container req">
        <div className="requestname">
          <h2 className=" heading32">Request a callback</h2>
            
        </div>
{/*    // -- Contact Form -->
    // -- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
*/}        <div className="row">
          <div className="col-lg-8 mb-4">
            <form name="sentMessage" id="query" novalidate>
              <input type="hidden"
              className="form-control"
              id="subject" value={`Value Plus/$/Send a Query`}
              required data-validation-required-message="Please enter your name." />

            <div className="control-group form-group">
              <div className="controls">
                <label className="labels"> Title:</label>
                 <select  onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
                                      <option>Mr</option>
                                      <option>Ms</option>
                                      <option>Mrs</option>
                                      
                                    </select>
              
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label className="labels">Name:</label>
              <input type="text"
              className="form-control" id="name"
              name="name"
                onChange={this.onChange}
                value={this.state.name}
              required data-validation-required-message="Please enter your name."/>
              <p className="help-block"></p>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label className="labels"> Name of your company:</label>
              <input type="text"
              className="form-control" id="company"
              name="company"
                onChange={this.onChange}
                value={this.state.company}
              required data-validation-required-message="Please enter your name."/>
              <p className="help-block"></p>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label className="labels">Contact No:</label>
              <input type="tel"
              name="phone"
              onChange={this.onChange}
              value={this.state.phone}
              className="form-control" id="phone"
              required data-validation-required-message="Please enter your phone number."/>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label className="labels">Email Address:</label>
              <input type="email"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
              className="form-control" id="email"
              required data-validation-required-message="Please enter your email address."/>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label className="labels">Which product/service you would like to avail?</label>
              <textarea rows="10" cols="100"
              className="form-control" id="message"
              name="message"
                onChange={this.onChange}
                value={this.state.message}
              required data-validation-required-message="Please enter your message"
              maxlength="999" style={{resize:'none'}}></textarea>
            </div>
          </div>

          <div id="success"></div>
{/*          // -- For success/fail messages -->
*/}          <button onClick={this.submitForm} className="btn btn-primary" id="sendMessageButton">Request a callback</button>
        </form>
      </div>

    </div>
    </div>
{ /* -- /.row -->*/}
 </div>

{  /* --HOW IT WORKS-->*/}

  
  
  <Footer />
  <Rodal visible={this.state.success} height={100} className="pop-up" animation="flip" onClose={this.hide.bind(this)} >
  <div><p>Thank you! Your response has been recorded, we will get back to you shortly</p></div>
</Rodal>
  </div>

    );
  }
}
