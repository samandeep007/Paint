import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      } `}
    >
      <div className="w-full mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <div className="text-gray-300 text-3xl font-bold">
          <a href="/" className="hover:text-green-400">
            LawnBuddy
          </a>
        </div>

        {/* Toggle Menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 lg:flex-grow text-white`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-8 mx-12 w-full lg:justify-start">
          <a href="#about" className="hover:text-cyan-400 transition duration-200">
              About
            </a>
            <a href="#features" className="hover:text-cyan-400 transition duration-200">
              Features
            </a>
            <a href="#testimonials" className="hover:text-cyan-400 transition duration-200">
              Testimonials
            </a>
          </div>
         {/* { !isScrolled && <div className="flex gap-2">
          <button
        className="bg-gradient-to-tr to-gray-950 from-green-800 text-white px-6 text-md py-2 rounded-full hover:bg-cyan-600 transition duration-300"
      >
        Login
      </button>
      <button
        className="bg-gradient-to-tr to-gray-950 from-green-900 text-white px-6 text-md py-2 rounded-full hover:bg-cyan-600 transition duration-300"
      >
        Register
      </button>
      </div>} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
