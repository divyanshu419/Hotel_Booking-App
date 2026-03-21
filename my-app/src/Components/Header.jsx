import React from "react";
import heroImage from "../assets/heroImage.png";

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className=" relative z-10 text-white px-6 md:px-16 lg:px-24 max-w-2xl">

        {/* 👇 Circle Tag — pushed down */}
        <div className=" rounded-full w-60 h-7 font-semibold text-white text-center bg-[#49B9FF]/50 mt-20 ">
          The Ultimate Hotel Experiences
        </div>

        {/* 👇 Bigger + Left aligned Heading */}
        <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6 text-left">
          Discover Your Perfect <br /> Gateway Destinations
        </h1>

        {/* Description */}
        <p className="text-lg md:text-lg mb-8 text-gray-200 text-left">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        <form
          className="
    bg-white
    w-full
    max-w-6xl
    mx-auto
    text-gray-600
    rounded-xl
    shadow-md
    px-6
    py-4
    flex
    flex-col
    md:flex-row
    md:items-end
    gap-4
  "
        >
          {/* Destination */}
          <div className="flex flex-col flex-1 min-w-0">
            <label htmlFor="destinationInput" className="text-sm font-medium mb-1">
              Destination
            </label>
            <input
              id="destinationInput"
              type="text"
              placeholder="Type here"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Check In */}
          <div className="flex flex-col flex-1 min-w-0">
            <label htmlFor="checkIn" className="text-sm font-medium mb-1">
              Check in
            </label>
            <input
              id="checkIn"
              type="date"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col flex-1 min-w-0">
            <label htmlFor="checkOut" className="text-sm font-medium mb-1">
              Check out
            </label>
            <input
              id="checkOut"
              type="date"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col flex-1 min-w-0">
            <label htmlFor="guests" className="text-sm font-medium mb-1">
              Guests
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={4}
              placeholder="1"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="
      bg-black
      text-white
      rounded-lg
      px-6
      py-2
      w-full
      md:w-auto
      whitespace-nowrap
    "
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;