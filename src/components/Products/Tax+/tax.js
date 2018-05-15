import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./tax.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import HowItWorks from "../HowItWorks/howitworks";
import WhyChoose from "../../WhyChoose/whychoose";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Testimonials from '../../Testimonials/testimonials';

export default class Tax extends Component {
  render() {
    return (
      <div className="mainbody">
        <ProductNavbar subhead="TAX+" url="tax+" priceurl="../products/tax+/pricing" />
        <header>
          <div className="carousel slide" data-ride="carousel" id="1">
            <div className="carousel-inner header">
              <div className="carousel-item car1 tax active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="col-lg-8" />
                    <div className="col-lg-offset-8 col-lg-4 dialogue1">
                      <ProductLGS product="Tax+" productId="3" price="Rs 2,999" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/*<!--offering-->*/}
        <div className="productssec big" style={{ padding: "20px 0px" }}>
          <h2 className="text-center heading">Offerings</h2>
          <div className="row customers3 mobilerow">
            <div className="col-md-2 col-sm-4 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/c3.png")}
                  />
                  <h5 className="offercontent1">
                    <div>GST</div>
                    <div>Registration</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/c3.png")}
                  />
                  <h5 className="offercontent1">
                    <div>GST</div>
                    <div>Migration</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/c3.png")}
                  />
                  <h5 className="offercontent1">
                    <div>GST</div>
                    <div>Compliance</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
          <div className="row customers12 mobilerow">
            <div className="col-md-2 col-sm-6 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon8.png")}
                  />
                  <h5 className="offercontent1">
                    <div>TDS</div>
                    <div>Compliance</div>
                  </h5>
                </span>
              </div>
            </div>
           

            <div className="col-md-2 col-sm-6 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/c8.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Income Tax</div>
                    <div>Compliance</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="productssec mobile" style={{ padding: "20px 80px" }}>
          <h2 className="text-center heading">Offerings</h2>
          <div className="row  mobilerow9">
            <div className=" col-sm-4 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>GST</div>
                    <div>Registration</div>
                  </h5>
                </span>
              </div>
            </div>
           


            <div className=" col-sm-4 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>GST</div>
                    <div>Migration</div>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row  mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>GST</div>
                    <div>Compliance</div>
                  </h5>
                </span>
              </div>
            </div>
         
         
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>TDS</div>
                    <div>Compliance</div>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row  mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Income Tax</div>
                    <div>Compliance</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
       
        <HowItWorks />

        <div className="row">
          <div className="col-lg-12  link2">
            <Link to="/products/tax+/pricing">
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
        <WhyChoose url="tax+" />
      
        <Footer />
      </div>
    );
  }
}
