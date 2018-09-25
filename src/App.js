import React, { Component } from 'react';
import Footer from "./components/Footer/footer";
import HomePage from "./components/HomePage/homepage";
import NavbarMain from "./components/NavbarMain/navbarmain";




class App extends Component {
  componentDidMount(){
    const loader = document.querySelector('.loader');
    if (loader && !loader.hasAttribute('hidden')) {
      loader.setAttribute('hidden', 'true');
    }
  }

  render() {
    return (
      <div>
      <NavbarMain type="SINCE 1994" para="homepage"/>
      
        <HomePage />
        <Footer />
    
      </div>
    );
  }
}

export default App;
