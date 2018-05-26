import React, { Component } from 'react';
import './startup.css';
import ConsultingNavbar from '../../ConsultingNavbar/consultingnavbar';
import WhyChoose from '../../WhyChoose/whychoose';
import Footer from '../../Footer/footer';
import Faq from '../../Faq/Faq';
import ConsultingLgs from '../ConsultingLgs';
import HowItWorksconsult from "../HowItWorksconsult/howitworksconsult";
import{Link} from 'react-router-dom';
import Rodal from 'rodal';
import FaqFilters from '../../Faq/FaqFilters';
import 'rodal/lib/rodal.css'

export default class Startup extends Component  {

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
      <ConsultingNavbar
      subhead = "STARTUP"
      url = "startup" />
     <div className="carousel slide" data-ride="carousel" id="1">
     <div className="carousel-inner">

       <div className="carousel-item active startup" >
         <div className="container textblock1">
         <div className="row mainrow big">
         <div className="col-lg-3 firstdiv"></div>
         <div className="col-lg-6"><Link to="/consulting/startup/request-a-proposal"><button type="button" className="button13"><h3 className="heading15">Post a Job and Get a Proposal</h3></button></Link></div>
         <div className="col-lg-3"></div>
         </div>
         <div className="row mainrow mobile">
         <div className="col-lg-3 col-1 firstdiv"></div>
         <div className="col-lg-6 col-7"><Link to="/consulting/startup/request-a-proposal"><button type="button" className="button13"><h3 className="heading15">Post a Job and Get a Proposal</h3></button></Link></div>
         <div className="col-lg-3 col-3"></div>
         </div>
         </div>
       </div>
     </div>
   </div>
   <HowItWorksconsult/>

   <div className="row big" id="whatweoffer">
     <div className="container text-center">
       <h1 style={{textAlign:'center'}} className="heading">Popular Areas</h1>
       <div className="row circle-row1 mobilerow6">

         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s1.png")}/>

           <h5 className="textsocial"> Formation/<br/>Setup </h5>
         </div>
        
         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s2.png")}/>
           <h5 className="textsocial"> Managing Compliances</h5>


         </div>

         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s3.png")}/>
           <h5 className="textsocial"> Commercial Contracts </h5>

         </div>

         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s4.png")}/>
           <h5 className="textsocial"> Security Intellectual Properties <br/>Services </h5>

         </div>
         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s5.png")}/>

           <h5 className="textsocial"> Audit and Assurance Services </h5>

         </div>
       </div>

       <div className="row circle-row1 mobilerow6">

         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s5.png")}/>

           <h5 className="textsocial"> Goods and Services Tax </h5>
         </div>

         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s4.png")}/>
           <h5 className="textsocial">Investment or Funding transaction advisory
          </h5>

         </div>
         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s3.png")}/>
           <h5 className="textsocial"> Shifting Headquarters Overseas
          </h5>

         </div>

         <div className="col-md-2 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s2.png")}/>
           <h5 className="textsocial">International Presence Strategy</h5>
         </div>

         <div className="col-md-2 boxsocial col-sm-2 mb-3">
         <img src={require("../../../images/s1.png")}/>
           <h5 className="textsocial"> Information System for Management</h5>
          </div>
        </div>

            <div className="row circle-row1 mobilerow1" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
                 <div className="col-lg-2 ">
            <h5 className="textsocial"></h5>
                             </div>
                     <div className="col-md-2 boxsocial1 col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
                     <img src={require("../../../images/s3.png")}/>
            <h5 className="textsocial"> Business Process Engineering </h5>
         </div>

         <div className="col-md-2 boxsocial1 col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s4.png")}/>
           <h5 className="textsocial">Designing Equity Incentive Plans for Employees
           </h5>

         </div>
         <div className="col-md-2 boxsocial1 col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s2.png")}/>
           <h5 className="textsocial"> Business Model Advisory</h5>

         </div>

         <div className="col-md-2  col-sm-2 mb-3 ">
           <h5 className="textsocial"></h5>

            </div>
          </div>
     </div>
 </div>

 <div className="row mobile" id="whatweoffer">
     <div className="container text-center">
       <h1 style={{marginBottom:'170 px', textAlign:'center'}} className="heading">Popular Areas</h1>
       <div className="row  mobilerow8">

         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s1.png")}/>

           <h5 className="textsocial"> Formation/<br/>Setup </h5>
         </div>
        
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s2.png")}/>
           <h5 className="textsocial"> Managing Compliances</h5>

           </div>
         </div>
         <div className="row  mobilerow8">
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s3.png")}/>
           <h5 className="textsocial"> Commercial Contracts </h5>

         </div>

         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s4.png")}/>
           <h5 className="textsocial"> Security Intellectual Properties <br/>Services </h5>

         </div>
         </div>
         <div className="row  mobilerow8">
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s5.png")}/>

           <h5 className="textsocial"> Audit and Assurance Services </h5>

         </div>
      

      

         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s5.png")}/>

           <h5 className="textsocial"> Goods and Services Tax </h5>
         </div>
         </div>
         <div className="row  mobilerow8">
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s4.png")}/>
           <h5 className="textsocial">Investment or Funding transaction advisory
          </h5>

         </div>
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s3.png")}/>
           <h5 className="textsocial"> Shifting Headquarters Overseas
          </h5>

         </div>
         </div>
         <div className="row  mobilerow8">
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s2.png")}/>
           <h5 className="textsocial">International Presence Strategy</h5>
         </div>

         <div className="col-5 boxsocial col-sm-2 mb-3">
         <img src={require("../../../images/s1.png")}/>
           <h5 className="textsocial"> Information System for Management</h5>
          </div>
        </div>

            <div className="row  mobilerow8" >
               
                     <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
                     <img src={require("../../../images/s3.png")}/>
            <h5 className="textsocial"> Business Process Engineering </h5>
         </div>

         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s4.png")}/>
           <h5 className="textsocial">Designing Equity Incentive Plans for Employees
           </h5>
           </div>
         </div>
         <div className="row  mobilerow8" >
         <div className="col-5 boxsocial col-sm-2 mb-3" data-toggle="modal" data-target="#myModal" onClick={this.show1.bind(this)}>
         <img src={require("../../../images/s2.png")}/>
           <h5 className="textsocial"> Business Model Advisory</h5>

         </div>

         

            </div>
          </div>
     </div>
 
 
 <WhyChoose url = "startup" />

 <Footer />
 <Rodal visible={this.state.visible1} width="270" height="170" animation="flip" onClose={this.hide1.bind(this)}  >
  <div className="modal1">
    <div className="container startupmodal">
    <Link to="consulting/startup/request-a-proposal"><button type="button" className="button15"><h3 className="heading15"> Get a Proposal</h3></button></Link>
      </div>  
    
    </div>











</Rodal>

 </div>


    );
  }
}
