import React, {Component} from 'react';
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
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-2">
        <h4 className="title-widget" id="footer-head">Products</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" to="products/incorporate+">Incorporate +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/comply+">Comply +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/tax+">Tax +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/protect+">Protect +</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="products/windup+">Wind up +</Link></div>
        </ul>
      </div>

      <div className="col-lg-3 col-sm-2">
        <h4 className="title-widget" id="footer-head">Consulting</h4>
        <ul>
          <div className = "footer-item"><Link id="footer-item" to="consulting/corporate">Corporate</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/startup">Startup</Link></div>
          <div className = "footer-item"><Link id="footer-item" to="consulting/social">Social</Link></div>
        </ul>
      </div>

      <div className="col-lg-3 col-sm-2">
        <h4 id="footer-head">Find Us</h4>
        <a href="http://www.facebook.com/Value-Plus-1229617493809082" target="_blank" className="fa fa-facebook"></a>
        <a href="Http://www.twitter.com/valueplusio" target="_blank" className="fa fa-twitter"></a>
        <a href="http://www.linkedin.com/in/value-plus-260b86119/" target="_blank" className="fa fa-linkedin"></a>
      </div>

      <div className="col-lg-3 col-sm-2">
        <h4 id="footer-head">Subscribe to our Newsletter</h4>
        <form id="subscribe">
          <div className = "email-div">Your Email</div>
          <input type="email" size="24" onChange={this.onChange} value={this.state.email} className = "email-input" id="subscribeemail" name="email"/>
          <button onClick={this.submitForm}  className="buttonsubs">Subscribe </button>
          <div id="success1"></div>
        </form>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-sm-2">
        <h4 className="title-widget" id="footer-head">Sister Concern(s)</h4>
        <ul>
          <div className = "footer-item"><a id="footer-item" target="_blank" href="http://vkgnassociates.com">VKGN & Associates</a></div>
        </ul>
      </div>

      <div className="col-lg-3 col-sm-2">
        <h4 className="title-widget" id="footer-head">Value Plus Network</h4>
        <ul>
          <div className = "footer-item"><a id="footer-item"  target="_blank" href="http://impact.valueplus.io">Value Plus Impact</a></div>
         
          <div className = "footer-item"><a id="footer-item" target="_blank" href="http://opportuneety.com">Opportuneety</a></div>
        </ul>
      </div>

      
      <div className="col-lg-3 col-sm-2">
      <h4 className="title-widget" id="footer-head">Training</h4>
      <ul>
        <div className = "footer-item"><Link id="footer-item" to="trainings/strategic">Strategic</Link></div>
        <div className = "footer-item"><Link id="footer-item" to="trainings/functional">Functional</Link></div>
       
      </ul>
      </div>

      <div className="col-lg-3 col-sm-2">
        <Link to = "/contact-us" id="footer-item" ><h4 className="title-widget" id="footer-head">
        Contact Us</h4></Link>
        <Link to = "/sitemap" id="footer-item" ><h4 className="title-widget" id="footer-head">
        Site Map</h4></Link>
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
      <h4 className="title-widget" id="footer-head">Training</h4>
      <ul>
        <div className = "footer-item"><Link id="footer-item" to="trainings/strategic">Strategic</Link></div>
        <div className = "footer-item"><Link id="footer-item" to="trainings/functional">Functional</Link></div>
       
      </ul>
      </div>
      <div className="col-lg-3 col-sm-2 col-5">
        <h4 className="title-widget" id="footer-head">Value Plus Network</h4>
        <ul>
          <div className = "footer-item"><a id="footer-item"  target="_blank" href="http://impact.valueplus.io">Value Plus Impact</a></div>
         
          <div className = "footer-item"><a id="footer-item" target="_blank" href="http://opportuneety.com">Opportuneety</a></div>
        </ul>
      </div>
      <div class="col-1 col-sm-2 mobile"></div>
      </div>
     

    <div className="row footrow">
   
    <div class="col-1 col-sm-2 mobile"></div>
      <div className="col-lg-3 col-sm-2 col-5">
        <h4 className="title-widget" id="footer-head">Sister <br/> Concern(s)</h4>
        <ul>
          <div className = "footer-item"><a id="footer-item" target="_blank" href="http://vkgnassociates.com">VKGN & Associates</a></div>
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
        <Link to = "/contact-us" id="footer-item" ><h4 className="title-widget" id="footer-head">
        Contact Us</h4></Link>
        <Link to = "/sitemap" id="footer-item" ><h4 className="title-widget" id="footer-head">
        Site Map</h4></Link>
      </div>
      </div>

      </div>
  </div>
  

<footer className="py-5  copyright">
  <div className="container">
    <div className="row">
      <div className="col-md-1 col-1 col-sm-1"></div>
      <div className="col-md-1 col-5 col-sm-2">
        <Link to="/terms-and-conditions" id="footer-icon"><img src={require("../../images/icontandc.png")}/><h6 className="copytext">Terms and Conditions</h6></Link>;
        </div>
        <div className="col-md-1 col-1 col-sm-2"></div>
        <div className="col-md-1 col-5 col-sm-2">
        <Link to="/privacy-policy" id="footer-icon"><img src={require("../../images/iconpri.png")}/><h6 className="copytext">Privacy Policy</h6></Link>;
        </div>
       
        <div className="col-md-4">
    
    </div>
    <div className="col-md-1 col-1 col-sm-1 mobile"></div>
    <div className="col-md-1 col-sm-1 col-5">
        <Link to="/confidentiality-policy" id="footer-icon"><img src={require("../../images/iconconf.png")}/><h6 className="copytext">Confidentiality Policy</h6></Link>;
        </div>
        <div className="col-md-1 col-sm-2 col-1"></div>
        <div className="col-md-1 col-sm-2 col-5">
        <Link to="/disclaimer-policy" id="footer-icon"><img src={require("../../images/icondis.png")}/><h6 className="copytext">Disclaimer Policy</h6></Link>;
        </div>
        <div className="col-md-1 col-sm-1 col-1"></div>
  </div>
  <div class="row"> <div className="col-md-4"></div><div className="col-md-4">
    <p className="m-0 text-center text-white">Copyright &copy; Value Plus 2017</p>
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
