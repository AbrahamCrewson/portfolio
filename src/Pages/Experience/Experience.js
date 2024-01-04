import React from 'react';
import './Experience.css';
import Experiences from '../../Components/Experiences/Experiences';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
class Experience extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render (){
    return(
      <div className="Experience">
        <Navbar/>
        <Experiences/>
        <Footer/>
        <ScrollButton/>
      </div>
    )
  }
}
export default Experience;
