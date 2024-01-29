import React from 'react'
import Options from './Options.json'
import './Counts.css';
import { TbMoodHappy } from "react-icons/tb";
import { TfiAgenda } from "react-icons/tfi";
import { AiTwotoneDashboard } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaSwimmer } from "react-icons/fa";

import { CountNumber } from '../../../Components/Animations/Counting/CountNumbers';

export default function Counts() {

    const iconComponents = {
        TbMoodHappy,
        TfiAgenda,
        AiTwotoneDashboard,
        MdPeople,
        CiMap,
        CiClock1,
        FaSwimmer
    };
    
    const renderIcon = (icon, {fontSize = '35px', iconColor, fill} = {}) => {
        const IconComponent = iconComponents[icon] || MdPeople;
        return <IconComponent style={{ fontSize, color: iconColor, fill }} className="icon"/>;
    }

    const renderItem = (item) => {
        return <div key={item.Name} className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
        <div className="count-box">
          {renderIcon(item.Icon)}
          <CountNumber className="purecounter" number={item.CounterEnd} mass={3}/>
          <p><strong>{item.Title}</strong> {item.SubTitle}</p>
        </div>
      </div>
    }


  return (
    <section id="counts" className="counts  section-bg">
      <div className="container">
        <div className="row no-gutters">
          {Options.map(item => renderItem(item))}
        </div>
      </div>
    </section>
  )
}
