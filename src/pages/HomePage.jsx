import FeaturedSection from "../components/FeaturedSection"
import HomeHero from "../components/HomeHero"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <section>
        <Navbar/>
        <HomeHero/>
        <FeaturedSection/>
    </section>
  )
}

export default HomePage