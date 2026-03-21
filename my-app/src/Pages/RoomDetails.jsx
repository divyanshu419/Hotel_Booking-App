import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets"
import StarRating from "../Components/StarRating"

const RoomDetails = () => {

  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {

    const foundRoom = roomsDummyData.find(room => room._id === id);

    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }

  }, [id]);

  return room && (
    <div className='py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* Room Details */}

      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl'>
          {room.hotel.name}
          <span className='text-sm font-inter'> ({room.roomType})</span>
        </h1>

        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
          20% OFF
        </p>
      </div>

      {/* Room Ratings */}

      <div className="flex items-center mt-2">
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Room Locations */}

      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>
      {/* Room Images */}

      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img className='w-full rounded-xl shadow-lg object-cover'
            src={mainImage} alt="Room Image" />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img onClick={() => setMainImage(image)} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && "outline-3 outline-orange-500"}`} key={index} src={image} alt="Room Image" />
          )
          )}
        </div>
      </div>

      {/* Room Highlights */}

      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-xl md:text-2xl'>Experiences Luxury Like Never Before</h1>
        </div>
        <div className='flex flex-wrap items-center mt-3 mb-2 gap-4'>
          {room.amenities.map((item, index) => (
            <div className='flex items-center gap-2 px-2 py-2 rounded-lg bg-gray-100' key={index}>
              <img className='w-5 h-5' src={facilityIcons[item]} alt={item} />
              <p className='text-xs'>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Room Price */}

      <div>
        <p>${room.pricePerNight} /day</p>
      </div>

      {/* Check In Check Out Form */}

      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
          <div className='flex flex-col'>
            <label className='font-medium' htmlFor="checkInDate">Check-In</label>
            <input className='w-full rounded border border-gray-300 px-3 py-3 mt-1.5 outline-none' type="date" id='checkInDate' placeholder='Check-In' required />
          </div>
        </div>
        <div className='lex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
          <div className='flex flex-col'>
            <label className='font-medium' htmlFor="checkOutDate">Check-Out</label>
            <input className='w-full rounded border border-gray-300 px-3 py-3 mt-1.5 outline-none' type="date" id='checkOutDate' placeholder='Check-Out' required />
          </div>
        </div>
        <div className='lex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
          <div className='flex flex-col'>
            <label className='font-medium' htmlFor="Guest">Guest</label>
            <input className='w-full rounded border border-gray-300 px-3 py-3 mt-1.5 outline-none' type="number" id='Guest' placeholder='0' required />
          </div>
        </div>
        <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer
        '>Check Availability</button>
      </form>

      {/* Common Specification */}

      <div className='mt-25 space-y-2'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-center gap-2'>
            <img className='w-6.5' src={spec.icon} alt={`${spec.title}-icon`} />
            <div>
              <p className='text-gray-800 font-bold text-lg mt-2'>{spec.title}</p>
              <p className='text-gray-800'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='max-w-3xl border-y border-gray-500 my-15 py-10 px-5 text-gray-500'>
        <p>Guests will be allocated on the ground floor according to availability.
          You get a comfortable Two bedroom apartment has a true city feeling.
          The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups.
          The Guests will be allocated ground floor according to availability.
          You get the comfortable two bedroom apartment that has a true city feeling.</p>
      </div>

      {/* Hosted By */}

      <div>
        <div>
          <img className='h-14 w-14 md:h-18 md:w-18 rounded-full' src={room.hotel.owner.image} alt="Host" />
          <div>
            <p>Hosted By {room.hotel.name}</p>
            <div>
              <StarRating />
              <p>200+ reviews</p>
            </div>
          </div>
        <div>
          <button className='bg-blue-800 py-2 px-9 rounded text-white text-base'>Contact Now</button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default RoomDetails