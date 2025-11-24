import React, { useContext } from 'react'
import { CgSearch, CgProfile, CgShoppingCart } from "react-icons/cg";
import { AddToCartContext } from '../Main Content/DashBoard';



function Header() {

  const {cartCount} = useContext(AddToCartContext)


  return (
    <>
      <div>
        <nav className='flex justify-between bg-purple-50 px-4 py-2 sticky top-0'>
          <div className='flex justify-center items-center h-auto px-4'>
            <div className=''>
              <img src="/logo.svg" alt="Logo" className='w-auto h-6' />
            </div>
          </div>
          <div className='p-2 '>E Commerce</div>
          <div className='flex items-center space-x-4 mr-5'>
            <div className=''><CgSearch size="25" /></div>
            <div className=''><CgProfile size="25" /></div>
            <div className=''><button className=' px-3 py-1 rounded-full font-semibold text-base bg-purple-300'>Log In</button></div>
            <div className='icon-cart relative'>
              <CgShoppingCart size="25" />
              <span className='flex w-5 h-5 bg-red-700 text-white justify-center items-center rounded-full absolute -top-2.5 -right-2.5'>
                {cartCount}
              </span>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header