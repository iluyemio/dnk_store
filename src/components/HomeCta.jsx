import ButtonPrimary from './buttons/ButtonPrimary'

const HomeCta = () => {
  return (
    <section className="h-full bg-[#F5F7F9] flex justify-center lg:px-8 px-3">
        <div className='mt-10 h-[500px] w-full overflow-hidden bg-fixed bg-cover bg-center bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg)] flex items-center justify-center lg:justify-start text-center md:text-center lg:text-left lg:pl-20'>    
            <div className='space-y-3 lg:w-[50%] w-full px-3'>
                <h5 className='text-[1.3rem] font-[700] text-white'>Limited Time Offer</h5>
                <h2 className='text-[2.5rem] font-[700] text-white'>Special Edition</h2>
                <p className='text-[1rem] font-[400] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <h5 className='text-[1.3rem] font-[700] text-white'>Buy This T-shirt At 20% Discount, Use Code OFF20</h5>
                <ButtonPrimary btnPrimaryText="Shop Now"/>
            </div>     
        </div>
    </section>
  )
}

export default HomeCta