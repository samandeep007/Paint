import Slider from "react-slick";
import {
  FaPaintBrush,
  FaHome,
  FaBuilding,
  FaPalette,
  FaClipboardList,
  FaTools,
  FaWrench,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of testimonials
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Homeowner",
    feedback:
      "The painting team did an outstanding job on our living room! The colors are exactly what we wanted, and the quality of the work exceeded our expectations. It truly transformed the space.",
    icon: <FaPaintBrush />,
  },
  {
    name: "Sarah Williams",
    role: "Real Estate Agent",
    feedback:
      "I’ve worked with many painters, but this team stands out. Their attention to detail and commitment to perfection has made a huge difference in the properties I’m selling.",
    icon: <FaHome />,
  },
  {
    name: "David Chen",
    role: "Business Owner",
    feedback:
      "We had the exterior of our office building painted, and it looks amazing! The team was efficient, professional, and the results were beyond what we hoped for. Highly recommend their services!",
    icon: <FaBuilding />,
  },
  {
    name: "Linda Martinez",
    role: "Interior Designer",
    feedback:
      "I’ve used this company for several client projects, and their work is consistently top-notch. They deliver high-quality finishes that really enhance the look and feel of any room.",
    icon: <FaPalette />,
  },
  {
    name: "John Cooper",
    role: "Homeowner",
    feedback:
      "The team painted our entire house, both inside and out, and they did an incredible job. They were on time, courteous, and the result was flawless. Our home looks brand new!",
    icon: <FaHome />,
  },
  {
    name: "Emily Green",
    role: "Property Manager",
    feedback:
      "I’ve hired painters for several properties, and this team stands above the rest. They were prompt, professional, and always kept me informed. The results were perfect every time.",
    icon: <FaClipboardList />,
  },
  {
    name: "Tom Harris",
    role: "Contractor",
    feedback:
      "As a contractor, I often work with painters, and this team is one of the best. They’re fast, efficient, and produce excellent results, making my projects run smoothly and look fantastic.",
    icon: <FaTools />,
  },
  {
    name: "Rachel Lewis",
    role: "Homeowner",
    feedback:
      "We recently had our kitchen cabinets refinished, and the transformation was incredible! The lacquer finish looks amazing, and we’re so happy with the final result.",
    icon: <FaWrench />,
  },
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
};

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-fuchsia-950">
      <section
        id="
        "
        className="px-6 max-w-4xl mx-auto flex items-center justify-center gap-12 h-screen"
      >
        <div className="flex flex-col justify-center mt-2 items-center">
          <div className="max-w-5xl mx-auto text-center mb-12 px-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">
              What our{" "}
              <span className="text-transparent mx-1 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Clients
              </span>{" "}
              Say about our Painting Services?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mt-4">
              Hear from those who have already transformed their spaces with our
              expert painting services.
            </p>
          </div>

          <Slider {...settings} className="max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="bg-gradient-to-bl from-gray-850 to-gray-900 bg-opacity-50 backdrop-blur-md  shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
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
