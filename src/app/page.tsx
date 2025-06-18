// import { HeroSection } from '@/components/ui/HeroSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { HeroSection } from '@/components/ui/HeroSection'
import { HowItWorksSection } from '@/components/ui/HowItWorksSection'
import PricingSection from '@/components/ui/PricingSection'
import TestimonialsSection from '@/components/ui/TestimonialsSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
     <HeroSection />
     <FeaturesSection />
     <HowItWorksSection />
     <TestimonialsSection />
     <PricingSection />
     <Footer />
    </div>
  )
}

export default Home