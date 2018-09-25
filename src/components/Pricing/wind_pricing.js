import React, { Component } from "react";
import {Link} from 'react-router-dom';
import ProductNavbar from "../ProductNavbar/productnavbar";
import Footer from "../Footer/footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

export default class WindPricing extends Component {
  render() {
    return (
      <div className="mainbody1">
        <ProductNavbar
          subhead=" WIND UP+"
          url="windup+"
          priceurl="/products/windup+/pricing"
          type="pricing"
        />
        <div className="container windpricing" >
          <div className="row">
          <div className="col-md-3">
          </div>
            <div className="col-md-6">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> Winding Up of One Person Company
 </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 15,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                   
                    <div className="text-center">
                      <Link to = "/products/windup+">
                        <button type="button" className="btn button2">
                          <h6 className=" text-center heading6 ">
                            {"Let's get started"}
                          </h6>
                        </button>
                      </Link>
                    </div>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> Winding Up of Private Limited Company
 </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 16,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    
                    <div className="text-center">
                      <Link to = "/products/windup+">
                        <button type="button" className="btn button2">
                          <h6 className=" text-center heading6 ">
                            {"Let's get started"}
                          </h6>
                        </button>
                      </Link>
                    </div>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> Winding Up of Limited Liability Partnership
 </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 12,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                   
                    
                    <div className="text-center">
                      <Link to = "/products/windup+">
                        <button type="button" className="btn button2">
                          <h6 className=" text-center heading6 ">
                            {"Let's get started"}
                          </h6>
                        </button>
                      </Link>
                    </div>
                  </AccordionItemBody>
                </AccordionItem>

               
              </Accordion>
            </div>

            <div className="col-md-3">
          </div>
          </div>
          
            <div className="row">
           
           <div className="col-md-12 col-xs-6">
             <div className="charitybox">
             <div className="row ">
               <div className="col-md-4 charimage">
               <img src={require("../../images/charity.png")}/>
                   </div>
                   <div className="col-md-8">
                     <h2 className="charityhead">We Care</h2>
              <h5 className="charitytxt">There are millions who suffer due to lack of healthcare or can only dream of going to school. Value Plus is helping spread some goodness in the world.
                For every purchase you make, we contribute 5% of our professional fee towards health and education initiatives. </h5>


                   </div>
                   </div>

            </div>
           </div>
           <div className="col-md-2 col-xs-6">
           </div>
         </div>
        </div>
        <Footer />
      </div>
    );
  }
}