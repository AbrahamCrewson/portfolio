import React from 'react';
import './About.css';
import Portrait from './portrait.PNG';
import UWO from './uwo.jpg';
import Report from './report.pdf';

class About extends React.Component{

    render(){
        return (
            <div className='About' id="About">
                <div className='hOne'>
                    <h1>About Me</h1>
                    <div className='line'></div>
                </div>
                <div id='Intro'>
                    <div>
                        <h2>My name is Lorne Abraham Crewson</h2>
                        <h3>I am a recent graduate of Western University with a Bachelor's degree Specializing in Computer Science.
                        Throughout my time in University, I gained a strong foundation in various programming languages.
                        I have experience working on both individual and team projects, which has helped me develop my problem-solving and collaboration skills. 
                        <br/><br/>I am passionate about the field of computer science and am excited to continue to learn and grow as a professional. 
                        I am open to any opportunities related to software development so please don't hesitate to contact me.</h3>
                    </div>
                    
                    <img src={Portrait} alt="Portrait of Abraham"></img>
                </div>
                <hr/>
                <div id="Education">
                    <img src={UWO} alt="Western University"></img>
                    <div>
                        <h2>My Educational Background</h2>
                        <h3><b>Western University, London, Ontario (2022)</b></h3>
                        <h3> ⋄ Bachelor of Science (B.S), Specialization in Computer Science </h3>
                        <h3>Codecademy Full-Stack Engineer Certification (In Progress)</h3>
                    </div>
                    
                </div>
                <hr/>
                <h2 id='Skills'>Skills and Experience</h2>
                    <h3>Programming Languages/Frameworks</h3>
                    <div id='languages'>
                        <h4>Proficient:</h4>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                    </ul>
                    <h4>Familiar:</h4>
                    <ul>
                        <li>React Native</li>
                        <li>SQL</li>
                        <li>MySQL</li>
                        <li>R</li>
                        <li>Matlab</li>
                        <li>Git</li>
                        <li>Linux</li>
                        <li>Unix</li>
                    </ul>
                    <div id='hard'>
                        <h3>Skills</h3>
                        <ul>
                            <li>Data Structures and Algorithms</li>
                            <li>Machine Learning</li>
                            <li>UI/UX Design</li>
                            <li>Mobile Development</li>
                            <li>Programming Logic</li>
                            <li>Technical Writing</li>
                            <li>Software Development</li>
                            <li>Agile Workflowix</li>
                        </ul>
                    </div>
                    <hr/>
                    <h3 id ="Report">My Experience with Machine Learning Research</h3>
                        <p>During my last semester in University I took an interest into Machine Learning and Artifical Intelligence during my time taking an Advanced A.I. Course.
                        I Along with 3 of my peers wrote a research project using differnet Machine Learning methods for our final assessment.
                        <br/><br/> Here is the Abstract for the research paper along with the paper itself if you wish to give it a read.
                        <br/><br/>
                        Abstract—Social media platforms such as
                        Facebook, Twitter, and Reddit are used every
                        day by millions of users to convey
                        information, facts, and opinions. This project
                        aims to use the GoEmotions dataset made up
                        of human-annotated Reddit comments and
                        apply several different supervised and
                        unsupervised methods to classify the 28
                        unique emotions of the comments. This
                        project uses Supervised Vector Machines
                        (SVM), K-Means, and Lexicographic
                        Analysis as methods in which to implement
                        for classification. GoEmotions, the dataset
                        used for this project, is preprocessed and
                        cleaned before implementing the methods.
                        The results for each method were similar
                        across the board, as the methods were able to
                        accurately predict and classify emotions in
                        the test set less than half of the time or worse
                        for each method. However, the results did
                        find the reasoning behind the low accuracy to
                        be from similarities between emotion
                        categories and select word categorizations
                        involved with the dataset.
                        </p>
                        <div id="pdf">
                            <h4><a href ={Report}>How Are You Feeling? Emotion Recognition in Social Media</a></h4>
                            <iframe src={Report} id="reportfile" title ="How Are You Feeling?Emotion Recognition in Social Media"></iframe>
                        </div>

                    </div>
                    
                
                
            </div>
        );
    }
}
export default About;