import './CTA.css'

import Options from './Options.json';

import backgroundImage from './assets/cta-bg.jpg';


export default function Cta() {
    return <section id="cta" className="cta" style={{background: `linear-gradient(rgba(103, 176, 209, 0.8), rgba(103, 176, 209, 0.8)), url("${backgroundImage}") fixed center center`}}>
        <div className="container" data-aos="zoom-in">
            <div className="text-center">
                <h3>{Options.Title}</h3>
                <p>{Options.Subtitle}</p>
                <a className="cta-btn" href="#">{Options.ButtonText}</a>
            </div>
        </div>
  </section>
}