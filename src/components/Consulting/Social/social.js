import React, { Component } from "react";
import "./social.css";
import { Link } from "react-router-dom";
import ConsultingNavbar from "../../ConsultingNavbar/consultingnavbar";
import WhyChoose from "../../WhyChoose/whychoose";
import Footer from "../../Footer/footer";
import HowItWorksconsult from "../HowItWorksconsult/howitworksconsult";
import ConsultingLgs from "../ConsultingLgs";
import $ from "jquery";
import Rodal from "rodal";
import FaqFilters from "../../Faq/FaqFilters";
import "rodal/lib/rodal.css";

export default class Social extends Component {
  // include styles

  constructor() {
    super();
    this.handleLine = this.handleLine.bind(this);
  }
  componentDidMount() {
    this.handleLine();
  }
  handleLine() {
    const c1 = this.refs.c1;
    const c2 = this.refs.c2;
    const c3 = this.refs.c3;
    const c4 = this.refs.c4;
    const c5 = this.refs.c5;
    const c6 = this.refs.c6;
    const c7 = this.refs.c7;
    const c8 = this.refs.c8;
    const c9 = this.refs.c9;
    const c10 = this.refs.c10;
    const c11 = this.refs.c11;
    const c12 = this.refs.c12;

    const d1 = this.refs.d1;
    const d2 = this.refs.d2;
    const d3 = this.refs.d3;
    const d4 = this.refs.d4;
    const d5 = this.refs.d5;
    const d6 = this.refs.d6;
    const d7 = this.refs.d7;
    const d8 = this.refs.d8;
    const d9 = this.refs.d9;
    const d10 = this.refs.d10;
    const d11 = this.refs.d11;
    const d12 = this.refs.d12;

    $(function() {
      $("#c1,#d1").hover(
        function() {
          $("#d1").css("height", "80px");
          $("#d1").css("overflow", "unset");
          $("#d1-arrow").css({
            "margin-top": "-10px",
            left: "6%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d1").css("height", "0px");
          $("#d1-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d1").css("overflow", "hidden");
        }
      );
    });

    $(function() {
      $("#c2,#d2").hover(
        function() {
          $("#d2").css("height", "80px");
          $("#d2").css("overflow", "unset");
          $("#d2-arrow").css({
            "margin-top": "-10px",
            left: "30%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d2").css("height", "0px");
          $("#d2-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d2").css("overflow", "hidden");
        }
      );
    });
    $(function() {
      $("#c3,#d3").hover(
        function() {
          $("#d3").css("height", "80px");
          $("#d3").css("overflow", "unset");
          $("#d3-arrow").css({
            "margin-top": "-10px",
            left: "48%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d3").css("height", "0px");
          $("#d3-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d3").css("overflow", "hidden");
        }
      );
    });
    ``;
    $(function() {
      $("#c4,#d4").hover(
        function() {
          $("#d4").css("height", "80px");
          $("#d4").css("overflow", "unset");
          $("#d4-arrow").css({
            "margin-top": "-10px",
            left: "66%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d4").css("height", "0px");
          $("#d4-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d4").css("overflow", "hidden");
        }
      );
    });
    ``;
    $(function() {
      $("#c5,#d5").hover(
        function() {
          $("#d5").css("height", "80px");
          $("#d5").css("overflow", "unset");
          $("#d5-arrow").css({
            "margin-top": "-10px",
            left: "85%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d5").css("height", "0px");
          $("#d5-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d5").css("overflow", "hidden");
        }
      );
    });
    ``;
    $(function() {
      $("#c6,#d6").hover(
        function() {
          $("#d6").css("height", "80px");
          $("#d6").css("overflow", "unset");
          $("#d6-arrow").css({
            "margin-top": "-10px",
            left: "16%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d6").css("height", "0px");
          $("#d6-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d6").css("overflow", "hidden");
        }
      );
    });
    ``;
    $(function() {
      $("#c7,#d7").hover(
        function() {
          $("#d7").css("height", "80px");
          $("#d7").css("overflow", "unset");
          $("#d7-arrow").css({
            "margin-top": "-10px",
            left: "30%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d7").css("height", "0px");
          $("#d7-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d7").css("overflow", "hidden");
        }
      );
    });
    ``;
    $(function() {
      $("#c8,#d8").hover(
        function() {
          $("#d8").css("height", "80px");
          $("#d8").css("overflow", "unset");
          $("#d8-arrow").css({
            "margin-top": "-10px",
            left: "48%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d8").css("height", "0px");
          $("#d8-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d8").css("overflow", "hidden");
        }
      );
    });
    $(function() {
      $("#c9,#d9").hover(
        function() {
          $("#d9").css("height", "80px");
          $("#d9").css("overflow", "unset");
          $("#d9-arrow").css({
            "margin-top": "-10px",
            left: "66%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d9").css("height", "0px");
          $("#d9-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d9").css("overflow", "hidden");
        }
      );
    });
    $(function() {
      $("#c10,#d10").hover(
        function() {
          $("#d10").css("height", "80px");
          $("#d10").css("overflow", "unset");
          $("#d10-arrow").css({
            "margin-top": "-10px",
            left: "84%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d10").css("height", "0px");
          $("#d10-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d10").css("overflow", "hidden");
        }
      );
    });
    $(function() {
      $("#c11,#d11").hover(
        function() {
          $("#d11").css("height", "80px");
          $("#d11").css("overflow", "unset");
          $("#d11-arrow").css({
            "margin-top": "-10px",
            left: "65%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d11").css("height", "0px");
          $("#d11-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d11").css("overflow", "hidden");
        }
      );
    });
  }
  render() {
    var show = { display: "block" };
    var hide = { display: "none" };
    var active = {
      backgroundColor: "rgb(18, 171, 209)",
      color: "white",
      padding: "7px",
      borderRadius: "5px"
    };
    var deactive = {
      backgroundColor: "white",
      color: "grey",
      padding: "7px",
      borderRadius: "5px"
    };

    return (
      <div className="mainbody">
        <ConsultingNavbar subhead="SOCIAL" url="social" />
        <div className="carousel slide" data-ride="carousel" id="1">
          <div className="carousel-inner">
            <div className="carousel-item active social">
              <div className="container textblock1 ">
                <div className="row mainrow big">
                  <div className="col-lg-3" />
                  <div className="col-lg-6">
                    <Link to="/consulting/social/request-a-proposal">
                      <button type="button" className="button13">
                        <h3 className="heading15">
                          Post a Job and Get a Proposal
                        </h3>
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-3" />
                </div>
                <div className="row mainrow mobile">
                  <div className="col-lg-3 col-1" />
                  <div className="col-lg-6 col-7">
                    <Link to="/consulting/social/request-a-proposal">
                      <button type="button" className="button13">
                        <h3 className="heading15">
                          Post a Job and Get a Proposal
                        </h3>
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <HowItWorksconsult />

        <div className="row big" id="whatweoffer">
          <div className="container text-center">
            <h1 style={{ textAlign: "center" }} className="heading">
              Popular Areas
            </h1>
            <div className="row circle-row1 mobilerow6">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c1">
                <img src={require("../../../images/so1.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Formation/<br />Setup{" "}
                  </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c2">
                <img src={require("../../../images/so2.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  <h5 className="textsocial"> Managing Compliances</h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c3">
                <img src={require("../../../images/so3.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  <h5 className="textsocial">
                    {" "}
                    Securing Intellectual Properties{" "}
                  </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c4">
                <img src={require("../../../images/so4.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Audit and Assurance <br />Services{" "}
                  </h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c5">
                <img src={require("../../../images/so6.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Capacity<br />Building{" "}
                  </h5>
                </a>
              </div>
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}
            <div className="row" id="d1">
            <div id="d1-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d2">
            <div id="d2-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d3">
            <div id="d3-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d4">
            <div id="d4-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d5">
            <div id="d5-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}

            <div className="row circle-row1 mobilerow6">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c6">
                <img src={require("../../../images/c3.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="c5"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial"> Goods and Services Tax </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c7">
                <img src={require("../../../images/so7.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    Certification under Sec 12A, 80G & FCRA
                  </h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c8">
                <img src={require("../../../images/so8.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Solutions Design & Implementation
                  </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c9">
                <img src={require("../../../images/so9.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial"> Grants and CSR Management</h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3" id="c10">
                <img src={require("../../../images/so10.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Impact <br /> Assessment
                  </h5>
                </a>
              </div>
            </div>

            {/* droppdown scetions----------------------------------------------------------------------------------------------------------*/}
            <div className="row" id="d6">
            <div id="d6-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="row" id="d7">
            <div id="d7-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d8">
            <div id="d8-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d9">
            <div id="d9-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d10">
            <div id="d10-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/social/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>

            {/* dropdown sections----------------------------------------------------------------------------------------------------------------------*/}
          </div>
        </div>
        <div className="row mobile" id="whatweoffer">
          <div className="container text-center">
            <h1 style={{ textAlign: "center" }} className="heading">
              Popular Areas
            </h1>
            <div className="row circle-row1 mobilerow10">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so1.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Formation/<br />Setup{" "}
                  </h5>
                </a>
                </Link>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so2.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial"> Managing Compliances</h5>
                </a>
                </Link>
              </div>
            </div>
            <div className="row circle-row1 mobilerow10">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so3.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Securing Intellectual Properties{" "}
                  </h5>
                </a>
                </Link>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so4.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Audit and Assurance <br />Services{" "}
                  </h5>
                </a>
                </Link>
              </div>
              
            </div>
            <div className="row circle-row1 mobilerow10">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so6.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Capacity<br />Building{" "}
                  </h5>
                </a>
                </Link>
              </div>

              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/c3.png")} />

                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial"> Goods and Services Tax </h5>
                </a>
                </Link>
              </div>
            </div>
            <div className="row circle-row1 mobilerow10">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
               <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so7.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    Certification under Sec 12A, 80G & FCRA
                  </h5>
                </a>
                </Link>
              </div>
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
                <img src={require("../../../images/so8.png")} />
                 <Link to="/consulting/social/request-a-proposal">
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                  
                    {" "}
                    Solutions Design & Implementation
                  </h5>
                </a>
                </Link>
              </div>
            </div>

            <div className="row circle-row1 mobilerow10">
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
               <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so9.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial"> Grants and CSR Management</h5>
                </a>
                </Link>
              </div>
              <div className="col-md-2 boxsocial col-5 col-sm-2 mb-3">
              <Link to="/consulting/social/request-a-proposal">
                <img src={require("../../../images/so10.png")} />
                <a
                  className="nav-link circle2 "
                  href="javascript:void(0)"
                  id="product-toggle"
                  role="button"
                  data-toggle="dropdown"
                  style={{
                    padding: "8px 0px"
                  }}
                >
                  {" "}
                  <h5 className="textsocial">
                    {" "}
                    Impact <br /> Assessment
                  </h5>
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <WhyChoose url="social" />

        <Footer />
      </div>
    );
  }
}
