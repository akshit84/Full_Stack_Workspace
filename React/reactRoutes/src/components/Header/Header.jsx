import React from 'react'

function Header() {
  return (
    <>
      <div>
        <nav className='flex justify-between bg-purple-50 p-2 sticky top-0'>
          <div className='flex w-auto'>
            <div className='p-2 '>Shop</div>
            <div className='p-2 '>FAQ</div>
            <div className='p-2 '>Contact</div>
          </div>
          <div className='p-2 '>E Commerce</div>
          <div className='flex'>
            <div className='p-2 '>Search</div>
            <div className='p-2 '>Profile</div>
            <div className='p-2 '>Log In</div>
            <div className='p-2 '>Shopping Bag</div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header