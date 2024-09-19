import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menu items as an array of objects
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Bhakti Bhav', path: '/bhakti-bhav' },
        { name: 'Contact', path: '/contact' }
    ];

    // Dropdown items
    const dropdownItems = [
        { name: 'Page 1', path: '/page1' },
        { name: 'Page 2', path: '/page2' }
    ];

    return (
        <nav className="bg-white/[0.7] z-30 py-4 px-6 shadow-md sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-yellow-700">
                    <img className='w-[70px] mt-2' src="public/logo.png" alt="Logo" />
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {/* Map through menuItems array */}
                    {menuItems.map((item) => (
                        <Link key={item.name} to={item.path} className={item.name === 'Home' ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}>
                            {item.name}
                        </Link>
                    ))}

                    {/* Dropdown for Our Pages */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-700 hover:text-red-500">
                            Our Pages <FaChevronDown className="ml-1" />
                        </button>
                        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                            {/* Map through dropdownItems array */}
                            {dropdownItems.map((dropdown) => (
                                <Link key={dropdown.name} to={dropdown.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    {dropdown.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Join Button */}
                <Link to="/join" className="hidden md:inline-block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
                    Join Gieogita
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    {/* Map through menuItems array for mobile menu */}
                    {menuItems.map((item) => (
                        <Link key={item.name} to={item.path} className={item.name === 'Home' ? 'block text-red-500' : 'block text-gray-700 hover:text-red-500'}>
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/our-pages" className="block text-gray-700 hover:text-red-500">Our Pages</Link>
                    <Link to="/join" className="block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
                        Join Gieogita
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
