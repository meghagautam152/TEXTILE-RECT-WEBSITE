import React, { Component } from 'react';
import './faq.css';
import $ from 'jquery';

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css'

export default class Faq extends Component {
  constructor(props) {
    super();
    this.handleLine = this.handleLine.bind(this);
  }
  componentDidMount(){
    this.handleLine();
  }

  handleLine(){
    
    const c1= this.refs.c1;
    const c2= this.refs.c2;
    const c3= this.refs.c3;
    const c4= this.refs.c4;
    
  const d2= this.refs.d2;
  const d3= this.refs.d3;
  const d4= this.refs.d4;
  const d5= this.refs.d5;
  

  $(function(){
    var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active1");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
  });
  
  


}

  render() {
return(
    <div>
<button class="accordion1">What does this mean?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion1">How does this works?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion1">How should we go about this?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
<button class="accordion1">How will the shipment get delivered to the location?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
<button class="accordion1">Who will be held accountable for deliveries?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
<button class="accordion1">How should we go about this?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
<button class="accordion1">How will the shipment get delivered to the location?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
<button class="accordion1">Who will be held accountable for deliveries?</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<script>



</script>
      </div>
         
) 
         
         
        
         
        
     

     

 
  }


  
}