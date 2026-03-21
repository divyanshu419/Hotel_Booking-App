import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (

    <div>

      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue all in one place.
                    Stay updated with real-time insights to ensure smooth operations."/>

      <div className='flex gap-4 my-8'>

        {/* Total Bookings */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="booking-icon" />

          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-gray-500'>Total Bookings</p>
            <p className='text-xl font-semibold'>
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img className='max-sm:hidden h-10' src={assets.totalRevenueIcon} alt="revenue-icon" />

          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-gray-500'>Total Revenue</p>
            <p className='text-xl font-semibold'>
              {dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}

      <h2 className='text-xl text-blue-900/70 font-medium mb-5'>Recent Booking</h2>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-4 py-3 text-gray-800 font-medium'>User Name</th>
              <th className='px-4 py-3 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
              <th className='px-4 py-3 text-gray-800 font-medium text-center'>Total Amount</th>
              <th className='px-4 py-3 text-gray-800 font-medium text-center'>Payment Status</th>
            </tr>
          </thead>

          <tbody>{dashboardData.bookings.map((item, index) => (
            <tr key={index}>
              <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>
                {item.user.username}
              </td>
              <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                {item.room.roomType}
              </td>
              <td className='px-4 py-3 text-center text-gray-700 border-t border-gray-300'>
                ${item.totalPrice}
              </td>

              <td className='px-4 py-3 flex border-t border-gray-300'>
                <button className={`px-3 py-1 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' :'bg-red-200 text-red-600' }`}>
                  {item.isPaid ? "Completed" : "Pending"}
                </button>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard