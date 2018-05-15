import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import './homepage.css';
import LetsGetStarted from '../LetsGetStarted/letsgetstarted';
import Testimonials from '../Testimonials/testimonials';
import Twitter from './Twitter';
import Sectionabout from './sectionabout';
import $ from 'jquery';
import Facebook from './Facebook';
import TraningSection from './TraningSection';
let context = null;
class HomePage extends Component {



  constructor(props){
    super();

    context = this;
    this.state = {filter:"strategicTraning"};
    this.changeFilter =this.changeFilter.bind(this);
  }
  componentDidMount(){
 
  }
  


  changeFilter(filters) {
    debugger;
      this.setState({filter:filters});
     
    
        
    }

  render() {
    
  
    const active = "btn btn-info faqfilterbutton"
    const deactive = "btn btn-warning faqfilterbutton";

    return (
      <div className="mainbody">

      <header>
        <div className="carousel slide banner" data-ride="carousel" id="1">
          <div className="carousel-inner">
            <div className="carousel-item car3 homepage active">
              <div className="container textblock1">
                <div className="row ">
                  <div className="col-md-7 firstcol big">
                    <div className="row iconrow">
                      <div className="col-md-6 banimage">
                        <Link to="/products/incorporate+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require('../../images/N11.png')} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Company Registration</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 banimage">
                        <Link to="/products/protect+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require("../../images/N12.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">IP Protection</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="row iconrow2">
                      <div className="col-md-6 banimage">
                        <Link to="/products/comply+">
                          <div className="row">
                            <div className="col-md-5">
                              <img className="banimg" src={require("../../images/N10.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Annual Filing</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 banimage">
                        <Link to="/products/tax+">
                          <div className="row">
                            <div className="col-md-5">
                              <img src={require("../../images/N14.png")} />
                            </div>
                            <div className="col-md-6">
                              <h6 className="bantext">Tax Compliance</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 firstcol1 mobile">
                    <div className="row iconrowmob">
                      <div className="col-6  banimage">
                        <Link to="/products/incorporate+">
                          <div className="row">
                            <div className=" col-4">
                              <img src={require('../../images/M1.png')} />
                            </div>
                            <div className=" col-5">
                              <h6 className="bantext">Company Registration</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-5 col-2 banimage">
                        <Link to="/products/protect+">
                          <div className="row">
                            <div className="col-4 ">
                              <img src={require("../../images/M2.png")} />
                            </div>
                            <div className=" col-5">
                              <h6 className="bantext">IP Protection</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="row iconrowmob2">
                      <div className=" col-6 banimage">
                        <Link to="/products/comply+">
                          <div className="row">
                            <div className="col-4">
                              <img  src={require("../../images/M3.png")} />
                            </div>
                            <div className="col-5">
                              <h6 className="bantext">Annual Filinggg</h6>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className=" col-5 banimage">
                        <Link to="/products/tax+">
                          <div className="row">
                            <div className="col-4">
                              <img src={require("../../images/M4.png")} />
                            </div>
                            <div className="col-5">
                              <h6 className="bantext">Tax Compliance</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className = "col-md-1">{" "}</div>
                  <LetsGetStarted />
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
      <div className="row tagstrip">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className=" text-center">
        <h3 className="headingtag">Fueling Entrepreneurial Spirit</h3>
        </div>
        </div>
        <div className="col-md-3"></div>
        </div>
       
       <div className="back2">
      <div className="container">
        <div className="row homeone">
          <div className="col-lg-4 text-center ">
          <div className="sec1">
            <h5 className="heading3">Corporate</h5>
            <h6 className="content1">Catering to your business needs with expertise through proactive approach
                    </h6>
                    <Link to="/consulting/corporate/request-a-proposal"><button type="button" style={{marginTop:'26px'}} className="button11"><h6 className=" text-center heading9">Get free proposal</h6></button></Link><br/>
            <Link to="/consulting/corporate"><button type="button"  className="button12"><h6 className=" text-center heading9">Know more</h6></button></Link>
        </div>  </div>

          <div className="col-lg-4 text-center ">
          <div className="sec2">
            <h5 className="heading3">Startup</h5>
            <h6 className="content1">Helping early stage business navigate comfortably through nuances of a startup
            </h6>
            <Link to="/consulting/startup/request-a-proposal"><button type="button" style={{marginTop:'26px'}} className="button11"><h6 className=" text-center heading9">Get free proposal</h6></button></Link><br/>
            <Link to="/consulting/startup">
            <button type="button"  className="button12">
            <h6 className=" text-center heading9 ">Know more</h6></button></Link></div>
          </div>

          <div className="col-lg-4 text-center ">
          <div className="sec2 soc">
            <h5 className="heading3">Social</h5>
            <h6 className="content1">Partners for building sustainable & scalable social enterprises for systemic level impact
            </h6>
            <Link to="/consulting/social/request-a-proposal"><button type="button" style={{marginTop:'26px'}} className="button11"><h6 className=" text-center heading9">Get free proposal</h6></button></Link><br/>
            <Link to="/consulting/social"><button type="button"className="button12">
            <h6 className=" text-center heading9">Know more</h6></button></Link>
          </div>
          </div>
        </div>

      </div>


      <div className="row big ">
        <div className="whatweoffer container ">
          <h1 className="heading1 headhpprod text-center ">Our Products</h1>
          <div className="row text-center " style={{margin:'30px 0px'}}>
        <div className="col-md-2 ">
        <div className="iconborder1">
            <Link to="/products/incorporate+"><div className=" " style={{padding:'21px 8px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro1.png")} /></p>

              </div>
              </div>

            </Link>
            </div>
</div>
<div className="col-md-2 ">
<div className="iconborder1">
            <Link to="/products/comply+"><div  className="" style={{padding:'21px 27px'}}>

              <div className="col-md-2 text-center">
                <p className="text-center iconcontent1"><img src={require("../../images/pro2.png")} /></p>
              </div>
              </div>
            </Link></div>
</div>
<div className="col-md-2 ">
<div className="iconborder1">
            <Link to="/products/tax+"><div className="" style={{padding:'21px 45px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro3.png")} /></p>
              </div>
              </div>
            </Link>
            </div>
</div>
<div className="col-md-2 ">
<div className="iconborder1">
            <Link to="/products/protect+"><div className="" style={{padding:'21px 30px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro4.png")} /></p>
              </div>
              </div>
            </Link>
            </div>
</div>
<div className="col-md-2 ">
<div className="iconborder1">
            <Link to="/products/windup+"><div className="" style={{padding:'21px 26px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro5.png")} /></p>
              </div>
              </div>
            </Link>
            </div>
</div>
          </div>
        </div>
      </div>
      </div>

      <div className="row mobile ">
        <div className="whatweoffer container  " >
          <h1 className="heading1 headhpprod text-center ">Our Products</h1>
          <div className="mobilepro">
          <div className="row   ">
        <div className="col-5 ">
        <div className="iconborder1">
            <Link to="/products/incorporate+"><div className=" " style={{padding:'21px 8px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro1.png")} /></p>

              </div>
              </div>

            </Link>
            </div>
</div>
<div className="col-5 ">
<div className="iconborder1">
            <Link to="/products/comply+"><div  className="" style={{padding:'21px 27px'}}>

              <div className="col-md-2 text-center">
                <p className="text-center iconcontent1"><img src={require("../../images/pro2.png")} /></p>
              </div>
              </div>
            </Link></div>
</div>
</div>
<div className="row  ">
<div className="col-5 ">
<div className="iconborder1">
            <Link to="/products/tax+"><div className="" style={{padding:'21px 45px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro3.png")} /></p>
              </div>
              </div>
            </Link>
            </div>
</div>
<div className="col-5 ">
<div className="iconborder1">
            <Link to="/products/protect+"><div className="" style={{padding:'21px 30px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro4.png")} /></p>
              </div>
              </div>
            </Link>
            </div>
</div>
</div>
<div className="row  ">
<div className="col-5 ">
<div className="iconborder1">
            <Link to="/products/windup+"><div className="" style={{padding:'21px 26px'}}>
              <div className="col-md-2 ">
                <p className="text-center iconcontent1"><img src={require("../../images/pro5.png")} /></p>
              </div>
              </div>
            </Link>
            </div>
</div>
          </div>
          </div>
        </div>
      </div>
      
    
    
     
      
      

<TraningSection/>
<section>
      <div className="oppormain">
        <div className=" oportuneety1 oppobg" >
          <div className="row">
          <div class="offset-lg-3 col-lg-6 col-md-6">
            <div class="container textblock" style={{padding:'60px 60px 60px 60px'}}>
              <h1 className="heading5">Waiting for the right opportunity? Let us help you. #opportuneety</h1>
              <Link to="/platforms"><button type="button" className="button7 text-center">
              <h6 className=" text-center heading6">Know more</h6></button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
</section>
<div>
 
  </div>
<div className="row media1">
  <div className="container">
    <div class="row">
<div className="col-md-3 ">
  <div className="">
  <Twitter/>
  </div>
  </div>
  <div className="col-md-6">
    <div className="mediacontent">Stay updated. Let's engage on Twitter and Facebook

    </div>
    <div className="cloud"><img src={require("../../images/cloud.png")}/></div>
    </div>
    <div className="col-md-3 ">
    <div className="">
      <Facebook/>
      </div>
      </div>
</div>
</div>
</div>

<div className="container text-center ">
<div className="testim">
  <h2 className="testimonials">Testimonials</h2>
<Testimonials/>
</div>
</div>
<Sectionabout/>
<div className="contactsec1 text-center">
<div className="row contactstrips ">
  <div className="col-md-6">
    <h3 className="contactText">Ready to grow your business?</h3>
    <h5 className="subcontacttext">Together we make it happen </h5>
    </div>
    <div className="col-md-6">
      <div className="row">
     <div className="col-md-5"> 
    <Link to="#1"><button type="button" className="button6 ">
    <h6 className=" contactbuttontext ">Let's get started</h6></button></Link>
  </div>
  <div className="col-md-6"> 
    <Link to="/request-a-callback"><button type="button" className="button6 ">
    <h6 className=" contactbuttontext ">Request a callback</h6></button></Link>
  </div>
 
  </div>
 </div>
</div>
</div>
      </div>


    );
  }
}

export default HomePage;
