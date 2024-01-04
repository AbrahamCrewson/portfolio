import React from 'react';
import './Contact.css';
import profile from '../Hero/profile.png';
class Contact extends React.Component{
    render(){
        return (
            <div id="Contact">
                <div>
                    <img src={profile} alt=' 'id="profile"></img>
                    <h1>Thank you for checking out my portfolio!</h1>
                    <h2> Please feel free to get into touch with me through email or LinkedIn if you are interested in working with me freelance or professionally.</h2>
                    <div id="socials"> 
                        <a  href='https://www.linkedin.com/in/lorne-abraham-crewson/' target="_blank" rel="noreferrer"><h3>LinkedIn</h3></a>
                        <h3>abrahamcrewson@gmail.com</h3>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Contact;