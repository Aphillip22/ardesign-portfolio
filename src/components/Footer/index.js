import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="flex-row">
            <i><FaCopyright /></i>
            <h3>AR Design - Amber Phillips</h3>
            <a href="https://www.linkedin.com/in/amber-phillips-77ab70b2/" className="fa-icon" ><FaLinkedin /></a>
            <a href="https://github.com/Aphillip22" className="fa-icon" ><FaGithub /></a>
            <a href="mailto: amberphillipsdesign@gmail.com"className="fa-icon"><FaEnvelope /></a>
            <a href="tel:+13854245740" className="fa-icon"><FaPhoneSquare /></a>
            </div>
        </footer>
    );
}