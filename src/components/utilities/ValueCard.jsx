const ValueCard = ({valueIcon, valueTitle, valueText}) => {
  return (
<article>
    <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-centers">
        <div className="text-center space-y-3">
            <div className="flex justify-center">
            <img src={valueIcon} alt="" className='w-[100px] lg:w-[50px]'/>
            </div>
            <h3 className='text-[1.2rem] font-[700] text-black'>{valueTitle}</h3>
            <p className='text-[1rem] text-[#333333]'>{valueText}</p>
        </div>
    </div>
</article>
  )
}

export default ValueCard