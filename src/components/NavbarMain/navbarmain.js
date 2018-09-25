import React, { Component } from 'react';
import './navbarmain.css';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Topbar from '../Topbar/navbarmain';
import $ from 'jquery';
import BreadCrumbs from '../HomePage/BreadCrumbs';

export default class NavbarMain extends Component {

  constructor(props){

  super();
  this.state = {
    openMenu : false,
    showSideCard:false
    
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
       
       }


      hoverOn(){
this.setState({showSideCard:true});
      }

      hoverOff(){
        this.setState({showSideCard:false});

      }

  toggleMenu(){

    if(this.state.openMenu){
    
      this.setState({openMenu:false});
      
    }
    else{
      this.setState({openMenu:true});
     
    }
  }

  closeMenu(state){

    this.setState({openMenu:state});
    this.toggleMenu();

  }
   
  
  
  render(){
    return(
      <div>
      <div>
       {/*<SideBar closeMenu={this.closeMenu} stateOpen={this.state.openMenu} type="homepage"/>*/}
      <nav className="navbar fixed-top2 navbar-expand-md navbar-light bg-light fixed-top2 show-me">
  <div className="nav-item">
   {/* <h1> <span style={{fontSize:'20px',cursor:'pointer'}} className="menu-icon" onClick={this.toggleMenu} id="menuicon">&#9776;</span></h1>*/}
  </div>
 {/*  <div className="navbar-brand" style={{paddingTop:'16px'}}>
    <Link to = "/"><img style={{paddingLeft:'3px'}} src={require("../../images/logoalpha.png")} /></Link>
    <div><h5 className="subhead" style={{color:'#5c5b5b'}}></h5></div>
  </div> */}
  
  <div className="collapse navbar-collapse" id="main-navbar">
    <div>
      <ul className="navbar-nav ml-auto" id="menu">

        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="product-toggle" role="button" data-toggle="dropdown">Products</a>
          <div className="dropdown-menu dropdown-menu-center dropdown-content" arealabelledby="product-toggle" >

<div className="row"><div className="col-md-6">
                <Link  onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff} className="dropdown-item navmain-item" to = "/products/textile-goods" ><img src={require("../../images/textiles1.png")} style={{marginRight:'8px'}} />Textile Goods </Link>
                <Link onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff} className="dropdown-item navmain-item" to ="/products/home-furnishing" ><img src={require("../../images/textile2.png")}  style={{marginRight:'10px'}} />Home Furnishing</Link>
                <Link onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff} className="dropdown-item navmain-item" to ="/products/apparel-and-fashion" ><img src={require("../../images/textiles3.png")}  style={{marginRight:'10px'}} />Apparel & Fashion</Link>
                <Link onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff} className="dropdown-item navmain-item" to ="/products/equipments-and-tools"><img src={require("../../images/textiles4.png")}  style={{marginRight:'10px'}} />Equipments and tools</Link>
               
               </div>
               <div className="col-md-6">

                 <div className="side-card-main side-card">
          <div className="side-card-image">
          <img src={require("../../images/aboutus1.png")} /></div>
          <h2 className="side-card-h1">Easy & efficient way to source goods as per your need</h2>
         <span> <Link to="/post-service-requirement"><button type="button" className="button24 text-center">
              <h6 className=" text-center heading24">Get free Quotation</h6></button></Link>
              </span>
</div></div></div>
                </div>

                 {/*  <div className={this.state.showSideCard ? "dropdown-menu dropdown-menu-center dropdown-content side-card-main side-card" : "dropdown-menu dropdown-menu-center dropdown-content side-card-main side-card-hidden"}> */}
               
               
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="consulting-toggle" role="button" data-toggle="dropdown">Services</a>
          <div className="dropdown-menu dropdown-menu-left dropdown-content" arealabelledby="consulting-toggle">
          <div className="row"> 
          <div className="col-md-6"> 
          <Link className="dropdown-item navmain-item" to="/services/custom-clearing"><img src={require("../../images/custom.png")} style={{marginRight:'10px'}}/> Custom Clearing</Link>
            <Link className="dropdown-item navmain-item" to="/services/freight-forwarding"><img src={require("../../images/freight.png")} style={{marginRight:'10px'}}/>Freight and forwarding</Link>
            <Link className="dropdown-item navmain-item" to="/services/registration-and-licensing"><img src={require("../../images/registration.png")} style={{marginRight:'10px'}}/>Registration and licensing</Link>
            </div>
            <div className="col-md-6"> 
            <div className="side-card-main side-card">
          <div className="side-card-image">
          <img src={require("../../images/aboutus1.png")} /></div>
          <h2 className="side-card-h1">Hire an expert for your business needs</h2>
         <span> <Link to="/post-service-requirement"><button type="button" className="button24 text-center">
              <h6 className=" text-center heading24">Get free Quotation</h6></button></Link>
              </span>
