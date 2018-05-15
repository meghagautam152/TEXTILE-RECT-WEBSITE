import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./incorporate.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import HowItWorks from "../HowItWorks/howitworks";
import WhyChoose from "../../WhyChoose/whychoose";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Incorporatelets from "./Incorporatelets";
import Testimonials from '../../Testimonials/testimonials';

import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

export default class Incorporate extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="mainbody">
        <ProductNavbar
          subhead="INCORPORATE+"
          url="incorporate+"
          priceurl="../products/incorporate+/pricing"
        />
        <header>
          <div className="carousel slide" data-ride="carousel" id="1">
            <div className="carousel-inner header">
              <div className="carousel-item car1 incorporate active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="col-lg-8" />
                    <div className="col-lg-offset-8 col-lg-4 dialogue1">
                      <Incorporatelets Sproduct="Incorporate+" productId="1" price="Rs 2,999" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/*<!--offering-->*/}
        <div className="productssec big" style={{ padding: "20px 80px" }}>
          <div>
            <h2 className="text-center heading">Offerings</h2>
            <div className="row customers2 mobilerow1">
              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={this.show.bind(this)}
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/proicon2.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>Private Limited Company</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div
                className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp2 text-center"
                onClick={this.show.bind(this)}
              >
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/proicon7.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>Public Limited Company</div>
                    </h5>
                  </span>{" "}
                </div>
              </div>

              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp3 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/icon3.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>One Person Company</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp4 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/proicon3.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>Limited Liability Partnership</div>
                    </h5>
                  </span>
                </div>
              </div>
            </div>
            <div className="row customers2 mobilerow1">
              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/c6.png")}
                    />
                    <h5 className="offercontent1">
                      <div>Start</div>
                      <div>Partnership</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp2 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/c11.png")}
                    />
                    <h5 className="offercontent1">
                      Start Section 8 Company/NGO
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp3 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/c11.png")}
                    />
                    <h5 className="offercontent1">
                      <div>Start</div>
                      <div>Trust</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp4 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/proicon4.png")}
                    />
                    <h5 className="offercontent1">
                      <div>Start</div>
                      <div>Society</div>
                    </h5>
                  </span>
                </div>
              </div>
            </div>
            <div className="row customers3 mobilerow1" >
              <div className="col-md-3 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/proicon6.png")}
                    />
                    <h5 className="offercontent1">Start Nidhi Company</h5>
                  </span>
                </div>
              </div>
             

              <div className="col-md-3 col-sm-3 mb-3 imagecorp imgcorp2 text-center" style={{ marginLeft:"50px"}}>
                <div
                  className="hexagon"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/proicon5.png")}
                    />
                    <h5 className="offercontent1">Start Producer Company</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="productssec mobile" style={{ padding: "20px 80px" }}>
          <div>
            <h2 className="text-center heading">Offerings</h2>
            <div className="row customers2 mobilerow9">
              <div className="col-md-3 col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={this.show.bind(this)}
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>Private Limited Company</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div
                className="col-md-3 col-sm-3 mb-3 imagecorp imgcorp2 text-center"
                onClick={this.show.bind(this)}
              >
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>Public Limited Company</div>
                    </h5>
                  </span>{" "}
                </div>
              </div>
              </div>
              <div className="row customers2 mobilerow9">
              <div className="col-md-3 col-sm-3 mb-3 col-5 imagecorp imgcorp3 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>One Person Company</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-lg-3 col-sm-3 mb-3 col-5 imagecorp imgcorp4 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent">
                      <div>Start</div>
                      <div>Limited Liability Partnership</div>
                    </h5>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="row customers2 mobilerow9">
              <div className="col-lg-3 col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent1">
                      <div>Start</div>
                      <div>Partnership</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-lg-3 col-sm-3 mb-3 col-5 imagecorp imgcorp2 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent1">
                      Start Section 8 Company/NGO
                    </h5>
                  </span>
                </div>
              </div>
              </div>
              <div className="row customers2 mobilerow9">
              <div className="col-lg-3 col-sm-3 mb-3 col-5 imagecorp imgcorp3 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent1">
                      <div>Start</div>
                      <div>Trust</div>
                    </h5>
                  </span>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 mb-3 col-5 imagecorp imgcorp4 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent1">
                      <div>Start</div>
                      <div>Society</div>
                    </h5>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="row customers3 mobilerow9" >
              <div className="col-md-3 col-sm-3 mb-3 imagecorp col-5 imgcorp1 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent1">Start Nidhi Company</h5>
                  </span>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 mb-3 imagecorp col-5 imgcorp2 text-center">
                <div
                  className="hexagon2"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>
                    <img
                      className="pin"
                      src={require("../../../images/pin.png")}
                    />
                    <h5 className="offercontent1">Start Producer Company</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
       

        {/*<!--HOW IT WORKS-->*/}
        <HowItWorks />

        <div className="row">
          <div className="col-lg-12  link2">
            <Link to="../products/incorporate+/pricing">
              <h2
                className="headingpricing"
                style={{
                  color: "white",
                  fontSize: "30px",
                  
                }}
              >
                Pricing
              </h2>
            </Link>
          </div>
        </div>
        <WhyChoose url="incorporate+" />
      
        <Footer />
     
      </div>
    );
  }
}
