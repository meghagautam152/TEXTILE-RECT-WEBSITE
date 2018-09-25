import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ProductNavbar from '../ProductNavbar/productnavbar';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import Footer from '../Footer/footer';
import $ from 'jquery';

import './sidebar.css';


export default class SideBar extends Component{


constructor(props){

super();
this.state = {
products:false,
consulting:false,
strategictraining:false,
functionaltraining:false,
incorporate:false,
comply:false,
tax:false,
windup:false,
protect:false,
resources:false,
docs:false,
startupConsulting:false,
socialConsulting:false,
corporateConsulting:false,



}



}


setInitialState(page){

  if(page=="INCORPORATE+" || page=="INCORPORATE"){
    this.setState({products:true});
    this.setState({incorporate:true});

  }
  else if(page=="COMPLY+" || page=="COMPLY"){
    this.setState({products:true});
    this.setState({comply:true});
  }



  else if(page=="TAX+" || page=="TAX"){
    this.setState({products:true});
    this.setState({tax:true});
  }

  else if(page=="PROTECT+" || page=="PROTECT"){
    this.setState({products:true});
    this.setState({protect:true});
  }

  else if(page=="WIND UP+" || page=="WIND UP"){
    this.setState({products:true});
    this.setState({windup:true});
  }

  else if(page=="CORPORATE" ){
    this.setState({consulting:true});
    this.setState({corporateConsulting:true});
  }

  else if(page=="STARTUP"){
    this.setState({consulting:true});
    this.setState({startupConsulting:true});
  }

  else if(page=="SOCIAL"){
    this.setState({consulting:true});
    this.setState({socialConsulting:true});
  }

  else if(page=="PLATFORMS"){
    this.setState({platforms:true});

  }
  else if(page=="STRATEGIC"){
    this.setState({traning:true});
    this.setState({strategictraining:true});

  }
  else if(page=="FUNCTIONAL"){
    this.setState({traning:true});
    this.setState({functionaltraining:true});

  }
  else if(page=="DOCS"){
    this.setState({docs:true});
    

  }
  
  else if(page=="RESOURCES" || page=="GUIDES" || page=="BLOG"){
    this.setState({resources:true});
    

  }
  






}

toggleMenu(state,menu){



         state ?  this.setState({[menu]:false}) : this.setState({[menu]:true});

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
    <a href="javascript:void(0)" className="back" onClick={ () => this.props.closeMenu(this.props.stateOpen) } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">VALUE PLUS</Link>
    <a href="javascript:void(0)" value="productsMenu" onClick={ () => this.toggleMenu(this.state.products,"products") } id="product" ><img src={require("../../images/h2.png")} style={{marginRight:'10px'}}/>Products </a>
    <a href="javascript:void(0)" value="consultationMenu" onClick={ () => this.toggleMenu(this.state.consulting,"consulting") } id="consultation"><img src={require("../../images/h1.png")} style={{marginRight:'10px'}}/>Consulting</a>
    <Link to="./docs" id="askanexpert" className="heading3"><img src={require("../../images/h3.png")} style={{marginRight:'10px'}}/>Docs</Link>
    <a href="javascript:void(0)" value="resourcesMenu" onClick={ () => this.toggleMenu(this.state.resources,"resources") } id="resources"><img src={require("../../images/r1.png")} style={{marginRight:'10px'}}/>Resources</a>
    <Link to="./post-a-job" id="askanexpert" className="heading3"><img src={require("../../images/h3.png")} style={{marginRight:'10px'}}/>Post a job</Link>
    <Link to="./ask-an-expert" id="askanexpert" className="heading3"><img src={require("../../images/askn.png")} style={{marginRight:'10px'}}/>Ask an expert</Link>
    {/*<a href="javascript:void(0)" value="productmarketmenu" onClick={ () => this.toggleMenu(this.state.traning,"traning") } id="productmarket"><img src={require("../../images/h3.png")} style={{marginRight:'10px'}}/>Trainings</a>
    <a href="javascript:void(0)" value="platformMenu" onClick={ () => this.toggleMenu(this.state.platforms,"platforms") }  id="platform"><img src={require("../../images/h4.png")} style={{marginRight:'10px'}}/>Platforms</a>*/}
  {/*  <Link to="./about-us" id="about" className="heading3"><img src={require("../../images/h5.png")} style={{marginRight:'10px'}}/>About Us</Link>*/}
</div>




  <div style={this.state.products ? open : close} class="sidenav">


  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.products,"products") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Products</Link>

