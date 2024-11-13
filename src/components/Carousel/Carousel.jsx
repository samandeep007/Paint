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
    slidesToShow: 2, // Adjust this to your preference
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true, // This helps space out the slides slightly
    focusOnSelect: true,
  };

  return (
    <div className="w-full mx-auto py-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative px-2"> {/* Added padding here */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <h3 className="text-white text-xl font-semibold">
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
