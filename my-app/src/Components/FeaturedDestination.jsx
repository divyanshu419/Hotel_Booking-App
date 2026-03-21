import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
            <Title title="FeaturedDestination" subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." />
            <div className="flex gap-6 mt-20 overflow-x-auto w-full scrollbar-hide">

                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <div key={room._id}>
                        <HotelCard room={room} index={index} />
                    </div>
                ))}

            </div>
            <button onClick={() => { navigate("/rooms"); scrollTo(0, 0) }} className=' my-16 text-sm font-medium bg-white text-black border border-gray-300 px-2 py-2 rounded mt-12 hover:bg-gray-100 transition-all cursor-pointer'>View All Hotels</button>
        </div>
    )
}

export default FeaturedDestination
