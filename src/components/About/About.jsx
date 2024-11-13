function About() {
  return (
    <div id="about" className="w-full h-auto bg-black py-8">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="./assets/room2.png"
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl scale-90 mt-8"
            alt="Room Image"
          />
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 flex flex-col justify-start p-4 lg:p-8 pb-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-300 p-6">
            <span className="block">
              Year-Round
              <span className="text-transparent mx-2 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Lawn Care
              </span>
              You Can Trust
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-[22px] p-6 font-semibold text-white mt-2">
            At LawnBuddy, we specialize in reliable lawn mowing and snow removal services to keep your property pristine year-round. Our team delivers professional lawn care during warmer months, ensuring a healthy, well-maintained landscape. In winter, we provide efficient snow removal for driveways and walkways, keeping your property safe and accessible. With a focus on quality, dependability, and customer satisfaction, we make it easy for you to enjoy a well-kept outdoor space in every season.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
