const services = [
    {
      title: "Lawn Mowing",
      description:
        "Expert lawn mowing services that ensure your grass is trimmed to perfection. Our team provides consistent and detailed care to keep your lawn looking fresh and clean.",
      imageUrl: "./assets/exterior.webp",
    },
    {
      title: "Snow Removal",
      description:
        "Reliable snow removal services to keep your pathways and driveways safe. We work around the clock to clear snow efficiently during the winter months.",
      imageUrl: "./assets/commercial.webp",
    },
    {
      title: "Irrigation Installation",
      description:
        "Efficient irrigation systems that keep your lawn well-hydrated without water wastage. Our team designs, installs, and maintains sprinkler systems for optimal lawn health.",
      imageUrl: "./assets/wood.webp",
    },
    {
      title: "Tree Trimming",
      description:
        "Professional tree trimming services to keep your trees healthy and aesthetically pleasing. We handle everything from basic pruning to complex branch removal.",
      imageUrl: "./assets/spray.webp",
    },
    {
      title: "Tree Trimming",
      description:
        "Professional tree trimming services to keep your trees healthy and aesthetically pleasing. We handle everything from basic pruning to complex branch removal.",
      imageUrl: "./assets/lacquer.webp",
    },
  ];
  
  const Services = () => {
    return (
      <>
      {/* <section  className="w-full bg-gradient-to-tr from-black via-black to-pink-900 h-32"></section> */}
        <section className="w-full h-auto bg-gradient-to-bl from-black via-black to-fuchsia-950 flex flex-col items-center py-16 px-8 text-white">
          <div className="max-w-4xl text-center mb-12">
            <h1 className="text-7xl font-bold tracking-tight text-gray-300 p-6">
              <span className="block">
                Year-Round
                <span className="text-transparent mx-2 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                  Lawn Care
                </span>
                You Can Trust
              </span>
            </h1>
          </div>
  
          <div className="max-w-7xl grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 p-6 bg-transparent transition-shadow duration-300 transform  ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full md:w-1/2 h-72 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl font-bold mb-4 text-transparent mx-2 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                    {service.title}
                  </h1>
                  <p className="text-gray-200 text-[20px] font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };
  
  export default Services;
  