import React, { Component } from 'react';
import './corporate.css';
import ConsultingNavbar from '../../ConsultingNavbar/consultingnavbar';
import WhyChoose from '../../WhyChoose/whychoose';
import Footer from '../../Footer/footer';
import $ from 'jquery';
import{Link} from 'react-router-dom';
import ConsultingLgs from '../ConsultingLgs';
import HowItWorksconsult from "../HowItWorksconsult/howitworksconsult";
export default class Corporate extends Component {
  constructor(){
    super();
    this.handleLine =this.handleLine.bind(this);
  }
  componentDidMount(){
    this.handleLine();
  }
  handleLine(){
    const c1 = this.refs.c1;
    const c2 = this.refs.c2;
    const c3 = this.refs.c3;
    const c4 = this.refs.c4;
    const c5 = this.refs.c5;
    const c6 = this.refs.c6;
    const c7 = this.refs.c7;
    const c8 = this.refs.c8;
    const c9 = this.refs.c9;
    const c10 = this.refs.c10;
    const c11 = this.refs.c11;
    const c12 = this.refs.c12;

    const d1 = this.refs.d1;
    const d2 = this.refs.d2;
    const d3 = this.refs.d3;
    const d4 = this.refs.d4;
    const d5 = this.refs.d5;
    const d6 = this.refs.d6;
    const d7 = this.refs.d7;
    const d8 = this.refs.d8;
    const d9 = this.refs.d9;
    const d10 = this.refs.d10;
    const d11 = this.refs.d11;
    const d12= this.refs.d12;
   
    $(function() {
      $("#c1,#d1").hover(function() {
        $("#d1").css('height', '205px');
        $("#d1").css('overflow', 'unset')
        $("#d1-arrow").css({'margin-top':'-10px','left':'6%','opacity':'1'});
      }, function() {
        // on mouseout, reset the background colour
        $("#d1").css('height', '0px');
        $("#d1-arrow").css({'margin-top':'0px','opacity':'0'});
        $("#d1").css('overflow', 'hidden');
      });
    });
   
  $(function() {
    $("#c2,#d2").hover(function() {
      $("#d2").css('height', '170px');
      $("#d2").css('overflow', 'unset')
      $("#d2-arrow").css({'margin-top':'-10px','left':'35%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d2").css('height', '0px');
      $("#d2-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d2").css('overflow', 'hidden');
    });
  });
  $(function() {
    $("#c3,#d3").hover(function() {
      $("#d3").css('height', '205px');
      $("#d3").css('overflow', 'unset')
      $("#d3-arrow").css({'margin-top':'-10px','left':'62%','opacity':'1'});
    }, function() {
      // on mouseout, reset the background colour
      $("#d3").css('height', '0px');
      $("#d3-arrow").css({'margin-top':'0px','opacity':'0'});
      $("#d3").css('overflow', 'hidden');
    });
  });
``
$(function() {
  $("#c4,#d4").hover(function() {
    $("#d4").css('height', '250px');
    $("#d4").css('overflow', 'unset')
    $("#d4-arrow").css({'margin-top':'-10px','left':'80%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d4").css('height', '0px');
    $("#d4-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d4").css('overflow', 'hidden');
  });
});
``
$(function() {
  $("#c5,#d5").hover(function() {
    $("#d5").css('height', '250px');
    $("#d5").css('overflow', 'unset')
    $("#d5-arrow").css({'margin-top':'-10px','left':'15%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d5").css('height', '0px');
    $("#d5-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d5").css('overflow', 'hidden');
  });
});
``
$(function() {
  $("#c6,#d6").hover(function() {
    $("#d6").css('height', '280px');
    $("#d6").css('overflow', 'unset')
    $("#d6-arrow").css({'margin-top':'-10px','left':'37%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d6").css('height', '0px');
    $("#d6-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d6").css('overflow', 'hidden');
  });
});
``
$(function() {
  $("#c7,#d7").hover(function() {
    $("#d7").css('height', '230px');
    $("#d7").css('overflow', 'unset')
    $("#d7-arrow").css({'margin-top':'-10px','left':'58%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d7").css('height', '0px');
    $("#d7-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d7").css('overflow', 'hidden');
  });
});
``
$(function() {
  $("#c8,#d8").hover(function() {
    $("#d8").css('height', '300px');
    $("#d8").css('overflow', 'unset')
    $("#d8-arrow").css({'margin-top':'-10px','left':'80%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d8").css('height', '0px');
    $("#d8-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d8").css('overflow', 'hidden');
  });
});
$(function() {
  $("#c9,#d9").hover(function() {
    $("#d9").css('height', '280px');
    $("#d9").css('overflow', 'unset')
    $("#d9-arrow").css({'margin-top':'-10px','left':'30%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d9").css('height', '0px');
    $("#d9-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d9").css('overflow', 'hidden');
  });
});
$(function() {
  $("#c10,#d10").hover(function() {
    $("#d10").css('height', '225px');
    $("#d10").css('overflow', 'unset')
    $("#d10-arrow").css({'margin-top':'-10px','left':'46%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d10").css('height', '0px');
    $("#d10-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d10").css('overflow', 'hidden');
  });
});
$(function() {
  $("#c11,#d11").hover(function() {
    $("#d11").css('height', '260px');
    $("#d11").css('overflow', 'unset')
    $("#d11-arrow").css({'margin-top':'-10px','left':'65%','opacity':'1'});
  }, function() {
    // on mouseout, reset the background colour
    $("#d11").css('height', '0px');
    $("#d11-arrow").css({'margin-top':'0px','opacity':'0'});
    $("#d11").css('overflow', 'hidden');
  });
});





 }
  render() {
    return (
      <div className="mainbody">
      <ConsultingNavbar subhead = "CORPORATE" url = "corporate" />
       <div className="carousel slide" data-ride="carousel" id="1">
       <div className="carousel-inner">

         <div className="carousel-item active corporate">
           <div className="container textblock1 ">
             <div className="row mainrow big">
               <div className="col-lg-3 "></div>
               <div className="col-lg-6"><Link to="/consulting/corporate/request-a-proposal"><button type="button" className="button13"><h3 className="heading15">Post a Job and Get a Proposal</h3></button></Link></div>
               <div className="col-lg-3"></div>
               </div>
               <div className="row mainrow mobile">
               <div className="col-lg-3 col-1"></div>
               <div className="col-lg-6 col-7"><Link to="/consulting/corporate/request-a-proposal"><button type="button" className="button13"><h3 className="heading15">Post a Job and Get a Proposal</h3></button></Link></div>
               <div className="col-lg-3 col-3"></div>
               </div>
             </div>
           </div>


         </div>

       </div>
       <HowItWorksconsult/>
    
     




     <div className="row big" id="whatweoffer">
       <div className="container text-center">
         <h1  className="heading" style={{marginBottom:'150 px', textAlign:'center'}}>Popular Areas</h1>
         <div className="row circle-row1 mobilerow1">
          
           <div className="col-md-2 boxcor col-sm-2 mb-3 " id="c1">
           <img src={require("../../../images/c2.png")}/>
             <div className="nav-item ">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{
                                       padding: '8px 0px'}}><h5 className="consulttext">Accounting and Assurance services</h5></a>
               
             </div>

            </div>

           <div className="col-md-2 boxcor col-sm-2 mb-3"  id="c2">
           <img src={require("../../../images/c3.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '10px 10px '}}><h5 className="consulttext">Goods and Services tax</h5></a>
             
             </div>

           </div>
           <div className="col-md-2 boxcor col-sm-2 mb-3"  id="c3">
           <img src={require("../../../images/c4.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '10px 0px'}}><h5 className="consulttext">Corporate  Law/ Legal Advisory Services</h5></a>
               
             </div>

           </div>

           <div className="col-md-2 boxcor col-sm-2 mb-3" id="c4">
           <img src={require("../../../images/c5.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Advice on Company/Corporate law</h5></a>
               
                 
               </div>
             </div>
             
           </div>        





         <div className="row drop-box" id="d1">
         <div id="d1-arrow" className="arrow-up"></div>
         <div className="col-md-6 ">
     

                             <div className="list">
                              
                                <h4 class="dropcortext"> Statutory Audit</h4>
         
                                <h4 class="dropcortext">Internal Audit</h4>
         
         
                                <h4 class="dropcortext"> Design and implementation of Internal Control Systems</h4>
         
         
                                <h4 class="dropcortext">Design of Standard Operating Procedures</h4>
         
         
                                <h4 class="dropcortext">Design of Accounting Manuals</h4>
                                
         
                            </div>
                            </div>
         
                            <div className="col-md-6">
                            <div className="list">
         
                              
         
                                <h4 class="dropcortext">Operational Management Audit</h4>
         
         
         
                                <h4 class="dropcortext">Information Systems Audit</h4>
         
         
                                <h4 class="dropcortext">Stock Audit</h4>
         
         
                                <h4 class="dropcortext">Advice on various Accounting Issues</h4>
         
                                <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
         
                              
                            </div>
                            </div>
                          
           </div>
           <div className="row drop-box" id="d2">
           <div id="d2-arrow" className="arrow-up"></div>
             <div className="list text-center">
         <ul>
         <h4 class="dropcortext"> Registration Procedures</h4>
         
                            <h4 class="dropcortext">Compliances under GST</h4>
         
         
                            <h4 class="dropcortext"> Advisory Services</h4>
                            <h4 className="btn-dropdown2"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
                     </ul>
           </div>
           </div>
         
           <div className="row drop-box" id="d3">
           <div id="d3-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
             <div className="list ">
             <ul>
               <h4 class="dropcortext"> Legal Compliance & Due-diligence</h4>


               <h4 class="dropcortext"> Drafting, execution and registration of documents</h4>


               <h4 class="dropcortext"> Agreement to Sell/Sale Deeds for immovable properties</h4>


               <h4 class="dropcortext"> Distributorship/Franchise/Trade Marks Agreements</h4>


               <h4 class="dropcortext">Memorandum and Article of Association</h4>
               
             </ul>
           </div>
           </div>

           <div className="col-lg-6">
           <div className="list ">
              <ul>
             
               <h4 class="dropcortext"> Advice on real estate transactions, Property Development Agreements</h4>


               <h4 class="dropcortext"> Arbitration and conciliation matters</h4>


               <h4 class="dropcortext"> Company Secretarial Audit</h4>


               <h4 class="dropcortext"> Corporate Governance</h4>
               <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
             </ul>
           </div>
           </div>
           </div>
           

           <div className="row drop-box" id="d4">
           <div id="d4-arrow" className="arrow-up"></div>
             <div className="list text-center">
             <ul>
             <h4 class="dropcortext"> XBRL mode, online filing of forms on MCA21 & other filing compliances</h4>


               <h4 class="dropcortext"> Limited Liability Partnership Services</h4>


               <h4 class="dropcortext"> Securities and Corporate Laws Advising</h4>


               <h4 class="dropcortext"> Representation before Registrar of Companies, Regional Director, Company Law Board</h4>


               <h4 class="dropcortext"> Certificate and Compliance Report for Listed and Unlisted Companies</h4>


               <h4 class="dropcortext"> Preparation & Maintaining of various Statutory Records & Registers as required under Companies Act, 2013 </h4>
               <h4 className="btn-dropdown2"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
           </ul>

           </div>
           </div>











         <div className="row circle-row1 mobilerow1">
         
           <div className="col-md-2 boxcor col-sm-2 mb-3 " id="c5">
           <img src={require("../../../images/c6.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Merger & Acquisitions, Valuation Services</h5></a>
              
             </div>
         </div>

           <div className="col-md-2 boxcor col-sm-2 mb-3" id="c6">
           <img src={require("../../../images/c7.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Corporate Finance & Management Consultancy
                                                       </h5></a>
              
             </div>

           </div>
           

           <div className="col-md-2 boxcor col-sm-2 mb-3 " id="c7">
           <img src={require("../../../images/c8.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Income Tax / International Taxation Consultancy
                                                       </h5></a>
              
             </div>

           </div>
         
         <div className="col-md-2 boxcor col-sm-2 mb-3 " id="c8">
         <img src={require("../../../images/c9.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Investment/Advisory - Foreign Exchange Regulations</h5></a>
              
             </div>


             </div>
             </div>

             <div className="row drop-box" id="d5">
             <div id="d5-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
               <div className="list">
             <ul>


               <h4 class="dropcortext">Mergers & Acquisitions - Transaction Advisory- Direct Tax, Indirect Tax<br/> Companies Act, Corporate Laws, FEMA, Stamp Laws</h4>


               <h4 class="dropcortext"> Corporate group (Re)structuring</h4>


               <h4 class="dropcortext"> Share Valuation, Business valuation</h4>


               <h4 class="dropcortext"> M&A Valuation and Swap Ratio</h4>


               <h4 class="dropcortext"> ESOP Valuation, Tax Valuation</h4>
               
             </ul>
             </div>
           </div>
           <div className="col-lg-6">
             <div className="list">
             <ul>

               <h4 class="dropcortext"> FDI & ODI Valuation; Valuation for Regulatory Reporting</h4>


               <h4 class="dropcortext"> Fairness opinion, Purchase price allocations</h4>


               <h4 class="dropcortext"> Shareholders Agreements; Collaborations & Joint ventures</h4>


               <h4 class="dropcortext"> Legal & Financial Due-diligence</h4>


               <h4 class="dropcortext"> Competition law, policy and perspective</h4>


               <h4 class="dropcortext"> Transaction Advising Services</h4>


               <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>



             </ul>
             </div>
           </div>
           </div>
           

            <div className="row drop-box" id="d6">
            <div id="d6-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
               <div className="list">
               
               <ul>
                 <h4 class="dropcortext"> Strategic Management, Management consultancy</h4>


                 <h4 class="dropcortext"> Cost Reduction and Profit Improvement</h4>


                 <h4 class="dropcortext"> Financial Management and Control</h4>


                 <h4 class="dropcortext"> Equity Funding; Mobilisation of Resources</h4>


                 <h4 class="dropcortext"> Private Equity & Venture Capital funding</h4>


                 <h4 class="dropcortext"> Business Risk Management</h4>


                 <h4 class="dropcortext"> Management Information Systems</h4>
                
               </ul>
             </div>
             </div>

             <div className="col-lg-6">
               <div className="list">

               <ul>
                 <h4 class="dropcortext"> Project Report</h4>


                 <h4 class="dropcortext"> Cost Audit & Cost Compliances</h4>


                 <h4 class="dropcortext"> Cost Compliance Certificates</h4>


                 <h4 class="dropcortext"> Time Based Costing/ Budgeting</h4>


                 <h4 class="dropcortext"> Working Capital Management</h4>


                 <h4 class="dropcortext"> Target Costing</h4>


                 <h4 class="dropcortext"> Performance Evaluation</h4>

                 <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>


               </ul>
             </div>
           </div>
           </div>
           <div className="row drop-box" id="d7">
           <div id="d7-arrow" className="arrow-up"></div>
           <div className="col-lg-6">
             <div className="list">
           <ul>
             <h4 class="dropcortext">Tax Structuring, Tax Planning and Management</h4>


             <h4 class="dropcortext"> Consultation and compliances on Expatriates Tax</h4>


             <h4 class="dropcortext"> Compliances under income tax laws</h4>


             <h4 class="dropcortext"> Advisory services</h4>


             <h4 class="dropcortext"> Tax Audit</h4>


             <h4 class="dropcortext"> Representation before Assessing Officers, & Appellant Authorities</h4>
              </ul>
         </div>
</div>
         <div className="col-lg-6">
           <div className="list">
           <ul>
             

             <h4 class="dropcortext"> Transfer Pricing Advisory, and Audit for Domestic & International <br/>Transactions</h4>


             <h4 class="dropcortext"> Double Tax Avoidance Agreements analysis</h4>


             <h4 class="dropcortext"> Remittances/Repatriation of Foreign Exchange & withholding Tax issues</h4>


             <h4 class="dropcortext"> Tax Controversy and dispute resolutions</h4>


             <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>

           </ul>
         </div>
           </div>
           </div>

           <div className="row drop-box" id="d8">
           <div id="d8-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
               <div className="list1">
                     <ul>
                       <h4 class="dropcortext"> Consultancy/Entry Strategy Advice for <br/> Inbound investments and setting up of business in <br/>India by Foreign entities  and NRIs - Public<br/> Limited Company, Private Limied Company,<br/> Wholly Owned Subsidiary, Joint Venture, Downstream Investments,
                       <br/>  Limited Liability Partnership/ Firm, Branch Office,<br/> Liason Office, Project Office</h4>


                       <h4 class="dropcortext"> Consultancy/ Strategy Advice for Outbound investments by Indian  <br/>entities and
                         Resident Individuals</h4>


                       <h4 class="dropcortext"> RBI & FIPB Approvals, policy and perspective</h4>
                       
                     </ul>
                   </div>
                   </div>
                   <div className="col-lg-6">
                     <div className="list1">
                     <ul>
                       <h4 class="dropcortext"> Investment vehicles for foreign investors</h4>


                       <h4 class="dropcortext"> Advisory, planning & compliance services under <br/>Taxation Laws and Foreign Exchange Regulations</h4>




                       <h4 class="dropcortext"> Forex facilities, Deposits, Borrowings, Lending for<br/> Residents, and Non-Residents (including NRIs)</h4>


                       <h4 class="dropcortext"> Forex Due Diligence & Audit</h4>


                       <h4 class="dropcortext"> Business Model Selection</h4>


                       <h4 class="dropcortext"> Representation before RBI, FIPB, DoE,<br/> Compounding  Authority</h4>


                       <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
                     </ul>
                     </div>
                   </div>
           </div>
           
         <div className="row circle-row2 mobilerow5">

         

           <div className="col-md-2 boxcor col-sm-2 mb-3" id="c9">
           <img src={require("../../../images/c10.png")}/>

             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Services To Non-Residents / NRIs
                                                                   </h5></a>
              
             </div>

           </div>
           <div className="col-md-2 boxcor col-sm-2 mb-3" id="c10">
           <img src={require("../../../images/c11.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding:'6px 10px'}}><h5 className="consulttext"><div>Services To NGOs /Trusts /</div><div>Societies</div>
                                                           </h5></a>
            
             </div>

           </div>

           <div className="col-md-2 boxcor col-sm-2 mb-3"  id="c11">
           <img src={require("../../../images/c12.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '6px 0px'}}><h5 className="consulttext">Estate/Succession Planning
                                                               </h5></a>
             
             </div>

           </div>
         </div>
         <div className="row drop-box" id="d9">
         <div id="d9-arrow" className="arrow-up"></div>
         <div className="col-md-12">
           <div className="list text-center">
           <ul>
           <h4 className="dropcortext"> Taxation / FEMA</h4>


           <h4 className="dropcortext"> Taxability of Capital Gains/ Income earned /received <br/>in India</h4>


           <h4 className="dropcortext"> Obtaining Tax Exemption/ Lower deduction certificate from<br/> Income Tax Department</h4>


           <h4 className="dropcortext"> Remittances/ Repatriation of Foreign Exchange and withholding<br/>
            tax issues - Double Taxation Avoidance Agreement Advisory</h4>


           <h4 className="dropcortext"> Tax Planning, Investment Planning</h4>
           <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
           </ul>
           </div>
         </div>
         </div>
         <div className="row drop-box" id="d10">
         <div id="d10-arrow" className="arrow-up"></div>
         <div className="col-md-12">
           <div className="list text-center">
           <ul>
           <h4 className="dropcortext">Advisory services to NGOs - Charitable Trusts, <br/>Societies under Societies Registration Act, Section - 8 Companies</h4>


           <h4 className="dropcortext"> Audits of NGOs/Trusts </h4>


           <h4 className="dropcortext"> Income tax Compliance, Exemptions, and Tax Planning </h4>


           <h4 className="dropcortext"> Compliances under Foreign Contribution Regulations Act </h4>

           <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
         </ul>

           </div>
         </div>
         </div>
         <div className="row drop-box" id="d11">
         <div id="d11-arrow" className="arrow-up"></div>
         <div className="col-md-12">
           <div className="list text-center ">
           <ul>
           <h4 className="dropcortext"> Taxation / FEMA</h4>


           <h4 className="dropcortext"> Taxability of Capital Gains/ Income earned /received in India</h4>


           <h4 className="dropcortext"> Obtaining Tax Exemption/ Lower deduction certificate from <br/>Income Tax Department</h4>


           <h4 className="dropcortext"> Remittances/ Repatriation of Foreign Exchange and withholding<br/> tax issues - Double Taxation Avoidance Agreement Advisory</h4>


           <h4 className="dropcortext"> Tax Planning, Investment Planning</h4>
           <h4 className="btn-dropdown5"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
           </ul>
           </div>
         </div>
         </div>
        

        
       
       </div>
       </div>



       <div className="row mobile" id="whatweoffer">
       <div className="container text-center">
         <h1  className="heading" style={{marginBottom:'150 px', textAlign:'center'}}>Popular Areas</h1>
         <div className="row circle-row1 mobilerow1">
          
           <div className=" boxcor col-5 col-sm-4 mb-3 " id="c1">
           <img src={require("../../../images/c2.png")}/>
             <div className="nav-item ">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{
                                       padding: '8px 0px'}}><h5 className="consulttext">Accounting and Assurance services</h5></a>
               
             </div>

            </div>

           <div className=" boxcor col-5 col-sm-4 mb-3"  id="c2">
           <img src={require("../../../images/c3.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '10px 10px '}}><h5 className="consulttext">Goods and Services tax</h5></a>
             
             </div>
             </div>

           </div>
           <div className="row drop-box" id="d1">
         <div id="d1-arrow" className="arrow-up"></div>
         <div className="col-6 ">
     

                             <div className="list">
                              
                                <h4 class="dropcortext"> Statutory Audit</h4>
         
                                <h4 class="dropcortext">Internal Audit</h4>
         
         
                                <h4 class="dropcortext"> Design and implementation of Internal Control Systems</h4>
         
         
                                <h4 class="dropcortext">Design of Standard Operating Procedures</h4>
         
         
                                <h4 class="dropcortext">Design of Accounting Manuals</h4>
                                
         
                            </div>
                            </div>
         
                            <div className="col-6">
                            <div className="list">
         
                              
         
                                <h4 class="dropcortext">Operational Management Audit</h4>
         
         
         
                                <h4 class="dropcortext">Information Systems Audit</h4>
         
         
                                <h4 class="dropcortext">Stock Audit</h4>
         
         
                                <h4 class="dropcortext">Advice on various Accounting Issues</h4>
         
                                <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
         
                              
                            </div>
                            </div>
                          
           </div>
           <div className="row drop-box" id="d2">
           <div id="d2-arrow" className="arrow-up"></div>
             <div className="list text-center">
         <ul>
         <h4 class="dropcortext"> Registration Procedures</h4>
         
                            <h4 class="dropcortext">Compliances under GST</h4>
         
         
                            <h4 class="dropcortext"> Advisory Services</h4>
                            <h4 className="btn-dropdown2"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
                     </ul>
           </div>
           </div>
         
           <div className="row circle-row1 mobilerow1">
           <div className=" boxcor col-5 col-sm-5 mb-3"  id="c3">
           <img src={require("../../../images/c4.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '10px 0px'}}><h5 className="consulttext">Corporate  Law/ Legal Advisory Services</h5></a>
               
             </div>

           </div>

           <div className=" boxcor col-5 col-sm-5 mb-3" id="c4">
           <img src={require("../../../images/c5.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Advice on Company/ Corporate law</h5></a>
               
                 
               </div>
             </div>
             
           </div>        





        
           <div className="row drop-box" id="d3">
           <div id="d3-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
             <div className="list ">
             <ul>
               <h4 class="dropcortext"> Legal Compliance & Due-diligence</h4>


               <h4 class="dropcortext"> Drafting, execution and registration of documents</h4>


               <h4 class="dropcortext"> Agreement to Sell/Sale Deeds for immovable properties</h4>


               <h4 class="dropcortext"> Distributorship/Franchise/Trade Marks Agreements</h4>


               <h4 class="dropcortext">Memorandum and Article of Association</h4>
               
             </ul>
           </div>
           </div>

           <div className="col-lg-6">
           <div className="list ">
              <ul>
             
               <h4 class="dropcortext"> Advice on real estate transactions, Property Development Agreements</h4>


               <h4 class="dropcortext"> Arbitration and conciliation matters</h4>


               <h4 class="dropcortext"> Company Secretarial Audit</h4>


               <h4 class="dropcortext"> Corporate Governance</h4>
               <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
             </ul>
           </div>
           </div>
           </div>
           

           <div className="row drop-box" id="d4">
           <div id="d4-arrow" className="arrow-up"></div>
             <div className="list text-center">
             <ul>
             <h4 class="dropcortext"> XBRL mode, online filing of forms on MCA21 & other filing compliances</h4>


               <h4 class="dropcortext"> Limited Liability Partnership Services</h4>


               <h4 class="dropcortext"> Securities and Corporate Laws Advising</h4>


               <h4 class="dropcortext"> Representation before Registrar of Companies, Regional Director, Company Law Board</h4>


               <h4 class="dropcortext"> Certificate and Compliance Report for Listed and Unlisted Companies</h4>


               <h4 class="dropcortext"> Preparation & Maintaining of various Statutory Records & Registers as required under Companies Act, 2013 </h4>
               <h4 className="btn-dropdown2"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
           </ul>

           </div>
           </div>











         <div className="row circle-row1 mobilerow1">
         
           <div className=" boxcor col-5 col-sm-2 mb-3 " id="c5">
           <img src={require("../../../images/c6.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Merger & Acquisitions, Valuation Services</h5></a>
              
             </div>
         </div>

           <div className="boxcor col-5 col-sm-2 mb-3" id="c6">
           <img src={require("../../../images/c7.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Corporate Finance & Management Consultancy
                                                       </h5></a>
              
             </div>
             </div>
           </div>
           <div className="row circle-row1 mobilerow1">
         

           <div className=" boxcor col-5 col-sm-2 mb-3 " id="c7">
           <img src={require("../../../images/c8.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Income Tax / International Taxation Consultancy
                                                       </h5></a>
              
             </div>

           </div>
         
         <div className=" boxcor col-5 col-sm-2 mb-3 " id="c8">
         <img src={require("../../../images/c9.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Investment/ Advisory - Foreign Exchange Regulations</h5></a>
              
             </div>


             </div>
             </div>

             <div className="row drop-box" id="d5">
             <div id="d5-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
               <div className="list">
             <ul>


               <h4 class="dropcortext">Mergers & Acquisitions - Transaction Advisory- Direct Tax, Indirect Tax<br/> Companies Act, Corporate Laws, FEMA, Stamp Laws</h4>


               <h4 class="dropcortext"> Corporate group (Re)structuring</h4>


               <h4 class="dropcortext"> Share Valuation, Business valuation</h4>


               <h4 class="dropcortext"> M&A Valuation and Swap Ratio</h4>


               <h4 class="dropcortext"> ESOP Valuation, Tax Valuation</h4>
               
             </ul>
             </div>
           </div>
           <div className="col-lg-6">
             <div className="list">
             <ul>

               <h4 class="dropcortext"> FDI & ODI Valuation; Valuation for Regulatory Reporting</h4>


               <h4 class="dropcortext"> Fairness opinion, Purchase price allocations</h4>


               <h4 class="dropcortext"> Shareholders Agreements; Collaborations & Joint ventures</h4>


               <h4 class="dropcortext"> Legal & Financial Due-diligence</h4>


               <h4 class="dropcortext"> Competition law, policy and perspective</h4>


               <h4 class="dropcortext"> Transaction Advising Services</h4>


               <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>



             </ul>
             </div>
           </div>
           </div>
           

            <div className="row drop-box" id="d6">
            <div id="d6-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
               <div className="list">
               
               <ul>
                 <h4 class="dropcortext"> Strategic Management, Management consultancy</h4>


                 <h4 class="dropcortext"> Cost Reduction and Profit Improvement</h4>


                 <h4 class="dropcortext"> Financial Management and Control</h4>


                 <h4 class="dropcortext"> Equity Funding; Mobilisation of Resources</h4>


                 <h4 class="dropcortext"> Private Equity & Venture Capital funding</h4>


                 <h4 class="dropcortext"> Business Risk Management</h4>


                 <h4 class="dropcortext"> Management Information Systems</h4>
                
               </ul>
             </div>
             </div>

             <div className="col-lg-6">
               <div className="list">

               <ul>
                 <h4 class="dropcortext"> Project Report</h4>


                 <h4 class="dropcortext"> Cost Audit & Cost Compliances</h4>


                 <h4 class="dropcortext"> Cost Compliance Certificates</h4>


                 <h4 class="dropcortext"> Time Based Costing/ Budgeting</h4>


                 <h4 class="dropcortext"> Working Capital Management</h4>


                 <h4 class="dropcortext"> Target Costing</h4>


                 <h4 class="dropcortext"> Performance Evaluation</h4>

                 <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>


               </ul>
             </div>
           </div>
           </div>
           <div className="row drop-box" id="d7">
           <div id="d7-arrow" className="arrow-up"></div>
           <div className="col-lg-6">
             <div className="list">
           <ul>
             <h4 class="dropcortext">Tax Structuring, Tax Planning and Management</h4>


             <h4 class="dropcortext"> Consultation and compliances on Expatriates Tax</h4>


             <h4 class="dropcortext"> Compliances under income tax laws</h4>


             <h4 class="dropcortext"> Advisory services</h4>


             <h4 class="dropcortext"> Tax Audit</h4>


             <h4 class="dropcortext"> Representation before Assessing Officers, & Appellant Authorities</h4>
              </ul>
         </div>
</div>
         <div className="col-lg-6">
           <div className="list">
           <ul>
             

             <h4 class="dropcortext"> Transfer Pricing Advisory, and Audit for Domestic & International <br/>Transactions</h4>


             <h4 class="dropcortext"> Double Tax Avoidance Agreements analysis</h4>


             <h4 class="dropcortext"> Remittances/Repatriation of Foreign Exchange & withholding Tax issues</h4>


             <h4 class="dropcortext"> Tax Controversy and dispute resolutions</h4>


             <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>

           </ul>
         </div>
           </div>
           </div>

           <div className="row drop-box" id="d8">
           <div id="d8-arrow" className="arrow-up"></div>
             <div className="col-lg-6">
               <div className="list1">
                     <ul>
                       <h4 class="dropcortext"> Consultancy/Entry Strategy Advice for <br/> Inbound investments and setting up of business in <br/>India by Foreign entities  and NRIs - Public<br/> Limited Company, Private Limied Company,<br/> Wholly Owned Subsidiary, Joint Venture, Downstream Investments,
                       <br/>  Limited Liability Partnership/ Firm, Branch Office,<br/> Liason Office, Project Office</h4>


                       <h4 class="dropcortext"> Consultancy/ Strategy Advice for Outbound investments by Indian  <br/>entities and
                         Resident Individuals</h4>


                       <h4 class="dropcortext"> RBI & FIPB Approvals, policy and perspective</h4>
                       
                     </ul>
                   </div>
                   </div>
                   <div className="col-lg-6">
                     <div className="list1">
                     <ul>
                       <h4 class="dropcortext"> Investment vehicles for foreign investors</h4>


                       <h4 class="dropcortext"> Advisory, planning & compliance services under <br/>Taxation Laws and Foreign Exchange Regulations</h4>




                       <h4 class="dropcortext"> Forex facilities, Deposits, Borrowings, Lending for<br/> Residents, and Non-Residents (including NRIs)</h4>


                       <h4 class="dropcortext"> Forex Due Diligence & Audit</h4>


                       <h4 class="dropcortext"> Business Model Selection</h4>


                       <h4 class="dropcortext"> Representation before RBI, FIPB, DoE,<br/> Compounding  Authority</h4>


                       <h4 className="btn-dropdown"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
                     </ul>
                     </div>
                   </div>
           </div>
           
         <div className="row circle-row1 mobilerow1">

         

           <div className=" boxcor col-5 col-sm-2 mb-3" id="c9">
           <img src={require("../../../images/c10.png")}/>

             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '8px 0px'}}><h5 className="consulttext">Services To Non-Residents / NRIs
                                                                   </h5></a>
              
             </div>

           </div>
           <div className=" boxcor col-5 col-sm-2 mb-3" id="c10">
           <img src={require("../../../images/c11.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding:'6px 10px'}}><h5 className="consulttext"><div>Services To NGOs /Trusts /</div><div>Societies</div>
                                                           </h5></a>
            
             </div>

           </div>
           </div>
           <div className="row circle-row1 mobilerow1">
           <div className=" boxcor col-5 col-sm-2 mb-3"  id="c11">
           <img src={require("../../../images/c12.png")}/>
             <div className="nav-item dropdown">
               <a className="nav-link circle2 " href="javascript:void(0)" id="product-toggle" role="button" data-toggle="dropdown" style={{display: 'block',
               padding: '6px 0px'}}><h5 className="consulttext">Estate/Succession Planning
                                                               </h5></a>
             
             </div>

           </div>
         </div>
         <div className="row drop-box" id="d9">
         <div id="d9-arrow" className="arrow-up"></div>
         <div className="col-md-12">
           <div className="list text-center">
           <ul>
           <h4 className="dropcortext"> Taxation / FEMA</h4>


           <h4 className="dropcortext"> Taxability of Capital Gains/ Income earned /received <br/>in India</h4>


           <h4 className="dropcortext"> Obtaining Tax Exemption/ Lower deduction certificate from<br/> Income Tax Department</h4>


           <h4 className="dropcortext"> Remittances/ Repatriation of Foreign Exchange and withholding<br/>
            tax issues - Double Taxation Avoidance Agreement Advisory</h4>


           <h4 className="dropcortext"> Tax Planning, Investment Planning</h4>
           <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
           </ul>
           </div>
         </div>
         </div>
         <div className="row drop-box" id="d10">
         <div id="d10-arrow" className="arrow-up"></div>
         <div className="col-md-12">
           <div className="list text-center">
           <ul>
           <h4 className="dropcortext">Advisory services to NGOs - Charitable Trusts, <br/>Societies under Societies Registration Act, Section - 8 Companies</h4>


           <h4 className="dropcortext"> Audits of NGOs/Trusts </h4>


           <h4 className="dropcortext"> Income tax Compliance, Exemptions, and Tax Planning </h4>


           <h4 className="dropcortext"> Compliances under Foreign Contribution Regulations Act </h4>

           <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
         </ul>

           </div>
         </div>
         </div>
         <div className="row drop-box" id="d11">
         <div id="d11-arrow" className="arrow-up"></div>
         <div className="col-md-12">
           <div className="list text-center ">
           <ul>
           <h4 className="dropcortext"> Taxation / FEMA</h4>


           <h4 className="dropcortext"> Taxability of Capital Gains/ Income earned /received in India</h4>


           <h4 className="dropcortext"> Obtaining Tax Exemption/ Lower deduction certificate from <br/>Income Tax Department</h4>


           <h4 className="dropcortext"> Remittances/ Repatriation of Foreign Exchange and withholding<br/> tax issues - Double Taxation Avoidance Agreement Advisory</h4>


           <h4 className="dropcortext"> Tax Planning, Investment Planning</h4>
           <h4 className="btn-dropdown1"><Link to="/consulting/corporate/request-a-proposal"><button className="btn btn-info button14"><h4 className="heading6">Get Free Proposal</h4></button></Link></h4>
           </ul>
           </div>
         </div>
         </div>
        

        
       
       </div>
       </div>
     
     
     <WhyChoose url = "corporate" />
    
     <Footer />


          </div>
    );
  }
}
