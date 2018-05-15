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
import Incorporate from './components/Products/Incorporate+/incorporate';
import Comply from './components/Products/Comply+/comply';
import IncorporatePricing from './components/Pricing/incorporate_pricing';
import ComplyPricing from './components/Pricing/comply_pricing';
import Protect from './components/Products/Protect+/protect';
import Windup from './components/Products/Windup+/windup';
import ProtectPricing from './components/Pricing/protect_pricing';
import WindPricing from './components/Pricing/wind_pricing';
import Tax from './components/Products/Tax+/tax';
import TaxPricing from './components/Pricing/tax_pricing';
import SendQuery from './components/SendQuery/sendquery';
import About from './components/About/about';
import Startup from './components/Consulting/Startup/startup';
import Corporate from './components/Consulting/Corporate/corporate';
import Social from './components/Consulting/Social/social';
import RequestQuote from './components/RequestQuote/requestquote';
import RequestQuoteTraining from './components/RequestQuote/requestquotetraining';
import Disclaimerterms from './components/Terms/disclaimerterms';
import Confidentialityterms from './components/Terms/confidentialityterms';
import Privacyterms from './components/Terms/privacyterms';
import Termsandconditions from './components/Terms/termsandconditions';
import Strategic from './components/Training/strategic';
import Functional from './components/Training/functional';
import Platforms from './components/Platforms/platforms';



import registerServiceWorker from './registerServiceWorker';
import Sitemap from './components/sitemap/Sitemap';

ReactDOM.render(<BrowserRouter>
  <ScrollToTopRoute>
  <Switch>
  <Route exact path = "/platforms" component = {Platforms} />
  <Route exact path = "/terms-and-conditions" component = {Termsandconditions} />
  <Route exact path = "/privacy-terms" component = {Privacyterms} />
  <Route exact path = "/confidentiality-terms" component = {Confidentialityterms} />
  <Route exact path = "/disclaimer-terms" component = {Disclaimerterms} />
  <Route exact path = "/privacy-terms" component = {Privacyterms} />
  <Route exact path = "/trainings/strategic" component = {Strategic} />
  <Route exact path = "/trainings/functional" component = {Functional} />
  <Route path = "/:url/requestquote" component ={RequestQuote} />
  <Route path = "/consulting/:url/request-a-proposal" component ={RequestQuote} />
  <Route path = "/trainings/:url/request-a-proposal" component ={RequestQuoteTraining} />
  <Route exact path = "/consulting/social" component = {Social} />
  <Route exact path = "/consulting/corporate" component = {Corporate} />
  <Route exact path = "/consulting/startup" component = {Startup} />
  <Route  exact path = "/products/:url/send-a-query" component = {SendQuery} />
  <Route path = "/consulting/:url/send-a-query" component = {SendQuery} />
  <Route path = "/trainings/:url/send-a-query" component = {SendQuery} />
  <Route path = "/products/tax+/pricing" component ={TaxPricing} />
  <Route path = "/products/windup+/pricing" component ={WindPricing} />
  <Route path ="/products/tax+" component = {Tax} />
  <Route path = "/products/protect+/pricing" component = {ProtectPricing} />
  <Route path = "/products/protect+" component = {Protect} />
  <Route path = "/products/windup+" component = {Windup} />
  <Route path = "/products/comply+/pricing" component = {ComplyPricing} />
  <Route path = "/products/comply+" component = {Comply} />
  <Route path = "/products/incorporate+/pricing" component = {IncorporatePricing}/>
  <Route path = "/products/incorporate+" component = {Incorporate} />
  <Route path = "/about-us" component = {About} />
  <Route path = "/contact-us" component = {Contact} />
  <Route path = "/request-a-callback" component = {Requestacallback} />
  <Route path ="/sitemap" component = {Sitemap}/>
  <Route path = "/" component = {App} />
  </Switch>
  </ScrollToTopRoute>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
