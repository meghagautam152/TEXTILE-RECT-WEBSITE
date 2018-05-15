import React,{Component} from 'react';
import ProductNavbar from '../ProductNavbar/productnavbar';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import Footer from '../Footer/footer';
import Sendqueryhow from './Sendqueryhow';
import $ from "jquery";
import _ from "underscore";
import Rodal from 'rodal';
import{Link} from 'react-router-dom';
import 'rodal/lib/rodal.css'

export default class SendQuery extends Component{

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
    let data = url[0].toUpperCase();
    for(let i =1; i<url.length;i++){
      data+=url[i];
    }
    let priceurl;
    switch (url) {
      case "incorporate+":
        priceurl = "/incorporate+/pricing";
        break;
      case "comply+":
        priceurl = "/comply+/pricing";
        break;
      case "protect+":
        priceurl = "/protect+/pricing";
        break;
      case "tax+":
        priceurl = "/tax+/pricing";
        break;
      case "windup+":
        priceurl = "/windup+/pricing";
        break;
      default:

    }
    return(
      <div>
      {(url==="incorporate+"||url==="comply+"||url==="protect+"||url==="tax+"||url==="windup+")?
      (<ProductNavbar
      url = {url}
      priceurl ={priceurl}
      type = "send-a-query"
      subhead = {`${data.toUpperCase()}`}
      />) :
      (<ConsultingNavbar
       url = {url}
       type = "send-a-query"
       subhead ={`${data.toUpperCase()}`}
        />)
     }
     <div className="request">
      <div className="container req">
        <div className="requestname">
          <h2 className=" heading ">Send us a query</h2>
            <h5>{`(${data})`}</h5>
        </div>
{/*    // -- Contact Form -->
    // -- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
*/}        <div className="row">
          <div className="col-lg-8 mb-4">
            <form name="sentMessage" id="query" novalidate>
              <input type="hidden"
              className="form-control"
              id="subject" value={`Value Plus/${data}/Send a Query`}
              required data-validation-required-message="Please enter your name." />

            <div className="control-group form-group">
              <div className="controls">
                <label> Title:</label>
                 <select  onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
                                      <option>Mr</option>
                                      <option>Ms</option>
                                      <option>Mrs</option>
                                      
                                    </select>
              
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>Name:</label>
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
              <label> Name of your company:</label>
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
              <label>Contact No:</label>
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
              <label>Email address:</label>
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
              <label>Your query?</label>
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
*/}          <button onClick={this.submitForm} className="btn btn-primary" id="sendMessageButton">Submit</button>
        </form>
      </div>

    </div>
    </div>
{ /* -- /.row -->*/}
 </div>

{  /* --HOW IT WORKS-->*/}

  <Sendqueryhow/>
  
  <Footer />
  <Rodal visible={this.state.success} height={100} className="pop-up" animation="flip" onClose={this.hide.bind(this)} >
  <div><p>Thank you! Your response has been recorded, we will get back to you shortly</p></div>
</Rodal>
  </div>

    );
  }
}
