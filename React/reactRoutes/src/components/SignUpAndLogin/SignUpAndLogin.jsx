import React from 'react'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router'

function SignUpAndLogin() {

    const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-center items-center bg-linear-to-bl from-violet-500 to-fuchsia-500 h-screen w-screen'>
                <form action="">
                    <div className='flex flex-col bg-white rounded-lg w-lg justify-center items-center'>
                        <div>
                            <div className='font-bold text-violet-700 text-3xl mb-1'>Login</div>
                            <div className='bg-violet-700 border-6 border-violet-700 rounded-full'></div>
                        </div>
                        <div className='mt-10'>
                            <div className='w-56 bg-gray-100 h-14 flex items-center mb-5 rounded-lg'>

                                <input type='email' placeholder='Enter E-mail' className='border-0 outline-0 text-2xl' required />
                            </div>
                            <div className='w-56 bg-gray-100 h-14 flex items-center mb-5 rounded-lg'>
                                <input type='password' placeholder='Enter Password' className='border-0 outline-0 text-2xl' required />
                            </div>
                        </div>
                        <div className='text-lg font-light text-gray-600'>
                            <span>Forgot Password? <a className='text-violet-600'>Click Here</a> </span>
                        </div>
                        <div className='my-10 flex h-10 justify-center font-bold bg-violet-700 rounded-full w-24'>
                            <button className='text-2xl text-white' onClick={() => navigate('/dashboard')} >Login</button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SignUpAndLogin
