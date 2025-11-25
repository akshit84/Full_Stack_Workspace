import React from 'react'
import { Outlet } from 'react-router'

const JobsLayout = () => {
  return (
    <div>
        <h2 className='text-3xl'>Jobs openings</h2>
        <p className='text-lg '>List of current job onpening in our company.</p>
        <Outlet />
    </div>
  )
}

export default JobsLayout