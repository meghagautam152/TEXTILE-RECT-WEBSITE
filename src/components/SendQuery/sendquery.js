import React,{Component} from 'react';
import ProductNavbar from '../ProductNavbar/productnavbar';
import DocsNavbar from '../Docsnavbar/navbarmain';
import TrainingNavbar from '../TrainingNavbar/TrainingNavbar';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import Footer from '../Footer/footer';
import Sendqueryhow from './Sendqueryhow';
import $ from "jquery";
import _ from "underscore";
import Rodal from 'rodal';
import{Link} from 'react-router-dom';
import 'rodal/lib/rodal.css'

export default class SendQuery extends Component{

  constructor(props){
    super();
    this.state={  name: "",
    title:"",
    company:"",
    subject:"",
    email:"",
    phone:"",
    cityName:"",
    message:"",
    stateName:"",
    employee:"",
    success: false,
    pageNo:1,
  showError:false};
    this.submitForm = this.submitForm.bind(this);
  }


  hide() {
    this.setState({ success: false });
}
  

  submitForm(e) {
    this.setState({showError:false});
if(!this.isValidate()){
this.setState({showError:true});
  return true;


}

    this.setState({ success: false });
    e.preventDefault();
    var api = "http://ficklebeans.com/mail/query.php";
    $.ajax({
      url: api,
      method: "GET",
      crossOrigin : true,
      data: {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        
        message:this.state.message,
        company:this.state.company+", Employees: "+this.state.employee+", City : "+this.state.cityName+", State: "+this.state.stateName,
        title:this.state.title,
         type:1,
        subject: `Value Plus/${this.props.match.params.url}/query`,
       
      },
      success: function(data) {
        this.setState({ success: true });
        this.setState({pageNo:5});
      }.bind(this),
      error: function(xhr, status, err) {}.bind(this)
    });
  }
  onChange = e => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

    isValidate(){

      var status = false;
      switch(this.state.pageNo){

case 1 : this.state.message.length> 0 ? status =  true : status= false;
break;
case 2 : this.state.cityName.length>0 && this.state.stateName.length > 0 ? status =  true : status= false
break;
case 3 :this.state.employee.length>0 ? status =  true : status= false
break;
case 4 :this.state.name.length>0 && this.state.email.length>0 && this.state.phone.length>0 ? status =  true : status= false
break;





      }
      return status;

     



      }
  changePage(type){
    this.setState({showError:false});
    if(type=="NEXT"){
  if(this.isValidate()){
  this.setState({pageNo:this.state.pageNo+1});

    }

    else{

      this.setState({showError:true});
    }








    }
    else{
      this.setState({pageNo:this.state.pageNo-1});
    }

  }


