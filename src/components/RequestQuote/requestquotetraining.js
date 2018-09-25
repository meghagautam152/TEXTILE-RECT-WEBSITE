import React, {Component} from 'react';
import './request.css';
import Footer from '../Footer/footer';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import TrainingNavbar from '../TrainingNavbar/TrainingNavbar';
import _ from 'underscore';
import $ from "jquery";

export default class RequestQuoteTrain extends Component {
  constructor(props){

    super();

    this.state={
      services:[{
        service:"corporate",
        serviceName:"Accounting and Assurance services"},
        {
          service:"corporate",
          serviceName:"Goods and Services tax"},

          {
            service:"corporate",
            serviceName:"Corporate  Law/ Legal Advisory Services"},
            {
              service:"corporate",
              serviceName:"Advice on Company/Corporate law"},{
            service:"corporate",
            serviceName:"Merger & Acquisitions, Valuation Services"},
            {
              service:"corporate",
              serviceName:"Corporate Finance & Management Consultancy"},
              {
                service:"corporate",
                serviceName:"Income Tax / International Taxation Consultancy"},
                {
                  service:"corporate",
                  serviceName:"Investment/Advisory - Foreign Exchange Regulations"},
                  {
                    service:"corporate",
                    serviceName:"Services To Non-Residents / NRIs"},
                    {
                      service:"corporate",
                      serviceName:"Services To NGOs /Trusts Societies"},
                      {
                        service:"corporate",
                        serviceName:"Something else"},
                       
                      {
                        service:"startup",
                        serviceName:"Formation / Setup"},
                        {
                          service:"startup",
                          serviceName:"Managing Compliance"},
                          {
                            service:"startup",
                            serviceName:"Commercial Contracts"},
                            {
                              service:"startup",
                              serviceName:"Security Intellectual Properties Services"},
                              {
                                service:"startup",
                                serviceName:"Goods and Services Tax"},
                                {
                                  service:"startup",
                                  serviceName:"Investment or Funding transaction advisory"},
                                  {
                                    service:"startup",
                                    serviceName:"Shifting Headquarters Overseas"},
                                    {
                                      service:"startup",
                                      serviceName:"International Presence Strategy"},
                                      {
                                        service:"startup",
                                        serviceName:"Information System for Management"},
                                        {
                                          service:"startup",
                                          serviceName:"Business Process Engineering"},
                                          {
                                            service:"startup",
                                            serviceName:"Designing Equity Incentive Plans for Employees"},
                                            {
                                              service:"startup",
                                              serviceName:"Business Model Advisory"},
                                              {
                                                service:"startup",
                                                serviceName:"Something else"},



                                              {
                                                service:"social",
                                                serviceName:"Formation/Setup"},
                                                {
                                                  service:"social",
                                                  serviceName:"Managing Compliances"},

                                                  {
                                                    service:"social",
                                                    serviceName:"Securing Intellectual Properties"},
                                                    {
                                                      service:"social",
                                                      serviceName:"Audit and Assurance Services"},
                                                      {
                                                        service:"social",
                                                        serviceName:"Capacity Building"},
                                                        {
                                                          service:"social",
                                                          serviceName:"Goods and Services Tax"},
                                                          {
                                                            service:"social",
                                                            serviceName:"Certification under Sec 12A, 80G & FCRA"},
                                                            {
                                                              service:"social",
                                                              serviceName:"Solutions Design & Implementation"},
                                                              {
                                                                service:"social",
                                                                serviceName:"Grants and CSR Management"},
                                                                {
                                                                  service:"social",
                                                                  serviceName:"Impact Assessment"},
                                                                  {
                                                                    service:"social",
                                                                    serviceName:"Somebody else"},
                                                                    {
                                                                      service:"functional",
                                                                      serviceName:"Business Structuring"},
                                                                      {
                                                                        service:"functional",
                                                                        serviceName:"All"},

                                                                      {
                                                                        service:"functional",
                                                                        serviceName:"Understanding Finacial Statements"},
                                                                        {
                                                                          service:"functional",
                                                                          serviceName:"Compliance Management"},
                                                                          {
                                                                            service:"functional",
                                                                            serviceName:"Managing Intellectual Property"},
                                                                            {
                                                                              service:"functional",
                                                                              serviceName:"Funding Valuation"},
                                                                              {
                                                                                service:"functional",
                                                                                serviceName:"Negotiation and Contracting"},
                                                                                {
                                                                                  service:"strategic",
                                                                                  serviceName:"All"},
                                                                                {
                                                                                  service:"strategic",
                                                                                  serviceName:"Ideation Bootcamp"},
                                                                                  {
                                                                                    service:"strategic",
                                                                                    serviceName:"Product Market Fit"},
                                                                                    {
                                                                                      service:"strategic",
                                                                                      serviceName:"Business Modelling"},
                                                                                      {
                                                                                        service:"strategic",
                                                                                        serviceName:"Growth"},
                                                                                        {
                                                                                          service:"strategic",
                                                                                          serviceName:"Branding"},
                                                                                          {
                                                                                            service:"strategic",
                                                                                            serviceName:"Impact Design"},

                                                                                           
          
        ],
        pageNo:1,
        name: "",
        title:"",
        company:"",
        subject:"",
        email:"",
        phone:"",
        cityName:"",
        message:"",
        stateName:"",
        employee:"",
        showError:false,
        
        filterServices:[]
         };
         this.submitForm = this.submitForm.bind(this);
        
  }

