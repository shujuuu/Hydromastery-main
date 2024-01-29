import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Counts from './Counts/Counts'
import Cta from './CTA/CTA'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import NavItems from '../../Components/Navbar/NavItems.json'
import Team from './Team/Team'

export default function LandingPage() {
  return (
    <>
      <Navbar items={NavItems} />
      <Hero/>
      <About/>
      <Services/>
      <Counts/>
      <Cta/>
      <Portfolio/>
      <Testimonials/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}
