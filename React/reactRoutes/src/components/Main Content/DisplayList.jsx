import React from 'react'

function DisplayList({ category, products }) {

    return (
        <>
            <div className='p-5'>
                <p className='text-2xl capitalize'>{category}</p>
                <div className='my-3 grid grid-cols-3 gap-4'>

                    {products.map((item) => (
                        <div key={item.key} className='border-2 border-gray-700 rounded-xl gap-4 h-[270px] w-[300px]'>
                            <div className='bg-neutral-300/60 flex justify-center items-center rounded-tl-xl rounded-tr-xl h-40'>
                                <img src={item.image} alt={item.name} className='max-w-60 max-h-40 ' />
                            </div>
                            <h2 className='font-medium px-2 text-base'>{item.brand}</h2>
                            <p className='font-light text-slate-600 px-2 text-base'>{item.name}</p>
                            <p className='font-medium px-2 text-base'>Rs. {item.price}</p>
                            <span className="mx-2 px-2 py-1 font-sans rounded-md font-semibold bg-gray-100 inline-flex items-center gap-1">
                                {item.rating}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#22c55e"
                                >
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.403 8.177L12 18.897l-7.337 3.878 1.403-8.177L.132 9.21l8.2-1.192L12 .587z" />
                                </svg>
                            </span>


                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default DisplayList