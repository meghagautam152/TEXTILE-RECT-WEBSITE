import React, { Component } from 'react';
import './faq.css';

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css'

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, 
    visible1: false ,
     visible2: false ,
    visible3: false ,
      visible4: false ,
     visible5: false ,
   visible6: false ,
     visible7: false,
     visible8: false,
    visible9: false,
  visible10: false };
  console.log(this.props.filter);
};

show() {
    this.setState({ visible: true });
}

hide() {
    this.setState({ visible: false });
}
show1() {
  this.setState({ visible1: true });
}

hide1() {
  this.setState({ visible1: false });
}
show2() {
  this.setState({ visible2: true });
}

hide2() {
  this.setState({ visible2: false });
}
show3() {
  this.setState({ visible3: true });
}

hide3() {
  this.setState({ visible3: false });
}
show4() {
  this.setState({ visible4: true });
}

hide4() {
  this.setState({ visible4: false });
}
show5() {
  this.setState({ visible5: true });
}

hide5() {
  this.setState({ visible5: false });
}
show6() {
  this.setState({ visible6: true });
}

hide6() {
  this.setState({ visible6: false });
}
show7() {
  this.setState({ visible7: true });
}

hide7() {
  this.setState({ visible7: false });
}
show8() {
  this.setState({ visible8: true });
}

hide8() {
  this.setState({ visible8: false });
}
show9() {
  this.setState({ visible9: true });
}

hide9() {
  this.setState({ visible9: false });
}

  render() {

    const active = "faqcard2 active-faq";
    const deactive = "faqcard2 deactive-faq";
    
      return(
        
 <div className="faq">
 <h1>{this.props.filter}</h1>
     
     <div className="row">
       <div className="col-md-3"></div>
     
       <div className="col-md-3"></div>
       </div>
    
     <span className="faqspan"  onClick={this.show.bind(this)}>
        
     <div className={this.props.filter=='1' ? active : deactive} >
       <h4 className="questions"> What customers have not <br/> paid their invoices?</h4>

         </div>
         </span>
        
     <span className="faqspan" onClick={this.show1.bind(this)}>
     <div className={this.props.filter=='1' ? active : deactive}>
       <h4 className="questions"> Why do customers dispute  <br/>payments?</h4>

         </div>
         </span>
        
     <span  className="faqspan" onClick={this.show2.bind(this)}>
     <div className={this.props.filter=='1' ? active : deactive}>
       <h4 className="questions"> What customers have not <br/> paid their invoices?</h4>

         </div>
         </span>
        
     <span className="faqspan" onClick={this.show3.bind(this)}>
     <div className={this.props.filter=='2' ? active : deactive}>
       <h4 className="questions"> Why do customers dispute  <br/> payments?</h4>

         </div>
         </span>
         
     <span className="faqspan" onClick={this.show4.bind(this)}>
     <div className={this.props.filter=='2' ? active : deactive}>
       <h4 className="questions"> What customers have not  <br/>paid their invoices?</h4>
       </div>
         
         </span>
         <span className="faqspan" onClick={this.show5.bind(this)}>
        
     <div className={this.props.filter=='2' ? active : deactive}>
       <h4 className="questions">Why do customers dispute <br/> payments?</h4>

         </div>
         </span>
        
     <span className="faqspan" onClick={this.show6.bind(this)}>
     <div className={this.props.filter=='3' ? active : deactive}>
       <h4 className="questions"> What customers have not <br/>paid their invoices?</h4>

         </div>
         </span>
        
     <span className="faqspan" onClick={this.show7.bind(this)}>
     <div className={this.props.filter=='3' ? active : deactive}>
       <div className="questions"> Why do customers dispute <br/>payments?</div>

         </div>
         </span>
        
     <span className="faqspan" onClick={this.show8.bind(this)}>
     <div className={this.props.filter=='3' ? active : deactive}>
       <h4 className="questions"> What customers have not <br/> paid their invoices?</h4>

         </div>
         </span>
         
     <span className="faqspan" onClick={this.show9.bind(this)}>
     <div className={this.props.filter=='4' ? active : deactive}>
       <h6 className="questions"> Why do customers dispute <br/> payments?</h6>
       </div>
         
         </span>
        
    
        
         <Rodal visible={this.state.visible} animation="flip" onClose={this.hide.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>

<Rodal visible={this.state.visible1} width="500" animation="flip" onClose={this.hide1.bind(this)}  >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible2}  width="500" animation="flip" onClose={this.hide2.bind(this)}  >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible3} width="500" animation="flip" onClose={this.hide3.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible4} width="500" animation="flip" onClose={this.hide4.bind(this)}  >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible5} width="500" animation="flip"onClose={this.hide5.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible6} width="500"animation="flip" onClose={this.hide6.bind(this)} >
  <div  className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible7} width="500" animation="flip" onClose={this.hide7.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>
</Rodal>
<Rodal visible={this.state.visible8} width="500" animation="flip" onClose={this.hide8.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
<Rodal visible={this.state.visible9} width="500" animation="flip" onClose={this.hide9.bind(this)} >
  <div className="modal1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</Rodal>
    
         
    </div>
         
       
         
       
         
         
        
         
        
     

     

 
      )
      
  } 


  
}