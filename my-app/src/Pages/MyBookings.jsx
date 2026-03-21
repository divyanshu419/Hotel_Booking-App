import Title from '../Components/Title'
import { useState } from 'react'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData)

    return (
        <div>

            {/* Page Title */}
            <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
                <Title
                    title="MyBookings"
                    subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
                    align="left"
                />
            </div>

            <div className='max-w-6xl mx-auto mt-8 w-full text-gray-800'>

                {/* Table Heading */}
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div>Hotels</div>
                    <div>Date & Timings</div>
                    <div>Payment</div>
                </div>

                {bookings.map((booking) => (

                    <div
                        key={booking._id}
                        className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 items-center'
                    >

                        {/* Hotel Details */}
                        <div className='flex gap-5 items-center'>

                            <img
                                className='w-40 h-28 rounded-lg object-cover shadow'
                                src={booking.room.images[0]}
                                alt="hotel-img"
                            />

                            <div>

                                <p className='text-lg font-semibold'>
                                    {booking.hotel.name}
                                    <span className='text-sm text-gray-500'>
                                        {" "}({booking.room.roomType})
                                    </span>
                                </p>

                                <div className='flex items-center text-gray-500 text-sm gap-2 mt-1'>
                                    <img
                                        className='w-4'
                                        src={assets.locationIcon}
                                        alt="location-icon"
                                    />
                                    <span>{booking.hotel.address}</span>
                                </div>

                                <div className='flex items-center text-gray-500 text-sm gap-2 mt-1'>
                                    <img
                                        className='w-4'
                                        src={assets.guestsIcon}
                                        alt="guest-icon"
                                    />
                                    <span>Guests: {booking.guests}</span>
                                </div>

                                <p className='text-gray-700 font-medium mt-2'>
                                    Total: ${booking.totalPrice}
                                </p>

                            </div>
                        </div>

                        {/* Date & Timings */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>
                                <p className='text-gray-500 text-sm'>Check-In:</p>
                                <p>{new Date(booking.checkInDate).toDateString()}</p>
                            </div>
                            <div>
                                <p className='text-gray-500 text-sm'>Check-Out:</p>
                                <p>{new Date(booking.checkOutDate).toDateString()}</p>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className='flex flex-col items-center justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? " bg-green-500" : "bg-red-500"}`}></div>
                                <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                </p>
                            </div>
                            {!booking.isPaid && (
                                <button className=' px-5 py-1.5 border border-gray-400 font-bold text-xs hover:bg-gray-50 transition-all mt-3 cursor-pointer rounded-full '>Pay Now</button>
                            )}
                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default MyBookings