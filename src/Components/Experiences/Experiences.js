import React from 'react';
import './Experiences.css';
import Work from './Work.jpg';
import School from './School.jpg';
import ThreeAI from './ThreeAI.png';
import Western from './Western.png';
import Report from './report.pdf';
class Experiences extends React.Component{
    componentDidMount(){
        const elementsToFadeInUpOnScroll = document.querySelectorAll(".DuoDesc, #Courses, #Languages");
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
        return(
            <div id="Experiences">
                <div id='Work'>
                    <div className='Header'>
                        <h1>My Work Experience</h1>
                        <img className='ExpImg' src={Work} alt='Work experience'/>
                    </div>
                    <div id="WorkDuo">
                        <div className='DuoDesc'>
                            <h2> Front End Developer @ ThreeAI </h2>
                            <p> Early in 2023 I had the pleasure of spending a few months working freelance for
                                    ThreeAI as front-end developer. ThreeAI is a artificial intelligence startup
                                    and my role for them consisted of making their website concept and designs into 
                                    a working and published website. I implemented a full-stack web development 
                                    project, utilizing React and Netlify to create a scalable and responsive
                                    website that created 100+ mailing list enrollments. I designed, developed, 
                                    and modified 20+ software systems and custom components, while collaborating 
                                    with 2 engineering and design teams to integrate external APIs into web pages.
                            </p>
                        </div>

                            
                        <div className='DuoImg'>
                            <img id="ThreeAI" src={ThreeAI} alt='ThreeAI Logo'/>
                        </div>
                    </div>
                </div>
                <div id='Education'>
                    <div className='Header'>
                        <h1>My Educational Experience</h1>
                        <img className='ExpImg' src={School} alt='Work experience'/>
                    </div>
                    <div id='SchoolDuo'>
                        <div className='DuoDesc'>
                            <h2>Bachelor Of Science @ Western University</h2>
                            <ul>
                                <li>Specialization in Computer Science</li>
                                <li> 3.3 GPA</li>
                                <li> Graduated on Dean's Honor List</li>
                            </ul>
                        </div>
                        <div className='DuoImg'>
                            <img id="Western" src={Western} alt="Western Logo"/>
                        </div>
                    </div>
                    <div id='Courses'>
                        <h2>Relevant Coursework</h2>
                        <ul>
                            <li>Data Analysis</li>
                            <li>UI/UX Design</li>
                            <li>Operating Systems</li>
                            <li>Project Management</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Artificial Intelligence </li>
                            <li>Advanced Calculus</li>
                            <li>Linear Algebra</li>
                            <li>Software Testing</li>
                        </ul>
                    </div>
                    <div id='Languages'>
                        <h2>Coding Languages & Knowledge</h2>
                        <ul>
                            <li>C/C++</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>HTML/CSS</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Node.js</li>
                            <li>Git</li>
                            <li>SQL</li>
                            <li>mySQL</li>
                            <li>R</li>
                            <li>Assembly</li>
                            <li>MATLAB</li>
                            <li>Linux</li>
                            <li>Unix</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div id='Research'>
                        <h2>My Experience with Machine Learning Research </h2>
                        <p>During my last semester in University I took an interest into Machine Learning and Artifical Intelligence during my time taking an Advanced A.I. Course. I along with 3 of my peers wrote a research project using differnet Machine Learning methods for our final assessment.</p>
                        <p>Here is the abstract for the research paper along with the paper itself if you wish to give it a read.</p>
                        <p>Abstract—Social media platforms such as Facebook, Twitter, and Reddit are used every day by millions of users to convey information, facts, and opinions. This project aims to use the GoEmotions dataset made up of human-annotated Reddit comments and apply several different supervised and unsupervised methods to classify the 28 unique emotions of the comments. This project uses Supervised Vector Machines (SVM), K-Means, and Lexicographic Analysis as methods in which to implement for classification. GoEmotions, the dataset used for this project, is preprocessed and cleaned before implementing the methods. The results for each method were similar across the board, as the methods were able to accurately predict and classify emotions in the test set less than half of the time or worse for each method. However, the results did find the reasoning behind the low accuracy to be from similarities between emotion categories and select word categorizations involved with the dataset.</p>
                        <a href={Report}><h3>How Are You Feeling? Emotion Recognition in Social Media</h3></a>
                        <iframe title="How Are You Feeling? Emotion Recognition in Social Media" src={Report}></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Experiences;