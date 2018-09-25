import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './vendor/bootstrap/css/bootstrap.min.css';
import './style/value-plus.css';
import './style/sidebar.css';


import 'react-accessible-accordion/dist/react-accessible-accordion.css';
import ScrollToTopRoute from './ScrollToTopRoute';
import App from './App';
import Contact from './components/Contact/contact';
import Requestacallback from './components/Requestacallback/requestacallback';

import Resources from './components/Resources/resources';


import Textilegoods from './components/HomePage/textile-goods'
import Customs from './components/HomePage/custom-clearance'
import Freights from './components/HomePage/freight-forwarding'
import Registration from './components/HomePage/registration'
import Equipmenttools from './components/HomePage/equipments-tools'
import Homefurnishing from './components/HomePage/home-furnishing'
import Apparelfashion from './components/HomePage/apparel-fashion'
import Docs from './components/Docs/docs';
import Guides from './components/Resources/guides';
import Blog from './components/Resources/blogs';

import Contributeblogs from './components/SendQuery/contributeblogs';
import Contributeguides from './components/SendQuery/contributeguides';
import Contribute from './components/SendQuery/contribute';


import Postservicerequirement from './components/SendQuery/postservicerequirement';
import Needhelp from './components/SendQuery/needhelp';
import Postproductrequirement from './components/SendQuery/postproductrequirement';

import Resourcespage from './components/Resources/resourcespage';
import Resourcespage1 from './components/Resources/resourcespage1';

import Productsinglepage from './components/HomePage/productsinglepage';
import SendQuery from './components/SendQuery/sendquery';
import SendQuerydocs from './components/SendQuery/sendquerydocs';
import SendQueryMain from './components/SendQuery/sendquerymain';
import About from './components/About/about';


import RequestQuote from './components/RequestQuote/requestquote';
import RequestQuoteMain from './components/RequestQuote/requestquotehome';
import RequestQuoteTraining from './components/RequestQuote/requestquotetraining';
import Disclaimerterms from './components/Terms/disclaimerterms';
import Confidentialityterms from './components/Terms/confidentialityterms';
import Privacyterms from './components/Terms/privacyterms';
import Termsandconditions from './components/Terms/termsandconditions';

import registerServiceWorker from './registerServiceWorker';
import Sitemap from './components/sitemap/Sitemap';
import ScrollUpButton from "react-scroll-up-button";
import ReactTooltip from 'react-tooltip'

ReactDOM.render(<div><BrowserRouter>
  <ScrollToTopRoute>
  <Switch>
  
  



{/* for subproducts */}
  <Route  exact path = "/products/:anything/:url/send-a-query" component = {SendQuery} />


  










  <Route exact path = "/products/yarn" component = {Productsinglepage} /> 
  <Route exact path = "/products/textile-goods" component = {Textilegoods} /> 
  <Route exact path = "/products/home-furnishing" component = {Homefurnishing} /> 
  <Route exact path = "/products/equipments-and-tools" component = {Equipmenttools} /> 
  <Route exact path = "/products/apparel-and-fashion" component = {Apparelfashion} /> 
  <Route exact path = "/services/custom-clearing" component = {Customs} /> 
  <Route exact path = "/services/freight-forwarding" component = {Freights} /> 
  <Route exact path = "/services/registration-and-licensing" component = {Registration} /> 
  
  <Route exact path = "/ask-an-expert" component = {SendQueryMain} />
  <Route exact path = "/terms-and-conditions" component = {Termsandconditions} />
  <Route exact path = "/privacy-policy" component = {Privacyterms} />
  <Route exact path = "/confidentiality-policy" component = {Confidentialityterms} />
  <Route exact path = "/disclaimer-policy" component = {Disclaimerterms} />
  <Route exact path = "/privacy-policy" component = {Privacyterms} />
  
  <Route path = "/:url/requestquote" component ={RequestQuote} />
  <Route path = "/consulting/:url/request-a-proposal" component ={RequestQuote} />
  <Route path = "/post-a-job" component ={RequestQuoteMain} />
  <Route path = "/trainings/:url/request-a-proposal" component ={RequestQuoteTraining} />
 
  <Route  exact path = "/products/windup+/:url/send-a-query" component = {SendQuery} />
  <Route path = "/consulting/:url/send-a-query" component = {SendQuery} />
  <Route path = "/trainings/:url/send-a-query" component = {SendQuery} />
  
  <Route  exact path = "/products/:url/send-a-query" component = {SendQuery} />






  <Route path = "/consulting/:url/send-a-query" component = {SendQuery} />
  <Route path = "/trainings/:url/send-a-query" component = {SendQuery} />
  
  
  <Route path = "/resources/blog/contribute" component = {Contributeblogs} />
  <Route path = "/resources/guides/contribute" component = {Contributeguides} />
  <Route path = "/resources/contribute" component = {Contribute} />
  <Route path = "/resources/guides/page/:id" component = {Resourcespage} />
  <Route path = "/resources/blog/page/:id" component = {Resourcespage} />
  <Route path = "/resources/page/:id" component = {Resourcespage1} />
  <Route path = "/resources/guides" component = {Guides} />
  <Route path = "/resources/blogs" component = {Blog} />
 
  
  <Route path = "/resources" component = {Resources} />
 
  <Route path = "/docs/send-a-query" component = {SendQuerydocs} />
  
  <Route path = "/docs" component = {Docs} />
  
  
  
 
  <Route path = "/post-product-requirement" component = {Postproductrequirement} />
  <Route path = "/post-service-requirement" component = {Postservicerequirement} />
  <Route path = "/about-us" component = {About} />
  <Route path = "/needhelp" component = {Needhelp} />
  <Route path = "/contact-us" component = {Contact} />
  <Route path = "/request-a-callback" component = {Requestacallback} />
  <Route path ="/sitemap" component = {Sitemap}/>
   <Route path = "/" component = {App} />
   
  </Switch>
  </ScrollToTopRoute>
  </BrowserRouter>    <ScrollUpButton
      StopPosition={0}
      TransitionBtnPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{}}
      ToggledStyle={{}}
    /><ReactTooltip /><button data-place="left" data-tip="Request Product Quotation" className="request-button"><a href="./post-product-requirement"><img src={require("./images/textiles3.png")}  style={{Height:'4px'}} /></a></button><button data-place="left" data-tip="Request Service Quotation" className="request-button2"><a href="./post-service-requirement"><img src={require("./images/registration.png")} /></a></button> </div>, document.getElementById('root'));
registerServiceWorker();