</div>
            </div>
            </div>
          </div>
        </li>
         
        
         
       
      { /* <!--<li className="nav-item ">
                          <a className="nav-link dropdown-toggle" href="productmarket.html" id="innovation-toggle" data-toggle="dropdown"  >Training</a>
                          <!--<div className="dropdown-menu dropdown-menu-right" arealabelledby="training-toggle">
                              <a className="dropdown-item" href="productmarket.html" style="color:#6b6b6d; font-size:13px;">Product Market Fit</a>
                              <a className="dropdown-item" href="businessmodelling.html" style="color:#6b6b6d; font-size:13px;">Business Modelling</a>
                              <a className="dropdown-item" href="growth.html" style="color:#6b6b6d; font-size:13px;">Growth</a>
                              <a className="dropdown-item" href="impactdesign.html" style="color:#6b6b6d; font-size:13px;">Impact Design</a>
                          </div>
                      </li>-->*/}
               

      {/*} <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="consulting-toggle" role="button" data-toggle="dropdown">Trainings</a>
       <div className="dropdown-menu dropdown-menu-left dropdown-content" arealabelledby="consulting-toggle">
         <Link className="dropdown-item navmain-item" to="/trainings/functional"><img src={require("../../images/N17.png")} style={{marginRight:'10px'}}/>Functional Training<h5 className="subtitles">Develop comprehensive understanding about running a business</h5></Link>
         <Link className="dropdown-item navmain-item" to="/trainings/strategic"><img src={require("../../images/N16.png")} style={{marginRight:'10px'}}/>Strategic Training<h5 className="subtitles">Unleash strategies to accelerate from idea to ideal</h5></Link>
         

       </div>
       </li>
       <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="consulting-toggle" role="button" data-toggle="dropdown">Platforms</a>
       <div className="dropdown-menu dropdown-menu-left dropdown-content" arealabelledby="consulting-toggle">
         <Link className="dropdown-item navmain-item" to="/trainings/functional"><img src={require("../../images/N18.png")} style={{marginRight:'10px'}}/>Opportuneety<h5 className="subtitles">Your go to place to explore opportunities</h5></Link>
         
         

       </div>
                    </li>*/}

      
        <li className="nav-item">
       
        </li>
      </ul>
    </div>

  </div>
         

  
{/*
      
   <ul className="navbar-nav ml-auto mobile-menu-icon" id="menu">
   
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="product-toggle" role="button" data-toggle="dropdown"><img className="options" src={require("../../images/options.jpg")}/></a>
          <div className="dropdown-menu dropdown-menu-right optionsdropdown dropdown-content" arealabelledby="product-toggle" >
                 <h3 className="headitem">Trainings</h3>
                 <Link className="dropdown-item navmain-item" to="/trainings/functional" target="_blank"><img src={require("../../images/N17.png")} style={{marginRight:'10px'}}/>Functional Training<h5 className="subtitles">Develop comprehensive understanding <br/> about running a business</h5></Link>
         <Link className="dropdown-item navmain-item" to="/trainings/strategic" target="_blank"><img src={require("../../images/N16.png")} style={{marginRight:'10px'}}/>Strategic Training<h5 className="subtitles">Unleash strategies to accelerate <br/>from idea to ideal</h5></Link>
                <h3 className="headitem">Platforms</h3>
                <Link className="dropdown-item navmain-item" to="/platforms" target="_blank"><img src={require("../../images/N18.png")} style={{marginRight:'10px'}}/>Opportuneety<h5 className="subtitles">Your go to place to <br/>explore opportunities</h5></Link>
                </div>
        </li>
    
</ul>
*/}
</nav>
{this.props.para=="homepage" ? "" : <BreadCrumbs/>}

<input type="search" placeholder="Search......" name="search" className="mobile-search" onkeyup="buttonUp();" required/>

</div>
<div className="Searchbarr">
<Topbar />
</div>
</div>
    );
  }
}
