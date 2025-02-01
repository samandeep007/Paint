import Slider from "react-slick";

const Carousel = () => {
  const images = [
    { src: "./assets/IMG-20250128-WA0001.jpg", alt: "Painted Living Room", description: "Brighten Up Your Living Room" },
    { src: "./assets/IMG-20250128-WA0002.jpg", alt: "Cozy Bedroom", description: "Create a Cozy Bedroom" },
    { src: "./assets/IMG-20250128-WA0003.jpg", alt: "Modern Kitchen", description: "Modernize Your Kitchen" },
    { src: "./assets/IMG-20250128-WA0004.jpg", alt: "Stylish Office", description: "Transform Your Office Space" },
    { src: "./assets/IMG-20250128-WA0005.jpg", alt: "Outdoor Patio", description: "Refresh Your Patio" },
    { src: "./assets/IMG-20250128-WA0006.jpg", alt: "Renovated Bathroom", description: "Give Your Bathroom a New Look" },
    { src: "./assets/IMG-20250128-WA0007.jpg", alt: "Chic Dining Room", description: "Upgrade Your Dining Area" },
    { src: "./assets/IMG-20250128-WA0008.jpg", alt: "Sleek Living Room", description: "Make Your Living Room Sleek" },
    { src: "./assets/IMG-20250128-WA0009.jpg", alt: "Inviting Entryway", description: "Welcome Guests in Style" },
    { src: "./assets/IMG-20250128-WA0010.jpg", alt: "Spacious Loft", description: "Expand Your Loft Space" },
    { src: "./assets/IMG-20250128-WA0011.jpg", alt: "Bright Workspace", description: "Brighten Your Work Area" },
    { src: "./assets/IMG-20250128-WA0012.jpg", alt: "Vibrant Kitchen", description: "Make Your Kitchen Vibrant" },
    { src: "./assets/IMG-20250128-WA0013.jpg", alt: "Trendy Living Room", description: "Stylish and Trendy Living Room" },
    { src: "./assets/IMG-20250128-WA0014.jpg", alt: "Minimalist Bedroom", description: "Minimalism in the Bedroom" },
    { src: "./assets/IMG-20250128-WA0015.jpg", alt: "Lush Garden", description: "Create a Lush Garden Oasis" },
    { src: "./assets/IMG-20250128-WA0016.jpg", alt: "Relaxing Lounge", description: "Create a Relaxing Lounge Area" },
    { src: "./assets/IMG-20250128-WA0017.jpg", alt: "Warm Family Room", description: "Make Your Family Room Warm" },
    { src: "./assets/IMG-20250128-WA0018.jpg", alt: "Contemporary Bedroom", description: "Contemporary Bedroom Style" },
    { src: "./assets/IMG-20250128-WA0019.jpg", alt: "Open Concept Living", description: "Embrace Open Concept Living" },
    { src: "./assets/IMG-20250128-WA0020.jpg", alt: "Sustainable Design", description: "Sustainable Home Design Ideas" },
    { src: "./assets/IMG-20250128-WA0021.jpg", alt: "Eco-Friendly Kitchen", description: "Eco-Friendly Kitchen Ideas" },
    { src: "./assets/IMG-20250128-WA0022.jpg", alt: "Smart Home Tech", description: "Integrate Smart Tech into Your Home" },
    { src: "./assets/IMG-20250128-WA0023.jpg", alt: "Scenic Balcony", description: "Create a Scenic Balcony" },
    { src: "./assets/IMG-20250128-WA0024.jpg", alt: "Colorful Entryway", description: "Add Color to Your Entryway" },
    { src: "./assets/IMG-20250128-WA0025.jpg", alt: "Artistic Decor", description: "Add Artistic Decor to Your Space" },
    { src: "./assets/IMG-20250128-WA0026.jpg", alt: "Comfortable Sofa", description: "Make Your Sofa Comfortable" },
    { src: "./assets/IMG-20250128-WA0027.jpg", alt: "Textured Walls", description: "Add Texture to Your Walls" },
    { src: "./assets/IMG-20250128-WA0028.jpg", alt: "Luxury Bathroom", description: "Create a Luxury Bathroom" },
    { src: "./assets/IMG-20250128-WA0029.jpg", alt: "Beautiful Balcony Garden", description: "Create a Balcony Garden" },
    { src: "./assets/IMG-20250128-WA0030.jpg", alt: "Decorative Light Fixtures", description: "Upgrade Your Light Fixtures" },
    { src: "./assets/IMG-20250128-WA0031.jpg", alt: "Home Office Setup", description: "Optimize Your Home Office" },
    { src: "./assets/IMG-20250128-WA0032.jpg", alt: "Cozy Reading Nook", description: "Create a Cozy Reading Nook" }
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
