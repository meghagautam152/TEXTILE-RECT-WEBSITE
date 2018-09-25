import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './testimonial.css';

export default class Testimonials extends Component{


    onChange(){

    }


    onClickItem(){

    }

    onClickThumb(){

    }
  render(){
    return(
       <div>
    <Carousel showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} showStatus={false} onClickThumb={this.onClickThumb} infiniteLoop={true} transitionTime={10} autoPlay={true}>
                <div>
                <div className="testimonial4_slide">
                <img className="testimages" src={require("../../images/userdefault.png")}/>
					
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
</p>
					<h4>xyz</h4>
				</div>
                </div>
                <div>
                <div className="testimonial4_slide">
                <img  className="testimages"  src={require("../../images/userdefault.png")}/>
					
					
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  </p>
					<h4>abc</h4>
				</div>
                </div>
                <div>
                <div className="testimonial4_slide">
                <img  className="testimages"  src={require("../../images/userdefault.png")}/>
					
					
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  </p>
					<h4>lmn</h4>
				</div>
                </div>
                
                <div>
                <div className="testimonial4_slide">
                <img className="testimages" src={require("../../images/userdefault.png")}/>
					
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 

</p>
					<h4>rst</h4>
				</div>
                </div>
                
               
            </Carousel>

            <div className="row socialmed">
            <div className="col-md-4"></div>
            <div className="col-md-2">
            <h2 className="testimonials2">Follow us on :</h2>
            </div>
            <div className="col-md-3">
            <i class="fa fa-facebook-official" style={{fontSize:'43px'}}></i>
            <i class="fa fa-twitter-square	" style={{fontSize:'43px'}}></i>
            <i class="fa fa-linkedin-square" style={{fontSize:'43px'}}></i>
            </div>
            </div>
            </div>
    );
  }
}
