import React from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import Contacts from '../../Components/Contact/Contact';
class Contact extends React.Component {
    componentDidMount(){
        window.scrollTo(0, 0);
      }
  render (){
    return(
      <div className="Experience">
        <Navbar/>
        <Contacts/>
        <Footer/>
        <ScrollButton/>
      </div>
    )
  }
}
export default Contact;