  componentDidMount(){
    this.filterServiceByUrl(this.props.match.params.url);
  }


  filterServiceByUrl(category){

    var filter = [];


    filter = _.where(this.state.services,{service:category});

    this.setState({filterServices:filter});


    



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
        this.setState({pageNo:6});
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

case 1 :  status =  true ;
break;
case 2 : this.state.message.length> 0 ? status =  true : status= false;
break;
case 3 : this.state.cityName.length>0 && this.state.stateName.length > 0 ? status =  true : status= false
break;
case 4 :this.state.employee.length>0 ? status =  true : status= false
break;
case 5 :this.state.name.length>0 && this.state.email.length>0 && this.state.phone.length>0 ? status =  true : status= false
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

    const pageTitle = this.state.pageNo==1 ? 
    <div>What kind of assistance can we help you with?<sup>*</sup></div> : 
    (this.state.pageNo==2 ? <div>For better proposals help us with clear understanding of your goals and specific requirements? <sup>*</sup></div> : 
    (this.state.pageNo==3 ? <div>Tell us a little more so we a can help<sup>*</sup></div>  :
    
    (this.state.pageNo==4 ? <div>How Many Employees are there in your organisation<sup>*</sup></div> : <div>Tell us about yourself<sup>*</sup></div> )));

    return(
      <div className="mainbody">
      <ConsultingNavbar
       url = {url}
       type="send-a-query"
       subhead ={`${data.toUpperCase()}`}
        />
        <div className="request">
        <div class="container req">
          <div class="requestname">
          <h2 className="heading">Get free proposal</h2>
           
            <h5>{`(${data})`}</h5>
            <div style={this.state.pageNo==6 ? display : {}}> <h2 className="sub-heading-query">{pageTitle}</h2>
       {this.state.showError ? <small><sup>*</sup> fields are Required</small> : ""} 
           </div>
          </div>

      <div className="row">
      <div className="col-lg-8 mb-4">
      <div className="success-msg" style={this.state.pageNo==6 ? {} : display } ><h2>Thank You! Your submission has been recorded. We will get back to you shortly</h2></div>
        <form style={this.state.pageNo==6 ? display : {} } name="sentMessage" id="query" novalidate>
          <input type="hidden" className="form-control" id="subject" value={`Value Plus/${data}/Request a Quote`} required data-validation-required-message="Please enter your name."/>
          
         
          <div style={this.state.pageNo==3 ? {} :display } id="step3">
          
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

        <div style={this.state.pageNo==5 ? {} : display } id="step4">
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

          <div style={this.state.pageNo==1 ? {} : display }  id="step1">
          <div className="control-group form-group">
            <div className="controls">
             
              <select onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
              {this.state.filterServices.map((ser)=>{
                  return <option value={ser.service} key={ser.service}> {ser.serviceName} </option>;
                })}
              
            </select>
            </div>
          </div>
          </div>

       <div style={this.state.pageNo==4 ? {} :display } id="step4">
           
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
    
    <div style={this.state.pageNo==2 ? {} : display} id="step2" >
          <div className="control-group form-group">
            <div className="controls">
             
              <textarea rows="10" cols="100" onChange={this.onChange} value={this.state.message} className="form-control" id="message" required data-validation-required-message="Please enter your message" name="message" maxLength="999" style={{resize:'none'}}>
              </textarea>
            </div>
          </div>
          </div>
       
          {/*<!-- For success/fail messages -->*/}
          
          <div id="success"></div>
          <button style={this.state.pageNo==1 ? display : {}} onClick={() => this.changePage("PREV")} className="btn btn-primary mr-1" >Previous</button>
          <button style={this.state.pageNo==5 ? {} : display} onClick={this.submitForm} className="btn btn-primary mr-1" id="sendMessageButton">Submit</button> 
          <button style={this.state.pageNo==5 ? display : {}} onClick={() => this.changePage("NEXT")} className="btn btn-primary mr-1" >Next</button>
        </form>
      </div>
      </div>
    </div>
    </div>
    
    
  <Footer />
  
  </div>
    );
  }
}

