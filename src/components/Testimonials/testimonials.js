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
       
    <Carousel showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} showStatus={false} onClickThumb={this.onClickThumb} infiniteLoop={true} transitionTime={10} autoPlay={true}>
                <div>
                <div className="testimonial4_slide">
                <img className="testimages" src={require("../../images/peepimg1.png")}/>
					
					<p>Value Plus is one stop platform for all business consulting services. Will surely be availing your services again in the future. Thank you for the amazing work. 
</p>
					<h4>Dr Rajat Chabba</h4>
				</div>
                </div>
                <div>
                <div className="testimonial4_slide">
                <img  className="testimages"  src={require("../../images/peepimg2.png")}/>
					
					
					<p> Value plus services are effortless, affordable and excellent. The entire experience from requesting the services till the end was convenient, hassle free and very satisfactory. </p>
					<h4>Samdarsh Baweja</h4>
				</div>
                </div>
                <div>
                <div className="testimonial4_slide">
                <img  className="testimages"  src={require("../../images/peepimg3.png")}/>
					
					
					<p> The Value plus team is extremely proactive and helpful. The work was done on time, professionally and exceeded my expectations. Keep up the good work team. </p>
					<h4>Sandeep Yadav</h4>
				</div>
                </div>
                
                <div>
                <div className="testimonial4_slide">
                <img className="testimages" src={require("../../images/peepimg4.png")}/>
					
					<p>I was amazed to find such a platform. Perfect combination of customer experience, quality service and a motivated team. Thank you for a great experience and valuable guidance throughout the process. Good luck!

</p>
					<h4>Shweta Banerjee</h4>
				</div>
                </div>
                
               
            </Carousel>
    );
  }
}
