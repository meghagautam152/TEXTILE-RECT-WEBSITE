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

export default class ComplyPricing extends Component {
  render() {
    return (
      <div className="mainbody">
        <ProductNavbar
          subhead="COMPLY+"
          url="comply+"
          priceurl="/products/comply+/pricing"
          type="pricing"
        />

        <div className="container complypricing" >
          <div className="row">
            <div className="col-lg-6">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead">
                        {" "}
                        ROC Compliance of Pvt Ltd{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 6,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC Filing</div>
                    <div className="text-center">
                      <Link to="products/comply+">
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
                      <h2 className="pricehead">
                        {" "}
                        ROC Compliance of One Company{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead"> ROC Compliance of LLP </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead">
                        {" "}
                        Compliance Package of Pvt Ltd{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 24,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">ITR filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="pricingcontent">Statuory audit</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead">
                        {" "}
                        Compliance Package of One Person Company{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 22,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">ITR filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="pricingcontent">Statuory audit</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead">
                        {" "}
                        Compliance Package of LLP{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 19,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">ITR filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="pricingcontent">Statuory audit</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead"> Appointment of Director </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead"> Resignation of Director </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead"> Change in Name </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">Secretarial Compliance</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead">
                        {" "}
                        Change in Registered Address{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
                      <h2 className="pricehead">
                        {" "}
                        Alteration of Share Capital{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">ROC filing</div>
                    <div className="pricingcontent">Secretarial compliance</div>
                    <div className="text-center">
                    <Link to="/products/comply+">
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
