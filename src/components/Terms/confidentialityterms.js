import React, { Component } from 'react';
import './term.css';

import NavbarMain from '../NavbarMain/navbarmain';
import Footer from '../Footer/footer';

export default class Confidentialityterms extends Component {
  render() {
    return (
      <div className="mainbody  ">
      <NavbarMain />
    <header>
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner ">

        <div className="carousel-item active  terms">

          <h1 className="head" style={{paddingTop:'90px'}}>Confidentiality Policy</h1>
        </div>
      </div>
    </div>

  </header>
  <div className="container">


    <div className="row" id="whatwedoterms">
   <div className="termhead"><br/><br/>CONFIDENTIALITY POLICY</div>
   <div className="termcontent"> At Value Plus Consultants Pvt Ltd, we place a major emphasis on maintaining confidentiality of Client information and Information Security Management. The following are key features of our Confidentiality Agreement, applicable to all our clients.
    We do not disclose any information pertaining to our Clients to any third parties.
    We do not use our Clients identity or Clients brand for our marketing purposes, without their written consent.
    We never provide our Client's name or Client's information to other prospective clients for marketing purposes.
    We do not sell or disclose our Client list or Client Information to third parties.<br/><br/></div>
    
    <div className="termhead"> CONFIDENTIALITY AGREEMENT</div>
    <div className="termcontent"> It is understood and agreed to that an Value Plus Client may provide certain information that is and must be kept confidential. To ensure the protection of such information, and to preserve any confidentiality necessary under patent and/or trade secret laws, it is agreed that:
    The Confidential Information to be disclosed can be described as and includes Invention description(s), technical and business information relating to proprietary ideas and inventions, ideas, patentable ideas, trade secrets, drawings and/or illustrations, patent searches, existing and/or contemplated products and services, research and development, production, costs, profit and margin information, finances and financial projections, customers, clients, marketing, and current or future business plans and models, regardless of whether such information is designated as "Confidential Information" at the time of its disclosure.
     Value Plus shall limit disclosure of Confidential Information within its own organization to its directors, officers, partners, members, employees and/or independent contractors (collectively referred to as "affiliates") having a need to know. Value Plus and affiliates will not disclose the confidential information obtained from the discloser unless required to do so by law.
    This Agreement imposes no obligation upon Value Plus with respect to any Confidential Information (a) that was in Value Plus possession before receipt from Value Plus Client; (b) is or becomes a matter of public knowledge through no fault of Value Plus; (c) is rightfully received by Value Plus from a third party not owing a duty of confidentiality to the Value Plus Client; (d) is disclosed without a duty of confidentiality to a third party by, or with the authorization of Value Plus; (e) is public knowledge or the information is available in public domain; or (f) is independently derived by Value Plus.
    This Agreement states the entire agreement between Value Plus and Value Plus Client concerning the disclosure of Confidential Information. Any addition or modification to this Agreement must be made in writing and signed by the parties.
    If any of the provisions of this Agreement are found to be unenforceable, the remainder shall be enforced as fully as possible and the unenforceable provision(s) shall be deemed modified to the limited extent required to permit enforcement of the Agreement as a whole.
    You are solely responsible any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.<br/><br/></div>
     
    
    
     
    
    </div>

   
  </div>
  <Footer />
 </div>


    );
  }
}
