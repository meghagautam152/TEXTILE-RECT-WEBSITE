import React, { Component } from 'react';
import './faq.css';

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css'
import Faq from './Faq';
export default class FaqFilters extends Component {
  constructor(props) {
    super(props);
    this.state = { filter:'1'
    };

    this.changeFilter =this.changeFilter.bind(this);
 
};

changeFilter(filters) {
debugger;
  this.setState({filter:filters});
 

    
}






  render() {
      const active = "btn btn-info faqfilterbutton"
      const deactive = "btn btn-warning faqfilterbutton";
      return(<div className="row">
       
        <div style={{'float':'inline'}}className="col-md-12 faqdiv text-center">
        
        <button onClick={() => this.changeFilter('1')} className={this.state.filter=='1' ? active : deactive} >Faq's </button>
       
        
        
        </div>

  <Faq filter={this.state.filter}/>
 

         
       
         
       
         </div>
         
        
         
        
     

     

 
      )
      
  } 


  
}