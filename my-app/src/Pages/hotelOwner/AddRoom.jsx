import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

  const [Images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })

  const [Inputs, setInputs] = useState({
    roomtype: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })

  return (
    <div className='w-full'>

      {/* ✅ FIX: form ko flex + min height diya */}
      <form className='flex flex-col min-h-[80vh]'>

        <Title
          align="left"
          font="outfit"
          title="Add Room"
          subTitle="Fill in the details carefully and accurate room details, pricing and aminities to enhance the user booking experience."
        />

        {/* Images */}
        <p className='text-gray-800 mt-10'>Images</p>
        <div className='flex gap-4 flex-wrap mt-3'>
          {Object.keys(Images).map((key) => (
            <label htmlFor={`img-${key}`} key={key}>
              <img
                className='w-32 h-24 object-cover rounded border cursor-pointer'
                src={
                  Images[key]
                    ? URL.createObjectURL(Images[key])
                    : assets.uploadArea
                }
                alt=""
              />
              <input
                onChange={e => setImages({ ...Images, [key]: e.target.files[0] })}
                type="file"
                accept='image/*'
                id={`img-${key}`}
                hidden
              />
            </label>
          ))}
        </div>

        {/* Room Type + Price */}
        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-6'>
          <div className='flex-1 max-w-48'>
            <p className='text-gray-800'>Room Type</p>
            <select
              className='border border-gray-300 mt-1 rounded p-2 w-full'
              value={Inputs.roomtype}
              onChange={e => setInputs({ ...Inputs, roomtype: e.target.value })}
            >
              <option value="">Select Room Type</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Luxury Room">Luxury Room</option>
              <option value="Family Suite">Family Suite</option>
            </select>
          </div>

          <div>
            <p className='text-gray-800'>
              Price <span className='text-sm'>/night</span>
            </p>
            <input
              className='rounded p-2 mt-1 w-28 border border-gray-300'
              type="number"
              placeholder='0'
              value={Inputs.pricePerNight}
              onChange={e => setInputs({ ...Inputs, pricePerNight: e.target.value })}
            />
          </div>
        </div>

        {/* Amenities */}
        <div>
          <p className='text-gray-800 mt-6'>Amenities</p>

          <div className='flex flex-col mt-2 text-gray-600'>
            {Object.keys(Inputs.amenities).map((amenity, index) => (
              <label key={index} className='flex items-center gap-2 cursor-pointer'>

                <input
                  type="checkbox"
                  checked={Inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({
                      ...Inputs,
                      amenities: {
                        ...Inputs.amenities,
                        [amenity]: !Inputs.amenities[amenity],
                      },
                    })
                  }
                />

                {amenity}

              </label>
            ))}
          </div>
        </div>

        {/* ✅ FIX: button ko bottom pe push kiya */}
        <button className='mt-2 bg-primary text-white px-4 py-2 w-30 rounded cursor-pointer'>
          Add Room
        </button>

      </form>
    </div>
  )
}

export default AddRoom