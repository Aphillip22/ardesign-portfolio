import React from 'react';
import coverImage from "../../assets/images/cover-img.jpg";

function About() {
    return (
        <section className="my-5" class="intro d-flex align-items-start">
            <div class="hero-img">
                <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" />
            </div>
            <div class="hero-art">
                <p>splash of</p>
                <h2>artist</h2>
            </div>
            <div class="hero-code">
                <p>hint of</p>
                <h2>⪡coder⪢</h2>
            </div>
            <div>
                <h1 id="about">About Amber</h1>
                <p>
                I am a published author and full-stack web developer. I work as a freelance web developer and
                ghostwriter. My projects showcase my design and content writing abilities.
                </p>
                <p>
                As an artist, I specialize in graphite drawings and acrylic paintings. My creative eye has given me a
                unique ability to design potent professional websites.
                </p>
            </div>
        </section>
    );
}

export default About;