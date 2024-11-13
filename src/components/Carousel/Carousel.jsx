import Slider from "react-slick";

const Carousel = () => {
  const images = [
    {
      src: "./assets/living_room.webp",
      alt: "Painted Living Room",
      description: "Brighten Up Your Living Room",
    },
    {
      src: "./assets/bedroom.jpg",
      alt: "Bedroom Painting",
      description: "Cozy Bedroom Colors",
    },
    {
      src: "./assets/kitchen.jpg",
      alt: "Kitchen Painting",
      description: "Fresh Kitchen Paint",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 1 slide by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets and up
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For small screens and up
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto py-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative px-2">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {image.description}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
