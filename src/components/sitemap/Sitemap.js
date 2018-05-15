import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NavbarMain from '../NavbarMain/navbarmain';
import $ from 'jquery';
import Footer from "../Footer/footer";


import './sitemap.css';
import {sitemap} from './sitemaplinks';


export default class Sitemap extends Component{


constructor(props){

super();
this.state = {



}
console.log(sitemap);


}






  render(){
   return(
    <div className="mainbody sitemap">
      <div className="container">
        <NavbarMain />
      <div className="row">
      <div className="col-md-12">
<h3>Value Plus <span><small>Sitemap</small></span></h3>
</div>
</div>

<div classNameName="container-fluid">
    <div className="row">
    {sitemap.map((pageType, index) =>
     <div className="col-md-3">
     <div className="row">
          <h4 className="site-heading">{pageType.title}</h4>
          </div>
     <div className="row">

         <ul className="list-sitemap">
         {pageType.childs.map((child)=>

                <li><Link to={child.link}>  {child.title} </Link></li>

)}




         </ul>
     </div>
        </div>
    
    )}
    
       
      
    </div>
</div>



</div>
<Footer/>
  </div>





    );
  }
}
