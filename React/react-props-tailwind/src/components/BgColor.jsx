import React, { useState } from 'react'

function BgColor() {

    const [color, setColor] = useState("white")

    

  return (
    <div className='w-full h-screen duration-200  bg-(--bg)' style={{ ["--bg"]: color}} >
        <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-500 px-3 py-2 rounded-3xl'>
                <button 
                onClick={() => setColor("red")}
                className='outline-none px-4 py-1 text-white rounded-full shadow-lg bg-red-800' >Red</button>
                <button 
                onClick={() => setColor("blue")}
                className='outline-none px-3 py-1 text-white rounded-full shadow-lg bg-blue-500' style={{backgroundColor: "Blue"}}>Blue</button>
                <button 
                onClick={() => setColor("pink")}
                className='outline-none px-3 py-1 text-white rounded-full shadow-lg bg-pink-500' style={{backgroundColor: "Pink"}}>Pink</button>
                <button 
                onClick={() => setColor("purple")}
                className='outline-none px-3 py-1 text-white rounded-full shadow-lg bg-purple-500' style={{backgroundColor: "Purple"}}>Purple</button>
                <button 
                onClick={() => setColor("orange")}
                className='outline-none px-3 py-1 text-white rounded-full shadow-lg bg-orange-500' style={{backgroundColor: "Orange"}}>Orange</button>
                <button 
                onClick={() => setColor("lime")}
                className='outline-none px-3 py-1  rounded-full shadow-lg bg-lime-600' style={{backgroundColor: "lime"}}>Lime</button>
                <button 
                onClick={() => setColor("white")}
                className='outline-none px-3 py-1 rounded-full shadow-lg bg-white' style={{backgroundColor: "white"}}>White</button>


            </div>
            
        </div>
    </div>
    
  )
}

export default BgColor