import ClientTestimonials from '@/components/About/ClientTestimonials'
import CoreValues from '@/components/About/VisionStatement'
import DoesItWork from '@/components/About/DoesItWork'
import Hero from '@/components/About/Hero'
import HowToStart from '@/components/About/HowToStart'
import MissionStatement from '@/components/About/MissionStatement'
import Process from '@/components/About/Process'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Hero/>
      <MissionStatement/>
      <CoreValues/>
      <Process/>
      <DoesItWork/>
      <ClientTestimonials/>
      <HowToStart/>
    </div>
  )
}

export default ContactPage