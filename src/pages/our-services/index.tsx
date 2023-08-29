import ClientReviews from '@/components/Our_Services/Client_Reviews/ClientReviews'
import Hero from '@/components/Our_Services/Hero'
import ServiceList from '@/components/Our_Services/Service_Plans/ServiceList'
import Services from '@/components/Our_Services/Service_Plans/Services'
import StatisticsComponent from '@/components/Our_Services/StatisticsComponent'
import UnderstandCreditRepair from '@/components/Our_Services/Understanding_Credit_Repair/UnderstandCreditRepair'
import React from 'react'

const OurServicesPage = () => {
  return (
    <div className=''>
      <Hero />
      <UnderstandCreditRepair />
      <StatisticsComponent />
      <Services/>
      <ClientReviews />
    </div>
  )
}

export default OurServicesPage