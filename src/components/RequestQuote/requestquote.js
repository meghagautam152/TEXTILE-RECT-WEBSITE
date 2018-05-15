import React, {Component} from 'react';
import './request.css';
import Footer from '../Footer/footer';
import ConsultingNavbar from '../ConsultingNavbar/consultingnavbar';
import _ from 'underscore';

export default class RequestQuote extends Component {
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
                                                                                            serviceName:"Impact Design"}
                            
          
        ],
        filterServices:[]
         };

        
  }

  componentDidMount(){
    this.filterServiceByUrl(this.props.match.params.url);
  }


  filterServiceByUrl(category){
debugger;
    var filter = [];


    filter = _.where(this.state.services,{service:category});

    this.setState({filterServices:filter});


    



  }
  render(){
    const {url} = this.props.match.params;
    let data = url[0].toUpperCase();
    for(let i =1; i<url.length;i++){
      data+=url[i];
    }
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
            <h2 class=" heading ">Request a Proposal</h2>
            <h5>{`(${data})`}</h5>
          </div>

      <div className="row">
      <div className="col-lg-8 mb-4">
        <form name="sentMessage" id="query" novalidate>
          <input type="hidden" className="form-control" id="subject" value={`Value Plus/${data}/Request a Quote`} required data-validation-required-message="Please enter your name."/>
          <div className="control-group form-group">
            <div className="controls">
              <label> Title:</label>
              <select onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
              
            </select>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>Name:</label>
              <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name."/>
              <p className="help-block"></p>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label> Name of your company:</label>
              <input type="text" className="form-control" id="company" required data-validation-required-message="Please enter your name."/>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>Contact No:</label>
              <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>Email Address:</label>
              <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address."/>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label> Our Services:</label>
              <select onChange={this.onChange} className="form-control" name="typeOfEntity" placeholder="Type of entity">
              {this.state.filterServices.map((ser)=>{
                  return <option value={ser.service} key={ser.service}> {ser.serviceName} </option>;
                })}
              
            </select>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>For better proposals help us with clear understanding of your goals and specific requirements?</label>
              <textarea rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="999" style={{resize:'none'}}>
              </textarea>
            </div>
          </div>
          <div id="success"></div>
          {/*<!-- For success/fail messages -->*/}
          <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
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
