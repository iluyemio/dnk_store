import React from 'react'
import Logo from "../assets/logo.png"
import { FaAlignJustify, FaShoppingBag, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <section className="relative">
        <nav className='absolute top-0 left-0 w-full bg-[#146190]/30 z-10'>
          <div className='flex items-center justify-between text-white px-8 py-4'>
            <div className='flex items-center justify-between gap-20'>
              <img src={Logo} alt="This is the Logo"/>

              <ul className='justify-between text-[.9rem] font-[700] gap-7 cursor-pointer hidden lg:flex uppercase'>
                <li>Everything</li>
                <li >Women</li>
                <li >Men</li>
                <li >Accessories</li>
              </ul>
            </div>

            <div className='flex items-center justify-between gap-10 text-white'>
              <ul className='lg:flex hidden justify-between gap-7 cursor-pointer uppercase text-[.8rem] font-[500]'>
                <li >About </li>
                <li >Contact Us </li>
              </ul>

              <div className='flex items-center justify-between gap-7'>
                <div className='flex items-center justify-between gap-5'>
                  <h4 className='font-[800]'>$0.00</h4>
                  
                  <div className='relative cursor-pointer'>
                    <FaShoppingBag />
                    <div className='absolute bottom-3 left-3 bg-white p-1 rounded-full w-[1rem] h-[1rem] text-black text-[.7rem] font-[700] flex items-center justify-center'>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className='cursor-pointer hidden lg:flex'>
                  
                    <FaUser />
                </div>

                <div className='cursor-pointer bg-black p-4 flex lg:hidden' >
                  <FaAlignJustify className="text-[1.5rem]"/>
                </div>
                
              </div>
            </div>
          </div>
        </nav>

      </section>
  )
}

export default Navbar