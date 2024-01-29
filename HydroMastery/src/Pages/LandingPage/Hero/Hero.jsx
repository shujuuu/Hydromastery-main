import React from 'react'
import './Hero.css'
import Options from './Options.json';
import HeroImage from "./assets/header.jpeg"
import { BiChevronsDown } from "react-icons/bi";
import HeroImage2 from "./assets/HeroImage2.jpg";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section id="hero">
    <div className="hero-container" data-aos="fade-up" style={{background:`linear-gradient(rgba(103, 176, 209, 0.3), rgba(103, 176, 209, 0.4)), url(${HeroImage})`, backgroundSize: 'cover'}}>
      <h1>{Options.Title}</h1>
      <h2>{Options.Subtitle.Static}
      <ReactTyped className='typed' strings={Options.Subtitle.Dynamic} typeSpeed={40} backSpeed={50} loop/>
      </h2>
      <a href="#about" className="btn-get-started scrollto"><BiChevronsDown size={40}/></a>
    </div>
  </section>
  )
}
