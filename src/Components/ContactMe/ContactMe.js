import React from 'react';
import './ContactMe.css';
import linkedin from './linkedin.png';
import email  from './mail.png'
class ContactMe extends React.Component{

    render(){
        return(
            <div className='ContactMe' id="Contact">
                <div className='hOne'>
                    <h1>Contact Me</h1>
                    <div className='line'></div>
                </div>
                <div id="contacts">
                    <div className='address'>
                        <a href='https://www.linkedin.com/in/lorne-abraham-crewson/' target="_blank" rel="noreferrer">
                            <img src={linkedin} alt='Linked In'id="linked"></img> 
                        </a>
                    </div>
                    <div className='address'>
                        <img src= {email} alt='Email: ' id="mail"></img>
                        <h3>abrahamcrewson@gmail.com</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactMe;