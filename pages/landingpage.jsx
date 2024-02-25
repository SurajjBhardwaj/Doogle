import React from 'react'
import Beginner from '@/sections/Beginner'
import Expert from '@/sections/Expert'
import Attraction from '@/sections/Attraction'
import FAQ from '@/sections/FAQ'
import Feature from '@/sections/Feature'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'

import Intermediate from '@/sections/Intermediate'

import Navbar from '@/sections/component/Navbar'

import CTA from '@/sections/cta'


const landingpage = () => {
  return (
    <>
       <Navbar />
      <Hero />
      <Beginner />
      <Intermediate />
      <Expert />
      <Attraction />
      <Feature />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default landingpage
