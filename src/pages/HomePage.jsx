import FeaturedSection from "../components/FeaturedSection"
import HomeHero from "../components/HomeHero"
import Navbar from "../components/Navbar"
import ProductSection from "../components/ProductSection"

const HomePage = () => {
  return (
    <section>
        <Navbar/>
        <HomeHero/>
        <FeaturedSection/>
        <ProductSection/>
    </section>
  )
}

export default HomePage