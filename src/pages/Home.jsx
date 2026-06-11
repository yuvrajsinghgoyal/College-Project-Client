import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import { Testimonials } from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className="w-full bg-light">
        <Hero />
      </div>
      <FeaturedSection/>
      <Banner/>
      <Testimonials/>
      <NewsLetter/>
    </>
  )
}

export default Home