  <a href="javascript:void(0)" class="submenuItem" onClick={ () => this.toggleMenu(this.state.incorporate,"incorporate") }  value="incorporatemenu" id="incorporate"><img src={require("../../images/N1.png")} style={{marginRight:'8px'}} />Incorporate +</a>
    <a href="javascript:void(0)" class="submenuItem" onClick={ () => this.toggleMenu(this.state.comply,"comply") }  value="complymenu" id="comply"><img src={require("../../images/N2.png")} style={{marginRight:'8px'}} />Comply +</a>
    <a href="javascript:void(0)" class="submenuItem" onClick={ () => this.toggleMenu(this.state.tax,"tax") } value="taxmenu" id="tax"><img src={require("../../images/N3.png")} style={{marginRight:'8px'}} />Tax +</a>
    <a href="javascript:void(0)" class="submenuItem" onClick={ () => this.toggleMenu(this.state.protect,"protect") } value="protectmenu" id="protect"><img src={require("../../images/N4.png")} style={{marginRight:'8px'}} />Protect +</a>
    <a href="javascript:void(0)" class="submenuItem" onClick={ () => this.toggleMenu(this.state.windup,"windup") } value="windupmenu" id="windup"><img src={require("../../images/N15.png")} style={{marginRight:'8px'}} />Wind up +</a>
 </div>


   <div id="consultationMenu" style={this.state.consulting ? open : close} class="sidenav">


   <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.consulting,"consulting") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Consultings</Link>

    <a href="javascript:void(0)" class="submenuItem" value="corporatemenu"  onClick={ () => this.toggleMenu(this.state.corporateConsulting,"corporateConsulting") } id="corporate"><img src={require("../../images/N5.png")} style={{marginRight:'8px'}} />Corporate Consulting</a>
    <a href="javascript:void(0)" class="submenuItem" value="startupmenu"  onClick={ () => this.toggleMenu(this.state.startupConsulting,"startupConsulting") } id="startup"><img src={require("../../images/N6.png")} style={{marginRight:'8px'}} />Startup Consulting</a>
    <a href="javascript:void(0)" class="submenuItem" value="socialmenu"   onClick={ () => this.toggleMenu(this.state.socialConsulting,"socialConsulting") } id="social"><img src={require("../../images/N7.png")} style={{marginRight:'8px'}} />Social Consulting </a>
  </div>

  <div id="docsMenu" style={this.state.docs ? open : close} class="sidenav">


<a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.docs,"docs") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="docsMenu">Docs</Link>

  <Link to="./docs" id="docs" className="heading3">Docs</Link>
  <Link to="./docs/download" id="docs" className="heading3">Download</Link>
  <Link to="./docs/tailored" id="docs" className="heading3">Tailored</Link>
  <Link to="./docs/vetting" id="docs" className="heading3">Vetting</Link>
</div>


<div id="resourcesMenu" style={this.state.resources ? open : close} class="sidenav">


<a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.resources,"resources") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="resourcesMenu">Resources</Link>

 <Link to="./resources" id="resources" className="heading3">All</Link>
  <Link to="./resources/guides" id="resources" className="heading3">Guides</Link>
  <Link to="./resources/blogs" id="resources" className="heading3">Blog</Link>
  
