import React from 'react'
// import { products } from '../utils/DataObjects'

const Displayitems = ({products}) => {
    console.log(products);

    return (
        <div className="w-screen h-600px bg-white shadow-lg rounded-xl text-center grid grid-cols-4 gap-4 mt-5" style={{padding:'10px'}}>

            {products.map((data,index) => (
                <div className='w-64 bg-white shadow-lg rounded-xl p-4 text-center' key={index+1}>
                    <img className="w-full h-40 object-cover rounded-lg" src={data.product_img}></img>
                    <h3 className="text-lg font-semibold mt-3">{data.product_name}</h3>
                    <p className="text-green-600 text-md font-medium mt-1">₹{data.product_price}</p>
                </div>
            ))}

        </div>
    )
}

export default Displayitems