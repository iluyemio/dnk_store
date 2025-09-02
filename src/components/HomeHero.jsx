import { useEffect } from 'react';
import ButtonPrimary from './buttons/ButtonPrimary'
import ButtonSecondary from './buttons/ButtonSecondary'
import AOS from "aos";
import "aos/dist/aos.css";

//style={{backgroundImage: `url(${bgImage})`}}

const HomeHero = () => {
    useEffect(() => {
      AOS.init();
    }, []);

  return (
<section className="relative h-screen">
    <div className="inset-0 z-0 h-[100vh] px-8 py-4 bg-fixed bg-cover bg-center bg-black/40 bg-blend-overlay bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg)]">
        <div className="relative z-10 h-[110vh] flex items-center">
            <div className='space-y-8'>
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <h1 className='text-[4.1rem] font-[600] text-white leading-[5.8rem]'>Raining Offers For <br className='hidden lg:block'/> Hot Summer!</h1>
                    <h4 className='text-[1.6rem] text-white font-[600]'>25% Off On All Products</h4>
                </div>
            
            <div className='space-x-6 flex'>
                <ButtonPrimary btnPrimaryText="Shop Now"/>
                <ButtonSecondary btnSecondaryText="Find More"/>
            </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default HomeHero