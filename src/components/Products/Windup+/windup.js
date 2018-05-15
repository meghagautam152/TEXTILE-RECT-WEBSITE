import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./windup.css";
import ProductNavbar from "../../ProductNavbar/productnavbar";
import WhyChoose from "../../WhyChoose/whychoose";
import HowItWorks from "../HowItWorks/howitworks";
import Footer from "../../Footer/footer";
import ProductLGS from "../product_letsgetstarted";
import Winduplets from "./Winduplets";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'
import Testimonials from '../../Testimonials/testimonials';

export default class Windup extends Component {

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
  visible10: false };
};

show() {
    this.setState({ visible: true });
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
    return (
      <div className="mainbody">
        <ProductNavbar
          subhead="WIND UP+"
          url="windup+"
          priceurl="../products/windup+/pricing"
        />
        <header>
          <div className="carousel slide" data-ride="carousel" id="1">
            <div className="carousel-inner header">
              <div className="carousel-item car1 windup active">
                <div className="container textblock1">
                  <div className="row ">
                    <div className="offset-lg-8 col-lg-4 dialogue1">
                      <Winduplets product="Windup+" productId="5" price="Rs 12,999" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/*<!--offering-->*/}
        <div className="productssec" style={{ padding: "20px 0px" }}>
          <h2 className="text-center heading">Offerings</h2>
          <div className="row customers7 mobilerow">
          <div className="col-md-2"></div>
            <div className="col-md-2 col-sm-3 mb-3 imagecorp imgcorp1 text-center">
              <div
                className="hexagon"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.show1.bind(this)}>
                <span>
                  <img
                    className="pin"
                    src={require("../../../images/icon3.png")}
                  />
                  <h5 className="offercontent">
                    <div>Winding up One Person </div>
                    <div>Company</div>
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
                    src={require("../../../images/proicon3.png")}
                  />
                  <h5 className="offercontent">
                    <div>Winding up Limited </div>
                    <div>Liability </div>
                    <div>Partnership </div>
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
                    src={require("../../../images/proicon2.png")}
                  />
                  <h5 className="offercontent">
                    <div>Winding up Private</div>
                    <div>Limited</div>
                    <div>Company</div>
                  </h5>
                </span>
              </div>
            </div>

           <div classNamme="col-md-2"></div>
          </div>
         
          
           
          </div>
       

        {/*<!--HOW IT WORKS-->*/}
        <HowItWorks />

        <div className="row">
          <div className="col-lg-12  link2">
            <Link to="/products/windup+/pricing">
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
        <WhyChoose url="windup+" />
      
        <Footer />


<Rodal visible={this.state.visible1} width="500" animation="flip" onClose={this.hide1.bind(this)}  >
  <div className="modal1">
    <div class="container">
       <ul class="nav nav-pills">
      <li class="active1"><a data-toggle="tab"  href="#1">Menu1</a></li>
      
      <li ><a data-toggle="tab" href="#2">Menu1</a></li>  </ul>
      
      
      <div class="tab-content">
      
      
       <div id="1" class="tab-pane fade in active">
      <h3 className="modalhead">This is this this t</h3>
      </div>
     
      <div id="2" class="tab-pane fade ">
      <h3 className="modalhead">This is this this this</h3>
      </div>
      </div>
      </div>  
    
    </div>











</Rodal>
<Rodal visible={this.state.visible2}  width="500" animation="flip" onClose={this.hide2.bind(this)}  >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible3} width="500" animation="flip" onClose={this.hide3.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible4} width="500" animation="flip" onClose={this.hide4.bind(this)}  >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible5} width="500" animation="flip"onClose={this.hide5.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible6} width="500"animation="flip" onClose={this.hide6.bind(this)} >
  <div  className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible7} width="500" animation="flip" onClose={this.hide7.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>
</Rodal>
<Rodal visible={this.state.visible8} width="500" animation="flip" onClose={this.hide8.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible9} width="500" animation="flip" onClose={this.hide9.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>

      </div>
    );
  }
}