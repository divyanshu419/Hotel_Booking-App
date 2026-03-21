import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const BookIcon = () => {
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="43" fill="none" viewBox="0 0 430 430"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="12">
        <path stroke="#121331" d="M154.982 60H100v50h54.982m120.036-50H330v50h-54.982M180 290v85m70-85v85m-85-85h100" />
        <path stroke="#08a88a" d="M310 205h30m-30 40h30m-30 40h30m-30 40h30M90 205h30m-30 40h30m-30 40h30m-30 40h30" />
        <path stroke="#121331" d="M310 110v265H120V110" />
        <path stroke="#08a88a" d="M160 240h35m40 0h35m-110-40h35m40 0h35M150 85c0-35.898 29.101-65 65-65s65 29.102 65 65c0 35.899-29.101 65-65 65s-65-29.101-65-65m85-25v25m0 25V85m-40-25v25m0 25V85m40 0h-40" />
        <path stroke="#121331" d="M120 375H55V160h65m190 215h65V160h-65" /></g>
    </svg>
}


const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/room' },
        { name: 'Expereinces', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openSignIn } = useClerk()
    const { user } = useUser()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname != '/') {
            setIsScrolled(true);
            return;
        }
        else {
            setIsScrolled(false);
            return;
        } {
            setIsScrolled(prev => location.pathname !== '/' ? true : prev);
        }
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled
            ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-800"
            : "bg-transparent py-4 md:py-6 text-white"
            }`}>
            {/* Logo */}
            <Link to='/'>
                <img src="https://hb-gs.vercel.app/assets/logo-DTsNwmhO.svg" alt="logo" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <svg className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {user ?
                    (<UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>)
                    :
                    (<button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>)
                }
            </div>

            {/* Mobile Menu Button */}

            <div className="flex items-center gap-3 md:hidden">
                {user && <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                    </UserButton.MenuItems>
                </UserButton>}
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                {user && <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    Dashboard
                </button>}

                {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>}
            </div>
        </nav>
    );
}

export default Navbar
