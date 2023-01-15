import React from 'react';
import './App.css';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import ScrollButton from '../ScrollButton/ScrollButton';
class App extends React.Component {
  render (){
    return(
      <div className="App">
        <Navbar/>
        <Hero/>
        <div id="Main">
        <About/>
        <Projects/>
        <ContactMe/>
        <ScrollButton/>
        </div>
      </div>
    )
  }
}
export default App;
