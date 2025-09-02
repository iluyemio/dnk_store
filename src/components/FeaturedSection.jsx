import FeaturedCard from "./utilities/FeaturedCard"

const FeaturedSection = () => {
  return (
    <section className="relative flex gap-5 lg:flex-row flex-col justify-center py-20 px-14 bg-white z-40">
        <FeaturedCard featureBgImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" featureDiscountInfo="20% Off On Tank Tops" featureBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." btnPrimaryText="Shop Now"/>
        <FeaturedCard featureBgImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" featureDiscountInfo="Latest Eyewear For You" featureBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." btnPrimaryText="Shop Now"/>
        <FeaturedCard featureBgImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" featureDiscountInfo="Let Lorem Suit Up!" featureBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." btnPrimaryText="Check Out"/>
    </section>
  )
}

export default FeaturedSection