import React, { Component, Fragment } from "react";
import $ from "jquery";
import _ from "underscore";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'

export default class ConsultingLgs extends Component {
  constructor(props) {
    super();
    this.state = {
    
      name: "",
      email: "",
      phone: "",
      city: "",
      typeOfEntity: "Privated Limited Company",
      pc: "",
      success: false,
      category:[]
    };
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    let category = _.where(this.state.productCategory, {
      productId: this.props.productId
    });
    this.setState({ category });
    
  }

  hide() {
    this.setState({ success: false });
}
  

  submitForm(e) {
    this.setState({ success: false });
    e.preventDefault();
    var api = "http://ficklebeans.com/mail/index.php";
    $.ajax({
      url: api,
      method: "GET",
      crossOrigin : true,
      data: {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        subject: `Value Plus/${this.props.product}/Let's get started`,
        typeOfEntity: this.state.typeOfEntity,
        city: this.state.city,
        productCategory: this.state.productCategory,
        product: this.props.product,
        type: 1
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
  render() {
    console.log(this.state.category);
    const {
      name,
      email,
      city,
      product,
      productCategory,
      typeOfEntity,
      phone
    } = this.state;
    return (
      <form name="sentMessage" id="contactForm" novalidate>
        <input
          type="hidden"
          className="form-control"
          id="subject"
          placeholder="Full Name"
          value={`Value Plus/${this.props.product}/Let's get started`}
          required
          data-validation-required-message="Please enter your name."
        />
      

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
       <input type="text" value={name} onChange={this.onChange} className="form-control" name="name" placeholder="Full Name" required data-validation-required-message="Please enter your name." />
     
       </div>
       </div>
            <p className="help-block" />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <input
              value={email}
              onChange={this.onChange}
              name = "email"
              type="email"
              className="form-control"
              id="email"
              placeholder=" Email Id"
              required
              data-validation-required-message="Please enter your email address."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" style={{ width: "110px" }}>
            <div className="control-group form-group">
              <div className="controls">
                <input
                  type="tel"
                  value={phone}
                  onChange={this.onChange}
                  name = "phone"
                  className="form-control"
                  id="phone"
                  placeholder="Contact No"
                  required
                  data-validation-required-message="Please enter your phone number."
                />
              </div>
            </div>
          </div>
         
        </div>
        

   
 
        <button
          onClick = {this.submitForm}
          className="btn btn-primary heading6 btn-block button10"
          id="sendMessageButton" 
        >
          Submit
        </button>
        <Rodal visible={this.state.success} height={100} className="pop-up" animation="flip" onClose={this.hide.bind(this)} >
  <div><p>Thank you! Your response has been recorded, we will get back to you shortly</p></div>
</Rodal>
      </form>
    );
  }
}
