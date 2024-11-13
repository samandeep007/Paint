function Banner() {
  return (
    <div className="bg-black">
      <div className="bg-transparent object-contain max-w-7xl mx-auto h-auto px-6 lg:px-14 py-8 lg:py-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
        <div className="mb-6 lg:mb-0">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to get started?
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800 font-medium mt-2">
            Get in touch or explore our courses today!
          </p>
        </div>
        <div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            +1 (555) 123-4567
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
