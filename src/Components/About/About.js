import React from 'react';
import './About.css';


class About extends React.Component{
    componentDidMount(){
        const elementsToFadeInUpOnScroll = document.querySelectorAll(".paragraph");
        if (elementsToFadeInUpOnScroll) {
        window.addEventListener("scroll", function(event) {
            elementsToFadeInUpOnScroll.forEach(function(element) {
            if (window.scrollY - 100 >= (element.offsetTop - window.innerHeight)) {
                element.classList.add("fadeIn");
            } else {
                element.classList.remove("fadeIn");
            }
            });
        });
        } 
    }
    render(){
        return (
            <div className='About'> 
                <div id="topBox"></div>
                <div className='topper' id="top">
                    <div className='box'></div>
                    <h3 className='boxText'>H O W D Y</h3>
                </div>
                <div className='paragraph'>
                    <h2>From design to code.</h2>
                    <p>From dream to design to code to launch, my goal is to bring designs off the sketch book and onto your webpages. </p>
                    <br/><p>My name is Lorne <b id="highlight">Abraham</b> Crewson, I'm based out of Mississauga, Ontario 🇨🇦 and I have been coding since 2017. </p>
                    <br/><p>I turn innovative designs into seamless, user-friendly code that bridges the gap between creativity and functionality. </p>
                </div>
            </div>
        );
    }
}
export default About;