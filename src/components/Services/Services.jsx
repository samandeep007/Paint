const services = [
  {
    title: "Interior and Exterior Painting",
    description:
      "Transform your home’s interior and exterior with our expert painting services. Whether it's refreshing your living room or giving your house a new look, our team ensures a flawless, long-lasting finish for every project.",
    imageUrl: "./assets/IMG-20250128-WA0001.jpg",
  },
  {
    title: "Residential and Commercial",
    description:
      "We offer professional painting services for both residential and commercial properties. Our experienced team can handle any project, from small homes to large commercial buildings, delivering high-quality results that meet your needs.",
      imageUrl: "./assets/IMG-20250128-WA0006.jpg",
  },
  {
    title: "Wood Finishing",
    description:
      "Enhance the beauty and durability of your wood surfaces with our expert wood finishing services. From cabinetry to furniture, we provide smooth, professional finishes that protect and elevate the wood’s natural appearance.",
      imageUrl: "./assets/IMG-20250128-WA0014.jpg",
  },
  {
    title: "Ceiling Spray",
    description:
      "Our ceiling spray services provide a quick and even coat of paint, ideal for textured ceilings or those needing a refresh. We ensure precision and a clean finish for your ceilings, making your space look brighter and more polished.",
      imageUrl: "./assets/IMG-20250128-WA0029.jpg",
  },
  {
    title: "Lacquer",
    description:
      "For a high-gloss, durable finish, our lacquer services are the perfect solution. Whether for furniture, trim, or cabinetry, we apply a flawless coat of lacquer that provides both protection and a brilliant shine.",
      imageUrl: "./assets/IMG-20250128-WA0010.jpg",
  },
];

const Services = () => {
  return (
    <>
      <section className="w-full h-auto bg-gradient-to-bl from-black via-black to-fuchsia-900 flex flex-col items-center pt-16 pb-4 px-8 text-white">
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-300 p-6">
            <span className="block">
              Year-Round
              <span className="text-transparent mx-2 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Lawn Care
              </span>
              You Can Trust
            </span>
          </h1>
        </div>

        <div className="max-w-6xl grid grid-cols-1 gap-8">
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
                <h1 className="text-4xl font-bold mb-4 text-transparent mx-2 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
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
      <section className="w-full bg-gradient-to-tl from-black via-black to-fuchsia-900  h-40"></section>
    </>
  );
};

export default Services;
