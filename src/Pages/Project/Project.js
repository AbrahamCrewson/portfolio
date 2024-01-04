import React from 'react';

import './Project.css';
import Projects from '../../Components/Projects/Projects';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
class Project extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render (){
    return(
      <div className="Project">
        <Navbar/>
        <Projects/>
        <Footer/>
        <ScrollButton/>
      </div>
    )
  }
}
export default Project;
