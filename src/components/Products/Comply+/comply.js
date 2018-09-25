import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./comply.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import WhyChoose from "../../WhyChoose/whychoose";
import HowItWorks from "../HowItWorks/howitworks";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Rodal from 'rodal';
import $ from 'jquery';
import FaqFilters from '../../Faq/FaqFilters';
import 'rodal/lib/rodal.css'
import Testimonials from '../../Testimonials/testimonials';

export default class Comply extends Component {

// include styles



  constructor(props) {
    super();
    this.handleLine = this.handleLine.bind(this);
  }
  componentDidMount(){
    this.handleLine();
  }

  handleLine(){
    
    const c1= this.refs.c1;
    const c2= this.refs.c2;
    const c3= this.refs.c3;
    const c4= this.refs.c4;
    const c5= this.refs.c5;
    const c6= this.refs.c6;
    const c7= this.refs.c7;
    const c8= this.refs.c8;
    const c9= this.refs.c9;
    const c10= this.refs.c10;
    const c11= this.refs.c11;
    const c12= this.refs.c12;
    const d1= this.refs.d1;
  const d2= this.refs.d2;
  const d3= this.refs.d3;
  const d4= this.refs.d4;
  const d5= this.refs.d5;
  const d6= this.refs.d6;
  const d7= this.refs.d7;
  const d8= this.refs.d8;
  const d9= this.refs.d9;
  const d10= this.refs.d10;
  

  $(function(){
    $("#c1,#d1").hover(function(){
      $("#d1").css('height', '130px');
      $("#d1").css('overflow', 'unset');
      $("#d1-arrow").css({'margin-top':'-10px','left':'21%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d1").css('height', '0px');
      $("#d1-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d1").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c2,#d2").hover(function(){
      $("#d2").css('height', '130px');
      $("#d2").css('overflow', 'unset');
      $("#d2-arrow").css({'margin-top':'-10px','left':'40%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d2").css('height', '0px');
      $("#d2-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d2").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c3,#d3").hover(function(){
      $("#d3").css('height', '130px');
      $("#d3").css('overflow', 'unset');
      $("#d3-arrow").css({'margin-top':'-10px','left':'58%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d3").css('height', '0px');
      $("#d3-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d3").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c4,#d4").hover(function(){
      $("#d4").css('height', '130px');
      $("#d4").css('overflow', 'unset');
      $("#d4-arrow").css({'margin-top':'-10px','left':'76%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d4").css('height', '0px');
      $("#d4-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d4").css('overflow', 'hidden');
    });
  });

  $(function(){
    $("#c5,#d5").hover(function(){
      $("#d5").css('height', '130px');
      $("#d5").css('overflow', 'unset');
      $("#d5-arrow").css({'margin-top':'-10px','left':'28%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d5").css('height', '0px');
      $("#d5-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d5").css('overflow', 'hidden');
    });
  });
  
  $(function(){
    $("#c6,#d6").hover(function(){
      $("#d6").css('height', '130px');
      $("#d6").css('overflow', 'unset');
      $("#d6-arrow").css({'margin-top':'-10px','left':'49%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d6").css('height', '0px');
      $("#d6-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d6").css('overflow', 'hidden');
    });
  });

  $(function(){
    $("#c7,#d7").hover(function(){
      $("#d7").css('height', '130px');
      $("#d7").css('overflow', 'unset');
      $("#d7-arrow").css({'margin-top':'-10px','left':'72%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d7").css('height', '0px');
      $("#d7-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d7").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c8,#d8").hover(function(){
      $("#d8").css('height', '130px');
      $("#d8").css('overflow', 'unset');
      $("#d8-arrow").css({'margin-top':'-10px','left':'28%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d8").css('height', '0px');
      $("#d8-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d8").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c9,#d9").hover(function(){
      $("#d9").css('height', '130px');
      $("#d9").css('overflow', 'unset');
      $("#d9-arrow").css({'margin-top':'-10px','left':'49%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d9").css('height', '0px');
      $("#d9-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d9").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c10,#d10").hover(function(){
      $("#d10").css('height', '130px');
      $("#d10").css('overflow', 'unset');
      $("#d10-arrow").css({'margin-top':'-10px','left':'72%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d10").css('height', '0px');
      $("#d10-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d10").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c11,#d11").hover(function(){
      $("#d11").css('height', '130px');
      $("#d11").css('overflow', 'unset');
      $("#d11-arrow").css({'margin-top':'-10px','left':'58%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d11").css('height', '0px');
      $("#d11-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d11").css('overflow', 'hidden');
    });
  });
  $(function(){
    $("#c12,#d1").hover(function(){
      $("#d1").css('height', '130px');
      $("#d1").css('overflow', 'unset');
      $("#d1-arrow").css({'margin-top':'-10px','left':'76%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d1").css('height', '0px');
      $("#d1-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d1").css('overflow', 'hidden');
    });
  });

}

  render() {
   var show={display:"block"};
  var hide={display:"none"};
  var active={backgroundColor:"rgb(18, 171, 209)", color:"white", padding:"7px", borderRadius:"5px"};
    var deactive={backgroundColor:"white", color:"grey", padding:"7px", borderRadius:"5px"};
  
  return (
      <div className="mainbody">
        <ProductNavbar
          subhead="COMPLY+"
          url="comply+"
          priceurl="../products/comply+/pricing"
        />
        <header>
          <div className="carousel slide" data-ride="carousel" id="1">
            <div className="carousel-inner header">
              <div className="carousel-item car5 comply active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="offset-lg-8 col-lg-4 dialogue2">
                      <ProductLGS product="Comply+" productId="2" price="Rs 4,999" />
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
          <div className="row customers11 mobilerow">
            <div id="c1" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/private-limited-company">
                    <div className="offercontent">ROC Compliance <br/>of
                    Pvt Ltd</div></Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c2" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp2 text-center">
              <div
                className="hexagon"
                >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/one-person-company">
                  
                    <div className="offercontent">ROC Compliance <br/>of
                    One Person Company</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c3" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp3 text-center">
              <div
                className="hexagon"
                >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/limited-liability-partnership">
                    <div className="offercontent">ROC Compliance <br/>of
                   LLP</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c4" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp4 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/package-private-limited">
                    <div className="offercontent">Compliance Package
                    of <br/>Pvt Ltd</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>
          </div>
          {/*----------------------------*/}
          <div className="container">
          <div className="row" id="d1">
          <div id="d1-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+/private-limited-company">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Learn more</h4>
                    </button>
                    
                  </Link>
                </h4>
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Let's get started</h4>
                    </button>
                    
                  </Link>
                </h4>
              </div>
              </div>
              </div>
              <div className="container">
          <div className="row" id="d2">
          <div id="d2-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+/one-person-company">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Learn more</h4>
                    </button>
                    
                  </Link>
                </h4>
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Let's get started</h4>
                    </button>
                    
                  </Link>
                </h4>
              </div>
              </div>
              </div>
              <div className="container">
              <div className="row" id="d3">
              <div id="d3-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+/limited-liability-partnership">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Learn more</h4>
                    </button>
                    
                  </Link>
                </h4>
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Let's get started</h4>
                    </button>
                    
                  </Link>
                </h4>
              </div>
              </div>
              </div>
            <div className="container">
              <div className="row" id="d4">
              <div id="d4-arrow" className="arrow-up"></div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+/package-private-limited">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Learn more</h4>
                    </button>
                    
                  </Link>
                </h4>
                <h4 className="btn-dropdown">
                <Link to="../../products/comply+">
                    <button className="btn btn-info button14">
                      <h4 className="heading6">Let's get started</h4>
                    </button>
                    
                  </Link>
                </h4>
              </div>
              </div>
              </div>
            
          
            
             {/*----------------------------*/}
          <div className="row customers02 mobilerow">
          
            <div id="c5" className="col-md-2  imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/package-one-person-company">
                    <div className="offercontent1">Compliance Package
                    of One Person Company</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c6" className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp2 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/package-limited-liability-partnership">
                    <div className="offercontent1">Compliance Package
                    of LLP</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c7" className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp3 text-center">
              <div
                className="hexagon"
              
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon11.png")}
                  />
                  <h5 className="offercontent1">
                   <Link to="../../products/comply+/appointment-of-director">
                    <div className="offercontent1">Appointment
                    of
                    Director</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>
           
          
          </div>

          {/*----------------------------*/}
         

             <div className="container">
            <div className="row" id="d5">
            <div id="d5-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to=" ../../products/comply+/package-one-person-company">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to=" ../products/comply+">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
            <div className="container">
            <div className="row" id="d6">
            <div id="d6-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+/package-limited-liability-partnership">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
          
            <div className="container">
            <div className="row" id="d7">
            <div id="d7-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+/package-private-limited">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
          
            
          
          
             {/*----------------------------*/}
          <div className="row customers02 mobilerow">
          <div  id="c8" className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp4 text-center">
          <div
            className="hexagon"
           >
            <span>
              {" "}
              <img
                className="pin"
                src={require("../../../images/proicon12.png")}
              />
              <h5 className="offercontent1">
              <Link to="../../products/comply+/resignation-of-director">
                <div className="offercontent1">Resignation 
                of
                Director</div>
                </Link>
              </h5>
            </span>
          </div>
        </div>

            <div id="c9" className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
               >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon10.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/change-in-name">
                    <div className="offercontent1">Change <br/> in <br/>Name</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c10" className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon13.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/alteration-of-share-capital">
                    <div className="offercontent1">Alteration of <br/>
                    Share Capital</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>
          </div>
          {/*----------------------------*/}
          <div className="container">
            <div className="row" id="d8">
            <div id="d8-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+/appointment-of-director">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
          <div className="container">
            <div className="row" id="d9">
            <div id="d9-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to=" ../../products/comply+/resignation-of-director ">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to=" ../../products/comply+ ">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
             
            <div className="container">
            <div className="row" id="d10">
            <div id="d10-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+/change-in-name">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
            <div className="container">
            <div className="row" id="d10">
            <div id="d10-arrow" className="arrow-up"></div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+/alteration-of-share-capital">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/comply+">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Let's get started</h4>
                  </button>
                  
                </Link>
              </h4>
            </div>
            </div>
            </div>
          
           
             {/*----------------------------*/}
        </div>
        <div className="productssec mobile" style={{ padding: "20px 80px" }}>
          <h2 className="text-center heading">Offerings</h2>
          <div className="row customers2 mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/private-limited-company">
                    <div className="offercontent">ROC Compliance <br/>of
                    Pvt Ltd</div></Link>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 ">
              <div
                className="hexagon"
               >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/one-person-company">
                  
                  <div className="offercontent">ROC Compliance <br/>of
                  One Person Company</div>
                  </Link>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row customers2 mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp3 text-center">
              <div
                className="hexagon"
                >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/comply+/limited-liability-partnership">
                    <div className="offercontent">ROC Compliance <br/>of
                   LLP</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp4 text-center">
              <div
                className="hexagon"
                >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <Link to="../../products/comply+/package-private-limited">
                    <div className="offercontent">Compliance Package
                    of <br/>Pvt Ltd</div>
                    </Link>
                </span>
              </div>
            </div>
          </div>
          
          
          <div className="row customers1 mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent">
                  <Link to=" ../../products/comply+/package-one-person-company">
                    <div className="offercontent">Compliance Package
                    of One Person Company</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp2 text-center">
              <div
                className="hexagon"
                >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/package-limited-liability-partnership">
                    <div className="offercontent1">Compliance Package
                    of LLP</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row customers1 mobilerow9">
             
            <div className=" col-sm-3 mb-2 col-5 imagecorp imgcorp3 text-center">
              <div
                className="hexagon"
               >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon11.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/appointment-of-director">
                    <div className="offercontent1">Appointment
                    of
                    Director</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

          
        
          <div className=" col-sm-3 mb-2 col-5 imagecorp imgcorp4 text-center">
          <div
            className="hexagon"
            >
            <span>
              {" "}
              <img
                className="pin"
                src={require("../../../images/proicon12.png")}
              />
              <h5 className="offercontent1">
              <Link to=" ../../products/comply+/resignation-of-director ">
                <div className="offercontent1">Resignation 
                of
                Director</div>
                </Link>
              </h5>
            </span>
          </div>
        </div>
        </div>
        <div className="row customers1 mobilerow9">
            <div className=" col-sm-4 mb-2 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon10.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/change-in-name">
                    <div className="offercontent1">Change in Name</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-4 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon13.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/comply+/alteration-of-share-capital">
                    <div className="offercontent1">Alteration of 
                    Share Capital</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <FaqFilters/>

        {/*<!--HOW IT WORKS-->*/}
        <HowItWorks />

       
        <div className="row">
          <div className="col-lg-12  link2">
            <Link to="/products/comply+/pricing">
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
      
        <WhyChoose url="comply+" />
      
        <Footer />

{/*--------------------------------------------------------}
<Rodal visible={this.state.visible1} width="500" height="360" animation="flip" onClose={this.hide1.bind(this)}  >
  <div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>











</Rodal>
<Rodal visible={this.state.visible2}  width="500" animation="flip" onClose={this.hide2.bind(this)}  >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible3} width="500" animation="flip" onClose={this.hide3.bind(this)} >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible4} width="500" animation="flip" onClose={this.hide4.bind(this)}  >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible5} width="500" animation="flip"onClose={this.hide5.bind(this)} >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible6} width="500"animation="flip" onClose={this.hide6.bind(this)} >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible7} width="500" animation="flip" onClose={this.hide7.bind(this)} >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible8} width="500" animation="flip" onClose={this.hide8.bind(this)} >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
</Rodal>
<Rodal visible={this.state.visible9} width="500" animation="flip" onClose={this.hide9.bind(this)} >
<div className="modal1">
    <div className="container">
       <ul className="nav nav-pills">
      <li className="active1"   ><h5 className="modaltab" onClick={this.showtab1.bind(this)} style={this.state.tab1?active:deactive} data-toggle="tab" href="#2">Overview</h5></li>
      
      <li  ><h5 className="modaltab" onClick={this.showtab2.bind(this)} style={this.state.tab2?active:deactive}  data-toggle="tab" href="#2">Documents</h5></li>  </ul>
      
      
      <div className="tab-content">
      
      
       <div id="1" style={this.state.tab1?show:hide}>
      <p className="modalcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     
      <div id="2" style={this.state.tab2?show:hide}>
      
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      <h3 className="modaltext">File 1</h3>
      </div>
      </div>
      </div>  
    
    </div>
              </Rodal>*/}

      </div>
    );
  }
}
