import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'
import Hero from '@/components/Hero/Hero'
import SimpleProcessSection from '@/components/Process/SimpleProcessSection'
import CreditRepairVsCreditBuilding from '@/components/Repair_Vs_Building/CreditRepairVsCreditBuilding'
import FreeCreditReportConsultation from '@/components/Consultation_Forms/FreeCreditReportConsultation'
import CreditCost from '@/components/Credit_Cost/CreditCost'

const inter = Inter({ subsets: ['latin'] })

//Needed another commit

export default function Home() {
  return (
    <main
      className=''
    >
      
      <Hero />
      <SimpleProcessSection />
      <CreditRepairVsCreditBuilding />
      <FreeCreditReportConsultation />
      <CreditCost />
    </main>
  )
}
