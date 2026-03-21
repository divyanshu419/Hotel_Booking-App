import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
            <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
                <img className='w-1/2 rounded-xl hidden md:block' src={assets.regImage} alt="reg-image" />

                <div className='relative flex flex-col items-center max-w-1/2 p-8 md:p-10'>
                    <img className='absolute top-4 right- h-4 w-4 cursor-pointer' src={assets.closeIcon} alt="close-icon" />
                    <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>

                    {/* Hotel Name */}

                    <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500'
                            htmlFor="name">
                            Hotel Name
                        </label>
                        <input id='name' className='font-light px-4 py-2.5 mt-1 rounded w-full outline-indigo-500 border border-gray-200'
                            type="text"
                            placeholder='Type here...'
                            required />
                    </div>

                    {/* Phone */}

                    <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500'
                            htmlFor="contact">
                            Phone
                        </label>
                        <input id='contact' className='font-light px-4 py-2.5 mt-1 rounded w-full outline-indigo-500 border border-gray-200'
                            type="text"
                            placeholder='Type here...'
                            required />
                    </div>

                    {/* Address */}

                    <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500'
                            htmlFor="address">
                            Address
                        </label>
                        <input id='address' className='font-light px-4 py-2.5 mt-1 rounded w-full outline-indigo-500 border border-gray-200'
                            type="text"
                            placeholder='Type here...'
                            required />
                    </div>

                    {/* Select city */}

                    <div className='w-full mt-4 max-w-60 mr-auto'>
                        <label className='text-gray-500 font-medium' htmlFor="city">
                            City
                        </label>
                        <select className='border border-gray-200 rounded w-full px-4 py-2.5 mt-1 outline-indigo-500 font-light' id="city" required>
                            <option value="">select city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <button className=' mt-5 px-5 py-1.5 rounded text-white font-base bg-indigo-500 cursor-pointer'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default HotelReg
