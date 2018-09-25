import React, { Component } from "react";
import "./startup.css";
import ConsultingNavbar from "../../ConsultingNavbar/consultingnavbar";
import WhyChoose from "../../WhyChoose/whychoose";
import Footer from "../../Footer/footer";
import Faq from "../../Faq/Faq";
import ConsultingLgs from "../ConsultingLgs";
import HowItWorksconsult from "../HowItWorksconsult/howitworksconsult";
import { Link } from "react-router-dom";
import Rodal from "rodal";
import FaqFilters from "../../Faq/FaqFilters";
import "rodal/lib/rodal.css";
import $ from "jquery";
export default class Startup extends Component {
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
    const c13 = this.refs.c13;

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
    const d13 = this.refs.d13;

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
            left: "31%",
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
            left: "49%",
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
            left: "65%",
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
            left: "29%",
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
            left: "42%",
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
            left: "65%",
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
            left: "85%",
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
            left: "28%",
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
    $(function() {
      $("#c12,#d12").hover(
        function() {
          $("#d12").css("height", "80px");
          $("#d12").css("overflow", "unset");
          $("#d12-arrow").css({
            "margin-top": "-10px",
            left: "50%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d12").css("height", "0px");
          $("#d12-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d12").css("overflow", "hidden");
        }
      );
    });
    $(function() {
      $("#c13,#d13").hover(
        function() {
          $("#d13").css("height", "80px");
          $("#d13").css("overflow", "unset");
          $("#d13-arrow").css({
            "margin-top": "-10px",
            left: "70%",
            opacity: "1"
          });
        },
        function() {
          // on mouseout, reset the background colour
          $("#d13").css("height", "0px");
          $("#d13-arrow").css({ "margin-top": "0px", opacity: "0" });
          $("#d13").css("overflow", "hidden");
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
        <ConsultingNavbar subhead="STARTUP" url="startup" />
        <div className="carousel slide" data-ride="carousel" id="1">
          <div className="carousel-inner">
            <div className="carousel-item active startup">
              <div className="container textblock1">
                <div className="row mainrow big">
                  <div className="col-lg-3 firstdiv" />
                  <div className="col-lg-6">
                    <Link to="/consulting/startup/request-a-proposal">
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
                  <div className="col-lg-3 col-1 firstdiv" />
                  <div className="col-lg-6 col-7">
                    <Link to="/consulting/startup/request-a-proposal">
                      <button type="button" className="button13">
                        <h3 className="heading15">
                          Post a Job and Get a Proposal
                        </h3>
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-3" />
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
              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c1">
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
                  <h5 className="textsocial">
                    {" "}
                    Formation/<br />Setup{" "}
                  </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c2">
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
                  <h5 className="textsocial"> Managing Compliances</h5>{" "}
                </a>
              </div>

              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c3">
                <img src={require("../../../images/c7.png")} />
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
                  <h5 className="textsocial"> Commercial Contracts </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c4">
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
                    Security Intellectual Properties <br />Services{" "}
                  </h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c5">
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
                  <h5 className="textsocial"> Audit and Assurance Services </h5>
                </a>
              </div>
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}
            <div className="row" id="d1">
            <div id="d1-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                  <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}

            <div className="row circle-row1 mobilerow6">
              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c6">
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
                  <h5 className="textsocial"> Goods and Services Tax </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c7">
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
                  <h5 className="textsocial">
                    Investment or Funding transaction advisory
                  </h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c8">
                <img src={require("../../../images/c9.png")} />
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
                    Shifting Headquarters Overseas
                  </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c9">
                <img src={require("../../../images/st2.png")} />
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
                    International Presence Strategy
                  </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial col-sm-2 mb-3" id="c10">
                <img src={require("../../../images/st4.png")} />
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
                    Information System for Management
                  </h5>
                </a>
              </div>
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}
            <div className="row" id="d6">
            <div id="d6-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
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
                <Link to="/consulting/startup/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}

            <div className="row circle-row1 mobilerow1">
              <div className="col-lg-2 ">
                <h5 className="textsocial" />
              </div>
              <div className="col-md-2 boxsocial1 col-sm-2 mb-3" id="c11">
                <img src={require("../../../images/st3.png")} />
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
                  <h5 className="textsocial"> Business Process Engineering </h5>
                </a>
              </div>

              <div className="col-md-2 boxsocial1 col-sm-2 mb-3" id="c12">
                <img src={require("../../../images/proicon4.png")} />
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
                    Designing Equity Incentive Plans for Employees
                  </h5>
                </a>
              </div>
              <div className="col-md-2 boxsocial1 col-sm-2 mb-3" id="c13">
                <img src={require("../../../images/st3.png")} />
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
                  <h5 className="textsocial"> Business Model Advisory</h5>
                </a>
              </div>

           
            </div>
            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}
            <div className="row" id="d11">
            <div id="d11-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="/consulting/startup/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d12">
            <div id="d12-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="/consulting/startup/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="row" id="d13">
            <div id="d13-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="/consulting/startup/request-a-proposal">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Get Free Proposal</h4>
                    </button>
                  </Link>
                </h4>
              </div>
            </div>

            {/*dropdown -----------------------------------------------------------------------------------------------------------sections*/}
          </div>
        </div>

        <div className="row mobile" id="whatweoffer">
          <div className="container text-center">
            <h1
              style={{ marginBottom: "170 px", textAlign: "center" }}
              className="heading"
            >
              Popular Areas
            </h1>
            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/so1.png")} />

                <h5 className="textsocial">
                  {" "}
                  Formation/<br />Setup{" "}
                </h5>
                </Link>
              </div>

              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/so2.png")} />
                <h5 className="textsocial"> Managing Compliances</h5>
                </Link>
              </div>
            </div>
            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/c7.png")} />
                <h5 className="textsocial"> Commercial Contracts </h5>
                </Link>
              </div>

              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/so4.png")} />
                <h5 className="textsocial">
                  {" "}
                  Security Intellectual Properties <br />Services{" "}
                </h5>
                </Link>
              </div>
            </div>
            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/so3.png")} />

                <h5 className="textsocial"> Audit and Assurance Services </h5>
                </Link>
              </div>

              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/so6.png")} />

                <h5 className="textsocial"> Goods and Services Tax </h5>
                </Link>
              </div>
              
            </div>
            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/so9.png")} />
                <h5 className="textsocial">
                  Investment or Funding transaction advisory
                </h5>
                </Link>
              </div>
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/c9.png")} />
                <h5 className="textsocial"> Shifting Headquarters Overseas</h5>
                </Link>
              </div>
            </div>
            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/st2.png")} />
                <h5 className="textsocial">International Presence Strategy</h5>
                </Link>
              </div>

              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/st4.png")} />
                <h5 className="textsocial">
                  {" "}
                  Information System for Management
                </h5>
                </Link>
              </div>
            </div>

            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/st3.png")} />
                <h5 className="textsocial"> Business Process Engineering </h5>
                </Link>
              </div>

              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/proicon4.png")} />
                <h5 className="textsocial">
                  Designing Equity Incentive Plans for Employees
                </h5>
                </Link>
              </div>
            </div>
            <div className="row  mobilerow8">
              <div className="col-5 boxsocial col-sm-2 mb-3">
              <Link to="/consulting/startup/request-a-proposal">
                <img src={require("../../../images/st3.png")} />
                <h5 className="textsocial"> Business Model Advisory</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <WhyChoose url="startup" />

        <Footer />
      </div>
    );
  }
}
