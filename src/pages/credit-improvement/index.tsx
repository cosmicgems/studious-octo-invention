import BuildCredit from '@/components/credit_improvement/BuildCredit'
import CreditBasics from '@/components/credit_improvement/CreditBasics'
import CreditRightForYou from '@/components/credit_improvement/CreditRightForYou'
import FixCredit from '@/components/credit_improvement/FixCredit'
import Hero from '@/components/credit_improvement/Hero'
import ImproveCredit from '@/components/credit_improvement/ImproveCredit'
import MeasureUpCTA from '@/components/credit_improvement/MeasureUpCTA'
import ScoreNeeded from '@/components/credit_improvement/ScoreNeeded'
import React from 'react'

const CreditImprovementPage = () => {
  return (
    <div style={{}}>
      <Hero />
      <MeasureUpCTA />
      <FixCredit />
      <ImproveCredit />
      <BuildCredit />
      <ScoreNeeded />
      <CreditBasics />
      <CreditRightForYou />
    </div>
  )
}

export default CreditImprovementPage