import { useEffect } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { RiShoppingBasketFill } from 'react-icons/ri'
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({productImage, productTitle, productCategory, oldPrice, newPrice}) => {
    useEffect(() => {
              AOS.init();
            }, []);

  return (
    <article>
        <div data-aos="fade-right" data-aos-duration="1000">
            <div className='relative inline-block group'>
                <a href="">
                   <img src={productImage} alt="" className='w-[230px]' />
                </a>
                <span className='bg-white rounded-[1rem] py-1 px-2 text-[.9rem] shadow-md shadow-gray-400 absolute top-4 left-4'>Sales!</span>
                <span className='bg-white rounded-full p-2 absolute top-4 right-4 opacity-0 scale-90 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100'>
                    <RiShoppingBasketFill/>
                </span>
            </div>
            <a href="" className=''>
                <h3 className='text-[1rem] font-[600] mt-2'>{productTitle}</h3>
            </a>
            <div className='mt-2 space-y-4'>
                <span className='block text-[.88rem] text-[#6a6a6a]'>{productCategory}</span>
                <span className=''>
                    <del className='text-[.88rem] text-[#6a6a6a] font-[700]'>{oldPrice}</del>
                    <span className='text-[.88rem] font-[700] pl-1'>{newPrice}</span>
                </span>
                <span>
                    <FaRegStar />
                </span>
            </div>
        </div>
    </article>
  )
}

export default ProductCard