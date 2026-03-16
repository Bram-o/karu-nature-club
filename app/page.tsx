import Preloader from './components/Preloader'
import HeroCarousel from './components/HeroCarousel'
import About from './components/About'
import Activities from './components/Activities'
import Team from './components/Team'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Registration from './components/Registration'
import Blog from './components/Blog'
import Footer from './components/Footer'
import ScrollAnimations from './components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <HeroCarousel />
        <About />
        <Activities />
        <Team />
        <Events />
        <Gallery />
        <Blog />
        <Registration />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  )
}
