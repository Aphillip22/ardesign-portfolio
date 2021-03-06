import React from 'react';
import logoImage from "../../assets/images/clr-logo.svg";
import aboutImage from "../../assets/images/about-img.jpg";
import aboutImage2 from '../../assets/images/about-img-2.jpg';
import coverImage from "../../assets/images/cover-img.jpg";

function About() {
    return (
        <section className="my-5 flex-row hero" id="about">
            <div className="hero-img" style={{ width: "30%" }}>
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </div>
            <div className="hero-art">
                <p>splash of</p>
                <h2><span>&#60;artist&#62;</span></h2>
            </div>
            <div className="hero-code">
                <p>hint of</p>
                <h2><span>&#60;coder/&#62;</span></h2>
            </div>
            <div className="hero-about">
                <h1>About Amber</h1>
                <p>
                Hi! Nice to meet you in this virtual landscape! I'm your resident "Jane-of-all-Trades" and I have a serious addiction to learning new things. 
                No, really, it's a bit of a problem. I <i className="accent-word">crave</i> knowledge. 
                </p>
                <p>
                My compulsion to become a woman of erudition has led me to the field of web development, and I absolutely love the endless possibilities.
                The world of dev is constantly evolving, so I find myself chasing new technologies and languages consistently. 
                My background as a supervisor in sales and customer service roles, including senior support for SaaS platforms, provides a unique opportunity for me to develop UX-forward applications.
                </p>
                <p>
                As an artist, I specialize in pencil sketching, though my art mediums are quite diverse. 
                I currently work full-time in the field of digital marketing and advertising as a Team Lead for an SSO SaaS platform, and recently completed a certification program through the U of U for Full Stack Web Dev.
                I have published multiple novels as a ghostwriter, requiring me to develop close relationships with clients to harness the voice of the intended author. 
                My penchant for the arts and digital content writing experience have given me the toolbelt and skillset to design robust web applications.
                </p>
                <h3>Certifications:</h3>
                <ul style={{fontSize: '15px'}}>
                    <li>Full Stack Web Developer - UofU, UT</li>
                    <li>Personal Trainer - NASM, USA</li>
                    <li>Coach (Gymnastics) - Eagle Gymnastics, NY</li>
                    <li>Therapeutic Recreation Specialist - Hillside Family of Agencies, NY</li>
                </ul>
                <p>
                <i className="accent-word">I am truly looking forward to working with you!</i>
                </p>
            </div>
            <div className="hero-img" style={{ width: "30%" }}>
                <img src={logoImage} className="my-2" style={{ width: "100%" }} alt="logo" />
            </div>
            <div className="flex-row about-images" style={{ justifyContent: 'flex-end'}}>
            <div className="hero-img-btm">
                <img src={aboutImage} className="my-2" style={{ width: "90%" }} alt="logo" />
            </div>
            <div className="hero-img-btm">
                <img src={aboutImage2} className="my-2" style={{ width: "90%" }} alt="logo" />
            </div>
            </div>
        </section>
    );
}

export default About;