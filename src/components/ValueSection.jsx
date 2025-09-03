import React from 'react'
import ValueCard from './utilities/ValueCard'

const ValueSection = () => {
  return (
    <section className="h-full bg-[#F5F7F9] flex justify-center">
        <div className="py-24 lg:px-8 px-3 gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard valueIcon="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img-100x100.png" valueTitle="Worldwide Shipping" valueText="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
            <ValueCard valueIcon="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" valueTitle="Best Quality" valueText="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
            <ValueCard valueIcon="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" valueTitle="Best Offers" valueText="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
            <ValueCard valueIcon="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" valueTitle="Secure Payments" valueText="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        </div>

    </section>
  )
}

export default ValueSection