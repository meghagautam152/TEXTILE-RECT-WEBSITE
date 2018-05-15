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

export default class IncorporatePricing extends Component {
  render() {
    return (
      <div className="mainbody">
        <ProductNavbar
          subhead="INCORPORATE+"
          url="incorporate+"
          priceurl="../products/incorporate+/pricing"
          type="pricing"
        />
        <div className="container incorporatepricing">
          <div className="row">
            <div className="col-lg-6">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <button className="accordion-btn ">
                      <h2 className="pricehead"> Private Limited Companies </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 9,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for one director
                    </div>
                    <div className="pricingcontent">DIN of 2 directors</div>
                    <div className="pricingcontent">Name reservation</div>
                    <div className="pricingcontent">
                      Certificate of incorporation
                    </div>
                    <div className="pricingcontent">Copy of MOA and AOA</div>
                    <div className="pricingcontent">Share certificates</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Public Limited Companies </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 19,999  +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for one director
                    </div>
                    <div className="pricingcontent">DIN of 3 directors</div>
                    <div className="pricingcontent">Name reservation</div>
                    <div className="pricingcontent">
                      Certificate of incorporation
                    </div>
                    <div className="pricingcontent">
                      5 Copies of MOA and AOA
                    </div>
                    <div className="pricingcontent">Share certificates</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> One Person Company  </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 7,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for one director
                    </div>
                    <div className="pricingcontent">DIN of 2 directors</div>
                    <div className="pricingcontent">Name reservation</div>
                    <div className="pricingcontent">
                      Certificate of incorporation
                    </div>
                    <div className="pricingcontent">Copy of MOA and AOA</div>
                    <div className="pricingcontent">Share certificates</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                        Limited Liability Partnership{" "}
                      </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for 1 partner
                    </div>
                    <div className="pricingcontent">DIN of 2 directors</div>
                    <div className="pricingcontent">Name reservation</div>
                    <div className="pricingcontent">LLP agreement</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Partnership </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 2,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="pricingcontent">Partnership agreement</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Section 8 Company/NGO </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 19,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for one director
                    </div>
                    <div className="pricingcontent">DIN of 2 directors</div>
                    <div className="pricingcontent">Name reservation</div>
                    <div className="pricingcontent">
                      Certificate of incorporation
                    </div>
                    <div className="pricingcontent">Copy of MOA and AOA</div>
                    <div className="pricingcontent">Share certificates</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Trust </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 4,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">Trust deed</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Society </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 6,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Society registration certificate
                    </div>
                    <div className="pricingcontent">
                      Copy of MOA and Rules & Regulations
                    </div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Nidhi Company </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 34,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for one director
                    </div>
                    <div className="pricingcontent">DIN of 2 directors</div>
                    <div className="pricingcontent">Name Reservation</div>
                    <div className="pricingcontent">
                      Certificate of incorporation
                    </div>
                    <div className="pricingcontent">Copy of MOA and AOA</div>
                    <div className="pricingcontent">Share certificates</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
                      <h2 className="pricehead"> Start Producer Company </h2>
                    </button>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <h2 className="pricingprice ">Rs 39,999 +<h5 className="pricingpriceside">(Govt Fees + GST@18%)</h5></h2>
                    <div className="pricingcontent">
                      Digital signature token for one director
                    </div>
                    <div className="pricingcontent">DIN of 2 directors</div>
                    <div className="pricingcontent">Name reservation</div>
                    <div className="pricingcontent">
                      Certificate of incorporation
                    </div>
                    <div className="pricingcontent">Copy of MOA and AOA</div>
                    <div className="pricingcontent">Share certificates</div>
                    <div className="pricingcontent">PAN and TAN</div>
                    <div className="text-center">
                      <Link to = "/products/incorporate+">
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
