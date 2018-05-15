import React,{Component} from 'react';
import ProductNavbar from '../ProductNavbar/productnavbar';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import Footer from '../Footer/footer';
import $ from 'jquery';
import './sidebar.css';
import Menu from './menu'

export default class SideBar extends Component{


constructor(props){

super();
this.state = {
products:false,
consulting:false,
traning:false

   
}

}




toggleMenu(state,menu){


   switch(menu){
       case "products":  
         state ?  this.setState({[menu]:false}) : this.setState({[menu]:true});
         break;
        case "consulting":
        state ?  this.setState({[menu]:false}) : this.setState({[menu]:true});
        break;
        
      }
   
   }





  render(){
    var open = {
        width: "290px"
      };

      var close={
        width: "0px"
      }
  
    return(
<div>

    <div id="mySidenav" style={this.props.stateOpen ? open : close} className="sidenav">
    <a href="javascript:void(0)" className="back" onClick={ () => this.props.closeMenu(this.props.stateOpen) } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <a href="index.html" className="title-menu" value="productsMenu">VALUE PLUS</a>
    <a href="javascript:void(0)" value="productsMenu" onClick={ () => this.toggleMenu(this.state.products,"products") } id="product" >Products </a>
    <a href="javascript:void(0)" value="consultationMenu" onClick={ () => this.toggleMenu(this.state.consulting,"consulting") } id="consultation">Consulting</a>
    <a href="javascript:void(0)" value="productmarketmenu" id="productmarket">Training</a>
    <a href="javascript:void(0)" value="platformMenu" id="platform">Platforms</a>
    <a href="about.html" id="about" className="heading3">About Us</a>
</div>


{Menu.menuItems.map((menu, index) =>
    <div style={()=>this.getState(menu.id)} class="sidenav">
    <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(menu.id) } className="closebtn">
    <img className="back-arrow" src={require("../../images/barrow.png")}/></a>
    <a href="index.html" className="title-menu" value="productsMenu">{menu.title}</a>
    {menu.subMenus.map((subMenu,key)=>
    
    <a href="javascript:void(0)" class="submenuItem" value="incorporatemenu" id="incorporate">{subMenu.title}</a>
    
    
    
    )}
    
   

  </div>

          )}






   <div id="consultationMenu" style={this.state.consulting ? open : close} class="sidenav">
  

   <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.consulting,"consulting") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <a href="index.html" className="title-menu" value="productsMenu">Consulting</a>
  
    <a href="javascript:void(0)" class="submenuItem" value="corporatemenu" id="corporate">Corporate Consulting</a>
    <a href="javascript:void(0)" class="submenuItem" value="startupmenu" id="startup">Startup Consulting</a>
    <a href="javascript:void(0)" class="submenuItem" value="socialmenu" id="social">Social Consulting </a>
  </div>



  <div id="productmarketmenu" style={this.state.traning ? open : close} class="sidenav">
   
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.traning,"traning") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <a href="index.html" className="title-menu" value="productsMenu">Training</a>
 
    <a class="submenuItem" href="productmarket.html">Our Services</a>
    <a class="submenuItem" href="sendproductmarket.html">Send a query</a>
    <a class="submenuItem" href="requestproductmarket.html">Request a Quote</a>
    <a class="submenuItem" href="contact.html">Contact us</a>

  </div>


  <div id="platformMenu" style={this.state.platforms ? open : close}  class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.platforms,"platforms") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <a href="index.html" className="title-menu" value="productsMenu">Platforms</a>
 
    <a class="submenuItem" href="platform.html">Our Services</a>

    <a class="submenuItem" href="contact.html" class="heading3">Contact us</a>

  </div>
 
  </div>

    );
  }
}
