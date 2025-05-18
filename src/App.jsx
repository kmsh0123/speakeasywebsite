import { Button } from '@material-tailwind/react'
import React from 'react'
import { StickyNavbar } from './components/Navbar'
import HeroSection from './pages/HeroSection'
import AboutUs from './pages/AboutUs'
import { CardDefault } from './pages/Card'
import Certificate from './pages/Certificate'
import { Travel } from './pages/Travel'
import Testimonial from './pages/Testimonial'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <>
    <StickyNavbar/>
    <div className='mx-auto max-w-screen-xl space-y-24 mb-10'>
      <HeroSection/>
      <AboutUs/>
      <CardDefault/>
      <Certificate/>
      <Travel/>
      <Testimonial/>
      <ContactUs/>
    </div>
    </>
   
  )
}

export default App