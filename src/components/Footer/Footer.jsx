import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">About Us</h3>
          <p className="text-gray-400 text-lg">
            BowQuest is dedicated to providing world-class courses designed to elevate your skills and career potential. Join us and become part of a thriving community.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#courses" className="hover:text-cyan-400 transition duration-300">Courses</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a></li>
            <li><a href="#login" className="hover:text-cyan-400 transition duration-300">Login</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-pink-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-400" />
              <span>info@bowquest.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>1234 Learning St, Suite 500, Education City</span>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400 transition duration-300">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-md">
        <p>&copy; {new Date().getFullYear()} BowQuest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
