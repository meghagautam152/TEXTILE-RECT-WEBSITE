import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import './homepage.css';
import LetsGetStarted from '../LetsGetStarted/letsgetstarted';
import Testimonials from '../Testimonials/testimonials';
import Twitter from './Twitter';
import Sectionabout from './sectionabout';
import $ from 'jquery';
import Facebook from './Facebook';
let context = null;
export default class TraningSection extends Component {



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


    const strategicTraning = <div className="row"><div className="col-md-2 sec3 " style={{backgroundColor:'#9dfff2'}}>
    <Link to="/trainings/strategic">
    <div className="traicons"><img src={require("../../images/t1.png")}/></div>
        <h5 className="heading3" style={{paddingTop:'10px'}}>Ideation Bootcamp</h5>
        <h6 className="content1" style={{paddingTop:'10px'}}  >Identify high potential ideas worth pursuing
        </h6>
  
       </Link>
    </div>
  
  
  
    <div className="col-md-2 sec3" style={{backgroundColor:'#c6edfc'}}>
    <Link to="/trainings/strategic">
         <div className="traicons"><img src={require("../../images/t2.png")}/></div>
        <h5 className="heading3" style={{paddingTop:'15px'}}>Product Market Fit</h5>
        <h6 className="content1" style={{paddingTop:'10px'}} >Come up with a product which people actually need and are willing to pay</h6>
      </Link>
    </div>
    <div className="col-md-2 sec3" style={{backgroundColor:'#a6d7f8'}}>
    <Link to="/trainings/strategic">
    <div className="traicons"><img src={require("../../images/t3.png")}/></div>
        <h5 className="heading3" style={{paddingTop:'4px'}}>Business Modelling</h5>
        <h6 className="content1" style={{paddingTop:'10px'}}>Position your product in a way that resonates with your customer</h6>
       </Link>
    </div>
    <div className="col-md-2 sec3" style={{backgroundColor:'#a1ccf3'}}>
    <Link to="/trainings/strategic">
    <div className="traicons"><img src={require("../../images/t4.png")}/></div>
        <h5 className="heading3" style={{paddingTop:'8px'}}>Growth</h5>
        <h6 className="content1" style={{paddingTop:'32px'}}>Build a sustainable & scalable business</h6>
       </Link>
    </div>
  
    <div className="col-md-2 sec3" style={{backgroundColor:'#a6d7f8'}}>
    <Link to="/trainings/strategic">
    <div className="traicons"><img src={require("../../images/t5.png")}/></div>
        <h5 className="heading3" style={{paddingTop:'10px'}}>Branding</h5>
        <h6 className="content1"style={{paddingTop:'32px'}}>Framework to plan & strategize for scaling up
        </h6>
       </Link>
    </div>
    <div className="col-md-2 sec3" style={{backgroundColor:'#adfeff'}}>
    <Link to="/trainings/strategic">
    <div className="traicons"><img src={require("../../images/t6.png")}/></div>
        <h5 className="heading3" style={{paddingTop:'4px'}}>Impact Design</h5>
        <h6 className="content1" >Design your offering, implement and assess its impact</h6>
        </Link>
    </div></div>;



const functionalTraning = <div  className="row"><div className="col-lg-2 sec3 " style={{backgroundColor:'#9dfff2'}}>
<Link to="/trainings/functional">
<div className="traicons"><img src={require("../../images/f6.png")}/></div>
    <h5 className="heading3" style={{paddingTop:'10px'}}>Business Structuring
</h5>
    <h6 className="content1" style={{paddingTop:'10px'}}  >Decide upon the best suited structure for your business


    </h6>

   </Link>
</div>



<div className="col-lg-2 sec3" style={{backgroundColor:'#c6edfc'}}>
<Link to="/trainings/functional">
     <div className="traicons"><img src={require("../../images/f1.png")}/></div>
    <h5 className="heading3" style={{paddingTop:'15px'}}>Understanding Financial Statements
</h5>
    <h6 className="content1" style={{paddingTop:'4px'}} >Learn how to read financial statements and gather insights
</h6>
  </Link>
</div>
<div className="col-lg-2 sec3" style={{backgroundColor:'#a6d7f8'}}>
<Link to="/trainings/functional">
<div className="traicons"><img src={require("../../images/f2.png")}/></div>
    <h5 className="heading3" style={{paddingTop:'4px'}}>Compliance Management
</h5>
    <h6 className="content1" style={{paddingTop:'10px'}}>Understand compliances to avoid penalties and to run a legit business
</h6>
   </Link>
</div>
<div className="col-lg-2 sec3" style={{backgroundColor:'#a1ccf3'}}>
<Link to="/trainings/functional">
<div className="traicons"><img src={require("../../images/f5.png")}/></div>
    <h5 className="heading3" style={{paddingTop:'8px'}}>Managing Intellectual Property
</h5>
    <h6 className="content1" style={{paddingTop:'5px'}}>Gain knowledge about how to protect your brand and create value
</h6>
   </Link>
</div>

<div className="col-lg-2 sec3" style={{backgroundColor:'#a6d7f8'}}>
<Link to="/trainings/functional">
<div className="traicons"><img src={require("../../images/f4.png")}/></div>
    <h5 className="heading3" style={{paddingTop:'10px'}}>Funding & Valuation
</h5>
    <h6 className="content1"style={{paddingTop:'8px'}}>Understand what creates value in a business and funding of a business

    </h6>
   </Link>
</div>
<div className="col-lg-2 sec3" style={{backgroundColor:'#adfeff'}}>
<Link to="/trainings/functional">
<div className="traicons"><img src={require("../../images/f3.png")}/></div>
    <h5 className="heading3" style={{paddingTop:'4px'}}>Negotiation & Contracting
</h5>
    <h6 className="content1" >Learn the art of negotiation and familiarise with terms and conditions of various contracts
</h6>
    </Link>
</div></div>;


    return (
      <div>



<section><div style={{'float':'inline'}}className="col-md-12 faqdiv text-center">
        
        <button  onClick={() => this.changeFilter('strategicTraning')} className={this.state.filter=='strategicTraning' ? active : deactive} >Strategic Training </button>
        <button onClick={() => this.changeFilter('functionalTraning')} className={this.state.filter=='functionalTraning' ? active : deactive} >Functional Training </button>
         
        
        </div>
        
</section>


{/*stretigic section*/}
<div className="row">



{this.state.filter=="strategicTraning" ? strategicTraning : functionalTraning}
 

</div>



      </div>


    );
  }
}


