import React from 'react'
import { Link, NavLink } from 'react-router'

function SideBar() {

  const category = [
    { key: "fashion", element: "Fashion" },
    { key: "homeAppliance", element: "Home Appliance" },
    { key: "electronics", element: "Electronics" },
    { key: "sports", element: "Sport" },
    { key: "grocery", element: "Grocery" },
    { key: "toys", element: "Toys" },

  ]
  return (
    <>

      <div className='sticky left-0 bg-amber-200 w-60 h-screen p-5'>
        <p className='font-medium text-xl text-slate-800 mb-3'>Categories</p>
        <ul className='text-lg'>
          {category.map((item) => (
            <li key={item.key} className='my-2'> 
              <NavLink to={`${item.key}`}  className={({isActive}) => (isActive ? 'bg-emerald-600 px-3 py-2 rounded-xl font-semibold':'px-3 py-2')}>
                {item.element}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default SideBar
