import Navbar from './Components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from "./Pages/AllRooms"
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelReg from './Components/HotelReg'
import Layout from './Pages/HotelOwner/Layout'
import Dashboard from './Pages/hotelOwner/Dashboard'
import AddRoom from './Pages/hotelOwner/AddRoom'
import ListRoom from './Pages/hotelOwner/ListRoom'

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      <div className='min-h-[40vh]'>
        {!isOwnerPath && <Navbar />}
        {false && <HotelReg />}
        <div className='min-h-[70vh]'>
          <Routes>

            {/* User Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/rooms' element={<AllRooms />} />
            <Route path='/rooms/:id' element={<RoomDetails />} />
            <Route path='/my-bookings' element={<MyBookings />} />

            {/* Owner Routes */}
            <Route path='/owner' element={<Layout />}>

              {/* Default page */}
              <Route index element={<Dashboard />} />

              {/* Child routes */}
              <Route path='add-room' element={<AddRoom />} />
              <Route path='list-room' element={<ListRoom />} />

            </Route>

          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
