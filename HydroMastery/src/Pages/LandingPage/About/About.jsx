import React from 'react'
import './About.css';
import aboutbg from './assets/aboutbg.jpg';
import Options from './Options.json';
import { MdOutlineChevronRight } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { FaSwimmer } from "react-icons/fa";
import { GoSync } from "react-icons/go";
import { FaConnectdevelop } from "react-icons/fa";

export default function About() {
    
    const { Header, Children } = Options;

    const iconComponents = {
        MdOutlineChevronRight,
        IoAnalytics,
        IoCubeOutline,
        FaSwimmer,
        GoSync,
        FaConnectdevelop
    };

    const renderIcon = (icon, {fontSize = "35px", ...restOptions} = {}) => {
        const IconComponent = iconComponents[icon.ClassName] || GoSync; // GoSync default icon
        return <IconComponent className="promptIcon" style={{ fontSize, ...restOptions }}/>;
    }


    const renderHeader = (item) => {
      return <div key={item.Name} className="content">
              <h3>{item.Title}</h3>
              <p>{item.SubTitle}</p>
              <a href={item.Link.Href} className={item.Link.ClassName}>{item.Link.Title}
                {renderIcon(item.Link.Icon, { fontSize: '25px', color: item.Link.Icon.Color })}
            </a>
            </div>
    }

    const renderSingleItem = (item) => {
        return <div key={item.Name} className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={item.DataAosDelay}>
                {renderIcon(item.Icon)}
                <h4>{item.Title}</h4>
                <p>{item.SubTitle}</p>
            </div>
    }

    const renderChildItem = (item) => {
        if(item.Link != null){
            return renderHeader(item);
        }
        return renderSingleItem(item);

    }

  return (
    // TODO: Check with Alex if that's okay
    <section id="about" className="about" style={{backgroundImage: `url(${aboutbg})`, backgroundSize:"center no-repeat", padding: "60px 0", position: "relative"}}> 
      <div className="container" >
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
            {Header.ChildContainer.ChildItems.map(item => renderChildItem(item))}
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {Children.map(item => renderChildItem(item))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
