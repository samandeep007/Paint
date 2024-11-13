export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-black via-black to-fuchsia-900 w-full h-screen bg-opacity-50 backdrop-blur object-contain overflow-y-hidden">
      <div className="max-w-8xl flex flex-col lg:flex-row items-center justify-center mx-auto mt-10 px-4 lg:px-0">
        <div className="lg:max-w-1/2 h-auto text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold max-w-4xl lg:pl-12 mt-12">
            Revitalize Your Home with a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
              Fresh Coat of Paint
            </span>{" "}
            That Lasts!
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl max-w-3xl font-semibold lg:pl-12 pt-6 lg:pt-10 pb-0">
            Say goodbye to dull and faded walls and hello to vibrant, long-lasting color. Our expert painting services enhance the beauty and value of your home, making it a place you’ll love even more. Schedule a consultation today and transform your space!
          </p>
        </div>
        
        <img
          src="./assets/splash.png"
          className="w-full max-w-xs sm:max-w-md lg:max-w-3xl mt-6 lg:mt-4 scale-95"
          alt="House painting illustration"
        />
      </div>
    </div>
  );
}
