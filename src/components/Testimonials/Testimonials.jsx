import Slider from "react-slick";
import {
  FaUserGraduate,
  FaStar,
  FaRegLightbulb,
  FaLaptopCode,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of testimonials
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    feedback:
      "This course transformed my career! The practical projects gave me real-world experience, and the flexible schedule fit perfectly into my busy life.",
    icon: <FaLaptopCode />,
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    feedback:
      "The instructors are true experts, and I gained insights I couldn’t find anywhere else. I feel much more confident in my role.",
    icon: <FaRegLightbulb />,
  },
  {
    name: "David Chen",
    role: "Data Analyst",
    feedback:
      "I loved the hands-on projects! They were directly relevant to my job, and the certification added real value to my resume.",
    icon: <FaUserGraduate />,
  },
  {
    name: "Linda Martinez",
    role: "Marketing Specialist",
    feedback:
      "The course exceeded my expectations. The community was supportive, and the content was high-quality and engaging.",
    icon: <FaStar />,
  },
];

// Slider settings with responsive breakpoints
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,  // Default for larger screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Tablet and small desktop
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-fuchsia-950">
      <section className="px-6 max-w-full mx-auto flex items-center justify-center gap-12 py-12">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">
              What our{" "}
              <span className="text-transparent mx-1 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Learners
              </span>{" "}
              Say about our Courses?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mt-4">
              Hear from those who have already taken the journey with us.
            </p>
          </div>

          <Slider {...settings} className="max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="bg-gradient-to-bl from-gray-850 to-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
                  {/* Icon */}
                  <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-300 to-pink-600 text-white text-4xl">
                    {testimonial.icon}
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-xl font-semibold text-gray-100 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 italic">
                    {testimonial.role}
                  </p>

                  {/* Feedback */}
                  <p className="text-gray-300 leading-relaxed tracking-wide text-md">
                    “{testimonial.feedback}”
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
