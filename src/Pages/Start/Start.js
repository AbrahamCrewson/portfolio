import React from 'react';

import './Start.css';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import Segments from '../../Components/Segments/Segments';
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
class Start extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render (){
    return(
      <div className="Start">
        <Navbar/>
        <Hero/>
        <About/>
        <Segments/>
        <Footer/>
        <ScrollButton/>
      </div>
    )
  }
}
export default Start;
