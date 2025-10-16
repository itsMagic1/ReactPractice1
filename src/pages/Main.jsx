import { LogoCarousel } from "../components/shared/logoCarousel/logoCarousel"
import { FAQS } from "../components/ui/FAQ/FAQS"
import { Features } from "../components/ui/Features/Features"
import { Hero } from "../components/ui/Hero/Hero"
import { Integrations } from "../components/ui/Integrations/Integrations"
import { Pricing } from "../components/ui/Pricing/Pricing"
import { WorkFlow } from "../components/ui/WorkFlow/WorkFlow"

export const Main = () => {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Features />
      <Integrations />
      <WorkFlow />
      <Pricing />
      <FAQS />
    </>
  )
}
