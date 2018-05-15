import React, { Component } from 'react';


let context = null;
export default class Facebook extends Component {
  
  
  constructor(props){
    
    super();
    this.state = {
    posts: [],
    limit:10,
    fetching:false
      };

      context = this;
   
  
  
}


  
render() {
    return (<div>
        <div className="twitter">
     
        <div class="fb-page" data-href="https://www.facebook.com/Value-Plus-1229617493809082/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Value-Plus-1229617493809082/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Value-Plus-1229617493809082/">Value Plus</a></blockquote></div>
         </div> </div>

    );
  }
}