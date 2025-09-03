import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const BrandLogo = () => {
  return (
    <div className="w-full lg:px-8 px-3 mt-20 relative">
        <div className="mx-auto mt-5 justify-center relative">
            {/* Left Arrow */}
                <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-50 bg-[#1CA8CB] hover:bg-[#0A1F24] text-white p-4 rounded-full shadow-lg transition-all duration-500">
                <FaAngleLeft />
                </button>

                {/* Right Arrow */}
                <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-50 bg-[#1CA8CB] hover:bg-[#0A1F24] text-white p-4 rounded-full shadow-lg transition-all duration-500">
                <FaAngleRight />
                </button>

            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                modules={[Autoplay, Navigation]}
                speed={3000}
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                600: { slidesPerView: 2, spaceBetween: 15 },
                740: { slidesPerView: 2, spaceBetween: 15 },
                800: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 15 },
                1280: { slidesPerView: 5, spaceBetween: 30 },
                }}
            >
                

                {/* Example Slides */}
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

  )
}

export default BrandLogo