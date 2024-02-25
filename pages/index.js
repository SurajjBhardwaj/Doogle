import Beginner from '@/sections/Beginner'
import Expert from '@/sections/Expert'
import Attraction from '@/sections/Attraction'
import FAQ from '@/sections/FAQ'
import Feature from '@/sections/Feature'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import How from '@/sections/How'
import Intermediate from '@/sections/Intermediate'
import Testimonials from '@/sections/Testimonials'
import Navbar from '@/sections/component/Navbar'
import Home from '@/sections/profile/Home'
import ProfileDashboard from '@/sections/profile/ProfileDashboard'
import CTA from '@/sections/cta'
import React from 'react'
import Head from 'next/head'


function index() {
  return (
    <>
      {/* <Head>
        <title>Doogle</title>
        <meta name="description" content="Connect, collaborate, and grow with developers worldwide on our platform designed for seamless knowledge exchange and problem-solving." />
        <link rel='favicon' src="/removebg-preview 1.ico" />
      </Head> */}
      {/* <Navbar />
      <Hero />
      <Beginner />
      <Intermediate />
      <Expert />
      <Attraction />
      <Feature />
      <FAQ />
      <CTA />
      <Footer /> */}

      <Home />
     

    </>
  )
}

export default index
