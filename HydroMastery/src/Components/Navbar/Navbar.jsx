import React, { useEffect, useMemo, useState } from 'react'
import './Navbar.css'
import Config from '../../Config.json'
// import HMYlogoBlue from './assets/HMYlogoOnlyBlue.png'
import HMYlogoBlue from './assets/transparentlogo.png'

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

import { useNavigate } from 'react-router'

const STICKY_THRESHOLD = 30;

export default function Navbar({items}) {

    const navigate = useNavigate();

    const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);

    const [activeSection, setActiveSection] = useState(null);

    const sectionIds = ['header', 'hero', 'about', 'services', 'pricing', 'team'];

    const onRedirectionClick = (item) => {
        item.Redirect && navigate(item.Name)
    }

    const createItem = (item) => item.Children ? createMultiItem(item) : createSingleItem(item);
    
    const createSingleItem = (item) => <li onClick={() => setIsNavbarMobileOpen(false)} key={item.Name}><a className={`${activeSection === item.Name? 'active' : ""} ${item.ClassNames.join(' ')}`} href={!item.Redirect? `#${item.Name}` : undefined} onClick={() => onRedirectionClick(item)}>{item.Alias}</a></li>;
    
    const createMultiItem = (item) => {
        return <li key={item.Name} className={item.ClassNames.join(' ')}>
            <a href="#"><span>{item.Alias}</span>
                <FaAngleDown/></a>
            <ul>
                {item.Children.map(child => createItem(child))}
            </ul>
        </li>
    }

    const toggleNavbarMobile = function(forced) {
        setIsNavbarMobileOpen(prevState => forced !== undefined? forced: !prevState);
    }

    const [headerBackground, setHeaderBackground] = useState(false);
    useEffect(() => {
        
        const handleScroll = () => {
            const position = window.scrollY;
            if(position > STICKY_THRESHOLD){
                setHeaderBackground(() => true)
            }
            else if(position <= STICKY_THRESHOLD){
                setHeaderBackground(() => false)
            }

            for (const id of sectionIds) {
        
                const element = document.getElementById(id);
        
                if (element) {
                  const elementTop = element.getBoundingClientRect().top;
                  const isVisible = elementTop + 200 < window.innerHeight && elementTop > 0;
        
                  if (isVisible) {
                    setActiveSection(id);
                    break;
                  }
                }
                if(activeSection && setActiveSection("header"));
            }

        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setHeaderBackground, setActiveSection, sectionIds]);

    const navItems = useMemo(() => items.map(item => createItem(item)),[createItem, items]);

    return (
        <header id="header" className={`fixed-top ${headerBackground? "header-scrolled" : "header-transparent"}`}>
            <div className="container">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={HMYlogoBlue} alt="" className="img-fluid"/>
                    <h1 className="text-light"><span>{Config.Appname}</span></h1>
                </div>

                <nav id="navbar" className={`navbar ${isNavbarMobileOpen? 'navbar-mobile': ''}`}>
                    <ul>
                        {navItems}
                    </ul>
                    <i className={`mobile-nav-toggle`} onClick={() => toggleNavbarMobile(!isNavbarMobileOpen)}> {isNavbarMobileOpen? <IoMdClose />: <CiMenuBurger />}</i>
                </nav>
            </div>
        </header>
    )
}

// {
//     "Name": "dropdown",
//     "ClassNames": ["dropdown"],
//     "Alias": "Dropdown",
//     "Children": 
//     [
//         {
//         "Name": "dropdown1",
//         "ClassNames": [],
//         "Alias": "Dropdown1"
//         },
//         {
//             "Name": "dropdown2",
//             "ClassNames": ["bi bi-chevron-right"],
//             "Alias": "DeepDropDown",
//             "Children": 
//             [
//                 {
//                     "Name": "dropdown1",
//                     "ClassNames": [],
//                     "Alias": "Dropdown1"
//                 },
//                 {
//                     "Name": "dropdown2",
//                     "ClassNames": [],
//                     "Alias": "Dropdown2"
//                 }
//             ]
//         }
//     ]
// },