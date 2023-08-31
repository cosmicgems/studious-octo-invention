import ClientTestimonials from '@/components/About/ClientTestimonials'
import VisionStatement from '@/components/About/VisionStatement'
import DoesItWork from '@/components/About/DoesItWork'
import Hero from '@/components/About/Hero'
import HowToStart from '@/components/About/HowToStart'
import MissionStatement from '@/components/About/MissionStatement'
import Process from '@/components/About/Process'
import React from 'react'
import CoreValues from '@/components/About/CoreValues'

const AboutPage = () => {
  return (
    <div>
      <Hero/>
      <MissionStatement/>
      <CoreValues />
      <VisionStatement />
      <Process/>
      {/* <DoesItWork/>
      <ClientTestimonials/> */}
      <HowToStart/>
    </div>
  )
}

export default AboutPage