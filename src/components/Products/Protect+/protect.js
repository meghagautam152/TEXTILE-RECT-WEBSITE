import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./protect.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import HowItWorks from "../HowItWorks/howitworks";
import WhyChoose from "../../WhyChoose/whychoose";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Testimonials from '../../Testimonials/testimonials';
import $ from "jquery";
import FaqFilters from '../../Faq/FaqFilters';

export default class Protect extends Component {
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
      $("#d5-arrow").css({'margin-top':'-10px','left':'30%','opacity':'1'});
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
      $("#d6-arrow").css({'margin-top':'-10px','left':'50%','opacity':'1'});
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
      $("#d7-arrow").css({'margin-top':'-10px','left':'70%','opacity':'1'});
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
      $("#d8-arrow").css({'margin-top':'-10px','left':'6%','opacity':'1'});
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
      $("#d9-arrow").css({'margin-top':'-10px','left':'6%','opacity':'1'});
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
      $("#d10-arrow").css({'margin-top':'-10px','left':'6%','opacity':'1'});
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
      $("#d11-arrow").css({'margin-top':'-10px','left':'6%','opacity':'1'});
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
      $("#d1-arrow").css({'margin-top':'-10px','left':'6%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d1").css('height', '0px');
      $("#d1-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d1").css('overflow', 'hidden');
    });
  });

}

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
              <div className="carousel-item car5 protect active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="col-lg-8" />
                    
                    <div className="col-lg-offset-8 col-lg-4 dialogue2">
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
            <div id="c1" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
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
                  <Link to="../../products/protect+/trademark-registration">
                    <div className="offercontent">Trademark<br/>
                    Registration</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c2" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp2 text-center">
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
                  <Link to="../../products/protect+/trademark-renewal">
                    <div className="offercontent">Trademark<br/>
                    Renewal</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c3" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp3 text-center">
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
                  <Link to="../../products/protect+/trademark-objection-reply">
                    <div className="offercontent">Trademark<br/>
                   Objection Reply</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c4" className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp4 text-center">
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
                  <Link to="../../products/protect+/trademark-licensing">
                    <div className="offercontent">Trademark<br/>
                    Licensing</div>
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
              <Link to="../../products/protect+/trademark-registration">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
              <Link to="../../products/protect+/trademark-renewal">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
              <Link to="../../products/protect+/trademark-objection-reply">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
              <Link to="../../products/protect+/trademark-licensing">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
            <div id="c5" className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
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
                  <Link to="../../products/protect+/trademark-transfer">
                    <div className="offercontent1">Trademark
                   Transfer</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c6" className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
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
                  <Link to="../../products/protect+/copyright-registration">
                    <div className="offercontent1">Copyright<br/>
                    Registration</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>

            <div id="c7" className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
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
                  <Link to="../../products/protect+/copyright-objection-reply">
                    <div className="offercontent1">Copyright<br/>
                    Objection Reply</div>
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
              <Link to="../../products/protect+/trademark-transfer">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
              <Link to="../../products/protect+/copyright-registration">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
              <Link to="../../products/protect+/copyright-objection-reply">
                  <button className="btn btn-info button14">
                    <h4 className="heading6">Learn more</h4>
                  </button>
                  
                </Link>
              </h4>
              <h4 className="btn-dropdown">
              <Link to="../../products/protect+">
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
                data-toggle="modal"
                data-target="#myModal"
              >
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/protect+/trademark-registration">
                    <div className="offercontent">Trademark<br/>
                    Registration</div>
                    </Link>
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
                    src={require("../../../images/proicon17.png")}
                  />
                  <h5 className="offercontent">
                    <div className="offercontent">Trademark<br/>
                   Renewal</div>
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
                    src={require("../../../images/proicon16.png")}
                  />
                  <h5 className="offercontent">
                  <Link to="../../products/protect+/trademark-objection-reply">
                    <div className="offercontent">Trademark<br/>
                   Objection Reply</div>
                    </Link>
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
                  <Link to="../../products/protect+/trademark-licensing">
                    <div className="offercontent">Trademark<br/>
                    Licensing</div>
                    </Link>
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
                    src={require("../../../images/proicon15.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/protect+/trademark-transfer">
                    <div className="offercontent1">Trademark
                   Transfer</div>
                    </Link>
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
                    src={require("../../../images/proicon14.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/protect+/copyright-registration">
                    <div className="offercontent1">Copyright<br/>
                    Registration</div>
                    </Link>
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
                    src={require("../../../images/proicon16.png")}
                  />
                  <h5 className="offercontent1">
                  <Link to="../../products/protect+/copyright-objection-reply">
                    <div className="offercontent1">Copyright<br/>
                    Objection Reply</div>
                    </Link>
                  </h5>
                </span>
              </div>
            </div>
            </div>
          </div>
       <FaqFilters/>
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
