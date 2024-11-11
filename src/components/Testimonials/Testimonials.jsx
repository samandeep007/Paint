import Slider from "react-slick";
import { FaUserGraduate, FaStar, FaRegLightbulb, FaLaptopCode } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of testimonials
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    feedback: "This course transformed my career! The practical projects gave me real-world experience, and the flexible schedule fit perfectly into my busy life.",
    icon: <FaLaptopCode />,
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    feedback: "The instructors are true experts, and I gained insights I couldn’t find anywhere else. I feel much more confident in my role.",
    icon: <FaRegLightbulb />,
  },
  {
    name: "David Chen",
    role: "Data Analyst",
    feedback: "I loved the hands-on projects! They were directly relevant to my job, and the certification added real value to my resume.",
    icon: <FaUserGraduate />,
  },
  {
    name: "Linda Martinez",
    role: "Marketing Specialist",
    feedback: "The course exceeded my expectations. The community was supportive, and the content was high-quality and engaging.",
    icon: <FaStar />,
  },
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
};

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-bl from-black via-black to-fuchsia-950">
    <section id="testimonials" className="px-6 max-w-4xl mx-auto  flex items-center justify-center gap-12 h-screen">
    <img src="./assets/testimonials.png" className="h-[250px] mt-12" alt="" />
    <div className="flex flex-col justify-center mt-14 items-center">
         <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-6xl font-bold text-gray-200">
          What our <span className="text-transparent mx-1 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Learners
              </span> Say about our Courses ?
        </h2>
        <p className="text-2xl text-gray-300 mt-4">
        Hear from those who have already taken the journey with us.
        </p>
      </div>

      <Slider {...settings} className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-gradient-to-bl from-gray-850 to-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
              {/* Icon */}
              <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-gradient-to-tr  from-pink-700  to-pink-950 text-white text-4xl">
                {testimonial.icon}
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-semibold text-gray-100 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4 italic">{testimonial.role}</p>

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
    <div className="bg-transparent object-contain h-80 overflow-y-hidden">
        <img src="./assets/field.png" className="max-w-7xl mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
