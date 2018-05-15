import React, { Component } from 'react';
import './navbarmain.css';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import $ from 'jquery';

export default class NavbarMain extends Component {

  constructor(props){

  super();
  this.state = {
    openMenu : false
    
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.searchExpand();
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
   
  searchExpand(){
  $(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var mobileSearchBox = $('.mobile-search');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            mobileSearchBox.css({'height':'48px'});
            mobileSearchBox.css({'opacity':'1'});
            mobileSearchBox.focus();
            inputBox.focus();
            isOpen = true;

        } else {
            searchBox.removeClass('searchbox-open');
            mobileSearchBox.css({'height':'0px'});
            mobileSearchBox.css({'opacity':'0'});
            mobileSearchBox.focusout();
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });
});
    function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
    }
  }
  
  render(){
    return(
      <div>
        <SideBar closeMenu={this.closeMenu} stateOpen={this.state.openMenu} type="homepage"/>
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light fixed-top ">
  <div className="nav-item">
    <h1> <span style={{fontSize:'20px',cursor:'pointer'}} className="menu-icon" onClick={this.toggleMenu} id="menuicon">&#9776;</span></h1>
  </div>
  <div className="navbar-brand" style={{paddingTop:'16px'}}>
    <Link to = "/"><img style={{paddingLeft:'3px'}} src={require("../../images/logo.png")} /></Link>
    <div><h5 className="subhead" style={{color:'#5c5b5b'}}>SINCE 1994</h5></div>
  </div>
  
  <div className="collapse navbar-collapse" id="main-navbar">
    <div>
      <ul className="navbar-nav ml-auto" id="menu">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="product-toggle" role="button" data-toggle="dropdown">Products</a>
          <div className="dropdown-menu dropdown-menu-center dropdown-content" arealabelledby="product-toggle" >

                <Link className="dropdown-item navmain-item" to = "/products/incorporate+" ><img src={require("../../images/N1.png")} style={{marginRight:'8px'}} />Incorporate + <h5 className="subtitles">The best way to start your business</h5></Link>
                <Link className="dropdown-item navmain-item" to ="/products/comply+" ><img src={require("../../images/N2.png")}  style={{marginRight:'10px'}} />Comply + <h5 className="subtitles">Most convenient way to manage your compliances</h5></Link>
                <Link className="dropdown-item navmain-item" to ="/products/tax+" ><img src={require("../../images/N3.png")}  style={{marginRight:'10px'}} />Tax +<h5 className="subtitles">Everything you need for tax fillings and registrations.</h5></Link>
                <Link className="dropdown-item navmain-item" to ="/products/protect+"><img src={require("../../images/N4.png")}  style={{marginRight:'10px'}} />Protect +<h5 className="subtitles">Take control and protect your business</h5></Link>
                <Link className="dropdown-item navmain-item" to ="/products/windup+"><img src={require("../../images/N15.png")}  style={{marginRight:'10px'}} />Wind Up +<h5 className="subtitles">Hassle free way for closure of business</h5></Link>
                </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="consulting-toggle" role="button" data-toggle="dropdown">Consulting</a>
          <div className="dropdown-menu dropdown-menu-left dropdown-content" arealabelledby="consulting-toggle">
            <Link className="dropdown-item navmain-item" to="/consulting/corporate"><img src={require("../../images/N5.png")} style={{marginRight:'10px'}}/>Corporate<h5 className="subtitles">Hire experts for your business needs</h5></Link>
            <Link className="dropdown-item navmain-item" to="/consulting/startup"><img src={require("../../images/N7.png")} style={{marginRight:'10px'}}/>Startup<h5 className="subtitles">Advice from experts to go from idea to ideal</h5></Link>
            <Link className="dropdown-item navmain-item" to="/consulting/social"><img src={require("../../images/N6.png")} style={{marginRight:'10px'}}/>Social<h5 className="subtitles">Scale your impact with our expert professionals</h5></Link>

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
       <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="consulting-toggle" role="button" data-toggle="dropdown">Trainings</a>
       <div className="dropdown-menu dropdown-menu-left dropdown-content" arealabelledby="consulting-toggle">
         <Link className="dropdown-item navmain-item" to="/trainings/functional"><img src={require("../../images/N17.png")} style={{marginRight:'10px'}}/>Functional Training<h5 className="subtitles">Develop comprehensive understanding about running a business</h5></Link>
         <Link className="dropdown-item navmain-item" to="/trainings/strategic"><img src={require("../../images/N16.png")} style={{marginRight:'10px'}}/>Strategic Training<h5 className="subtitles">Unleash strategies to accelerate from idea to ideal</h5></Link>
         

       </div>
       </li>
       <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="consulting-toggle" role="button" data-toggle="dropdown">Platforms</a>
       <div className="dropdown-menu dropdown-menu-left dropdown-content" arealabelledby="consulting-toggle">
         <Link className="dropdown-item navmain-item" to="/platforms"><img src={require("../../images/N18.png")} style={{marginRight:'10px'}}/>Opportuneety<h5 className="subtitles"> Your go to place to explore opportunities
</h5></Link>
        
         

       </div>
       </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about-us">About Us</Link>
        </li>

        <li className="nav-item">
       
        </li>
      </ul>
    </div>
  </div>
         <div className="searchside">
        <form className="searchbox">
            <input type="search" placeholder="Search......" name="search" class="searchbox-input" onkeyup="buttonUp();" required/>
           
            <span className="searchbox-icon"><img src={require("../../images/searchicon.png")}/></span>
       
   
        
    </form>
    </div>

</nav>
<input type="search" placeholder="Search......" name="search" className="mobile-search" onkeyup="buttonUp();" required/>
      </div>
    );
  }
}
