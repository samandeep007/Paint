function About() {
  return (
    <div id="about" className="w-full h-auto bg-black py-8">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="./assets/room2.png"
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl scale-90 mt-8"
            alt="Room Painting"
          />
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 flex flex-col justify-start p-4 lg:p-8 pb-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-300 p-6">
            <span className="block">
              Transform Your Home with{" "}
              <span className="text-transparent mx-2 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Expert Painting
              </span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-[22px] p-6 font-semibold text-white mt-2">
            At Godfather painting, we specialize in residential and commercial painting services, delivering beautiful, long-lasting results. Our skilled painters use the highest-quality materials to ensure your space looks fresh and vibrant, whether it's a single room or your entire home. With years of experience and a commitment to customer satisfaction, we make it easy for you to refresh your property with a professional touch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
