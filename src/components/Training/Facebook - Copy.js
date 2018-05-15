import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Events from './Events';
import Events2 from './Events2';
import About from './About';
import ToLearnList from './ToLearnList'
import Second from './Second'
import MainNav from './MainNav'




export default class Facebook extends Component {
  
  
  constructor(props){
    
    super();
    this.state = {
    posts: [],
    limit:10,
    fetching:false
      };

    this.getFacebook();
    
  
}

getFacebook(){  
   
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}
  
render() {
    return (<div>
        <div className="facebook-page">
     
     <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
         </div> </div>

    );
  }
}