import React from 'react';
import coverImage from "../../assets/images/cover-img.jpg";

function Hero() {
    return (
        <section className="my-5 flex-row hero">
            <div className="hero-img" style={{ width: "30%" }}>
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </div>
            <div className="hero-art">
                <p>splash of</p>
                <h2><a href="#artwork"><span>&#60;artist&#62;</span></a></h2>
            </div>
            <div className="hero-code">
                <p>hint of</p>
                <h2><a href="#portfolio"><span>&#60;coder/&#62;</span></a></h2>
            </div>
        </section>
    );
}

export default Hero;