  render(){
    const display = {"display":"none"};
    const {url} = this.props.match.params;
    
    let data = url[0].toUpperCase();
    for(let i =1; i<url.length;i++){
      data+=url[i];
    }

    data = data.replace("-"," ").replace("-"," ");

    let priceurl;
    switch (url) {
      case "incorporate+":
        priceurl = "/incorporate+/pricing";
        break;
      case "comply+":
        priceurl = "/comply+/pricing";
        break;
      case "protect+":
        priceurl = "/protect+/pricing";
        break;
      case "tax+":
        priceurl = "/tax+/pricing";
        break;
      case "windup+":
        priceurl = "/windup+/pricing";
        break;
      default:

    }

    const pageTitle = this.state.pageNo==1 ? 
    <div>Your query <sup>*</sup></div> : 
    (this.state.pageNo==2 ? <div>Tell us a little more so we can help<sup>*</sup></div> : 
    (this.state.pageNo==3 ? <div>How many employees are there in your organisation<sup>*</sup></div>: "Tell us about yourself" ));

    return(
      <div>
      {(url==="startup"||url==="social"||url==="corporate")?
       (<ConsultingNavbar
        url = {url}
        type = "send-a-query"
        subhead ={`${data.toUpperCase()}`}
         />)
       :(
        (url==="strategic"||url==="functional")?
        (<TrainingNavbar
      url = {url}
      priceurl ={priceurl}
      type = "send-a-query"
      subhead = {`${data.toUpperCase()}`}
      />):
      ((
        (url==="docs")?
        (<DocsNavbar
      url = {url}
     
      type = "send-a-query"
      subhead = {`${data.toUpperCase()}`}
      />):
      (<ProductNavbar
        url = {url}
        priceurl ={priceurl}
        type = "send-a-query"
        subhead = {`${data.toUpperCase()}`}
        />))))
     
      }


     
     <div className="request">
      <div className="container req">
        <div className="requestname">
        <h2 className="heading1">Advice from experts</h2>
        <h5 className="heading34">{`(${data})`}</h5>
     <div style={this.state.pageNo==5 ? display : {}}> <h2 className="sub-heading-query">{pageTitle}</h2>
       {this.state.showError ? <small><sup>*</sup> fields are Required</small> : ""} 
           </div>
        </div>







    <div className="row">
          <div className="col-lg-8 mb-4">

<div className="success-msg" style={this.state.pageNo==5 ? {} : display } ><h2>Thank You! Your submission has been recorded. We will get back to you shortly</h2></div>

            <form style={this.state.pageNo==5 ? display : {} } name="sentMessage" id="query" className="send-form" novalidate>
              <input type="hidden"
              className="form-control"
              id="subject" value={`Value Plus/${data}/Send a Query`}
              required data-validation-required-message="Please enter your name." />



<div style={this.state.pageNo==4 ? {} : display } id="step4">
            <div className="control-group form-group">
              <div className="controls">
                <label> Title:</label>
                 <select  onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
                                      <option>Mr</option>
                                      <option>Ms</option>
                                      <option>Mrs</option>
                                      
                                    </select>
              
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>Name<sup>*</sup></label>
              <input type="text"
              className="form-control" id="name"
              name="name"
                onChange={this.onChange}
                value={this.state.name}
              required data-validation-required-message="Please enter your name."/>
              <p className="help-block"></p>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label> Name of your company</label>
              <input type="text"
              className="form-control" id="company"
              name="company"
                onChange={this.onChange}
                value={this.state.company}
              required data-validation-required-message="Please enter your name."/>
              <p className="help-block"></p>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label>Contact No<sup>*</sup></label>
              <input type="tel"
              name="phone"
              onChange={this.onChange}
              value={this.state.phone}
              className="form-control" id="phone"
              required data-validation-required-message="Please enter your phone number."/>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label>Email address<sup>*</sup></label>
              <input type="email"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
              className="form-control" id="email"
              required data-validation-required-message="Please enter your email address."/>
            </div>
          </div>
          </div>
         
        <div style={this.state.pageNo==2 ? {} :display } id="step2">
           
          <div className="control-group form-group">
            <div className="controls">
              <label>City Name:</label>
              <input type="text"
              className="form-control" id="name"
              name="cityName"
                onChange={this.onChange}
                value={this.state.cityName}
              required data-validation-required-message="Please enter your city"/>
              <p className="help-block"></p>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label>State</label>
              <input type="text"
              className="form-control" id="company"
              name="stateName"
                onChange={this.onChange}
                value={this.state.stateName}
              required data-validation-required-message="Please enter your state"/>
              <p className="help-block"></p>
            </div>
          </div>

        
          </div>

        <div style={this.state.pageNo==3 ? {} :display } id="step2">
           
           <div className="control-group form-group">
             <div className="controls">
            
               <input type="radio" name="employee" value="I am an Individual" onChange={this.onChange} /><label>&nbsp;&nbsp;I am an Individual</label><br/>
  <input type="radio" onChange={this.onChange}  name="employee" value="1-10" /><label>&nbsp;&nbsp;1 - 10 </label><br/>
  <input type="radio" onChange={this.onChange} value="11 - 50" name="employee" /><label>&nbsp;&nbsp;11 - 50</label><br/>
   <input type="radio" onChange={this.onChange} value="51- 200" name="employee" /><label>&nbsp;&nbsp;51- 200</label><br/>
  <input type="radio" onChange={this.onChange} value="201 - 500" name="employee" /><label>&nbsp;&nbsp;201 - 500</label><br/>
   <input type="radio" onChange={this.onChange} value="501 - 1000" name="employee"/><label>&nbsp;&nbsp;501 - 1000</label><br/>
  <input type="radio"  onChange={this.onChange} value="1000+" name="employee" /><label>&nbsp;&nbsp;1000+</label><br/>
             </div>
     </div>
          </div>
 
         
   
 


 <div style={this.state.pageNo==1 ? {} : display} id="step1">
          <div className="control-group form-group">
            <div className="controls">
            
              <textarea rows="10" cols="100"
              className="form-control" id="message"
              name="message"
                onChange={this.onChange}
                value={this.state.message}
              required data-validation-required-message="Please enter your message"
              maxlength="999" style={{resize:'none'}}></textarea>
            </div>
          </div>
          </div> 

    

          <div id="success"></div>
          <button style={this.state.pageNo==1 ? display : {}} onClick={() => this.changePage("PREV")} className="btn btn-primary mr-1" >Previous</button>
          <button style={this.state.pageNo==4 ? {} : display} onClick={this.submitForm} className="btn btn-primary mr-1" id="sendMessageButton">Submit</button> 
          <button style={this.state.pageNo==4 ? display : {}} onClick={() => this.changePage("NEXT")} className="btn btn-primary mr-1" >Next</button>
  
</form>





{/* 
<div className="tab">Name:
  <p><input placeholder="First name..." oninput="this.className = ''"/></p>
  <p><input placeholder="Last name..." oninput="this.className = ''"/></p>
</div>

<div class="tab">Contact Info:
  <p><input placeholder="E-mail..." oninput="this.className = ''"/></p>
  <p><input placeholder="Phone..." oninput="this.className = ''"/></p>
</div>

<div class="tab">Birthday:
  <p><input placeholder="dd" oninput="this.className = ''"/></p>
  <p><input placeholder="mm" oninput="this.className = ''"/></p>
  <p><input placeholder="yyyy" oninput="this.className = ''"/></p>
</div>

<div class="tab">Login Info:
  <p><input placeholder="Username..." oninput="this.className = ''"/></p>
  <p><input placeholder="Password..." oninput="this.className = ''"/></p>
</div>

<div >
  <div >
    <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
    <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
  </div>
</div>

<div >
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
</div>

</form>

      </div>

    </div> */}
    </div>
    </div>
    </div>
    </div>

  <Sendqueryhow/>
  
  <Footer />
 {/*  <Rodal visible={this.state.success} height={100} className="pop-up" animation="flip" onClose={this.hide.bind(this)} >
  <div><p>Thank you! Your response has been recorded, we will get back to you shortly</p></div>
</Rodal> */}
  </div>


    );
  }
}
