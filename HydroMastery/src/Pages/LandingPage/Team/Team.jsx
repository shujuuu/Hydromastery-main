import React from 'react'
import Options from './Options.json';
import TeamItems from './Teamitems.json';
import './Team.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {

    const iconComponents = {
    FaXTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedin
};
    
    const renderIcon = (icon, classNames, { ...restOptions} = {}) => {
        const IconComponent = iconComponents[icon] || FaXTwitter; // FaXTwitter default icon
        return <IconComponent className={classNames} style={{...restOptions }}/>;
    }


    const renderItem = (item) => {
        return <div className="col-lg-4 col-md-6" key={item.id}>
            <div className="member" data-aos="fade-up">
              <div className="pic"><img src={item.Image} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>{item.Name}</h4>
                <span>{item.Title}</span>
                <div className="social">
                  <a href="">{renderIcon("FaxTwitter", "bi bi-twitter")}</a>
                  <a href="">{renderIcon("FaFacebookF", "bi bi-facebook")}</a>
                  <a href="">{renderIcon("FaInstagram", "bi bi-instagram")}</a>
                  <a href="">{renderIcon("FaLinkedin", "bi bi-linkedin")}</a>
                  {/* <a href=""><i className="bi bi-facebook"></i></a> */}
                  {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                  {/* <a href=""><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
          </div>
    }

  return (
    <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>{Options.Title}</h2>
          <p>{Options.Subtitle}</p>
        </div>
        <div className="row">
          {TeamItems.map(item => renderItem(item))}
        </div>
      </div>
    </section>
  )
}
