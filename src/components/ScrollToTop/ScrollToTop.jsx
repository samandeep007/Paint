import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-8 bg-gradient-to-tr cursor-pointer from-pink-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-gradient-to-tr hover:from-pink-800 hover:to-pink-500 transition duration-1000"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-4xl" />
      </button>
    )
  );
};

export default ScrollToTop;
