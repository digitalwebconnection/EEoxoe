import CloudSection from "./CloudSection"
import HeroSection from "./HomeHero"
import HeroSectionhome from "./HomeHero2"
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
      <HeroSectionhome/>
      <HeroSection/>
      <ServicesSection/>
      <StatsSection/>
      <SolutionsSection/>
      <CloudSection/>
    <ProgramsSection/>
      <WorkflowSection/>
      <InterfacesSection/>
      <TestimonialsSection/>
    </>
  )
}

export default HomeMain
