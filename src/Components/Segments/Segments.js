import React from 'react';
import './Segments.css';
import segment1 from './segment1.jpg';
import segment2 from './segment2.jpg';
import segment3 from './segment3.jpg';
import {Link} from "react-router-dom";
class Segments extends React.Component{
    componentDidMount(){
        const elementsToFadeInUpOnScroll = document.querySelectorAll(".Seg2");
        if (elementsToFadeInUpOnScroll) {
        window.addEventListener("scroll", function(event) {
            elementsToFadeInUpOnScroll.forEach(function(element) {
            if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
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
            <div className='Segments'> 
                <div className='Columns'>
                    
                    <div className='Seg1' id="topl">
                        <img src={segment1} alt='Web Projects'></img>
                    </div>
                    
                    <div className='Seg2' id="topr">
                        <h5>01</h5>
                        <div className='centre'>
                            <h2>Web Projects</h2>
                            <p>In my free time I experiment with new coding languages and make projects that are both challenging and fun. This is a showcase of what projects I have so far completed.</p>
                        </div>
                        <div className='VMbutton'><Link to='/projects'><p>View More &#62;</p></Link></div>
                    </div> 
                    
                    
                    
                    <div className='Seg1' id="midr">
                        <img src={segment2} alt="Web Development"></img>
                    </div>
                    <div className='Seg2' id="midl">
                        <h5>02</h5>
                        <div className='centre'>
                            <h2>Web Development</h2>
                            <p>I'm constantly looking how I can apply my passion for coding in the commercial and freelance business world. This is a history of my work experience both corporate and freelance, and what I have to offer to those who are looking for a creative programmer who can get solutions done.</p>
                        </div>
                        <div className='VMbutton'><Link to='/projects'><p>View More &#62;</p></Link></div>
                    </div>
                    
                    
                    
                    <div className='Seg1'id="botl">
                        <img src={segment3} alt='Education & Research'></img>
                    </div>
                    <div className='Seg2'id="botr">
                        <h5>03</h5>
                        <div className='centre'>
                            <h2>Education & Research</h2>
                            <p>This is a review of my formal education history and my acedemic research I conducted while in University.</p>
                        </div>
                        <div className='VMbutton'><Link to='/experience'><p>View More &#62;</p></Link></div>
                    </div>
                    
                </div>
            </div>
        );
    }
    
}

export default Segments;