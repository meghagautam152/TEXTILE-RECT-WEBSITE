import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'



let context = null;

export default class Twitter extends Component {
  
  
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
         <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'ValuePlusio'
    }}
    options={{
      username: 'ValuePlusio',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
           </div>
         </div>

    );
  }
}


