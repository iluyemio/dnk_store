import BrandLogo from "../components/BrandLogo"
import FeaturedSection from "../components/FeaturedSection"
import HomeCta from "../components/HomeCta"
import HomeHero from "../components/HomeHero"
import Navbar from "../components/Navbar"
import ProductSection from "../components/ProductSection"
import ValueSection from "../components/ValueSection"


const HomePage = () => {
  return (
    <section>
        <Navbar/>
        <HomeHero/>
        <BrandLogo/>
        <FeaturedSection/>
        <ProductSection/>
        <HomeCta/>
        <ValueSection/>
    </section>
  )
}

export default HomePage