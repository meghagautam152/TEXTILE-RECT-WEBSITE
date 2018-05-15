import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductNavbar from "../ProductNavbar/productnavbar";
import Footer from "../Footer/footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

export default class TaxPricing extends Component {
  render() {
    return (
      <div className="mainbody">
        <ProductNavbar subhead="TAX+" url="tax+" priceurl="/products/tax+/pricing" type="pricing"/>
        <div className="container taxpricing" >
          <div className="row">
            <div className="col-lg-6">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> GST Registration </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 3,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">GST registration</div>
                    <div className="text-center">
                      <Link to="/products/tax+">
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
                      <h2 className="pricehead"> GST Migration</h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 2,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">GST migration</div>
                    <div className="text-center">
                      <Link to="/products/tax+">
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
                      <h2 className="pricehead"> GST Compliance </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 14,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      GST monthly, Quarterly & Annual Compliance
                    </div>
                    <div className="text-center">
                      <Link to="/products/tax+">
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
                      <h2 className="pricehead"> TDS Compliance </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">TDS filing</div>
                    <div className="text-center">
                      <Link to="/products/tax+">
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
                      <h2 className="pricehead"> Income Tax Compliance </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 9,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ITR filing</div>
                    <div className="text-center">
                      <Link to="/products/tax+">
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
        </div>
        <Footer />
      </div>
    );
  }
}
