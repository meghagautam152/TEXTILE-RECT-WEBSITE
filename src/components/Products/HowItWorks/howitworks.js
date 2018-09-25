import React,{Component} from 'react';
import $ from 'jquery';
import './howitworks.css';

export default class HowItWorks extends Component{
  constructor(){
    super();
    this.handleLine =this.handleLine.bind(this);
  }
  componentDidMount(){
    this.handleLine();
  }
  handleLine(){
    const imgcorp2 = this.refs.imgcorp2;
    const imgcorp3 = this.refs.imgcorp3;
    const imgcorp4 = this.refs.imgcorp4;
    const line1 = this.refs.line1;
    const line2 = this.refs.line2;
    const line3 = this.refs.line3;

    $(function() {
    $(".imgcorp2").hover(function() {
      $(".line1").css('border-color', '#00AEFF');
    }, function() {
      // on mouseout, reset the background colour
      $(".line1").css('border-color', 'white');
    });
  });

  $(function() {
    $(".imgcorp3").hover(function() {
      $(".line1").css('border-color', '#00AEFF');
      $(".line2").css('border-color', '#00AEFF');
    }, function() {
      // on mouseout, reset the background colour
      $(".line1").css('border-color', 'white');
      $(".line2").css('border-color', 'white');
    });
  });

  $(function() {
    $(".imgcorp4").hover(function() {
      $(".line1").css('border-color', '#00AEFF');
      $(".line2").css('border-color', '#00AEFF');
      $(".line3").css('border-color', '#00AEFF');
    }, function() {
      // on mouseout, reset the background colour
      $(".line1").css('border-color', 'white');
      $(".line2").css('border-color', 'white');
      $(".line3").css('border-color', 'white');
    });
  });
  }
  render(){
    return(
      <div>
      <div className="how big">
      <h2 className="text-center headinghow">How it works?</h2>
      <div class="container">
      <div className="row customers mobilerow2">

        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp1 text-center">
          <img className="img-fluid " src={require("../../../images/details.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px' }}><div>Fill in the details </div>
          <div>of the form above</div></p>

        </div>
        <div className="col-md-1 line1"> </div>
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp2 text-center" ref ="imgcorp2">
          <img className="img-fluid " src={require("../../../images/expert1.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px'}}><div>Our representative</div> <div>will get
           in touch </div> <div>for onboarding</div></p>
           </div>

       
        <div className="col-md-1 line2"></div>
        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp3 text-center" ref ="imgcorp3">
          <img className="img-fluid" src={require("../../../images/makepay.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Complete your order</p>
          
        </div>
        <div className="col-md-1 line3"> </div>

        <div className="col-md-2 col-sm-2 mb-3 imagecorp1 imgcorp4 text-center" ref ="imgcorp4">
          <img className="img-fluid" src={require("../../../images/happy.png")} alt=""/>
          <p className="worktext"  style={{paddingTop:'15px', paddingLeft:'5px'}}><div>Relax! We are on it</div>
          <div> </div></p>

        </div>
        </div>
       
      </div>
      </div>
        <div className="how mobile">
        <h2 className="text-center headinghow">How it works?</h2>
        <div class="container">
          <div className=" mobilerow2">
        <div className="row ">
  
          <div className="col-md-5 col-sm-2 mb-3 imagecorp1 imgcorp1 text-center">
            <img className="img-fluid " src={require("../../../images/details.png")} alt="" />
            <p className="worktext" style={{paddingTop:'15px' }}><div>Fill in the details </div>
            <div>of the form above</div></p>
  
          </div>
          
          <div className="col-md-5 col-sm-2 mb-3 imagecorp1 imgcorp2 text-center" ref ="imgcorp2">
            <img className="img-fluid " src={require("../../../images/expert1.png")} alt="" />
            <p className="worktext" style={{paddingTop:'15px'}}><div>Our representative</div> <div>will get
             in touch </div> <div>for onboarding</div></p>
             </div>
             </div>
             <div className="row ">
         
          <div className="col-md-5 col-sm-2 mb-3 imagecorp1 imgcorp3 text-center" ref ="imgcorp3">
            <img className="img-fluid" src={require("../../../images/makepay.png")} alt="" />
            <p className="worktext" style={{paddingTop:'15px'}}>Complete your order</p>
            
          </div>
        
  
          <div className="col-md-5 col-sm-2 mb-3 imagecorp1 imgcorp4 text-center" ref ="imgcorp4">
            <img className="img-fluid" src={require("../../../images/happy.png")} alt=""/>
            <p className="worktext"  style={{paddingTop:'15px'}}><div>Relax! We are on it</div>
            <div> </div></p>
  
          </div>
          </div>
          </div>
         
        </div>
        </div>
        </div>

    );
  }
}
