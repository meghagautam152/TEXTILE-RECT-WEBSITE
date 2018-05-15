import React, { Component, Fragment } from "react";
import $ from "jquery";
import _ from "underscore";

export default class Incorporatelets extends Component {
  constructor(props) {
    super();
    this.state = {
      productCategory: [
        {
          productId: "1",
          name: "Start Private Limited Company"
        },
        {
          productId: "1",
          name: "Start Public Limited company"
        },
        {
          productId: "1",
          name: "Start One Person Company"
        },
        {
          productId: "1",
          name: "Start Limited Liability Partnership"
        },
        {
          productId: "1",
          name: "Start Partnership"
        },
        {
          productId: "1",
          name: "Start Section 8 company/NGO"
        },
        {
          productId: "1",
          name: "Start Trust"
        },
        {
          productId: "1",
          name: "Start Society"
        },
        {
          productId: "1",
          name: "Start Nidhi Company"
        },
        {
          productId: "1",
          name: "Start Producer Company"
        },
        {
          productId: "2",
          name: "ROC Compliance for Pvt ltd"
        },
        {
          productId: "2",
          name: "ROC compliance for One person company"
        },
        {
          productId: "2",
          name: "ROC compliance for LLP"
        },
        {
          productId: "2",
          name: "Compliance Package for Pvt Ltd"
        },
        {
          productId: "2",
          name: "Compliance Package for One Person company"
        },
        {
          productId: "2",
          name: "Compliance Package  for LLP"
        },
        {
          productId: "2",
          name: "Appointment for  Director"
        },
        {
          productId: "2",
          name: "Resignation for  Director"
        },
        {
          productId: "2",
          name: "Change in  Name"
        },
        {
          productId: "2",
          name: "Change in Registered Address"
        },
        {
          productId: "2",
          name: "Compliance Package  for LLP"
        },
        {
          productId: "2",
          name: "Alteration of Share Capital"
        },
        {
          productId: "3",
          name: "GST Registration"
        },
        {
          productId: "3",
          name: "GST Migration"
        },
        {
          productId: "3",
          name: "GST Compliance"
        },
        {
          productId: "3",
          name: "TDS Compliance"
        },
        {
          productId: "3",
          name: "Income Tax Compliance"
        },
        {
          productId: "4",
          name: "Trademark Registration"
        },
        {
          productId: "4",
          name: "Trademark Renewal"
        },
        {
          productId: "4",
          name: "Trademark Objection Reply"
        },
        {
          productId: "4",
          name: "Trademark Licensing"
        },
        {
          productId: "4",
          name: "Trademark Transfer"
        },
        {
          productId: "4",
          name: "Copyright Registration"
        },
        {
          productId: "4",
          name: "Copyright Objection Reply"
        },
        {
          productId: "5",
          name: "Winding up one person company"
        },
        {
          productId: "5",
          name: "Winding up limited liability partnership"
        },
        {
          productId: "5",
          name: "Winding up private limited company"
        },
       
      ],
      products: [
        {
          productId: "1",
          name: "Incorporate+"
        },
        {
          productId: "2",
          name: "Comply+"
        },
        {
          productId: "3",
          name: "Tax+"
        },
        {
          productId: "4",
          name: "Protect+"
        },
        {
          productId: "5",
          name: "Windup+"
        }
      ],
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

  submitForm(e) {
    this.setState({ success: false });
    e.preventDefault();
    var api = "ficklebeans.com/mail/index.php";
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
        <input
          type="hidden"
          className="form-control"
          id="product"
          placeholder="Full Name"
          value={this.props.product}
          required
          data-validation-required-message="Please enter your name."
        />
        <div className="pricestart"><h5 className="prices">Starting from {this.props.price} + Govt Fees + GST@18%</h5></div>
        
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
          <div className="col-lg-6 textfields" >
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
          <div className="col-lg-6 textfields">
            <div className="control-group form-group">
              <div className="controls">
                <input
                  type="text"
                  value={city}
                  onChange={this.onChange}
                  name = "city"
                  className="form-control"
                  id="city"
                  placeholder="City Name"
                  required
                  data-validation-required-message="Please enter your city name."
                />
              </div>
            </div>
          </div>
        </div>
       

        <div className="row">
          <div className="col-lg-8 " >
            <div className=" control-group form-group">
              <label for="sel1" className="dialoguetext">
                Product Category :
              </label>
              <select
                className="form-control"
                name="productCategory"
                value={productCategory}
                onChange={this.onChange}
              >
              <option selected>Select Options</option>
                {this.state.category.map((pc, index) => {
                  return <option key={index}> {pc.name} </option>;
                })}
              </select>
            </div>
          </div>
        </div>

        {this.state.success ? (
          <div id="success">
            <div class="alert alert-success">
              <strong>Submitted succesfully!</strong>
            </div>{" "}
          </div>
        ) : (
          <div />
        )}
        {/*For success/fail messages */}
        <button
          onClick = {this.submitForm}
          className="btn btn-primary heading6 btn-block button10"
          id="sendMessageButton"
        >
        Let's get started
        </button>
      </form>
    );
  }
}