import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./comply.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import WhyChoose from "../../WhyChoose/whychoose";
import HowItWorks from "../HowItWorks/howitworks";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Rodal from 'rodal';
import FaqFilters from '../../Faq/FaqFilters';
import 'rodal/lib/rodal.css'
import Testimonials from '../../Testimonials/testimonials';

export default class Comply extends Component {

// include styles



  constructor(props) {
    super(props);
    this.state = { visible: false, 
    visible1: false ,
     visible2: false ,
    visible3: false ,
      visible4: false ,
     visible5: false ,
   visible6: false ,
     visible7: false,
     visible8: false,
    visible9: false,
  visible10: false,
  tab1:true,
  tab2:false, 
 };
};

showtab1() {
    this.setState({ tab1: true });
    this.setState({ tab2: false });
}
showtab2() {
  this.setState({ tab1: false });
  this.setState({ tab2: true });
}

hide() {
    this.setState({ visible: false });
}
show1() {
  this.setState({ visible1: true });
}

hide1() {
  this.setState({ visible1: false });
}
show2() {
  this.setState({ visible2: true });
}

hide2() {
  this.setState({ visible2: false });
}
show3() {
  this.setState({ visible3: true });
}

hide3() {
  this.setState({ visible3: false });
}
show4() {
  this.setState({ visible4: true });
}

hide4() {
  this.setState({ visible4: false });
}
show5() {
  this.setState({ visible5: true });
}

hide5() {
  this.setState({ visible5: false });
}
show6() {
  this.setState({ visible6: true });
}

hide6() {
  this.setState({ visible6: false });
}
show7() {
  this.setState({ visible7: true });
}

hide7() {
  this.setState({ visible7: false });
}
show8() {
  this.setState({ visible8: true });
}

hide8() {
  this.setState({ visible8: false });
}
show9() {
  this.setState({ visible9: true });
}

hide9() {
  this.setState({ visible9: false });
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
              <div className="carousel-item car1 comply active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="offset-lg-8 col-lg-4 dialogue1">
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
            <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show1.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                    <div>ROC Compliance of</div>
                    <div>Pvt Ltd</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp2 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show2.bind(this)}>
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent">
                    <div>ROC Compliance of</div>
                    <div>One Person Company</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp3 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show3.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent">
                    <div>ROC Compliance of</div>
                    <div>LLP</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp4 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show4.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                    <div>Compliance Package</div>
                    <div>of Pvt Ltd</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
          <div className="row customers1 mobilerow">
            <div className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show5.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Compliance Package</div>
                    <div> of One Person Company</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp2 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show6.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Compliance Package</div>
                    <div>of LLP</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp3 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show7.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon11.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Appointment</div>
                    <div>of</div>
                    <div>Director</div>
                  </h5>
                </span>
              </div>
            </div>

          
          </div>
          <div className="row customers1 mobilerow">
          <div className="col-md-2 col-sm-3 mb-3 imagecorp2 imgcorp4 text-center">
          <div
            className="hexagon"
            data-toggle="modal"
            data-target="#myModal"
            onClick={this.show8.bind(this)}>
            <span>
              {" "}
              <img
                className="pin"
                src={require("../../../images/proicon12.png")}
              />
              <h5 className="offercontent1">
                <div>Resignation </div>
                <div> of</div>
                <div> Director</div>
              </h5>
            </span>
          </div>
        </div>

            <div className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show9.bind(this)}>
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon10.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Change</div>
                    <div>in</div>
                    <div>Name</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-3 imagecorp2 imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show9.bind(this)} >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon13.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Alteration of</div>
                    <div>Share</div>
                    <div>Capital</div>
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
                onClick={this.show1.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                    <div>ROC Compliance of</div>
                    <div>Pvt Ltd</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp2 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show2.bind(this)}>
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent">
                    <div>ROC Compliance of</div>
                    <div>One Person Company</div>
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
                onClick={this.show3.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent">
                    <div>ROC Compliance of</div>
                    <div>LLP</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp4 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show4.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent">
                    <div>Compliance Package</div>
                    <div>of Pvt Ltd</div>
                  </h5>
                </span>
              </div>
            </div>
          </div>
          
          
          <div className="row customers1 mobilerow9">
            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show5.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Compliance Package</div>
                    <div> of One Person Company</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-3 mb-3 col-5 imagecorp imgcorp2 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show6.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/pin.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Compliance Package</div>
                    <div>of LLP</div>
                  </h5>
                </span>
              </div>
            </div>
            </div>
            <div className="row customers1 mobilerow9">
             
            <div className=" col-sm-3 mb-2 col-5 imagecorp imgcorp3 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show7.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/proicon11.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Appointment</div>
                    <div>of</div>
                    <div>Director</div>
                  </h5>
                </span>
              </div>
            </div>

          
        
          <div className=" col-sm-3 mb-2 col-5 imagecorp imgcorp4 text-center">
          <div
            className="hexagon"
            data-toggle="modal"
            data-target="#myModal"
            onClick={this.show8.bind(this)}>
            <span>
              {" "}
              <img
                className="pin"
                src={require("../../../images/proicon12.png")}
              />
              <h5 className="offercontent1">
                <div>Resignation </div>
                <div> of</div>
                <div> Director</div>
              </h5>
            </span>
          </div>
        </div>
        </div>
        <div className="row customers1 mobilerow9">
            <div className=" col-sm-4 mb-2 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show9.bind(this)}>
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon1.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Change</div>
                    <div>in</div>
                    <div>Name</div>
                  </h5>
                </span>
              </div>
            </div>

            <div className=" col-sm-4 mb-3 col-5 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show9.bind(this)} >
                <span>
                  {" "}
                  <img
                    className="pin"
                    src={require("../../../images/proicon13.png")}
                  />
                  <h5 className="offercontent1">
                    <div>Alteration of</div>
                    <div>Share</div>
                    <div>Capital</div>
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
</Rodal>

      </div>
    );
  }
}
