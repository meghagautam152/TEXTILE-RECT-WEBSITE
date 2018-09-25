import React, { Component } from 'react';
import './about.css';
import NavbarMain from '../NavbarMain/navbarmain';
import Footer from '../Footer/footer';
import Topbar from '../Topbar/navbarmain';

export default class About extends Component {
  render() {
    return (
      <div className="mainbody">
     
      <NavbarMain />
    <header>
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner aboutus">

        <div className="carousel-item active about">

         
        </div>
      </div>
    </div>

  </header>
  <div className="container">


    <div className="row" id="whatwedo">
      
      <div className="col-lg-12" style={{paddingTop:'40px'}}>
        <h2 className="heading16">About Value Plus</h2>
        <p className="abouttext">Since 1994, Value Plus, is a multidisciplinary and integrated problem solver to resolve your current business concerns. Value Plus is lead by stalwarts and professionally qualified experts in various fields who bring in decades of experience on
          to the table to help simplify complex business needs. We have developed expertise in catering to the legal, financial and management needs of corporate's, startup's and social enterprises alike. Our approach to problem solving is more proactive
          than reactive. We are a Trusted Business Partner. Our focus is to build a healthy and lasting relationship with the clients by providing them with quality products and services through its high caliber knowledge base, value added professional
          advice, continuous professional development, commitment and ethical & honest approach .</p>
      </div>
    </div>
    </div>
    <div className="row" id="ourmission" >
      <div className="container">
      
      <div className="col-lg-12" style={{paddingTop:'40px'}}>
        <h2 className="heading16">Our Mission</h2>
        <p className="abouttext">We believe that for a nation to grow, it’s businesses must grow. Our mission is to act as catalysts for business growth by offering quality products and services. 
        </p>
      </div>
      </div>
    </div>
    
     <div className="row">
     <div className="container">
    <h2 className="text-center heading16">Our Values</h2>
    <div className="row customers mobilerow7">
      <div className="col-lg-2 col-sm-4 mb-4 aboutimage ">
        <img className="img-fluid  " src={require("../../images/teamwork.png")} alt=""/>
        <p className="text-center abouthead" style={{paddingTop:'15px'}}>Teamwork</p>
        <p className="text-center aboutcontent1">Our professional team is a winning combination.</p>
      </div>
      <div className="col-lg-2 col-sm-4 mb-4 aboutimage">
        <img className="img-fluid " src={require("../../images/commitment.png")} alt=""/>
        <p className="text-center abouthead" style={{paddingTop:'15px'}}>Commitment</p>
        <p className="text-center aboutcontent1">Building lasting relationship by personalized advice through access to our skills and knowledge base.
        </p>
      </div>
      <div className="col-lg-2 col-sm-4 mb-4 aboutimage">
        <img className="img-fluid" src={require("../../images/involvement.png")} alt=""/>
        <p className="text-center abouthead" style={{paddingTop:'15px'}}>Involvement</p>
        <p className="text-center aboutcontent1">Inspiring and motivating inputs by working alongside with your team.</p>
      </div>
      <div className="col-lg-2 col-sm-4 mb-4 aboutimage">
        <img className="img-fluid " src={require("../../images/enthusiasm.png")} alt=""/>
        <p className="text-center abouthead" style={{paddingTop:'15px'}}>Enthusiasm</p>
        <p className="text-center aboutcontent1">Because attitude count to sail through many demanding challenges.
        </p>
      </div>
      <div className="col-lg-2 col-sm-4 mb-4 aboutimage">
        <img className="img-fluid " src={require("../../images/satisfaction.png")} alt=""/>
        <p className="text-center abouthead" style={{paddingTop:'15px'}}>Satisfaction</p>
        <p className="text-center aboutcontent1">We leave no stone unturned to ensure you complete satisfaction.
        </p>
      </div>
    </div>
    </div>
    </div>
 
  <Footer />
 </div>


    );
  }
}
