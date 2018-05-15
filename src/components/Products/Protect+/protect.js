import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./protect.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import HowItWorks from "../HowItWorks/howitworks";
import WhyChoose from "../../WhyChoose/whychoose";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Testimonials from '../../Testimonials/testimonials';


export default class Protect extends Component {
  render() {
    return (
      <div className="mainbody">
        <ProductNavbar
          subhead="PROTECT+"
          url="protect+"
          priceurl="../products/protect+/pricing"
        />
        <header>
          <div className="carousel slide" data-ride="carousel" id="1">
            <div className="carousel-inner header">
              <div className="carousel-item car1 protect active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="col-lg-8" />
                    <div className="col-lg-offset-8 col-lg-4 dialogue1">
                    <ProductLGS product="Protect+" productId="4" price="Rs 2,999" />
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
          <div className="row customers2 mobilerow">
            <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Registration</div>
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
                    src={require("../../../images/proicon17.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Renewal</div>
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
                    src={require("../../../images/proicon16.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Objection Reply</div>
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
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Licensing</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>

          <div className="row customers1 mobilerow">
            <div className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon15.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Trademark</div>
                    <div>Transfer</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon14.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Copyright</div>
                    <div>Registration</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon16.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Copyright</div>
                    <div>Objection Reply</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="productssec mobile" style={{ padding: "20px 80px" }}>
          <h2 className="text-center heading">Offerings</h2>
          <div className="row customers2 mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Registration</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp2 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Renewal</div>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row customers2 mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp3 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Objection Reply</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp4 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                    <div>Trademark</div>
                    <div>Licensing</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
          
          
          <div className="row customers1 mobilerow9">
            <div className=" col-sm-4 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Trademark</div>
                    <div>Transfer</div>
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
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Copyright</div>
                    <div>Registration</div>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row customers1 mobilerow9">
            <div className=" col-sm-4 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Copyright</div>
                    <div>Objection Reply</div>
                  </h5>
                </span>
              </div>
            </div>
            </div>
          </div>
       
        {/*How it works*/}
        <HowItWorks />

        <div className="row">
          <div className="col-lg-12  link2">
            <Link to="/products/protect+/pricing">
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
        <WhyChoose url="protect+" />
       
        <Footer />
      </div>
    );
  }
}
