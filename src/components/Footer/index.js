import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="flex-row footer-container" style={{ justifyContent: 'flex-end' }}>
            <a href="https://www.linkedin.com/in/amber-phillips-77ab70b2/" className="fa-icon" ><FaLinkedin /></a>
            <a href="https://github.com/Aphillip22" className="fa-icon" ><FaGithub /></a>
            <a href="mailto: amberphillipsdesign@gmail.com"className="fa-icon"><FaEnvelope /></a>
            <a href="tel:+13854245740" className="fa-icon"><FaPhoneSquare /></a>
            <h3 className="flex-row"><i><FaRegCopyright /></i>2022 AR Design. All rights reserved.</h3>
            </div>
        </footer>
    );
}