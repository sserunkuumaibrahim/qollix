import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { Statistics } from "@/components/statistics"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Statistics />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

