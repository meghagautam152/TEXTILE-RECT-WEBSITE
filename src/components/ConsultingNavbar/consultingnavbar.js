import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import './consultingNavbarmain.css';
import $ from 'jquery';
export default class ConsultingNavbar extends Component {
    constructor(props){

        super();
        this.state = {
          openMenu : false
          
              };
      
              this.toggleMenu = this.toggleMenu.bind(this);
              this.closeMenu = this.closeMenu.bind(this);
              this.searchExpand();
             }
      
      
        toggleMenu(){
      
          if(this.state.openMenu){
          
            this.setState({openMenu:false});
            
          }
          else{
            this.setState({openMenu:true});
            this.refs.child.setInitialState(this.props.subhead);
           
          }
        }
      
        closeMenu(state){
      
          this.setState({openMenu:state});
          this.toggleMenu();
      
        }
        searchExpand(){
            $(document).ready(function(){
                var submitIcon = $('.searchbox-icon');
                var inputBox = $('.searchbox-input');
                var searchBox = $('.searchbox');
                var mobileSearchBox = $('.mobile-search');
                var isOpen = false;
                submitIcon.click(function(){
                    if(isOpen == false){
                        searchBox.addClass('searchbox-open');
                        mobileSearchBox.css({'height':'48px'});
                        mobileSearchBox.css({'opacity':'1'});
                        mobileSearchBox.focus();
                        inputBox.focus();
                        isOpen = true;
            
                    } else {
                        searchBox.removeClass('searchbox-open');
                        mobileSearchBox.css({'height':'0px'});
                        mobileSearchBox.css({'opacity':'0'});
                        mobileSearchBox.focusout();
                        inputBox.focusout();
                        isOpen = false;
                    }
                }); 
               submitIcon.mouseup(function(){
                      return false;
                  });
              searchBox.mouseup(function(){
                      return false;
                  });
              $(document).mouseup(function(){
                      if(isOpen == true){
                          $('.searchbox-icon').css('display','block');
                          submitIcon.click();
                      }
                  });
          });
              function buttonUp(){
                  var inputVal = $('.searchbox-input').val();
                  inputVal = $.trim(inputVal).length;
                  if( inputVal !== 0){
                      $('.searchbox-icon').css('display','none');
                  } else {
                      $('.searchbox-input').val('');
                      $('.searchbox-icon').css('display','block');
                  }
              }
            }
            
    render(){
    return(<div>
         <SideBar ref="child" closeMenu={this.closeMenu} stateOpen={this.state.openMenu}
         type={this.props.type}
         url={this.props.url}
        
         
         />
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light fixed-top ">
          <div className="nav-item">
              <h1>
                  <span
                  style={{fontSize:'20px',cursor:'pointer'}}
                  className="menu-icon" onClick={this.toggleMenu} id="menuicon">
                  &#9776;
                  </span>
              </h1>
          </div>
          <div className="navbar-brand" style={{paddingTop:'16px'}}>
              <Link to ="/">
              <img
              style={{paddingLeft:'3px'}}
              src={require("../../images/logoo.png")}/>
              </Link>
              <div>{""}</div>
              <h5 className="subhead">{this.props.subhead}</h5>
          </div>
      

          <div className="collapse navbar-collapse" id="main-navbar">
              <div>
                  <ul className="navbar-nav ml-auto" id="menu">
                      <li className="nav-item">


{this.props.type=="send-a-query" ?   <Link className="nav-link" to ={`../../consulting/${this.props.url}`}>
{(this.props.sqhide === "hide")?
    "Our Platforms" : "Consulting"
}</Link> :   <Link className="nav-link" to ={`./${this.props.url}`}>
{(this.props.sqhide === "hide")?
    "Our Platforms" : "Consulting"
}</Link>}
                      
                        
                      </li>

                    { this.props.type == "send-a-query" ? 
                      ((this.props.sqhide!=="hide")?(<li className="nav-item">
                          <Link className="nav-link" to={`./send-a-query`}>Send a query</Link>
                      </li>):null) :
                        (this.props.sqhide!=="hide")?(<li className="nav-item">
                        <Link className="nav-link" to={`../consulting/${this.props.url}/send-a-query`}>Send a query</Link>
                    </li>):null
                    }

                    { this.props.type =="send-a-query" ? 
                      ((this.props.rqhide!=="hide")?(<li className="nav-item">
                        <Link className="nav-link" to ={`../../consulting/${this.props.url}/request-a-proposal`}>Request a Proposal</Link>
                    </li>):null) 
                    :(this.props.rqhide!=="hide")?(<li className="nav-item">
                    <Link className="nav-link" to ={`../consulting/${this.props.url}/request-a-proposal`}>Request a Proposal</Link>
                </li>):null

                  }

                      <li className="nav-item">
                          <Link className="nav-link" to="/contact-us">Contact Us</Link>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="search-parent">
          <form class="searchbox">
            <input type="search" placeholder="Search......" name="search" class="searchbox-input" onkeyup="buttonUp();" required/>
            <input type="submit" class="searchbox-submit" value=""/>
            <span class="searchbox-icon"><img src={require("../../images/searchicon.png")}/></span>
       
    
        
    </form>
    </div>
      </nav>
      <input type="search" placeholder="Search......" name="search" className="mobile-search" onkeyup="buttonUp();" required/>
 
      </div>
    );
  }
}
