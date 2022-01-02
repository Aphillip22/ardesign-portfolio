import React from 'react';
import logoImage from "../../assets/images/clr-logo.svg";
import aboutImage from "../../assets/images/about-img.jpg";

function About() {
    return (
        <section className="my-5 flex-row hero" id="about">
            <div className="hero-img" style={{ width: "50%" }}>
                <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="about" />
            </div>
            <div className="hero-about">
                <h1>About Amber</h1>
                <p>
                I am a published author and full-stack web developer. I work as a freelance web developer and
                ghostwriter. My projects showcase my design and content writing abilities.
                </p>
                <p>
                As an artist, I specialize in graphite drawings and acrylic paintings. My creative eye has given me a
                unique ability to design potent professional websites.
                </p>
            </div>
            <div className="hero-img" style={{ width: "30%" }}>
                <img src={logoImage} className="my-2" style={{ width: "100%" }} alt="logo" />
            </div>
        </section>
    );
}

export default About;