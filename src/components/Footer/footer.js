import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import $ from 'jquery';


export default class Footer extends Component {

  constructor(props){
    super();
    this.state={
email:"",
visible:false


    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e){
    this.setState({visible:false});
    e.preventDefault();
    var api = "http://ficklebeans.com/mail/index.php";
    $.ajax({
      url:  api,
     method: 'GET',
     data: {
      
      email: this.state.email,
     
      type:0
    },
      success: function(data) {
        
        this.setState({visible:true});
        }.bind(this),
      error: function(xhr, status, err) {
        
      }.bind(this)
    });
  }

  onChange = (e) => {

    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);


    console.log(this.state);
  }
  hide() {
    this.setState({ visible: false });
}
  
 render(){
   return(
<div>
<div className="footer big">
<div className="row redheader">
<div className="col-md-1"></div>
<div className="col-md-2"><h4 className="redheadertext">Trade with confidence</h4></div>
<div className="col-md-2"><h4 className="redheadertext">Verified Buyers</h4></div>
<div className="col-md-2"><h4 className="redheadertext">Global Network</h4></div>
<div className="col-md-2"><h4 className="redheadertext">Extensive Categories</h4></div>
<div className="col-md-2"><h4 className="redheadertext">24/7 Help Center</h4></div>
<div className="col-md-1"></div>
</div>
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-2">
        <h4 className="title-widget" id="footer-head">Company</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" to="products/incorporate+">About us</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/comply+">Contact us</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/tax+">Work with us</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/tax+">Site Map</Link></div>
          
        </ul>
      </div>

      <div className="col-md-3 col-sm-2">
        <h4 className="title-widget" id="footer-head">Products</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" to="consulting/corporate">Textile Goods</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/startup">Home Furnishing</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/social">Apparel Fashion</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/social">Equipment Tools</Link></div>
        </ul>
      </div>
      <div className="col-md-3 col-sm-2">
      <h4 className="title-widget" id="footer-head">Services</h4>
      <ul>
        <div className = "footer-item"><Link id="footer-item" to="trainings/strategic">Custom clearing</Link></div>
        <div className = "footer-item"><Link id="footer-item" to="trainings/functional">Freight Forwarding</Link></div>
        <div className = "footer-item"><Link id="footer-item" to="trainings/functional">Regstration</Link></div>
        <div className = "footer-item"><Link id="footer-item" to="trainings/functional"> Licensing</Link></div>
       
      </ul>
      </div>
      <div className="col-md-3 col-sm-2">
      <h4 className="title-widget" id="footer-head">Logo</h4>
        <ul>
         
        </ul>
      </div>
     
     
      </div>

     

    
  </div>
  </div>





  <div className="footer mobile">
  <div className="container">
    <div className="row footrow">
      <div class="col-1 col-sm-2 mobile"></div>
      <div className="col-lg-3 col-sm-2 col-5">
        <h4 className="title-widget" id="footer-head">Products</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" to="products/incorporate+">Incorporate +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/comply+">Comply +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/tax+">Tax +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/protect+">Protect +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/windup+">Wind up +</Link></div>
        </ul>
      </div>

      <div className="col-lg-3 col-sm-2 col-5">
        <h4 className="title-widget" id="footer-head">Consulting</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" to="consulting/corporate">Corporate</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/startup">Startup</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/social">Social</Link></div>
        </ul>
      </div>
      <div class="col-1 col-sm-2 mobile"></div>
      </div>
      <div className="row footrow">
      <div class="col-1 col-sm-2 mobile"></div>
      <div className="col-lg-3 col-sm-2 col-5">
      <h4 className="title-widget" id="footer-head">Docs</h4>
      <ul>
        <div className = "footer-item"><Link id="footer-item" to="trainings/strategic"></Link></div>
        <div className = "footer-item"><Link id="footer-item" to="trainings/functional"></Link></div>
       
      </ul>
      </div>
      <div className="col-lg-3 col-sm-2 col-5">
        <h4 className="title-widget" id="footer-head">Resources</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item"  target="_blank" to="resources/guides">Guides</Link></div>
         
          <div className = "footer-item"><Link id="footer-item" target="_blank" to="resources/blog">Blogs</Link></div>
        </ul>
      </div>
      <div class="col-1 col-sm-2 mobile"></div>
      </div>
     

    <div className="row footrow">
   
    <div class="col-1 col-sm-2 mobile"></div>
      <div className="col-lg-3 col-sm-2 col-5">
        <h4 className="title-widget" id="footer-head">Company</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" target="_blank" to="/about-us">About us</Link></div>
          <div className = "footer-item"><Link id="footer-item" target="_blank" to="/contact-us">Contact us</Link></div>
          <div className = "footer-item"><Link id="footer-item" target="_blank" to="/contact">Work with us</Link></div>
          <div className = "footer-item"><Link id="footer-item" target="_blank" to="/Site Map">Site Map</Link></div>
          
        </ul>
      </div>
     
      
     
    
      <div className="col-lg-3 col-sm-2 col-5">
        <h4 id="footer-head">Find Us</h4>
        <a href="http://www.facebook.com/Value-Plus-1229617493809082" target="_blank" className="fa fa-facebook"></a>
        <a href="Http://www.twitter.com/valueplusio" target="_blank" className="fa fa-twitter"></a>
        <a href="http://www.linkedin.com/in/value-plus-260b86119/" target="_blank" className="fa fa-linkedin"></a>
      </div>
    
      </div>
      <div className="row footrow">
     
      <div class="col-1 col-sm-2 mobile"></div>
      <div className="col-lg-3 col-sm-2 col-10">
        <h4 id="footer-head">Subscribe to our Newsletter</h4>
        <form id="subscribe">
          <div className = "email-div">Your Email</div>
          <input type="email" size="24" onChange={this.onChange} value={this.state.email} className = "email-input" id="subscribeemail" name="email"/>
          <button onClick={this.submitForm}  className="buttonsubs">Subscribe </button>
          <div id="success1"></div>
        </form>
      </div>
    </div>
      

      
    <div className="row footrow">
     
    <div class="col-1 col-sm-2 mobile"></div>
      <div className="col-lg-3 col-sm-2 col-10">
      <img style={{paddingLeft:'3px'}} src={require("../../images/logo3.png")} />
        
      </div>
      </div>

      </div>
  </div>
  

<footer className="py-5  copyright">
  <div className="container">
    <div className="row">
      <div className="col-md-1 col-1 col-sm-1"></div>
      <div className="col-md-1 col-5 col-sm-2">
        <Link to="#" id="footer-icon"><img src={require("../../images/icontandc.png")}/><h6 className="copytext">Terms and Conditions</h6></Link>
        </div>
        <div className="col-md-1 col-1 col-sm-2"></div>
        <div className="col-md-1 col-5 col-sm-2">
        <Link to="#" id="footer-icon"><img src={require("../../images/iconpri.png")}/><h6 className="copytext">Privacy Policy</h6></Link>
        </div>
       
        <div className="col-md-4">
    
    </div>
    <div className="col-md-1 col-1 col-sm-1 mobile"></div>
    <div className="col-md-1 col-sm-1 col-5">
        <Link to="#" id="footer-icon"><img src={require("../../images/iconconf.png")}/><h6 className="copytext">Confidentiality Policy</h6></Link>
        </div>
        <div className="col-md-1 col-sm-2 col-1"></div>
        <div className="col-md-1 col-sm-2 col-5">
        <Link to="#" id="footer-icon"><img src={require("../../images/icondis.png")}/><h6 className="copytext">Disclaimer Policy</h6></Link>
        </div>
        <div className="col-md-1 col-sm-1 col-1"></div>
  </div>
  <div class="row"> <div className="col-md-4"></div><div className="col-md-4">
    <p className="m-0 text-center text-white">Copyright &copy; Alphrade</p>
    </div>
    <div className="col-md-4"></div>
  </div>
  </div>
</footer>
<Rodal visible={this.state.visible} height={100} className="pop-up" animation="flip" onClose={this.hide.bind(this)} >
  <div><p>Thank you for subscribing us</p></div>
</Rodal>
</div>

    );
  }
}
