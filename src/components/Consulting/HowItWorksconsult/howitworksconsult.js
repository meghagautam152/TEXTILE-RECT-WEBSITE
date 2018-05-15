import React,{Component} from 'react';
import $ from 'jquery';
import './howitworksconsult.css';

export default class HowItWorksconsult extends Component{
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
      $(".line1").css('border-color', '#1BF1B7');
    }, function() {
      // on mouseout, reset the background colour
      $(".line1").css('border-color', 'white');
    });
  });

  $(function() {
    $(".imgcorp3").hover(function() {
      $(".line1").css('border-color', '#1BF1B7');
      $(".line2").css('border-color', '#1BF1B7');
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
      <div className="row customers9">
      <div className="col-md-1"></div>
        <div className="col-md-2  col-sm-2 imagecorp1 imgcorp1 text-center">
          <img className="img-fluid " src={require("../../../images/howconsult.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px' }}><div>Post a job</div></p>

        </div>
        <div className="col-md-2 line1"> </div>
        <div className="col-md-2 col-sm-2  imagecorp1 imgcorp2 text-center" ref ="imgcorp2">
          <img className="img-fluid " src={require("../../../images/howconsult1.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px'}}><div>Get proposal</div></p>
           </div>

       
        <div className="col-md-2 line2"></div>
        <div className="col-md-2 col-sm-2  imagecorp1 imgcorp3 text-center" ref ="imgcorp3">
          <img className="img-fluid" src={require("../../../images/howconsult2.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Hire an expert</p>
          
        </div>
        <div className="col-md-1"></div>
        </div>
       
      </div>
      </div>
      <div className="how mobile">
      <h2 className="text-center headinghow">How it works?</h2>
      <div class="container">
      <div className="row mobile11">
      <div className="col-md-1"></div>
        <div className="col-md-3  col-sm-2 imagecorp imgcorp1 text-center">
          <img className="img-fluid " src={require("../../../images/howconsult.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px' }}><div>Post a job</div></p>

        </div>
        
        <div className="col-md-3 col-sm-2  imagecorp imgcorp2 text-center" ref ="imgcorp2">
          <img className="img-fluid " src={require("../../../images/howconsult1.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px'}}><div>Get proposal</div></p>
           </div>

       
        
        <div className="col-md-3 col-sm-2  imagecorp imgcorp3 text-center" ref ="imgcorp3">
          <img className="img-fluid" src={require("../../../images/howconsult2.png")} alt="" />
          <p className="worktext" style={{paddingTop:'15px', paddingLeft:'5px'}}>Hire an expert</p>
          
        </div>
        <div className="col-md-1"></div>
        </div>
       
      </div>
      </div>
      </div>

    );
  }
}
