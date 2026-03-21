import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
    return (
        <div>
            <Link
                to={"/rooms/" + room._id}
                onClick={() => scrollTo(0, 0)}
                key={room._id}
                className="relative max-w-70 w-full rounded-xl overflow-hidden text-gray-500/90 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-lg transition-all duration-300"
            >
                {/* Room Image */}
                <img
                    src={room.images[0]}
                    alt="room-image"
                    className="w-full h-48 object-cover"
                />

                {/* Best Seller Tag */}
                {index % 2 === 0 && (
                    <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
                        Best Seller
                    </p>
                )}

                {/* Card Content */}
                <div className="p-4 pt-5">
                    {/* Hotel Name + Rating */}
                    <div className="flex items-center justify-between">
                        <p className="font-playfair text-xl font-medium text-gray-800">
                            {room.hotel.name}
                        </p>

                        <div className="flex items-center gap-1">
                            <img
                                src={assets.starIconFilled}
                                alt="star-icon"
                                className="w-4 h-4"
                            />
                            <span>4.5</span>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 mt-1">
                        <img
                            src={assets.locationIcon}
                            alt="location-icon"
                            className="w-4 h-4"
                        />
                        <span className="text-sm">{room.hotel.address}</span>
                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between mt-4">
                        <p>
                            <span className="text-xl text-gray-800 font-semibold">
                                ${room.pricePerNight}
                            </span>{" "}
                            /night
                        </p>

                        <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-all cursor-pointer">
                            Book Now
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HotelCard;