</div>


  <div id="productmarketmenu" style={this.state.traning ? open : close} class="sidenav">
  
  
     <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.traning,"traning") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Trainings</Link>
  
      <a href="javascript:void(0)" class="submenuItem" value="corporatemenu"  onClick={ () => this.toggleMenu(this.state.strategictraining,"strategictraining") } id="strategic"><img src={require("../../images/N17.png")} style={{marginRight:'8px'}} />Strategic Training</a>
      <a href="javascript:void(0)" class="submenuItem" value="startupmenu"  onClick={ () => this.toggleMenu(this.state.functionaltraining,"functionaltraining") } id="functional"><img src={require("../../images/N16.png")} style={{marginRight:'8px'}} />Functional Training</a>
      
    </div>

   



  <div id="productmarketmenu" style={this.state.strategictraining ? open : close} class="sidenav">

  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.strategictraining,"strategictraining") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Strategic Training</Link>

     <Link to="../trainings/strategic">Trainings</Link>
     {this.props.type=="send-a-query" ?  <Link to="./send-a-query">Send a query</Link> :  <Link to="../trainings/strategic/send-a-query">Send a query</Link>
     
    }
   

     {this.props.type=="send-a-query" ? 
     <Link to="./request-a-quote">Request a Proposal</Link> :
     <Link to="../trainings/strategic/request-a-quote">Request a Proposal</Link>}

     <Link to="../contact-us">Contact us</Link>

  </div>
  <div id="productmarketmenu" style={this.state.functionaltraining ? open : close} class="sidenav">

  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.functionaltraining,"functionaltraining") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Functional Training</Link>

     <Link to="../trainings/strategic">Trainings</Link>
     {this.props.type=="send-a-query" ?  <Link to="./send-a-query">Send a query</Link> :  <Link to="../trainings/functional/send-a-query">Send a query</Link>
     
    }
   

     {this.props.type=="send-a-query" ? 
     <Link to="./request-a-quote">Request a Proposal</Link> :
     <Link to="../trainings/functional/request-a-quote">Request a Proposal</Link>}

     <Link to="../contact-us">Contact us</Link>

  </div>


  <div id="platformMenu" style={this.state.platforms ? open : close}  class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.platforms,"platforms") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Platforms</Link>

   <Link to="../platforms">Our Platforms</Link>
   <Link to="../contact">Contact us</Link>

  </div>

  <div style={this.state.incorporate ? open : close} class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.incorporate,"incorporate") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Incorporate +</Link>
  
  {this.props.type=="send-a-query"  ?  <Link className="nav-link" to ={`../../products/${this.props.url}`}>About</Link> :
    <Link className="nav-link" to ="../products/incorporate+">About</Link>}
  

  {this.props.type=="pricing" ?  <Link className="nav-link" to="./pricing" >Pricing</Link> :
                       
                       (this.props.type=="send-a-query" ? <Link className="nav-link" to={`../../products${this.props.priceurl}`}>Pricing</Link> : 
                       <Link to="../products/incorporate+/pricing" class="heading3">Pricing</Link>)
                    }


 
 
  {this.props.type!="pricing" ? 
  <Link to="../products/incorporate+/send-a-query">Send a query</Link> :
   <Link className="nav-link" to={`../../products/incorporate+/send-a-query`}>Send a query</Link>
  }

  

  </div>


  <div style={this.state.comply ? open : close} class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.comply,"comply") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Comply +</Link>
  {this.props.type=="send-a-query"  ?  <Link className="nav-link" to ={`../../products/${this.props.url}`}>About</Link> :
    <Link className="nav-link" to ="../products/comply+">About</Link>}
  

  {this.props.type=="pricing" ?  <Link className="nav-link" to="./pricing" >Pricing</Link> :
                       
                       (this.props.type=="send-a-query" ? <Link className="nav-link" to={`../../products${this.props.priceurl}`}>Pricing</Link> : 
                       <Link to="../products/comply+/pricing" class="heading3">Pricing</Link>)
                    }


 
 
  {this.props.type!="pricing" ? 
  <Link to="../products/comply+/send-a-query">Send a query</Link> :
   <Link className="nav-link" to={`../../products/comply+/send-a-query`}>Send a query</Link>
  }

 
    </div>

<div style={this.state.tax ? open : close} class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.tax,"tax") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Tax +</Link>
  {this.props.type=="send-a-query"  ?  <Link className="nav-link" to ={`../../products/${this.props.url}`}>About</Link> :
    <Link className="nav-link" to ="../products/tax+">About</Link>}
  

  {this.props.type=="pricing" ?  <Link className="nav-link" to="./pricing" >Pricing</Link> :
                       
                       (this.props.type=="send-a-query" ? <Link className="nav-link" to={`../../products${this.props.priceurl}`}>Pricing</Link> : 
                       <Link to="../products/tax+/pricing" class="heading3">Pricing</Link>)
                    }


 
 
  {this.props.type!="pricing" ? 
  <Link to="../products/tax+/send-a-query">Send a query</Link> :
   <Link className="nav-link" to={`../../products/tax+/send-a-query`}>Send a query</Link>
  }

 
</div>

<div style={this.state.protect ? open : close} class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.protect,"protect") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu"> Protect +</Link>
  {this.props.type=="send-a-query"  ?  <Link className="nav-link" to ={`../../products/${this.props.url}`}>About</Link> :
    <Link className="nav-link" to ="../products/protect+">About</Link>}
  

  {this.props.type=="pricing" ?  <Link className="nav-link" to="./pricing" >Pricing</Link> :
                       
                       (this.props.type=="send-a-query" ? <Link className="nav-link" to={`../../products${this.props.priceurl}`}>Pricing</Link> : 
                       <Link to="../products/protect+/pricing" class="heading3">Pricing</Link>)
                    }


 
 
  {this.props.type!="pricing" ? 
  <Link to="../products/protect+/send-a-query">Send a query</Link> :
   <Link className="nav-link" to={`../../products/protect+/send-a-query`}>Send a query</Link>
  }

 
    </div>
    <div style={this.state.windup ? open : close} class="sidenav">
  <a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.windup,"windup") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Wind up +</Link>
  {this.props.type=="send-a-query"  ?  <Link className="nav-link" to ={`../../products/${this.props.url}`}>About</Link> :
    <Link className="nav-link" to ="../products/windup+">About</Link>}
  

  {this.props.type=="pricing" ?  <Link className="nav-link" to="./pricing" >Pricing</Link> :
                       
                       (this.props.type=="send-a-query" ? <Link className="nav-link" to={`../../products${this.props.priceurl}`}>Pricing</Link> : 
                       <Link to="../products/windup+/pricing" class="heading3">Pricing</Link>)
                    }


 
 
  {this.props.type!="pricing" ? 
  <Link to="../products/windup+/send-a-query">Send a query</Link> :
   <Link className="nav-link" to={`../../products/windup+/send-a-query`}>Send a query</Link>
  }

 
    </div>



