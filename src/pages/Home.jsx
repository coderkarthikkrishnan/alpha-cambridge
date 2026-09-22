import HeroSlider from '../components/HeroSlider/HeroSlider'
import About from './About'
import ServicesSection from './Services'
import FAQ from './FAQ'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section id="about">
        <About />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
