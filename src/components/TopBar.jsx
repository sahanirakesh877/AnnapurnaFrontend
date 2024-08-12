import {
    FaEnvelope,
    FaPhone,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
  } from "react-icons/fa";
  
  function TopBar() {
    return (
      <div className="bg-gradient-to-r from-green-50 to-green-200  text-dark px-4 py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-1">
          {/* Left side - Email and Phone */}
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0  md:space-x-4">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-red-600" />
              <a
                href="mailto:your-email@example.com"
                className="hover:text-indigo-500 text-sm text-black"
              >
                your-email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-red-600" />
              <a
                href="tel:+1234567890"
                className="hover:text-indigo-500 text-sm text-black"
              >
                +123 456 7890
              </a>
            </div>
          </div>
  
          {/* Right side - Social Media Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4 mt-2 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-indigo-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-indigo-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-indigo-500"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-indigo-500"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopBar;
  