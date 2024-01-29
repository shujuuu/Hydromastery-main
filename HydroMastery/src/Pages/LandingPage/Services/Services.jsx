import React from 'react'
import './Services.css';
import Options from './Options.json';
import { IoBarChartOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoOptionsSharp } from "react-icons/io5";
import { IoFitnessOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";



export default function Services() {

    const iconComponents = {
        IoBarChartOutline,
        IoCalendarNumberOutline,
        IoOptionsSharp,
        IoFitnessOutline,
        VscDebugDisconnect
    }

    const renderIcon = (icon, {fontSize = "35px", ...restOptions} = {}) => {
        const IconComponent = iconComponents[icon] || IoCalendarNumberOutline
        return <IconComponent style={{ fontSize, ...restOptions }} />;
    }

    const renderItem = (item) => {
        return <div className={item.ClassName} key={item.Name}>
            <div className={item.Level1ClassName} data-aos="fade-up" data-aos-delay={item.DataAosDelay}>
                <div className={`${item.Level2ClassName} promptIcon`}>{renderIcon(item.Icon, { color: "67b0d1"})}</div>
                <h4 className="title"><a href="">{item.Title}</a></h4>
                <p className="description">{item.Subtitle}</p>
            </div>
        </div>
    }

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                    <h2>{Options.Title}</h2>
                    <p>{Options.Subtitle}</p>
                </div>
                <div className="row">
                    {Options.RowItems.map(item => renderItem(item))}
                </div>
            </div>
        </section>
    )
}
