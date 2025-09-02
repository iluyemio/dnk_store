import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const FeaturedCard = ({featureBgImage, featureDiscountInfo, featureBodyText, btnPrimaryText}) => {
    useEffect(() => {
          AOS.init();
        }, []);

  return (
    <article data-aos="zoom-in-up" data-aos-duration="1000" className="flex items-end justify-center bg-black/50 bg-blend-overlay bg-cover bg-center m-h-screen h-[75vh]" style={{backgroundImage: `url(${featureBgImage})`}}>
        <div className="w-[80%] mb-10 space-y-4 z-10">
            <h3 className="text-white text-[1.6rem] font-[600]">{featureDiscountInfo}</h3>
            <p className="text-white text-[1rem]">{featureBodyText}</p>
            <button className='uppercase text-[.9rem] bg-white px-8 py-3 font-semibold hover:bg-black hover:text-white transition-all ease-in-out duration-500'>{btnPrimaryText}</button>
        </div>
    </article>
  )
}

export default FeaturedCard