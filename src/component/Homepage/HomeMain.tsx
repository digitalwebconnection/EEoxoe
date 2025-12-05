import CloudSection from "./CloudSection"
import HeroSection from "./HomeHero"
import ServicesSection from "./HomeServices"
import InterfacesSection from "./InterfacesSection"
import ProgramsSection from "./ProgramsSection"
import SolutionsSection from "./SolutionsSection"
import StatsSection from "./StatsSection"
import TestimonialsSection from "./TestimonialsSection"
import WorkflowSection from "./WorkflowSection"


const HomeMain = () => {
  return (
    <>
      <ProgramsSection/>
      <HeroSection/>
      <ServicesSection/>
      <StatsSection/>
      <SolutionsSection/>
      <CloudSection/>
    
      <WorkflowSection/>
      <InterfacesSection/>
      <TestimonialsSection/>
    </>
  )
}

export default HomeMain
