import { FaEnvelope, FaPhone, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 bg-gray-100">
            {/* Email and Phone Section */}
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-red-500" />
                    <span className="text-gray-600">info@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaPhone className="text-red-500" />
                    <span className="text-gray-600">+1 5589 55488 55</span>
                </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <FaTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer" />
                <FaLinkedinIn className="text-gray-600 hover:text-blue-700 cursor-pointer" />
            </div>
        </div>
    );
};

export default ContactInfo;
