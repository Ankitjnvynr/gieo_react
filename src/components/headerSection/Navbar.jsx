import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-yellow-700">GIEO GITA</div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="/" className="text-red-500">Home</a>
                    <a href="/" className="text-gray-700 hover:text-red-500">About</a>
                    <a href="/" className="text-gray-700 hover:text-red-500">Services</a>
                    <a href="/" className="text-gray-700 hover:text-red-500">Bhakti bhav</a>

                    {/* Dropdown for Our Pages */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-700 hover:text-red-500">
                            Our Pages <FaChevronDown className="ml-1" />
                        </button>
                        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Page 1</a>
                            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Page 2</a>
                        </div>
                    </div>

                    <a href="/" className="text-gray-700 hover:text-red-500">Contact</a>
                </div>

                {/* Join Button */}
                <a href="/" className="hidden md:inline-block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
                    Join Gieogita
                </a>

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
                    <a href="/" className="block text-red-500">Home</a>
                    <a href="/" className="block text-gray-700 hover:text-red-500">About</a>
                    <a href="/" className="block text-gray-700 hover:text-red-500">Services</a>
                    <a href="/" className="block text-gray-700 hover:text-red-500">Bhakti bhav</a>
                    <a href="/" className="block text-gray-700 hover:text-red-500">Our Pages</a>
                    <a href="/" className="block text-gray-700 hover:text-red-500">Contact</a>
                    <a href="/" className="block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
                        Join Gieogita
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