<div style={this.state.corporateConsulting ? open : close} class="sidenav">
<a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.corporateConsulting,"corporateConsulting") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Corporate Consulting</Link>

{this.props.type=="send-a-query" ?   

<Link className="nav-link" to ={`../corporate`}>
Consulting</Link> : (this.props.type=="request-a-proposal" ?<Link to="../corporate">Consulting</Link> :<Link to="../consulting/corporate">Consulting</Link>)  }
      
{ this.props.type == "send-a-query" ? 
                     
                          <Link className="nav-link" to={`../corporate/send-a-query`}>Send a query</Link>
                   :
                   (this.props.type=="request-a-proposal" ? 
    <Link className="nav-link" to={`../corporate/send-a-query`}>Send a query</Link>
    :
    <Link className="nav-link" to={`../consulting/corporate/send-a-query`}>Send a query</Link>
)
                    }

                    { this.props.type =="send-a-query" ? 
                      
                        <Link className="nav-link" to ={`../../consulting/corporate/request-a-proposal`}>Request a Proposal</Link>
                 
                    :
                    (this.props.type=="request-a-proposal" ?
    <Link className="nav-link" to ={`../consulting/request-a-proposal`}>Request a Proposal</Link>
           :
           <Link className="nav-link" to ={`../consulting/corporate/request-a-proposal`}>Request a Proposal</Link>
                  )

                  }
      

  </div>

<div style={this.state.startupConsulting ? open : close} class="sidenav">
<a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.startupConsulting,"startupConsulting") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Startup Consulting</Link>

        
{this.props.type=="send-a-query" ?  
 <Link className="nav-link" to ={`../../consulting/startup`}>Consulting</Link> : 
 (this.props.type=="request-a-proposal" ?<Link to="../startup">Consulting</Link> :<Link to="../consulting/startup">Consulting</Link>)  }
      
{ this.props.type == "send-a-query" ? 
                     
                          <Link className="nav-link" to={`../startup/send-a-query`}>Send a query</Link>
                   :
                       
                        <Link className="nav-link" to={`../consulting/startup/send-a-query`}>Send a query</Link>
              
                    }

                    { this.props.type =="send-a-query" ? 
                      
                        <Link className="nav-link" to ={`../../consulting/startup/request-a-proposal`}>Request a Proposal</Link>
                 
                    :
                    <Link className="nav-link" to ={`../consulting/startup/request-a-proposal`}>Request a Proposal</Link>
           

                  }
      

  </div>


<div style={this.state.socialConsulting ? open : close} class="sidenav">
<a href="javascript:void(0)" className="back" onClick={ () => this.toggleMenu(this.state.socialConsulting,"socialConsulting") } className="closebtn"><img className="back-arrow" src={require("../../images/barrow.png")}/></a> <Link to="/" className="title-menu" value="productsMenu">Social Consulting</Link>

{this.props.type=="send-a-query" ?   <Link className="nav-link" to ={`../../consulting/${this.props.url}`}>
Consulting</Link> : (this.props.type=="request-a-proposal" ?<Link to="../social">Consulting</Link> :<Link to="../consulting/social">Consulting</Link>)  }
      
{ this.props.type == "send-a-query" ? 
                     
                          <Link className="nav-link" to={`../social/send-a-query`}>Send a query</Link>
                   :
                       
                        <Link className="nav-link" to={`../consulting/social/send-a-query`}>Send a query</Link>
              
                    }

                    { this.props.type =="send-a-query" ? 
                      
                        <Link className="nav-link" to ={`../../consulting/${this.props.url}/request-a-proposal`}>Request a Proposal</Link>
                 
                    :
                    (this.props.type=="request-a-proposal" ? <Link className="nav-link" to ={`../social/request-a-proposal`}>Request a Proposal</Link>
           :     <Link className="nav-link" to ={`../consulting/social/request-a-proposal`}>Request a Proposal</Link>
          ) 
                   

                  }
       

  </div>





  </div>





    );
  }
}
