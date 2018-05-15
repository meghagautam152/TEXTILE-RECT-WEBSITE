import React,{ Component } from 'react';
import NavbarMain from '../NavbarMain/navbarmain';
import Footer from '../Footer/footer';

export default class Contact extends Component {
  render(){
    return(
      <div className="mainbody">
      <NavbarMain />
      <div className="request requestmap">
      <div class="container req">
         <h3 class="mt-4 mb-3"></h3>
    {/*<!-- Content Row -->*/}
    <div class="row">
    {/*  <!-- Map Column -->*/}
      <div class="col-md-8 mb-4 map">
      {/*<!-- Embedded Google Map -->*/}
      <iframe width="341" height="270" frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=Value%20Plus%20consulting%20pvt%20ltd%2C%20ansal%20bhawan%20%2C%20barakhamba%20road&key=AIzaSyCkB2vgJX86aLe5pBevfYal28BvBTx8IEA" allowfullscreen></iframe>
      </div>
      {/*<!-- Contact Details Column -->*/}
      <div class="col-lg-4 mb-4">
        <h3 class="heading details">Contact Details</h3>
        <p>
          <div className="details">311, Ansal Bhawan</div>
          <div className="details">16 Kasturba Gandhi Marg</div>
          <div className="details">New Delhi- 110001</div>
        </p>
        <p></p>
        <p className="details" >
          <abbr className="details" title="Email">Mail us at</abbr>:
          <a className="details" href=" info@valueplus.io"> info@valueplus.io
            </a>
        </p>
        <p className="details" >
          <abbr className="details" title="Hours">We are available from</abbr>: Monday to Friday, 10 AM to 6 PM
        </p>
      </div>
  {/*  <!-- Contact Form -->
    <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->*/}
    <div class="row">
      <div class="col-lg-8 mb-4">
        <h4>Send us a Message</h4>
        <form name="sentMessage" id="query" novalidate>

          <input type="hidden" class="form-control" id="subject" value="NA" required data-validation-required-message="Please enter your name." />
          <div class="control-group form-group">
            <div class="controls">
              <label> Title:</label>
              <select  onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
                                      <option>Mr</option>
                                      <option>Ms</option>
                                      <option>Mrs</option>
                                      
                                    </select>
             
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Name:</label>
              <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name." />
              <p class="help-block"></p>
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label> Name of your company:</label>
              <input type="text" class="form-control" id="company" required data-validation-required-message="Please enter your name." />
              <p class="help-block"></p>
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Contact No:</label>
              <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Email Address:</label>
              <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address." />
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Your Message</label>
              <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style={{resize:"none"}}></textarea>
            </div>
          </div>
          <div id="success"></div>
           {/*For success/fail messages*/}
          <button type="submit" class="btn btn-primary" id="sendMessageButton">Send Message</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
  <Footer />
  </div>
 
    );
  }
}
