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

export default class ProtectPricing extends Component {
  render() {
    return (
      <div className="mainbody1">
        <ProductNavbar
          subhead="PROTECT+"
          url="protect+"
          priceurl="/products/protect+/pricing"
          type="pricing"
        />
        <div className="container protectpricing" >
          <div className="row">
            <div className="col-lg-6">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> Trademark Registration </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 2,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      {" "}
                      Trademark registration{" "}
                    </div>
                    <div className="pricingcontent">
                      Registration in one class
                    </div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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
                      <h2 className="pricehead"> Trademark Renewal </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 2,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent"> Trademark renewal </div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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
                      <h2 className="pricehead"> Trademark Object Reply </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      {" "}
                      Trademark reply filing{" "}
                    </div>
                    <div className="pricingcontent">Updates on status</div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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
                      <h2 className="pricehead"> Trademark Licensing </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 2,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent"> Check status </div>
                    <div className="pricingcontent"> Licensing agreement</div>
                    <div className="pricingcontent"> Filing</div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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

            <div className="col-lg-6">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> Trademark Transfer </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 22,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent"> Check status </div>
                    <div className="pricingcontent">Filing</div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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
                      <h2 className="pricehead"> Copyright Registration </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 19,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      {" "}
                      Copyright your Website, Videos, photographs, Logo,Books
                      and Software{" "}
                    </div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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
                      <h2 className="pricehead"> Copyright Objection Reply </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      {" "}
                      Copyright reply filing{" "}
                    </div>
                    <div className="pricingcontent">Updates on status</div>
                    <div className="text-center">
                      <Link to = "/products/protect+">
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
          </div>
          <div className="row">
           
           <div className="col-md-12 col-xs-6">
             <div className="charitybox">
             <div className="row ">
               <div className="col-md-4 charimage">
               <img  src={require("../../images/charity.png")}/>
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
