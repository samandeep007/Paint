import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">About Us</h3>
          <p className="text-gray-400 text-lg">
            At Godfather Painting Ltd., we provide high-quality painting services for both residential and commercial properties. Our expert team is dedicated to transforming your spaces with exceptional craftsmanship and attention to detail.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#services" className="hover:text-cyan-400 transition duration-300">Services</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a></li>
            <li><a href="#gallery" className="hover:text-cyan-400 transition duration-300">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-pink-400" />
              <span>+1 (587) 429-9862</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-400" />
              <span>godfatherpaintingltd@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>1058 Taradale Dr NE Calgary</span>
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
        <p>&copy; {new Date().getFullYear()} GODFATHER PAINTING LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
