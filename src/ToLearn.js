import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Events from './Events';
import Events2 from './Events2';
import About from './About';
import ToLearnList from './ToLearnList'
import Second from './Second'
import MainNav from './MainNav'
import SideSection from './SideSection'



export default class ToLearn extends Component {
  render() {
    return (<div>
      
      <div className="bg">
        
      <Second/>
        <Navigation isEvent='false'/>
       
        <Events2 />
        </div>
        <div class="row">
          <div class="col-md-9">
        <ToLearnList category='books'/>
       </div>
       <div class="col-md-3">
         <SideSection/>
         </div>
         </div>

        <Footer />

      </div>

    );
  }
}


